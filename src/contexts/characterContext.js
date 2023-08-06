/* 
This context  houses the variables used for character creation to allow it to be shared between the character builder and the character sheet 
*/
import { useState, createContext } from "react";

const CharacterContext = createContext([{}, () => { }]);

const CharacterProvider = ({ children }) => {

    const [character, setCharacter] = useState({
        //Name
        playerName: "",
        name: "",
        //Ability Scores
        str: 0, strMod: -5,
        dex: 0, dexMod: -5,
        con: 0, conMod: -5,
        int: 0, intMod: -5,
        wis: 0, wisMod: -5,
        cha: 0, chaMod: -5,
        //Alignment
        alignment: "", alignmentType: "", alignmentGem: undefined,
        //Race
        race: undefined, subrace: undefined, endrace: undefined,
        //Class
        myClass: undefined, subclass: undefined, endclass: undefined,
        //Proficiencies & Languages
        profAndLang: [],
        //Features
        features: [],
        //Backstory
        personality: "", ideals: "", flaws: "",
    });

    //Any children within this provider can access this context
    return (
        <CharacterContext.Provider value={[character, setCharacter]}>
            {children}
        </CharacterContext.Provider>
    );
};

export { CharacterContext, CharacterProvider };