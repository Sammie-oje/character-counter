import { useState } from "react";
import { calculateReadingTime } from "../utils/reading-time.js";
import { countWords } from "../utils/word-count.js";

function TextArea({
    value,
    onTextValue,
    onSpaceChecked,
    spaceChecked,
    limitChecked,
    onLimitChecked,
    numberValue,
    onNumberValue
}) {
    return (
        <section className="px-200 flex flex-col gap-200 md:px-400">
            <TextInput
                value={value}
                onTextValue={onTextValue}
                numberValue={numberValue}
            />
            <TextOptions
                value={value}
                onSpaceChecked={onSpaceChecked}
                spaceChecked={spaceChecked}
                limitChecked={limitChecked}
                onLimitChecked={onLimitChecked}
                numberValue={numberValue}
                onNumberValue={onNumberValue}
            />
        </section>
    );
}

function TextInput({ value, onTextValue, numberValue }) {
    return (
        <div className="flex flex-col gap-150">
            <textarea
                className={
                    numberValue && value.length >= Number(numberValue)
                        ? "textarea alert"
                        : "textarea"
                }
                placeholder="Start typing here... (or paste your text)"
                value={value}
                onChange={onTextValue}
            ></textarea>
            {numberValue && value.length >= Number(numberValue) && (
                <p className="flex gap-100 items-center text-preset-4 text-orange-800 dark:text-orange-500">
                    <img
                        src="../../../assets/images/icon-info.svg"
                        alt="Limit-info icon"
                    />

                    <span>
                        Limit reached! Your text exceeds {numberValue}{" "}
                        characters
                    </span>
                </p>
            )}
        </div>
    );
}

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
                <label className="flex items-center gap-[10px]">
                    <input
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
                    <label className="contents">
                        <input
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
                            onChange={onNumberValue}
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

export default TextArea;
