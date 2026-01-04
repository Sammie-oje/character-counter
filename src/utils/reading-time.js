/*The average reading time is determined to be around 200-250 WPM*/

export const calculateReadingTime = words => {
    //Pass in the amount of words as a param
    const readingTime = (words / 200).toFixed(2);

    return Number(readingTime) < 1 ? "<1" : readingTime;
};
