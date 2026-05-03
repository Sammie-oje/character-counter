import CopyText from "../CopyText.jsx";
import MaximizeInput from "../MaximizeInput.jsx";
import { Check } from "lucide-react";
import { useState, useEffect } from "react";

function TextInput({ value, onFormData, characterLimit }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [hasCopied, setHasCopied] = useState(false);

    function handleExpansion(e) {
        e.preventDefault();
        setIsExpanded(!isExpanded);
    }
    function showCheckMark() {
        setHasCopied(true);
    }
//For better UX, display and remove a check icon after 1.2s to make the user aware that the text has been copied
    useEffect(() => {
        if (hasCopied) {
            const timer = setTimeout(() => {
                setHasCopied(false);
            }, 1200);

            return () => clearTimeout(timer);
        }
    }, [hasCopied]);

    return (
        <div className="flex flex-col gap-150 ">
            <section
                className={`flex flex-col bg-neutral-100 border-2 border-neutral-200 rounded-12 dark:bg-neutral-800 dark:border-neutral-700 ${isExpanded ? "h-full w-full absolute top-0 left-0 z-200" : ""}`}
            >
                <div
                    role="toolbar"
                    aria-label="Text formatting tools"
                    className="flex justify-end items-center gap-6 p-3"
                >
                    <MaximizeInput
                        onExpansion={handleExpansion}
                        isExpanded={isExpanded}
                    />
                    {hasCopied ? (
                        <Check color="#25e290" className="size-5" />
                    ) : (
                        <CopyText value={value} onCopy={showCheckMark} />
                    )}
                </div>
                <textarea
                    name="textInput"
                    className={`textarea ${characterLimit && value.length >= Number(characterLimit) ? "alert" : ""} ${isExpanded ? "h-full grow " : "min-h-[200px]"}`}
                    placeholder="Start typing here... (or paste your text)"
                    value={value}
                    onChange={onFormData}
                ></textarea>
            </section>

            {characterLimit && value.length >= Number(characterLimit) && (
                <p className="flex gap-100 items-center text-preset-4 text-orange-800 dark:text-orange-500">
                    <img
                        src="/assets/images/icon-info.svg"
                        alt="Limit-info icon"
                    />

                    <span>
                        Limit reached! Your text exceeds {characterLimit}{" "}
                        characters
                    </span>
                </p>
            )}
        </div>
    );
}

export default TextInput;
