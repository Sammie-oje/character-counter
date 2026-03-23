function CopyText({ handleClick }) {
    return (
        <button
            onClick={handleClick}
            className="absolute text-neutral-700 right-0 p-2 bg-black/30 dark:bg-white/30 backdrop-blur-lg rounded-12 z-100 border border-black/50 dark:border-white/50 shadow-[0_8px_32px] shadow-dark/15 dark:shadow-white/15 dark:text-neutral-200"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-copy-icon lucide-copy"
            >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
        </button>
    );
}

export default CopyText;
