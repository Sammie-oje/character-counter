import DensityList from "./DensityList.jsx";
import ToggleList from "./ToggleList.jsx";
import { useState } from "react";
import { motion } from "motion/react";

const listVariant = {
    expand: {
        height: "auto",
        transition: {
            when: "beforeChildren",
            visualDuration: 0.2,
            ease: "easeOut"

        }
    },
    shrink: {
        height: 158,
        transition: {
            when: "afterChildren",
            visualDuration: 0.2,
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
                animate={isExpanded ? "expand" : "shrink"}
            >
                {charDensity.length > 0 ? (
                    charDensity.map((obj, index) => 
                        <DensityList
                            percent={obj.percentage}
                            wordCount={obj.count}
                            letter={obj.character}
                            key={obj.character}
                            index={index}
                            itemVariant={itemVariant}
                        />)
                ) : (
                    <p className="text-preset-4 dark:text-neutral-200">
                        No characters found. Start typing to see letter density.
                    </p>
                )}
            </motion.dl>

            {charDensity.length > 5 && (
                <ToggleList
                    isExpanded={isExpanded}
                    handleIsExpanded={handleIsExpanded}
                />
            )}
        </div>
    );
}

export default LetterDensity;
