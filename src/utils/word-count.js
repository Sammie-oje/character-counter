//Identify a word when there is a space between each cluster of letters
export const countWords = value => {
  const segmenter = new Intl.Segmenter("en", { granularity: "word" });
const words= [...segmenter.segment(value)].map(s => s.segment);
  
    const wordsArr = words.filter(word => word !== "");
    return wordsArr.length;
};
