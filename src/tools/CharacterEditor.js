import React, { useState, useContext } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import CharacterSheetEditable from './CharacterSheetEditable';
import levelUpImg from '../assets/imgs/other/lvlUp.png'
import { CLASSES } from '../assets/shared/CLASSES';
import { RACES } from '../assets/shared/RACES';
import { GEMS } from "../assets/shared/GEMS";
import { DGEMS } from '../assets/shared/DGEMS';

//CONTEXT
import { CharacterContext } from '../contexts/characterContext';

const CharacterEditor = () => {
    
    const [character, setCharacter] = useContext(CharacterContext);
    const [characterBackup, setCharacterBackup] = useState();
    const [charString, setCharString] = useState("");
    const [hpData, setHpData] = useState({
        hitDie: 0, conMod: 0, extraHP: 0, avgRoll: 0
    });
    const [feats, setFeats] = useState();
    const [newGem, setNewGem] = useState(false);
    const [gems, setGems] = useState();

    const handleCharFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = function (event) {
            // The file content is available here
            const fileContent = event.target.result;
            setCharString(fileContent);
            };
            // Read the file as text
            reader.readAsText(file);
        }
    }

    const [modalOne, setModalOne] = useState(false);
    const toggleOneStart = () => setModalOne(true);
    const toggleOne = () => {
        setModal(false);
        setLevelUpMode(false);
    }
    const [modal, setModal] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const [errorModal, setErrorModal] = useState(false);
    const [errorMsg, setErrorMsg] = useState("An Unknown Error Occured.");
    const toggle = (event) => {
        //Creates the character
        try {
            if(charString) {
                const charObj = JSON.parse(charString);
                if(charObj.hasOwnProperty('endrace') && charObj.hasOwnProperty('endclass')) {
                    setCharacter({...charObj});
                    setCharacterBackup({...charObj});
                    setModal(true);
                } else {
                    setErrorMsg("The File you uploaded is not a valid character JSON. :(");
                    toggleError();
                }
            } else {
                setErrorMsg("No file was uploaded for the character JSON.");
                toggleError();
            }
        } catch (e) {
            setErrorMsg("The file you uploaded is not a valid JSON. :(");
            toggleError();
        }
    };
    const toggleNested = () => {
        if (charChange()) {
            setNestedModal(!nestedModal);
        } else {
            reset();
        }
    };
    const [lvlModal, setLevelModal] = useState(false);
    const toggleLvlModal = () => setLevelModal(!lvlModal);
    const [levelUpMode, setLevelUpMode] = useState(false);
    const toggleLvlMode = () => {
        if(!levelUpMode) {
            prepareNextLevel();
        } else {
            setCharacter({...characterBackup});
        }
        setLevelUpMode(!levelUpMode);
        toggleLvlModal();
    };
    const handleLevelUp = () => {
        toggleLvlModal();
    }
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
        if (charString) {
            return true;
        } else {
            return false;
        }
    }
    const reset = () => {
        setNestedModal(false);
        setModal(false);
        setModalOne(false);
        setLevelModal(false);
        console.clear();
    };
    const componentRef = React.createRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const handleHp = (event) => {
        let roll = event.target.value;
        if(!roll || roll < hpData.avgRoll) roll = hpData.avgRoll;
        roll = parseInt(roll);
        if(roll > hpData.hitDieVal) roll = hpData.avgRoll;
        const xtraHp = hpData.conMod + roll;
        setHpData({...hpData, extraHp: xtraHp });
        const newHp = characterBackup.hp + xtraHp;
        setCharacter({...character, hp: newHp });
    }

    const handleGem = (event) => {
        const selection = event.target.value;
        const charObj = character;
        if (!selection || selection === 'new') {
            if (charObj.race.heartStone.toLowerCase().includes(charObj.alignmentGem.name.toLowerCase()) 
                || charObj.race.spawnStone.toLowerCase().includes(charObj.alignmentGem.name.toLowerCase())
            ) {
                charObj.alignmentGem.level = 2;
            } else {
                charObj.alignmentGem.level = 1;
            }
        } else if(selection === 'same') {
            if(charObj.alignmentType === 'Cardinal') {
                //Prepare for further levels
                charObj.alignmentGem.level = characterBackup.alignmentGem.level + 1;
            }
        }
        if(selection === 'new') {
            setNewGem(true);
        } else {
            setNewGem(false);
        }
        setCharacter({...charObj});
    }

    const selectNewGem = (event) => {
        const charObj = character;
        const newGemName = event.target.value;
        let newGem;
        if(newGemName) {
            newGem = gems.find(gem => gem.name === newGemName);
            if (charObj.race.heartStone.toLowerCase().includes(newGemName.toLowerCase()) 
                || charObj.race.spawnStone.toLowerCase().includes(newGemName.toLowerCase())
            ) {
                newGem.level = 2;
            } else {
                newGem.level = 1;
            }
        } else {
            newGem = {}
        }
        charObj.alignmentGemTwo = newGem;
        setCharacter({...charObj});
    }

    const prepareNextLevel = () => {
        const charObj = character;
        
        //Handle Level
        const prevlvlIndex = charObj.level - 1;
        const lvlIndex = charObj.level;
        charObj.level = charObj.level + 1;

        //Handle HP
        let avgRoll = parseInt(charObj.endclass.hitDie.replace("d", "")) / 2;
        if (avgRoll % 1 !== 0) avgRoll += 1;
        avgRoll = Math.floor(avgRoll);
        const hpObj = {
            hitDieVal: parseInt(charObj.endclass.hitDie.replace("d", "")),
            conMod: parseInt(charObj.conMod),
            extraHp: avgRoll + parseInt(charObj.conMod),
            avgRoll: avgRoll
        };
        charObj.hp = charObj.hp + hpObj.extraHp;
        setHpData({...hpObj});
        
        //Handle Hit DIe
        charObj.hitDie = charObj.level + charObj.endclass.hitDie;
        
        //Handle Proficiency Bonus
        const prevProf = charObj.endclass.lvls[prevlvlIndex].prof_bonus;
        const newProf = charObj.endclass.lvls[lvlIndex].prof_bonus;
        charObj.profBonus = `+${newProf}`;
        if(prevProf !== newProf) {
            //Todo: Update profBonus
        }

        //Handle Features
        const lvlFeats = charObj.endclass.lvls[lvlIndex];
        if(lvlFeats.features[0].name !== '-') {
            lvlFeats.features.forEach(feat => {
                charObj.features.push(feat.name.toUpperCase());
            });
        }
        if(lvlFeats.trackables && lvlFeats.trackables.length > 0) {
            let umItem = lvlFeats.trackables.find(item => item.includes("UM"));
            if(umItem) {
                umItem = umItem.replace(/[^0-9+-]/g, '');
                let umNum = parseInt(umItem);
                charObj.speed = charObj.race.speed + umNum;
            }
        }
        setFeats([...lvlFeats.features]);

        //Handle Ability Score Increase
            //Todo: Prepare way to update ability scores 
        
        //Handle Gemstones
        const gemOptionArray = [...GEMS[0].topics, ...GEMS[2].topics];
        if(!charObj.alignment.includes('Evil')) {
            gemOptionArray.push(...GEMS[1].topics);
        } else {
            gemOptionArray.push(...DGEMS[1].topics);
        }
        if(!charObj.alignment.includes('Good')) {
            gemOptionArray.push(...DGEMS[0].topics);
        }
        gemOptionArray.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
        })
        setGems([...gemOptionArray]);

        //Save Upgraded Character
        console.log(charObj);
        setCharacter({...charObj});
    }

    return (
        <div className="col-lg-4">
            <Link className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3"  onClick={toggleOneStart}>
                <i className="iconify fs-2" data-icon="noto:woman-elf"></i>
                <div className="ms-3">
                    <div className="d-flex align-items-center">
                        <h4 className="mb-0">Character Editor</h4>
                    </div>
                </div>
            </Link>
            <Modal isOpen={modalOne} toggle={toggleOne}>
                <ModalHeader>
                    <i className="iconify fs-2" data-icon="noto:woman-elf"></i> Character Editor
                </ModalHeader>
                <ModalBody>
                    <div className='mt-3 mb-1 text-center'>Select a file that contains your character JSON.</div>
                    <div class="my-3 mx-5">
                        <input 
                            class="form-control" 
                            type="file" 
                            id="fileInput" 
                            onChange={e => handleCharFile(e)} 
                        />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle} >
                        Build Character Sheet
                    </Button>{' '}
                    <Button color="danger" onClick={reset}>
                        Cancel
                    </Button>   
                </ModalFooter>
            </Modal>
            <Modal isOpen={lvlModal} toggle={toggleLvlModal}>
                <ModalHeader>
                    <img
                        className="rounded-pill img-fluid"
                        width="140"
                        src={levelUpImg}
                        alt="level up"
                    /> {levelUpMode ? ('Exit') : ('Enter')} Level Up Mode
                </ModalHeader>
                <ModalBody>
                    <div className='mt-3 mb-1 text-center'>
                        {levelUpMode ? (
                            <p>
                                Are you sure? This will remove any changes made to your character.
                            </p>
                        ) : (
                            <p>
                                Are you sure you want to level up your character to
                                <h4>level {character.level+1}?</h4>
                            </p>
                        )}
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggleLvlMode} >
                        Continue
                    </Button>{' '}
                    <Button color="danger" onClick={toggleLvlModal}>
                        Cancel
                    </Button>   
                </ModalFooter>
            </Modal>
            <Modal isOpen={modal} toggle={toggle} fullscreen>
                <ModalHeader toggle={toggle}><i className="iconify fs-2" data-icon="noto:woman-elf"></i> Character Editor</ModalHeader>
                <ModalBody>
                    <div className='container-fluid text-center'>
                        <div className='row row-height-two'>
                            <CharacterSheetEditable ref={componentRef} className='col-9' />
                            {levelUpMode && (
                                <div className='col-3 char-overflow pt-2'>
                                    <img
                                        width="140"
                                        src={levelUpImg}
                                        alt="level up"
                                    />
                                    <h6 className='text-center pb-2'>Follow the Below Steps</h6>
                                    <ul className="list-group list-group-flush mb-3 bck">
                                        <li className="list-group-item">
                                            <b>INCREASE YOUR HIT POINTS</b><br/>
                                            <p>
                                            Roll your class' hit die. This will be added to your Constitution modifier to determine your additional hit points. If you roll poorly, the system will take the average result of your hit die ({hpData.avgRoll}). </p>
                                            <div className='row py-2'>
                                                <h5 className='col text-end'>
                                                    Roll a {character.endclass.hitDie}
                                                </h5>
                                                <h5 className='col-5 text-start'>
                                                    <input className='col-6 px-2' onChange={handleHp} />
                                                </h5>
                                            </div>
                                            <h4 className='pb-2'> 
                                                <b>{character.endclass.hitDie}</b> + <b>{hpData.conMod}</b> = <b>{hpData.extraHp}</b> hp
                                            </h4>
                                        </li>
                                        <li className="list-group-item bg-dark m-1"></li>
                                        <li className="list-group-item">
                                            <b>GAIN ONE HIT DIE</b><br/>
                                            <p>
                                                At level {character.level} you have
                                            </p>
                                            <h4 className=''><b>{character.level}</b></h4>
                                            <p>hit die</p>
                                        </li>
                                        <li className="list-group-item bg-dark m-1"></li>
                                        <li className="list-group-item">
                                            <b>GAIN CLASS FEATURES</b><br/>
                                            <div className='row'>
                                                <ul className='list-group list-group-flush mb-3'>
                                                    {feats[0].name !== '-' ? 
                                                        feats.map(feat => (
                                                        <li key={feat.id} className='list-group-item'>
                                                            <b>{feat.name}: </b>{feat.description}
                                                        </li>
                                                    )) : (
                                                        <li>No Features offered at this level</li>
                                                    )}
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="list-group-item bg-dark m-1"></li>
                                        <li className="list-group-item">
                                            <b>PROF. BONUS UPGRADE</b><b/>
                                            <p>
                                                At level {character.level} You have a
                                            </p>
                                            <h4><b>{character.profBonus}</b></h4>
                                            <p>Proficiency Bonus</p>
                                        </li>
                                        <li className="list-group-item bg-dark m-1"></li>
                                        <li className="list-group-item">
                                            <b>ABILITY SCORE UPGRADE</b><br/>
                                            <p>
                                                <i>You do not gain any ability score increases at this level.</i>
                                            </p>
                                        </li>
                                        <li className="list-group-item bg-dark m-1"></li>
                                        <li className="list-group-item">
                                            <b>GEMSTONE UPGRADE</b><br/>
                                            <p>
                                                Increase your gemstone level or select another gemstone.
                                            </p>
                                            <div className='row'>
                                                <select 
                                                    name='alignment' 
                                                    className="form-select" 
                                                    id="alignment-select" 
                                                    onChange={handleGem}
                                                >
                                                    <option value="">--Make Selection--</option>
                                                    <option value="same">
                                                        Invest in Current Gemstone
                                                    </option>
                                                    <option value="new">
                                                        Align to another Gemstone
                                                    </option>
                                                </select>
                                            </div>
                                            <div className='row m-3'>
                                            {newGem && (
                                                <select 
                                                    name='newGem' 
                                                    className="form-select" 
                                                    id="newGem-select" 
                                                    onChange={selectNewGem}
                                                >
                                                    <option value="">--Select a Gem--</option>
                                                    {gems.map((gem,key) => (
                                                        <option key={key} value={gem.name}>
                                                            {gem.name} - {gem.quality}
                                                        </option>
                                                    ))}
                                                    
                                                    
                                                    <option value="new">
                                                        Align to another Gemstone
                                                    </option>
                                                </select>
                                            )}
                                            </div>
                                        </li>
                                    </ul>
                                    <Button 
                                        color="danger" onClick={handleLevelUp}
                                        className='text-center mb-3'
                                    >
                                        Cancel Level Up
                                    </Button><br/>
                                    <Button 
                                        color="info" onClick={handleLevelUp}
                                        className='text-center'
                                    >
                                        Save Changes
                                    </Button>
                                    <div style={{height:'600px'}}></div>
                                </div>
                                
                            )}
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    {!levelUpMode && (
                        <a><img
                            className="rounded-pill img-fluid"
                            width="140"
                            src={levelUpImg}
                            alt="level up"
                            onClick={handleLevelUp}
                        /></a>
                    )}
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
                        {errorMsg}
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

export default CharacterEditor;