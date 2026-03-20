function TextInput({ value, onFormData, characterLimit}) {
    return (
        <div className="flex flex-col gap-150">
            <textarea
            name="textInput"
                className={
                    characterLimit && value.length >= Number(characterLimit)
                        ? "textarea alert"
                        : "textarea"
                }
                placeholder="Start typing here... (or paste your text)"
                value={value}
                onChange={onFormData}
            ></textarea>
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

export default TextInput