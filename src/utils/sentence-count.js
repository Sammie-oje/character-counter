//Identify sentences by using terminating punctuation marks i.e (.,?,!)
import { segmentValue } from "./segmenter.js";

export const countSentence = value => {
  
    const sentences = segmentValue(value, "sentence");
    const sentencesArr = sentences.filter(sentence => /[^\s]/.test(sentence));

    return sentencesArr.length;
};
