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

const CharacterCreator = () => {
    
    const [character, setCharacter] = useContext(CharacterContext);

    const resetCharacter = () => {
        setCharacter({
            //Name
            name: "",
            //Ability Scores
            str: 0, strMod: -5,
            dex: 0, dexMod: -5,
            con: 0, conMod: -5,
            int: 0, intMod: -5,
            wis: 0, wisMod: -5,
            cha: 0, chaMod: -5,
        });
    }

    const [modalOne, setModalOne] = useState(false);
    const toggleOneStart = () => setModalOne(true);
    const toggleOne = () => setModal(false);

    const [modal, setModal] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const toggle = () => setModal(true);
    const toggleNested = () => setNestedModal(!nestedModal);
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
                <ModalHeader><i className="iconify fs-2" data-icon="noto:man-elf-light-skin-tone"></i> Character Builder</ModalHeader>
                <ModalBody>
                    <CharacterBuilder />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle} >
                        Build Character Sheet
                    </Button>{' '}
                    <Button color="danger" onClick={toggleNested}>
                        Cancel
                    </Button>   
                </ModalFooter>
            </Modal>
            <Modal isOpen={modal} toggle={toggle} fullscreen>
                <ModalHeader toggle={toggle}><i className="iconify fs-2" data-icon="noto:elf-medium-skin-tone"></i> Character Builder</ModalHeader>
                <ModalBody>
                    <CharacterSheet ref={componentRef} />
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggleOne} >
                        Back
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
        </div>
    );
}

export default CharacterCreator;