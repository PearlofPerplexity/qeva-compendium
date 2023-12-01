//Ability Modifier = Ability - 10 / 2
export const calcAbilityMod = (ability) => {
    return (Math.floor((ability - 10) / 2));
};

export const sortObjArray = (ARRAY) => {
    const sortedArray = ARRAY.sort((a, b) => { // Sorts the Array Alphabetically
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) return -1;
        else if (nameA > nameB) return 1;
        else return 0;
    });
    const finalArray = sortedArray.map((element, key) => { //Provides new Id to Element based on new pos.
        element.id = key;
        return element;
    });
    return finalArray;
}