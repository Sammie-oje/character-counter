//Identify a word when there is a space between each cluster of letters
export const countWords = value => {
    const words = value.split(/\s/);
    const wordsArr = words.filter(word => word !== "");
    return wordsArr.length;
};
