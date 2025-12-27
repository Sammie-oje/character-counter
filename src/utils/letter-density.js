/*Filter the value collected from the textarea i.e remove punctuations, spaces and emojis
Then count how many times each character appear and compare to the total number filtered value
Return all these values as a nice pretty looking object
*/
const filterValue = value => {
    const characters = value.split("");
    const regex = /[^\p{P}\s]/u;
    const filteredValue = characters.filter(character => regex.test(character));
};
