export const getLimitedText = (value, limit) => {
    const slicedText = value.slice(0, Number(limit));
    return slicedText;
};
