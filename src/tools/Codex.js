import React, { useState, useEffect } from 'react';
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

    const [nameCheckbox, setNameCheckbox] = useState(true);
    const [txtCheckbox, setTxtCheckbox] = useState(true);
    const [typeCheckbox, setTypeCheckbox] = useState(true);
    useEffect(() => {
        handleSearch(searchTerm);
      }, [nameCheckbox,txtCheckbox,typeCheckbox]);
    const checkboxToggle = (box) => {
        switch (box) {
            case 'name':
                setNameCheckbox(!nameCheckbox);
                break;
            case 'txt':
                setTxtCheckbox(!txtCheckbox);
                break;
            case 'type':
                setTypeCheckbox(!typeCheckbox);
            default:
                break;
        }
    };
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = (e) => {
        setSearchTerm(e);
        if(e) {
            const searchVal = e.toLowerCase();
            const searchPowers = POWERS.filter(pwr => {
                let nameIncludes, textIncludes, typeIncludes;
                nameIncludes = nameCheckbox ? pwr.name.toLowerCase().includes(searchVal) : false;
                textIncludes = txtCheckbox ? pwr.description.toLowerCase().includes(searchVal) : false;
                typeIncludes = typeCheckbox ? pwr.type.toLowerCase().includes(searchVal) : false;
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
        setPowers(POWERS);
        setNameCheckbox(true);
        setTxtCheckbox(true);
        setTypeCheckbox(true);
        setSearchTerm("");
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
                                onChange={e => handleSearch(e.target.value)}
                                placeholder='Search Powers...' 
                                type='text' 
                                value={searchTerm} 
                            />
                            <input 
                                name="nameCheck" 
                                type="checkbox"
                                onClick={(e) => checkboxToggle('name')}
                                checked={nameCheckbox}
                            />
                            <label htmlFor="nameCheck">&nbsp;Name</label>
                            <input 
                                name="txtCheck"
                                type="checkbox"
                                onClick={(e) => checkboxToggle('txt')}
                                checked={txtCheckbox}
                            />
                            <label htmlFor="txtCheck">&nbsp;Description</label>
                            <input 
                                name="typeCheck" 
                                type="checkbox" 
                                onClick={(e) => checkboxToggle('type')} 
                                checked={typeCheckbox}
                            />
                            <label htmlFor="typeCheck">&nbsp;Type</label>
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