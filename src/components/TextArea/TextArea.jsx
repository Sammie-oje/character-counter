import TextInput from "./TextInput.jsx";
import TextOptions from "./TextOptions.jsx";

function TextArea({ value, onFormData, formData }) {
    const { textInput, excludeSpaces, openLimitBox, characterLimit } = formData;

    return (
        <section className="px-200 flex flex-col gap-200 md:px-400">
            <form className="contents">
                <TextInput
                    value={value}
                    onFormData={onFormData}
                    characterLimit={characterLimit}
                />
                <TextOptions
                    value={value}
                    onFormData={onFormData}
                    isSpaceExcluded={excludeSpaces}
                    isLimitBoxOpen={openLimitBox}
                    characterLimit={characterLimit}
                />
            </form>
        </section>
    );
}

export default TextArea;
