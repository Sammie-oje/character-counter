import { motion } from "motion/react";

function DensityList({ index, percent, wordCount, letter, itemVariant }) {
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

export default DensityList;
