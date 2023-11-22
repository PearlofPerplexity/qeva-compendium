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
import { text } from '@fortawesome/fontawesome-svg-core';

const fightingStyles = FIGHTINGSTYLES.map(fs => {
    return { name: fs.name, description: fs.description, type: 'Fighting Styles'};
});
const fightingStyleManeuvers = FIGHTINGSTYLEMANEUVERS.map(fsm => {
    return { name: fsm.name, description: fsm.description, type: 'Fighting Style Maneuvers'};
})
const POWERS = [
    ...fightingStyles,
    ...fightingStyleManeuvers
]

const Codex = (props) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [powers, setPowers] = useState(POWERS);

    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        if(e.target.value) {
            const searchVal = e.target.value.toLowerCase();
            const searchPowers = POWERS.filter(pwr => {
                const nameIncludes = pwr.name.toLowerCase().includes(searchVal);
                const textIncludes = pwr.description.toLowerCase().includes(searchVal);
                const typeIncludes = pwr.type.toLowerCase().includes(searchVal);
                return nameIncludes || textIncludes || typeIncludes;
            });
            setPowers(searchPowers);
        } else {
            setPowers(POWERS);
        }
    }

    const [info, setInfo] = useState(false);
    const infoToggle = () => setInfo(!info);

    const reset = () => {
        toggle();
        console.clear();
    }

    const handleType = (e) => {
        if (e.target.value === 'all') {
            setPowers(POWERS);
        } else {
            const curPowers = POWERS.filter(pwr => pwr.type.toLowerCase().includes(e.target.value));
            setPowers(curPowers);
        }
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
                <ModalHeader toggle={toggle}>
                    <i className="iconify fs-2" data-icon="noto:old-key"></i> Codex
                </ModalHeader>
                <ModalBody>
                <div className='container'>
                    <div className='row text-center mb-4'>
                        <h3>Codex of Powers
                            <Button className='text-center info' onClick={infoToggle}>
                                🛈
                            </Button>                            
                        </h3>
                        <div className='mb-2 char-name-input'>
                            <input 
                                onChange={handleSearch}
                                placeholder='Search Powers...' 
                                type='text' 
                                value={searchTerm} 
                            />
                        </div>
                        <Offcanvas isOpen={info} toggle={infoToggle} direction={'end'}>
                            <OffcanvasHeader toggle={infoToggle}>
                            Powers
                            </OffcanvasHeader>
                            <OffcanvasBody>
                                <p>
                                This table includes a description of all abilities in the game.
                                </p>
                                <h5>Charts Referenced</h5>
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
                                    <td>
                                        <select 
                                            name='locs' 
                                            className="ms-2 charPicklist text-center" 
                                            id='locs-select' 
                                            onChange={handleType}
                                        >
                                            <option value="all">Type</option>
                                            <option value='fighting styles' >Fighting Styles</option>
                                            <option value='fighting style maneuvers' >Fighting Style Maneuvers</option>
                                        </select>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {powers.map((p,key) => (
                                    <React.Fragment key={key}>
                                        <tr className='align-middle'>
                                            <th>{p.name}</th>
                                            <td>{p.description}</td>
                                            <td>{p.type}</td>
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