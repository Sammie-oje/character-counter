import { Maximize, Minimize } from "lucide-react";

function MaximizeInput({ onExpansion, isExpanded }) {
    return (
        <button
            className="text-neutral-700 dark:text-neutral-200"
            onClick={onExpansion}
        >
            {isExpanded ? (
                <Minimize className="size-5" />
            ) : (
                <Maximize className="size-5" />
            )}
        </button>
    );
}

export default MaximizeInput;
