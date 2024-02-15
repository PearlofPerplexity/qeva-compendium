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
//CONTEXT
import { CharacterContext } from '../contexts/characterContext';

const CharacterEditor = () => {
    
    const [character, setCharacter] = useContext(CharacterContext);
    const [charString, setCharString] = useState("");

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
    const toggleOne = () => setModal(false);

    const [modal, setModal] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const [errorModal, setErrorModal] = useState(false);
    const [errorMsg, setErrorMsg] = useState("An Unknown Error Occured.");
    const toggle = (event) => {
        //Creates the character
        try {
            if(charString) {
                const charObj = JSON.parse(charString);
                console.log(charObj);
                if(charObj.hasOwnProperty('endrace') && charObj.hasOwnProperty('endclass')) {
                    setCharacter({...charObj});
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
        console.clear();
    };
    const componentRef = React.createRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

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
                    <input className='m-3' type="file" id="fileInput" onChange={e => handleCharFile(e)} />
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
                            'Are you sure? This will remove any changes made to your character.'
                        ) : (
                            'Are you sure you want to level up your character?'
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
                    <div className='container text-center'>
                        <div className='row'>
                            <CharacterSheetEditable ref={componentRef} className='col-9' />
                            {levelUpMode && (
                                <div className='col-3 pt-2'>
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
                                            Either roll your class' hit die or take the average result of that hit die. This will be added to your Constitution modifier to determine your additional hitpoints.</p>
                                            <div className='row py-2'>
                                                <h5 className='col text-end'>
                                                    Roll a {character.endclass.hitDie}
                                                </h5>
                                                <h5 className='col-5 text-start'>
                                                    <input className='col-6 px-2' />
                                                </h5>
                                            </div>
                                            <h4 className='pb-2'> 
                                                <b>{character.endclass.hitDie}</b> + <b>{parseInt(character.conMod)}</b> = <b>12</b> hp
                                            </h4>
                                        </li>
                                        <li className="list-group-item">
                                            <b>GAIN ONE HIT DIE</b><br/>
                                            <p>
                                                At level 2 you have
                                            </p>
                                            <h4 className=''><b>2</b></h4>
                                            <p>hit die</p>
                                        </li>
                                        <li className="list-group-item">
                                            <b>GAIN CLASS FEATURES</b><br/>
                                            <p className='row'>
                                                //Class Features or Ability Score improvements
                                            </p>
                                        </li>
                                        <li className="list-group-item">
                                            <b>PROF. BONUS UPGRADE</b><b/>
                                            <p>
                                                At level 2 You have a
                                            </p>
                                            <h4><b>+2</b></h4>
                                            <p>Proficiency Bonus</p>
                                        </li>
                                        <li className="list-group-item">
                                            <b>ABILITY SCORE UPGRADE</b><br/>
                                            <p>
                                                <i>You do not gain any ability score increases at this level.</i>
                                            </p>
                                        </li>
                                        <li className="list-group-item">
                                            <b>GEMSTONE UPGRADE</b><br/>
                                            <p>
                                                Increase your gemstone level or select another gemstone.
                                            </p>
                                        </li>
                                    </ul>
                                    <Button 
                                        color="danger" onClick={handleLevelUp}
                                        className='text-center mb-3'
                                    >
                                        Cancel Level Up
                                    </Button>
                                    <Button 
                                        color="info" onClick={handleLevelUp}
                                        className='text-center'
                                    >
                                        Save Character
                                    </Button>
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