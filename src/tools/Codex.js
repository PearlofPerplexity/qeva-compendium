import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Offcanvas,
    OffcanvasBody,
    OffcanvasHeader
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FIGHTINGSTYLES, FIGHTINGSTYLEMANEUVERS } from '../assets/shared/FIGHTSTYLES';

const fightingStyles = FIGHTINGSTYLES.map(fs => {
    return {
        name: fs.name,
        description: fs.description,
        reference: 'Fighting Styles'
    }
});

const Codex = (props) => {
    console.log(fightingStyles);    
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [info, setInfo] = useState(false);
    const infoToggle = () => setInfo(!info);

    const reset = () => {
        toggle();
        console.clear();
    }

    return (
        <div className="col-lg-4">
            {props.loc === 'toolPage' ? (
                <Link 
                    className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3"  
                    onClick={toggle}
                >
                    <i className="iconify fs-2" data-icon="noto:old-key"></i>
                    <div className="ms-3">
                        <div className="d-flex align-items-center">
                            <h3 className="mb-0">Codex</h3>
                        </div>
                    </div>
                </Link>
            ) : ('')}

            <Modal isOpen={modal} toggle={toggle} fullscreen>
                <ModalHeader toggle={toggle}><i className="iconify fs-2" data-icon="noto:old-key"></i> Codex</ModalHeader>
                <ModalBody>
                <div className='container'>
                    <div className='row text-center mb-4'>
                        <h3>Fighting Styles
                            <Button className='text-center info' onClick={infoToggle}>
                                🛈
                            </Button>                            
                        </h3>
                        <Offcanvas isOpen={info} toggle={infoToggle} direction={'end'}>
                            <OffcanvasHeader toggle={infoToggle}>
                            Fighting Styles
                            </OffcanvasHeader>
                            <OffcanvasBody>
                                <p>
                                This table includes a discription of all abilities in the game.
                                </p>
                                <h5>Charts Referenced</h5>
                                Fighting Styles are used by the following classes:
                                <ul>
                                    <li>Fighting Styles</li>
                                    <li>Fighting Style Maneuvers</li>
                                </ul>
                            </OffcanvasBody>
                        </Offcanvas>
                        <table className="table table-hover table-sticky align-middle">
                            <thead>
                                <tr className='align-middle'>
                                    <th>Name</th>
                                    <td>Description</td>
                                    <td>Reference</td>
                                </tr>
                            </thead>
                            <tbody>
                                {FIGHTINGSTYLES.map(fs => (
                                    <React.Fragment key={fs.id}>
                                        <tr className='align-middle'>
                                            <th>{fs.name}</th>
                                            <td>{fs.description}</td>
                                            <td></td>
                                        </tr>
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                        <h3 className='mt-5'>Fighting Maneuvers</h3>
                        <table className="table table-hover table-sticky align-middle">
                            <thead>
                                <tr className='align-middle'>
                                    <th>Name</th>
                                    <td>Description</td>
                                </tr>
                            </thead>
                            <tbody>
                                {FIGHTINGSTYLEMANEUVERS.map(fs => (
                                    <React.Fragment key={fs.id}>
                                        <tr className='align-middle'>
                                            <th>{fs.name}</th>
                                            <td>{fs.description}</td>
                                        </tr>
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={reset}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Codex;