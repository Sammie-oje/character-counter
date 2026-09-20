import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export function IconSwap({
  isActive,
  activeIcon,
  icon,
  duration = 0.25,
  blur = 2,
  startScale = 0.25,
  className = "",
}) {
  const hidden = {
    opacity: 0,
    filter: `blur(${blur}px)`,
    scale: startScale,
  };
  const visible = { opacity: 1, filter: "blur(0px)", scale: 1 };

  const shouldReduceMotion = useReducedMotion();

  return (
    <span
      aria-hidden="true"
      className={`inline-grid place-items-center ${className}`}
    >
      <AnimatePresence initial={false}>
        <motion.span
          className="row-start-1 col-start-1"
          key={isActive ? "active" : "idle"}
          initial={hidden}
          animate={visible}
          exit={hidden}
          transition={{
            duration: shouldReduceMotion ? 0 : duration,
            ease: "easeInOut",
          }}
        >
          {isActive ? activeIcon : icon}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
