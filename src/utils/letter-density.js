/*Filter the value collected from the textarea i.e remove punctuations, spaces and emojis
Then count how many times each character appear and compare to the total number filtered value
Return all these values as a nice pretty looking array of objects
*/
import { segmentValue } from "./segmenter.js";

const filterValue = value => {
    const valueAllCaps = value.toUpperCase();
    const characters = segmentValue(valueAllCaps, "grapheme");

    const regex =
        /[\p{L}\p{N}\p{RGI_Emoji}]/v; /*Match all emojis, any letter in any language, and any number*/
    const filteredValue = characters.filter(character => regex.test(character));
    return filteredValue;
};

const getFrequency = value => {
    const frequency = value.reduce((acc, curValue) => {
        acc[curValue] = (acc[curValue] || 0) + 1;
        return acc;
    }, {});

    return frequency;
};

//Sort the frequency object in descending order
const sortCharacterObj = value => {
    //convert to ab array using Object entries and rearrange using the .sort() method
    const sortedArr = Object.entries(value).sort((a, b) => b[1] - a[1]);

    return sortedArr;
};

export const getAnalytics = input => {
    const filteredInput = filterValue(input);
    const inputFrequency = getFrequency(filteredInput);

    const orderedArr = sortCharacterObj(inputFrequency);

    const prettyArr = [];
    //Loop through the sorted array of the letters and return a pretty array
    for (const arr of orderedArr) {
        prettyArr.push({
            character: arr[0],
            count: arr[1],
            percentage: ((arr[1] / filteredInput.length) * 100).toFixed(2)
        });
    }

    return prettyArr;
};
