import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { copyToClipboard } from "../utils/copyToClipboard.js";

function CopyText({ value, onCopy }) {
    function handleCopy(e) {
        copyToClipboard(value, e);
        onCopy();
    }
    return (
        <button
            onClick={e => handleCopy(e)}
            className="text-neutral-700 p-4 dark:text-neutral-200"
            title="Copy text"
        >
            <FontAwesomeIcon icon={faCopy} />
        </button>
    );
}

export default CopyText;
