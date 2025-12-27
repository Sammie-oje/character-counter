//Identify sentences by using terminating punctuation marks i.e (.,?,!)
export const countSentence = value => {
    const sentences = value.split(/[.?!]+/);
    const sentencesArr = sentences.filter(sentence => sentence !== "") 
    return sentencesArr.length;
};
