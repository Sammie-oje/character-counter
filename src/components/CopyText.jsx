import { Copy } from "lucide-react";
import { copyToClipboard } from "../utils/copyToClipboard.js";

function CopyText({ value, onCopy }) {
    function handleCopy(e) {
    copyToClipboard(value, e)
        onCopy();
    }
    return (
        <button
            onClick={e => handleCopy(e)}
            className="text-neutral-700 dark:text-neutral-200"
            title="Copy text"
        >
            <Copy className="size-5" />
        </button>
    );
}

export default CopyText;
