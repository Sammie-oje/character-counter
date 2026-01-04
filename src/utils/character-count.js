//Convert textValue i.e a string to an iterable object i.e an Array then return the length of the Array
export const countCharacters = value => {
    const letters = value.split("");
    
    return letters.length;
};
