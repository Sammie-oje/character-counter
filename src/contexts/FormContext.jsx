import { createContext, useContext, useState } from "react";
import { getLimitedText } from "../utils/character-limit.js";

const FormContext = createContext(null);

export function FormProvider({ children }) {
  /*Using an object to keep track of the values of the input elements values instead of using individual states */
  const [formData, setFormData] = useState({
    textInput: "",
    excludeSpaces: false,
    openLimitBox: false,
    characterLimit: "",
  });

  const handleFormData = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const { textInput, characterLimit, openLimitBox, excludeSpaces } = formData;
  const limitedText = characterLimit
    ? getLimitedText(textInput, characterLimit)
    : textInput;

  const store = {
    value: limitedText,
    onFormData: handleFormData,
    characterLimit,
    isLimitBoxOpen: openLimitBox,
    isSpaceExcluded: excludeSpaces,
    textValue: textInput,
  };

  return <FormContext value={store}>{children}</FormContext>;
}

export function useForm() {
  const context = useContext(FormContext);

  if (context === undefined)
    throw new Error("FormContext was used outside the FormProvider");

  return context;
}
