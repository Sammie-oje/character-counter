export const segmentValue = (value, unit) => {
    const segmenter = new Intl.Segmenter("en", { granularity: `${unit}` });
    const segmentedValueArr = [...segmenter.segment(value)].map(s => s.segment);
    
    return segmentedValueArr;
};
