import React, { useState, useEffect, useContext } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import CharacterSheet from './CharacterSheet';
import CharacterBuilder from './CharacterBuilder';
//CONTEXT
import { CharacterContext } from '../contexts/characterContext';

import { GEMS } from '../assets/shared/GEMS';
import { CLASSES } from '../assets/shared/CLASSES';
import { RACES } from '../assets/shared/RACES';

const CharacterCreator = () => {
    
    const [character, setCharacter] = useContext(CharacterContext);

    const {
        //Name
        playerName, name,
        //Ability Scores
        str, dex, con, int, wis, cha,
        //Alignment
        alignment, alignmentType, alignmentGem,
        //Race
        endrace,
        //Class
        endclass,
        //Backstory
        backstory, personality, ideals, flaws,
    } = character;

    const allAbility = 72 - (str + dex + con + int + wis + cha);

    const resetCharacter = () => {
        setCharacter({
            //Name
            playerName: "",
            name: "",
            //Ability Scores
            str: 0, strMod: -5, strSave: -3,
            dex: 0, dexMod: -5, dexSave: -3,
            con: 0, conMod: -5, conSave: -3,
            int: 0, intMod: -5, intSave: -3,
            wis: 0, wisMod: -5, wisSave: -3,
            cha: 0, chaMod: -5, chaSave: -3,
            alignment: "", alignmentType: "", alignmentGem: undefined,
            endrace: undefined,
            endclass: undefined,
            personality: "",
            ideals: "",
            flaws: "",
        });
    }

    const handleRandom = () => {
        setCharacter({
            //Name
            playerName: "Kyle O'Brien",
            name: "Hartri",
            //Ability Scores
            str: 10, strMod: "+0", strSave: "+2",
            dex: 15, dexMod: "+2", dexSave: "+4",
            con: 15, conMod: "+2", conSave: "+4",
            int: 8, intMod: "-1", intSave: "+1",
            wis: 11, wisMod: "+0", wisSave: "+2",
            cha: 13, chaMod: "+1", chaSave: "+3",
            alignment: "Lawful Good", alignmentType: "Cardinal", alignmentGem: GEMS[1].topics[11],
            race: RACES[5],
            endrace: RACES[5].topics[1],
            subrace: RACES[5].topics[1],
            myClass: CLASSES[1],
            endclass: CLASSES[1],
            backstory: "A rugged old caracadre gnome who is nearly always the wisest of his party and slowest to rashness.",
            personality: "Hartri is gentle and understanding. Makes friends everywhere he goes.",
            ideals: "Believes in peace",
            flaws: "Too slow too action, getting older.",
        });
    }

    const [modalOne, setModalOne] = useState(false);
    const toggleOneStart = () => setModalOne(true);
    const toggleOne = () => setModal(false);

    const [modal, setModal] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const [errorModal, setErrorModal] = useState(false);
    const toggle = () => {
        //Creates the character
        let charObj, d20;
        if (!character.alignmentGem || !character.endrace || !character.endclass || (allAbility !== 0)) {
            console.log([str, dex, con, int, wis, cha]);
            toggleError();
            return;
        }
        charObj = character;
        charObj.level = 1;
        //Die Rolls

        if (!character.initD20) charObj.initD20 = Math.floor(Math.random() * 20) + 1;
        
        //ARMOR CLASS
        charObj.ac = (10 + parseInt(charObj.dexMod));
        
        //INITIATIVE
        charObj.init = `+${charObj.initD20 + parseInt(charObj.dexMod)}`;
        
        //INSPIRATION - receive inspiration if all background elements are completed
        if (character.backstory && character.personality && character.ideals && character.flaws) {
            character.inspiration = true;
        } else {
            character.inspiration = false;
        }

        //PROFICIENCIES & LANGUAGES
        charObj.profAndLang = [];
        //LANGUAGES
        charObj.languages = character.race.languages.join(', ');
        charObj.profAndLang.push(`LANGUAGES: ${charObj.languages}`);
        //PROFICIENCIES
        charObj.proficiencies = character.race.proficiencies.join(', ');
        charObj.profAndLang.push(`PROFICIENCIES: ${charObj.proficiencies}`);

        //HIT POINTS: class hit die + constitution modifier
        charObj.hp = parseInt(character.endclass.hitDie.replace(/^d/, '')) + parseInt(character.conMod);

        //HIT DIE: level * class hit die
        charObj.hitDie = `${character.level}${character.endclass.hitDie}`;

        //FEATURES: An array separated by \n to create line breaks in textarea
        charObj.features = [];
        if (character.alignmentType === 'Incidental') {
            charObj.features.push(`${character.alignmentGem.name.toUpperCase()}: ${character.alignmentGem.lvls[0]} (2pts)`);
        } else {
            charObj.features.push(`${character.alignmentGem.lvls[0].name.toUpperCase()} (2pts)`);
        }
        if (character.race.abilities && character.race.abilities.length > 0) {
            character.race.abilities.map(ability => {
                charObj.features.push(`${ability.name.toUpperCase()}`)
            });
        }
        if (character.subrace && character.subrace.abilities.length > 0) {
            character.subrace.abilities.map(ability => {
                charObj.features.push(`${ability.name.toUpperCase()}`)
            });
        }
        
        console.log(charObj);
        setCharacter({...charObj});
        setModal(true);
    };
    const toggleNested = () => {
        if (charChange()) {
            setNestedModal(!nestedModal);
        } else {
            reset();
        }
    };
    const handleJSON = () => {
        //function downloadObjectAsJson(exportObj, exportName){
        let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(character));
        let downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", character.name + ".json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }
    const toggleError = () => {
        setErrorModal(!errorModal);
    };
    const charChange = () => {
        if (
            playerName !== "" ||
            name !== "" ||
            str !== 0 || 
            dex !== 0 || 
            con !== 0 || 
            int !== 0 || 
            wis !== 0 || 
            cha !== 0 ||
            alignment ||
            alignmentGem ||
            alignmentType ||
            alignmentGem ||
            endrace ||
            endclass ||
            backstory ||
            personality ||
            ideals ||
            flaws
        ) {
            return true;
        }
    }
    const reset = () => {
        setNestedModal(false);
        setModal(false);
        setModalOne(false);
        resetCharacter();
        console.clear();
    };
    const componentRef = React.createRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const handleCharacter = (prop, value) => {
        let charObj = character;
        charObj[prop] = value;
        setCharacter({...charObj});
    };

    return (
        <div className="col-lg-4">
            <Link className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3"  onClick={toggleOneStart}>
                <i className="iconify fs-2" data-icon="noto:man-elf-light-skin-tone"></i>
                <div className="ms-3">
                    <div className="d-flex align-items-center">
                        <h3 className="mb-0">Character Builder</h3>
                    </div>
                </div>
            </Link>
            <Modal isOpen={modalOne} toggle={toggleOne} fullscreen>
                <ModalHeader>
                    <i className="iconify fs-2" data-icon="noto:man-elf-light-skin-tone"></i> Character Builder for:&nbsp;
                    <input type='text' className='player-name-input' value={character.playerName} onChange={(e) => handleCharacter('playerName', e.target.value)} />
                </ModalHeader>
                <ModalBody>
                    <CharacterBuilder />
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={handleRandom} >
                        Randomize
                    </Button>{' '}
                    <Button color="primary" onClick={toggle} >
                        Build Character Sheet
                    </Button>{' '}
                    <Button color="danger" onClick={toggleNested}>
                        Cancel
                    </Button>   
                </ModalFooter>
            </Modal>
            <Modal isOpen={modal} toggle={toggle} fullscreen>
                <ModalHeader toggle={toggle}><i className="iconify fs-2" data-icon="noto:man-elf-light-skin-tone"></i> Character Builder</ModalHeader>
                <ModalBody>
                    <CharacterSheet ref={componentRef} />
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggleOne} >
                        Back
                    </Button>{' '}
                    <Button color="secondary" onClick={handleJSON} >
                        Save Character JSON
                    </Button>{' '}
                    <Button color="primary" onClick={handlePrint} >
                        Print
                    </Button>{' '}
                    <Button color="danger" onClick={toggleNested}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
            <Modal
                isOpen={nestedModal}
                toggle={toggleNested}
            >
                <ModalHeader>WARNING!</ModalHeader>
                <ModalBody>Are you sure you want to cancel? If you cancel now, all progress will be lost.</ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={reset}>
                        Yes, Cancel
                    </Button>{' '}
                    <Button color="secondary" onClick={toggleNested}>
                        Go back
                    </Button>
                </ModalFooter>
            </Modal>
            <Modal
                isOpen={errorModal}
                toggle={toggleError}
            >
                <ModalHeader>Oops!</ModalHeader>
                <ModalBody>
                    <div className='text-start'>
                        Some critical information is missing:
                        <ul className="list-group-flush">
                            {(allAbility !== 0) && (<li className='list-group-item'><strong className='text-danger'>! </strong>Ability Score Points have not been allocated properly</li>)}
                            {!alignmentGem && (<li className='list-group-item'><strong className='text-danger'>! </strong>Alignment</li>)}
                            {!endrace && (<li className='list-group-item'><strong className='text-danger'>! </strong>Race</li>)}
                            {!endclass && (<li className='list-group-item'><strong className='text-danger'>! </strong>Class</li>)}
                        </ul>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggleError}>
                        Okay
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default CharacterCreator;