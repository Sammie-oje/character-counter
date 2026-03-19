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

export default TextInput