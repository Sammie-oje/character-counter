import ChevronUp from "../../../assets/images/icon-chevron-up.svg?react";
import ChevronDown from "../../../assets/images/icon-chevron-down.svg?react";

function ToggleList({ isExpanded, handleIsExpanded }) {
  return (
    <button className="flex gap-100 items-center" onClick={handleIsExpanded}>
      <span className="text-preset-3">
        {isExpanded ? "See Less" : "See More"}
      </span>
      {isExpanded ? <ChevronUp /> : <ChevronDown />}
    </button>
  );
}

export default ToggleList;
