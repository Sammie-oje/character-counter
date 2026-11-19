import { createContext, useContext, useMemo, useState } from "react";
import { getLimitedText } from "../utils/character-limit.js";
import { countCharacters } from "../utils/character-count.js";
import { countWords } from "../utils/word-count.js";
import { countSentence } from "../utils/sentence-count.js";
import { getAnalytics } from "../utils/letter-density.js";
import { excludeSpaces } from "../utils/exclude-spaces.js";
import { calculateReadingTime } from "../utils/reading-time.js";

const FormContext = createContext(null);

const EMPTY_STATS = {
  characters: 0,
  words: 0,
  sentences: 0,
  readingTime: 0,
  density: [],
};

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

  const {
    textInput,
    characterLimit,
    openLimitBox,
    excludeSpaces: isSpaceExcluded,
  } = formData;

  const limitedText = characterLimit
    ? getLimitedText(textInput, characterLimit)
    : textInput;

  const stats = useMemo(() => {
    if (!limitedText) return EMPTY_STATS;

    const words = countWords(limitedText);
    return {
      characters: isSpaceExcluded
        ? excludeSpaces(limitedText)
        : countCharacters(limitedText),
      words,
      sentences: countSentence(limitedText),
      readingTime: calculateReadingTime(words),
      density: getAnalytics(limitedText),
    };
  }, [isSpaceExcluded, limitedText]);

  const store = {
    value: limitedText,
    onFormData: handleFormData,
    characterLimit,
    isLimitBoxOpen: openLimitBox,
    isSpaceExcluded,
    textValue: textInput,
    stats,
  };

  return <FormContext value={store}>{children}</FormContext>;
}

export function useForm() {
  const context = useContext(FormContext);

  if (context === undefined)
    throw new Error("FormContext was used outside the FormProvider");

  return context;
}
