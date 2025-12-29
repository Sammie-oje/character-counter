import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function LetterDensity({ charDensity }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleIsExpanded = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div className="flex flex-col gap-250 dark:text-neutral-200">
            <h3 className="text-preset-2">Letter Density</h3>

            <dl
                className={`flex flex-col gap-150 ${
                    isExpanded ? "h-full" : "h-[154px]"
                } overflow-hidden`}
            >
                {charDensity.length > 0 ? (
                    charDensity.map((obj, index) => (
                        <DensityList
                            percent={obj.percentage}
                            wordCount={obj.count}
                            letter={obj.character}
                            key={index}
                        />
                    ))
                ) : (
                    <p className="text-preset-4 dark:text-neutral-200">
                        No characters found. Start typing to see letter density.
                    </p>
                )}
            </dl>

            {charDensity.length > 5 && (
                <button
                    className="flex gap-100 items-center"
                    onClick={handleIsExpanded}
                >
                    {isExpanded ? (
                        <>
                            <span className="text-preset-3">See Less</span>
                            <FontAwesomeIcon icon="fa-solid fa-chevron-up" />
                        </>
                    ) : (
                        <>
                            <span className="text-preset-3">See More</span>
                            <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                        </>
                    )}
                </button>
            )}
        </div>
    );
}

function DensityList({ percent, wordCount, letter, key }) {
    return (
        <div className="flex items-center gap-[0.875rem] text-preset-4">
            <dt>
                <code>{letter}</code>
            </dt>
            <dd className="contents">
                <div className="w-full h-[12px] rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <div
                        className="h-[12px] rounded-full bg-purple-400"
                        style={{ width: `${percent}%` }}
                    ></div>
                </div>
                <output>
                    {wordCount}({percent}%)
                </output>
            </dd>
        </div>
    );
}

export default LetterDensity;
