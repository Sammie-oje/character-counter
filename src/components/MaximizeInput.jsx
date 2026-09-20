import Maximize from "../assets/images/icon-maximize.svg?react";
import Minimize from "../assets/images/icon-minimize.svg?react";
import { IconSwap } from "./IconSwap.jsx";

function MaximizeInput({ onExpansion, isExpanded }) {
  return (
    <button
      onClick={onExpansion}
      aria-label={isExpanded ? "Minimize editor" : "Maximize editor"}
    >
      <IconSwap
        isActive={isExpanded}
        activeIcon={<Minimize />}
        icon={<Maximize />}
        className="text-neutral-700 p-4 dark:text-neutral-200"
      />
    </button>
  );
}

export default MaximizeInput
