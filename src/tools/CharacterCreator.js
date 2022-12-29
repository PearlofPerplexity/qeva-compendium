import React, { useState } from 'react';
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

const CharacterCreator = () => {
    
    /*
    https://www.geeksforgeeks.org/how-to-send-state-props-to-another-component-in-react-with-onclick/

    const [state, setState] = useState({data:""});
    const changeState = () => {  
        setstate({data:`state/props of parent component 
        is send by onClick event to another component`}); 
    };

    IN PARENT BELOW:
    onClick={changeState}

    IN CHILD:
    {props.data}

    */


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
        console.clear();
    };
    const componentRef = React.createRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });

    return (
        <div className="col-lg-4">
            <Link className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3"  onClick={toggleOneStart}>
                <i className="iconify fs-2" data-icon="noto:elf-medium-skin-tone"></i>
                <div className="ms-3">
                    <div className="d-flex align-items-center">
                        <h3 className="mb-0">Character Builder</h3>
                    </div>
                </div>
            </Link>
            <Modal isOpen={modalOne} toggle={toggleOne} fullscreen>
                <ModalHeader><i className="iconify fs-2" data-icon="noto:elf-medium-skin-tone"></i> Character Builder</ModalHeader>
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
                <ModalBody>Are you sure you want to cancel? If you cancel now, you will lose all progress.</ModalBody>
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