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


    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const reset = () => {
        toggle();
        console.clear();
    }

    const componentRef = React.createRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });

    return (
        <div className="col-lg-4">
            <Link className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3"  onClick={toggle}>
                <i className="iconify fs-2" data-icon="noto:elf-medium-skin-tone"></i>
                <div className="ms-3">
                    <div className="d-flex align-items-center">
                        <h3 className="mb-0">Character Builder</h3>
                    </div>
                </div>
            </Link>
            <Modal isOpen={modal} toggle={toggle} fullscreen>
                <ModalHeader toggle={toggle}><i className="iconify fs-2" data-icon="noto:elf-medium-skin-tone"></i> Character Sheet</ModalHeader>
                <ModalBody>
                    <CharacterSheet ref={componentRef} />
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={handlePrint} >
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