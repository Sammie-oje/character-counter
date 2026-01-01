export const excludeSpaces = value => {
    const characters = value.split("");
    const charactersWithOutSpace = characters.filter(character =>
        /\S/.test(character)
    );
    return charactersWithOutSpace.length;
};
