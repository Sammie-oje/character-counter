import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function ToggleList({ isExpanded, handleIsExpanded }) {
    return (
        <button
            className="flex gap-100 items-center"
            onClick={handleIsExpanded}
        >
            <span className="text-preset-3">
                {isExpanded ? "See Less" : "See More"}
            </span>
            {isExpanded ? (
                <FontAwesomeIcon icon={faChevronUp
                } />
            ) : (
                <FontAwesomeIcon icon={faChevronDown} />
            )}
        </button>
    );
}

export default ToggleList;
