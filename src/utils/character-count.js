//Return the length of the value string
import { segmentValue } from "./segmenter.js";

export const countCharacters = value => {
    const characters = segmentValue(value, "grapheme");
    return characters.length;
};
