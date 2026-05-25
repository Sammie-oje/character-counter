import CopyText from "../CopyText.jsx";
import MaximizeInput from "../MaximizeInput.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

function TextInput({ value, onFormData, characterLimit }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [hasCopied, setHasCopied] = useState(false);
    const [dimensions, setDimensions] = useState({});
    const inputSectionRef = useRef(null);

    function handleExpansion(e) {
        e.preventDefault();
        setIsExpanded(!isExpanded);
    }
    function showCheckMark() {
        setHasCopied(true);
    }
    //For better UX, display and remove a check icon after 1.2s to make the user aware that the text has been copied
    useEffect(() => {
        if (hasCopied) {
            const timer = setTimeout(() => {
                setHasCopied(false);
            }, 1200);

            return () => clearTimeout(timer);
        }
    }, [hasCopied]);

    useEffect(() => {
        if (inputSectionRef.current) {
            const rect = inputSectionRef.current.getBoundingClientRect();
            setDimensions(rect);
        }
    }, []);

    const variants = {
        expand: {
            height: "100%",
            width: "100%",
            transformOrigin: "center",
            inset: 0,
            transition: {
                duration: 0.25,
                ease: "cubic-bezier(0.22, 1, 0.36, 1)"
            }
        },
        shrink: {
            height: Math.round(dimensions.height),
            width: Math.round(dimensions.width)
        }
    };

    return (
        <div className="flex flex-col gap-150  ">
            <motion.section
                className={`flex flex-col bg-neutral-100 border-2 border-neutral-200 rounded-12 z-200  dark:bg-neutral-800 dark:border-neutral-700 ${isExpanded && "fixed"}`}
                ref={inputSectionRef}
                variants={variants}
                animate={isExpanded ? "expand" : "shrink"}
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
                    {hasCopied ? (
                        <FontAwesomeIcon
                            icon={faCheck}
                            style={{ color: "#25e290", padding: "1rem" }}
                        />
                    ) : (
                        <CopyText value={value} onCopy={showCheckMark} />
                    )}
                </div>
                <textarea
                    name="textInput"
                    className={`textarea ${characterLimit && value.length >= Number(characterLimit) ? "alert" : ""} ${isExpanded ? "grow" : "min-h-[200px]"}`}
                    placeholder="Start typing here... (or paste your text)"
                    value={value}
                    onChange={onFormData}
                ></textarea>
            </motion.section>

            {characterLimit && value.length >= Number(characterLimit) && (
                <p className="flex gap-100 items-center text-preset-4 text-orange-800 dark:text-orange-500">
                    <img
                        src="/assets/images/icon-info.svg"
                        alt="Limit-info icon"
                    />

                    <span>
                        Limit reached! Your text exceeds {characterLimit}{" "}
                        characters
                    </span>
                </p>
            )}
        </div>
    );
}

export default TextInput;
