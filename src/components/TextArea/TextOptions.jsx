import { calculateReadingTime } from "../../utils/reading-time.js";
import { countWords } from "../../utils/word-count.js";

function TextOptions({
    value,
    spaceChecked,
    onSpaceChecked,
    limitChecked,
    onLimitChecked,
    numberValue,
    onNumberValue
}) {
    return (
        <div className="flex flex-col gap-150 items-start md:flex-row md:justify-between">
            <div className="contents md:flex md:gap-300">
                <label
                    htmlFor="exclude-spaces-checkbox"
                    className="flex items-center gap-[10px]"
                >
                    <input
                        id="exclude-spaces-checkbox"
                        type="checkbox"
                        className="checkbox"
                        value={spaceChecked}
                        onChange={onSpaceChecked}
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
                        id="character-limit-checkbox"
                            type="checkbox"
                            className="checkbox"
                            onChange={onLimitChecked}
                            value={limitChecked}
                        />
                        <span className="dark:text-neutral-200">
                            Set Character Limit
                        </span>
                    </label>

                    {limitChecked && (
                        <input
                            type="number"
                            className="py-050 w-[55px] text-center text-preset-4 border border-neutral-600 rounded-6 dark:text-neutral-200"
                            value={numberValue}
                            onChange={
                                limitChecked ? onNumberValue : onNumberValue("")
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
