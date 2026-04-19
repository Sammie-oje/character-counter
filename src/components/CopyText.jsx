import { Copy } from "lucide-react";
import { copyToClipboard } from "../utils/copyToClipboard.js";

function CopyText({ value }) {
    return (
        <button
            onClick={e => copyToClipboard(value, e)}
            className="text-neutral-700 dark:text-neutral-200"
        >
            <Copy className="size-5" />
        </button>
    );
}

export default CopyText;
