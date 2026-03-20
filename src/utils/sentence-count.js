//Identify sentences by using terminating punctuation marks i.e (.,?,!)
export const countSentence = value => {
    const segmenter = new Intl.Segmenter("en", { granularity: "sentence" });
    const sentences = [...segmenter.segment(value)].map(s => s.segment);
    
    const sentencesArr = sentences.filter(sentence => /[^\s]/.test(sentence));
    return sentencesArr.length;
};
