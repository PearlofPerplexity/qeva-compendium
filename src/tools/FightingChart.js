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

const fightingStyles = FIGHTINGSTYLES.sort((a, b) => { // Sorts the Array Alphabetically
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1;
    else if (nameA > nameB) return 1;
    else return 0;
});

const fightingStyleManeuvers = FIGHTINGSTYLEMANEUVERS.sort((a, b) => { // Sorts the Array Alphabetically
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1;
    else if (nameA > nameB) return 1;
    else return 0;
});

const FightingStyleChart = (props) => {
        
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
                    <i className="iconify fs-2" data-icon="fluent-emoji:crossed-swords"></i>
                    <div className="ms-3">
                        <div className="d-flex align-items-center">
                            <h3 className="mb-0">Fighting Charts</h3>
                        </div>
                    </div>
                </Link>
            ) : props.loc === 'classChart' ? (
                <button type="button" className="btn rounded-circle" onClick={toggle}>
                    <i className="uil uil-info-circle"></i>
                </button>
            ) : ('')}

            <Modal isOpen={modal} toggle={toggle} fullscreen>
                <ModalHeader toggle={toggle}><i className="iconify fs-2" data-icon="fluent-emoji:crossed-swords"></i> Fighting Charts</ModalHeader>
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
                                This table includes all available fighting styles.
                                </p>
                                <h5>Classes</h5>
                                <p>
                                Fighting Styles are used by the following classes:
                                    <ul>
                                        <li>Adventurer</li>
                                        <li>Avlimeth</li>
                                        <li>Caracadre</li>
                                        <li>Fighter</li>
                                    </ul>
                                </p>
                            </OffcanvasBody>
                        </Offcanvas>
                        <table className="table table-hover table-sticky align-middle">
                            <thead>
                                <tr className='align-middle'>
                                    <th>Name</th>
                                    <td>Description</td>
                                </tr>
                            </thead>
                            <tbody>
                                {fightingStyles.map(fs => (
                                    <React.Fragment key={fs.id}>
                                        <tr className='align-middle'>
                                            <th>{fs.name}</th>
                                            <td>{fs.description}</td>
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
                                {fightingStyleManeuvers.map(fs => (
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

export default FightingStyleChart;