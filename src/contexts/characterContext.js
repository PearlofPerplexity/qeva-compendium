/* 
This context  houses the variables used for character creation to allow it to be shared between the character builder and the character sheet 
*/
import { useState, createContext } from "react";

const CharacterContext = createContext([{}, () => { }]);

const CharacterProvider = ({ children }) => {

    const [character, setCharacter] = useState({
        STR: 0,
        DEX: 0,
        CON: 0,
        INT: 0,
        WIS: 0,
        CHA: 0,
    });

    //Any children within this provider can access this context
    return (
        <CharacterContext.Provider value={[character, setCharacter]}>
            {children}
        </CharacterContext.Provider>
    );

    function characterReducer(action) {
        let charObj = action.profile;
        console.log('type: ' + action.type);
        console.log('payload: ' + action.payload);
        console.log(action.profile);
        charObj[action.type] = action.payload;
        return charObj;

        /* switch (action.type) {
            case 'STR': {
                console.log(character);
                return {
                    ...character,
                    STR: action.payload
                };
            }
            case 'DEX': {
                console.log(character);
                return {
                    ...character,
                    DEX: action.payload
                };
            }
            case 'CON': {
                console.log(character);
                return {
                    ...character,
                    CON: action.payload
                };
            }
            case 'INT': {
                console.log(character);
                return {
                    ...character,
                    INT: action.payload
                };
            }
            case 'INT': {
                console.log(character);
                return {
                    ...character,
                    INT: action.payload
                };
            }
            default:
                console.log('ERROR! No Changes Made.');
                return { ...character };
        } */
    }

};

export { CharacterContext, CharacterProvider };