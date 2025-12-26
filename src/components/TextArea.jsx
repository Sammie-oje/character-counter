import { useState } from "react";

function TextArea({ value, onTextValue }) {
    return (
        <section className="px-200 flex flex-col gap-200 md:px-400">
            <TextInput value={value} onTextValue={onTextValue} />
            <TextOptions />
        </section>
    );
}

function TextInput({ value, onTextValue }) {
    return (
        <div>
            <textarea
                className="textarea"
                placeholder="Start typing here... (or paste your text)"
                value={value}
                onChange={onTextValue}
            ></textarea>
        </div>
    );
}

function TextOptions() {
    return (
        <div className="flex flex-col gap-150 items-start md:flex-row md:justify-between">
            <div className="contents md:flex md:gap-300">
                <label className="flex items-center gap-[10px]">
                    <input type="checkbox" className="checkbox" />
                    <span className="dark:text-neutral-200">
                        Exclude Spaces
                    </span>
                </label>

                <label className="flex items-center gap-[10px]">
                    <input type="checkbox" className="checkbox" />
                    <span className="dark:text-neutral-200">
                        Set Character Limit
                    </span>
                </label>
            </div>
            <p className="text-preset-4 dark:text-neutral-200">
                Approx. reading time: <span>1 minute</span>
            </p>
        </div>
    );
}

export default TextArea;
