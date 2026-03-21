//Identify a word when there is a space between each cluster of letters
import { segmentValue } from "./segmenter.js";

export const countWords = value => {
    const words = segmentValue(value, "word");
    const wordsArr = words.filter(word => word !== "");

    return wordsArr.length;
};
