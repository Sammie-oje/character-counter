import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ToggleList({ isExpanded, handleIsExpanded }) {
    return (
        <button
            className="flex gap-100 items-center"
            onClick={handleIsExpanded}
        >
            <span className="text-preset-3">
                {isExpanded ? "See Less" : "See More"}
            </span>
            <FontAwesomeIcon
                icon={`fa-solid fa-chevron-${isExpanded ? "up" : "down"}`}
            />
        </button>
    );
}

export default ToggleList;
