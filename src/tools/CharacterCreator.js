import '../'
import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import { Link } from 'react-router-dom';
import CharacterSheet from './CharacterSheet';

const CharacterCreator = () => {
    
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const reset = () => {
        toggle();
        console.clear();
    }

    return (
        <div className="col-lg-4">
            <Link className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3"  onClick={toggle}>
                <i className="iconify fs-2" data-icon="noto:elf-medium-skin-tone"></i>
                <div className="ms-3">
                    <div className="d-flex align-items-center">
                        <h3 className="mb-0">Character Sheet</h3>
                    </div>
                </div>
            </Link>
            <Modal isOpen={modal} toggle={toggle} fullscreen>
                <ModalHeader toggle={toggle}><i className="iconify fs-2" data-icon="noto:elf-medium-skin-tone"></i> Character Sheet</ModalHeader>
                <ModalBody>
                    <CharacterSheet />
                </ModalBody>
                <ModalFooter>
                <Button color="primary">
                    Print
                </Button>{' '}
                <Button color="secondary" onClick={reset}>
                    Cancel
                </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default CharacterCreator;