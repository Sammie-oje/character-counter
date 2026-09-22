import CopyText from "../CopyText.jsx";
import MaximizeInput from "../MaximizeInput.jsx";
import Check from "../../assets/images/icon-check.svg?react";
import Info from "../../assets/images/icon-info.svg?react";
import { IconSwap } from "../IconSwap.jsx";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  animate,
  useReducedMotion,
} from "motion/react";

const SHAKE_KEYFRAMES = [0, 6, -6, 4, 0];
const SHAKE_OPTIONS = {
  duration: 0.28,
  times: [0, 0.2857, 0.5714, 0.7857, 1],
  ease: [0.22, 1, 0.36, 1],
};

function TextInput({ value, onFormData, characterLimit }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);
  const [dimensions, setDimensions] = useState({});
  const inputSectionRef = useRef(null);

  const shakeX = useMotionValue(0);
  const reduceMotion = useReducedMotion();

  const isOverLimit = characterLimit && value.length >= Number(characterLimit);

  function handleExpansion(e) {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  }

  function showCheckMark() {
    setHasCopied(true);
  }

  useEffect(() => {
    if (!isOverLimit || reduceMotion) return;

    animate(shakeX, SHAKE_KEYFRAMES, SHAKE_OPTIONS);
  }, [isOverLimit, reduceMotion, shakeX]);

  //For better UX, display and remove a check icon after 1.2s to make the user aware that the text has been copied
  useEffect(() => {
    if (inputSectionRef.current) {
      const rect = inputSectionRef.current.getBoundingClientRect();
      setDimensions(rect);
    }

    if (hasCopied) {
      const timer = setTimeout(() => {
        setHasCopied(false);
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, [hasCopied]);

  const variants = {
    expand: {
      height: "100%",
      width: "100%",
      transformOrigin: "center",
      inset: 0,
      transition: {
        duration: 0.25,
        ease: [0.22, 1, 0.36, 1],
      },
    },

    shrink: {
      height: Math.round(dimensions.height),
      width: Math.round(dimensions.width),
    },
  };

  return (
    <div className="flex flex-col gap-150">
      <motion.section
        className={`flex flex-col bg-neutral-100 border-2 border-neutral-200 rounded-12 z-200  dark:bg-neutral-800 dark:border-neutral-700 ${isExpanded ? "fixed" : ""}`}
        ref={inputSectionRef}
        variants={variants}
        animate={isExpanded ? "expand" : "shrink"}
        style={{ x: shakeX }}
      >
        <div
          role="toolbar"
          aria-label="Text formatting tools"
          className="flex justify-end items-center gap-400 md:gap-800"
        >
          <MaximizeInput
            onExpansion={handleExpansion}
            isExpanded={isExpanded}
          />

          <button
            type="button"
            aria-label={hasCopied ? "Copied!" : "Copy to clipboard"}
          >
            <IconSwap
              isActive={hasCopied}
              activeIcon={<Check />}
              icon={<CopyText value={value} onCopy={showCheckMark} />}
              className="text-neutral-700 p-4 dark:text-neutral-200"
            />
          </button>
        </div>

        <textarea
          name="textInput"
          className={`textarea ${isOverLimit ? "alert" : ""} ${isExpanded ? "grow" : "min-h-[200px]"}`}
          placeholder="Start typing here... (or paste your text)"
          value={value}
          onChange={onFormData}
        ></textarea>
      </motion.section>

      <AnimatePresence>
        {isOverLimit && (
          <motion.p
            role="alert"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="flex gap-100 items-center text-preset-4 text-orange-800 dark:text-orange-500"
          >
            <Info aria-hidden={"true"} />

            <span>
              Limit reached! Your text exceeds {characterLimit} characters
            </span>
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default TextInput;
