import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { motion } from "motion/react";

const listVariant = {
    expand: {
        height: "auto",
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
            ease: "easeOut"
        }
    },
    shrink: {
        height: 158,
        transition: {
            when: "afterChildren",
            staggerChildren: 0.05,
            staggerDirection: -1,
            ease: "easeIn"
        }
    }
};
const itemVariant = {
    expand: index => ({ y: 0, opacity: 1 }),
    shrink: index => ({ y: index > 4 ? 10 : 0, opacity: index > 4 ? 0 : 1 })
};

function LetterDensity({ charDensity }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleIsExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="flex flex-col gap-250 dark:text-neutral-200">
            <h3 className="text-preset-2">Letter Density</h3>

            <motion.dl
                className={`flex flex-col gap-150 overflow-hidden`}
                variants={listVariant}
                animate={isExpanded ? "expand" : "shrink"}
            >
                {charDensity.length > 0 ? (
                    charDensity.map((obj, index) => (
                        <DensityList
                            percent={obj.percentage}
                            wordCount={obj.count}
                            letter={obj.character}
                            key={obj.character}
                            index={index}
                        />
                    ))
                ) : (
                    <p className="text-preset-4 dark:text-neutral-200">
                        No characters found. Start typing to see letter density.
                    </p>
                )}
            </motion.dl>

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

function DensityList({ index, percent, wordCount, letter }) {
    return (
        <motion.div
            className="flex gap-[0.875rem] items-center text-preset-4"
            variants={itemVariant}
            custom={index}
        >
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
        </motion.div>
    );
}

export default LetterDensity;
