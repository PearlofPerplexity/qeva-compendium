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
import CharacterSheet from './CharacterSheet';
//CONTEXT
import { CharacterContext } from '../contexts/characterContext';

const CharacterCreator = () => {
    
    const [character, setCharacter] = useContext(CharacterContext);
    const [charString, setCharString] = useState("");
    const handleCharString = (e) => {
        setCharString(e.target.value);
    };
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
                        <h3 className="mb-0">Character Editor</h3>
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
            <Modal isOpen={modal} toggle={toggle} fullscreen>
                <ModalHeader toggle={toggle}><i className="iconify fs-2" data-icon="noto:woman-elf"></i> Character Editor</ModalHeader>
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

export default CharacterCreator;