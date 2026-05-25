import { useState } from "react";
import Header from "./components/Header.jsx";
import TextArea from "./components/TextArea/TextArea.jsx";
import StatDensityContainer from "./components/metrics/Container.jsx";
import { getLimitedText } from "./utils/character-limit.js";

function App() {
    /*Using an object to keep track of the values of the input elements values instead of using individual states */
    const [formData, setFormData] = useState({
        textInput: "",
        excludeSpaces: false,
        openLimitBox: false,
        characterLimit: ""
    });

    const handleFormData = e => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const { textInput, characterLimit, openLimitBox, excludeSpaces } = formData;

    const limitedText = characterLimit
        ? getLimitedText(textInput, characterLimit)
        : textInput;

    return (
        <>
            <Header />

            <div className="p-200 flex justify-center md:flex-col md:items-center md:p-0">
                <h1 className="font-[dmSans] font-bold text-preset-mobile text-center md:text-preset-1 md:max-w-lg dark:text-neutral-100">
                    Analyze your text in real-time.
                </h1>
            </div>

            <TextArea
                value={limitedText}
                onFormData={handleFormData}
                formData={formData}
            />

            <StatDensityContainer
                value={limitedText}
                isSpaceExcluded={excludeSpaces}
                textValue={textInput}
            />
        </>
    );
}

export default App;
