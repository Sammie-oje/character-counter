import TextInput from "./TextInput.jsx";
import TextOptions from "./TextOptions.jsx";

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

export default TextArea;
