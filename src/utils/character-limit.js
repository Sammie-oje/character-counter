export const getLimitedText = (value, limit) => {
    const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
    const characters = [...segmenter.segment(value)].map(s => s.segment);

    const slicedText = characters.slice(0, Number(limit)).join("");
    return slicedText;
};
