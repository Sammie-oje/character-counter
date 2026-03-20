import { calculateReadingTime } from "../../utils/reading-time.js";
import { countWords } from "../../utils/word-count.js";

function TextOptions({
    value,
    onFormData,
    isSpaceExcluded,
    isLimitBoxOpen,
    characterLimit
}) {
    return (
        <div className="flex flex-col gap-150 items-start md:flex-row md:justify-between">
            <div className="contents md:flex md:gap-300">
                <label
                    htmlFor="exclude-spaces-checkbox"
                    className="flex items-center gap-[10px]"
                >
                    <input
                        name="excludeSpaces"
                        id="exclude-spaces-checkbox"
                        type="checkbox"
                        className="checkbox"
                        value={isSpaceExcluded}
                        onChange={onFormData}
                    />
                    <span className="dark:text-neutral-200">
                        Exclude Spaces
                    </span>
                </label>

                <div className="flex gap-[10px] items-center">
                    <label
                        htmlFor="character-limit-checkbox"
                        className="contents"
                    >
                        <input
                            name="openLimitBox"
                            id="character-limit-checkbox"
                            type="checkbox"
                            className="checkbox"
                            onChange={onFormData}
                            value={isLimitBoxOpen}
                        />
                        <span className="dark:text-neutral-200">
                            Set Character Limit
                        </span>
                    </label>

                    {isLimitBoxOpen && (
                        <input
                            name="characterLimit"
                            type="number"
                            className="py-050 w-[55px] text-center text-preset-4 border border-neutral-600 rounded-6 dark:text-neutral-200"
                            value={characterLimit}
                            onChange={
                                isLimitBoxOpen ? onFormData : onFormData("")
                            }
                        />
                    )}
                </div>
            </div>
            <p className="text-preset-4 dark:text-neutral-200">
                Approx. reading time:{" "}
                <span>
                    {value ? calculateReadingTime(countWords(value)) : 0}
                    {calculateReadingTime(countWords(value)) > 1
                        ? " minutes"
                        : " minute"}
                </span>
            </p>
        </div>
    );
}

export default TextOptions;
