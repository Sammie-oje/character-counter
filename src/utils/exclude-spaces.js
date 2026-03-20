export const excludeSpaces = value => {
    const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
    
    const characters = [...segmenter.segment(value)].map(s => s.segment);
    const charactersWithOutSpace = characters.filter(character =>
        /\S/.test(character)
    );
    
    return charactersWithOutSpace.length;
};
