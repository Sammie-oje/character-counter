import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1];

export function Checkbox({ name, id, value, onChangeData, label }) {
  const [isChecked, setIsChecked] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  function handleChange(e) {
    setIsChecked(e.target.checked);
    onChangeData(e);
  }

  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-center gap-[10px] select-none text-neutral-700 dark:text-neutral-200"
    >
      <input
        name={name}
        id={id}
        type="checkbox"
        className="peer sr-only"
        value={value}
        onChange={handleChange}
      />
      <div aria-hidden="true" className="checkbox">
        <svg width="10" height="10" viewBox="0 0 10.1668 10.1668" fill="none">
          <motion.path
            d="M1 5.52L3.92 9.17L9.17 1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{
              pathLength: isChecked ? 1 : 0,
              opacity: isChecked ? 1 : 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : isChecked ? 0.35 : 0.15,
              ease: EASE,
            }}
          />
        </svg>
      </div>

      <span>{label}</span>
    </label>
  );
}
