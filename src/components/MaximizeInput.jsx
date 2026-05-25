import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { faCompress } from "@fortawesome/free-solid-svg-icons";

function MaximizeInput({ onExpansion, isExpanded }) {
    return (
        <button
            className="text-neutral-700 p-4 dark:text-neutral-200"
            onClick={onExpansion}
            title="Toggle maximizing text input"
        >
            {isExpanded ? (
                <FontAwesomeIcon icon={faCompress} />
            ) : (
                <FontAwesomeIcon icon={faExpand} />
            )}
        </button>
    );
}

export default MaximizeInput;
