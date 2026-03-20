//Return the length of the value string
export const countCharacters = value => {
    const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });

    const characters = [...segmenter.segment(value)].map(s => s.segment);
    return characters.length;
};
