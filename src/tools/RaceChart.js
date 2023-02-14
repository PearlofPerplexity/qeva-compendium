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
import { RACES } from '../assets/shared/RACES';

const RaceChart = () => {
    
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [info, setInfo] = useState(false);
    const infoToggle = () => setInfo(!info);

    const [checkbox, setCheckbox] = useState(false);
    const checkboxToggle = () => setCheckbox(!checkbox);

    const [title, setTitle] = useState("Ability");
    const [detail, setDetail] = useState("Click on an ability above to see it's description.");
    const detailToggle = (e) => {
        setTitle(e.name);
        setDetail(e.description);
    }
    const detailReset = () => {
        setTitle("Ability");
        setDetail("Click on an ability above to see it's description.");
    }

    const reset = () => {
        toggle();
        setTitle("Ability");
        setDetail("Click on an ability above to see it's description.");
        setCheckbox(false);
        console.clear();
    }

    return (
        <div className="col-lg-4">
            <Link className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3"  onClick={toggle}>
                <i className="iconify fs-2" data-icon="noto:elf-medium-skin-tone"></i>
                <div className="ms-3">
                    <div className="d-flex align-items-center">
                        <h3 className="mb-0">Race Chart</h3>
                    </div>
                </div>
            </Link>
            <Modal isOpen={modal} toggle={toggle} fullscreen>
                <ModalHeader toggle={toggle}><i className="iconify fs-2" data-icon="noto:elf-medium-skin-tone"></i> Race Chart</ModalHeader>
                <ModalBody>
                <div className='container'>
                    <div className='row text-center mb-4'>
                        <h3>Races
                            <Button className='text-center info' onClick={infoToggle}>
                                🛈
                            </Button>                            
                        </h3>
                        <p>
                            <input name="subraces" type="checkbox" onClick={checkboxToggle} />
                            <label htmlFor="subraces">&nbsp;View Subraces</label>
                        </p>
                        <Offcanvas isOpen={info} toggle={infoToggle} direction={'end'}>
                            <OffcanvasHeader toggle={infoToggle}>
                            Races
                            </OffcanvasHeader>
                            <OffcanvasBody>
                                <p>
                                This table includes all the playable races within Qeṽa.
                                </p>
                                <h5>Size</h5>
                                <p>
                                Size is the general size of the race. S = 'Small', M = Medium, L = 'Large'.
                                </p>
                                <h5>Speed</h5>
                                <p>
                                Speed is the maximum distance a character can travel within a turn and is calculated in feet.
                                </p>
                                <h5>Ability Scores</h5>
                                <p>
                                'STR' (Strength), 'DEX' (Dexterity), 'CON' (Constitution), 'INT' (Intelligence), 'WIS' (Wisdom), 'CHA' (Charisma) are the ability scores that serve as the basis for ability rolls. This table shows the racial bonuses to these ability scores.
                                </p>
                                <h5>Languages</h5>
                                <p>
                                Here, the table shows the languages in which each race is fluent. '*' means the race can understand this language, but not speak it.
                                </p>
                                <h5>Proficiencies</h5>
                                <p>
                                Proficiency is a bonus added to skill checks, saving throws, or attacks for skills that a character is proficient in.  All level 1 characters, regardless of class or race, get a +2 proficiency bonus. At level 5, the bonus increases to +3.
                                </p>
                                <h5>Abilities</h5>
                                <p>
                                Abilities are unique actions held by a race. Click on an ability and view the window below the table to view the ability's description.
                                </p>
                            </OffcanvasBody>
                        </Offcanvas>
                        <table className="table table-hover table-sticky align-middle">
                            <thead>
                                <tr className='align-middle'>
                                    <th>Race</th>
                                    <td>Size</td>
                                    <td>Speed</td>
                                    <td>STR</td>
                                    <td>DEX</td>
                                    <td>CON</td>
                                    <td>INT</td>
                                    <td>WIS</td>
                                    <td>CHA</td>
                                    <td>Languages</td>
                                    <td>Proficiencies</td>
                                    <td>abilities</td>
                                </tr>
                            </thead>
                            <tbody>
                                {RACES.map(race => (
                                    <React.Fragment key={race.id}>
                                        <tr className='align-middle'>
                                            <th>{race.singName}</th>
                                            <td>{race.size}</td>
                                            <td>{race.speed}</td>
                                            <td>{race.str}</td>
                                            <td>{race.dex}</td>
                                            <td>{race.con}</td>
                                            <td>{race.int}</td>
                                            <td>{race.wis}</td>
                                            <td>{race.cha}</td>
                                            <td>{race.languages.join(', ')}</td>
                                            <td>{race.proficiencies.join(', ')}</td>
                                            <td>
                                                {race.abilities && race.abilities.map(a => (
                                                    <a key={a.id} onClick={() => detailToggle(a)}>{a.name}, </a>
                                                ))}
                                            </td>
                                        </tr>
                                        {race.topics && checkbox && (
                                            <tr className='table table-container table-hover'>
                                                <td colSpan='12'>
                                                    <table className='table'>
                                                        <thead>
                                                            <tr className='align-middle'>
                                                                <th>Subrace</th>
                                                                <td>STR</td>
                                                                <td>DEX</td>
                                                                <td>CON</td>
                                                                <td>INT</td>
                                                                <td>WIS</td>
                                                                <td>CHA</td>
                                                                <td>ANY</td>
                                                                <td>Abilities</td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {race.topics.map(subrace => (
                                                                <tr className='align-middle'>
                                                                    <th>{subrace.singName}</th>
                                                                    <td>{subrace.str}</td>
                                                                    <td>{subrace.dex}</td>
                                                                    <td>{subrace.con}</td>
                                                                    <td>{subrace.int}</td>
                                                                    <td>{subrace.wis}</td>
                                                                    <td>{subrace.cha}</td>
                                                                    <td>{subrace.any}</td>
                                                                    <td>
                                                                        {subrace.abilities && subrace.abilities.map(a => (
                                                                            <a key={a.id} onClick={() => detailToggle(a)}>{a.name}, </a>
                                                                        ))}
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                        <p>* this race can understand this language, but not speak it.</p>
                    </div>
                </div>
                </ModalBody>
                <ModalFooter>
                    <p className='text-start'><strong>{title.toUpperCase()}: </strong><em>{detail}</em></p>
                    <Button color="secondary" onClick={detailReset}>
                        Reset
                    </Button>
                    <Button color="secondary" onClick={reset}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default RaceChart;