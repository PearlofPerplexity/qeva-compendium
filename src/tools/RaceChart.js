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
import { sortObjArray } from '../utils/dnd';

const RaceChart = (props) => {
    
    const races = sortObjArray(RACES);

    const [selectedRaces, setSelectedRaces] = useState(races);
    const handleRace = (e) => {
        if ((races.length !== selectedRaces.length) && selectedRaces.find(race => race.name === e.target.value)) {
            alert('You have already added this race!');
        } else if (e.target.value === 'all') {
            setSelectedRaces(races);
        } else {
            const curRace = races.filter(event => event.name === e.target.value)
            if (selectedRaces.length === races.length) setSelectedRaces(curRace);
            else setSelectedRaces([...selectedRaces, ...curRace]);
        }
    }
    const removeClass = (e) => {
        console.log(e.target.ariaLabel);
        const curRaces = selectedRaces.filter(event => event.name !== e.target.ariaLabel);
        if (curRaces.length === 0) setSelectedRaces(races);
        else setSelectedRaces(curRaces);
    }
    
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [info, setInfo] = useState(false);
    const infoToggle = () => setInfo(!info);

    const [checkbox, setCheckbox] = useState(false);
    const checkboxToggle = () => setCheckbox(!checkbox);

    const [title, setTitle] = useState("Ability");
    const [detail, setDetail] = useState("Click on an ability above to see it's description.");
    const detailToggle = (e) => {
        if(e.name === title) {
            detailReset();
        } else {
            setTitle(e.name);
            setDetail(e.description);
        }
    }
    const detailReset = () => {
        setTitle("Ability");
        setDetail("Click on an ability above to see it's description.");
    }

    const reset = () => {
        toggle();
        setTitle("Ability");
        setDetail("Click on an ability above to see it's description.");
        setSelectedRaces(races);
        setCheckbox(false);
        console.clear();
    }

    return (
        <div className="col-lg-4">
            {props.loc === 'toolPage' ? (
                <Link className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3"  onClick={toggle}>
                    <i className="iconify fs-2" data-icon="noto:elf-medium-skin-tone"></i>
                    <div className="ms-3">
                        <div className="d-flex align-items-center">
                            <h4 className="mb-0">Race Chart</h4>
                        </div>
                    </div>
                </Link>
            ) : props.loc === 'charCreate' ? (
                <button type="button" className="d-flex btn rounded-circle" onClick={toggle}>
                    <i className="uil uil-info-circle"></i>
                </button>
            ) : ('')}
            
            <Modal isOpen={modal} toggle={toggle} fullscreen>
                <ModalHeader toggle={toggle}><i className="iconify fs-2" data-icon="noto:elf-medium-skin-tone"></i> Race Chart</ModalHeader>
                <ModalBody>
                <div className='container'>
                    <div className='row text-center mb-4'>
                        <h3>Races
                            <Button className='text-center info' onClick={infoToggle}>
                                <i className="uil uil-info-circle"></i>
                            </Button>                            
                        </h3>
                        <p className='text-center'>
                            <select name='races' className="ms-2 charPicklist" id='race-select' onChange={handleRace}>
                                <option value="all">--Select Races--</option>
                                {races.map((race) => (
                                    <option value={race.name} key={race.id}>{race.name}</option>
                                ))}
                            </select>
                            {(races.length !== selectedRaces.length) && selectedRaces.map((e, index) => (
                                <a key={index} aria-label={e.name} className='charPicklist' onClick={removeClass}>
                                    {e.name} x
                                </a>
                            ))}
                        </p>
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
                        <table className="table table-hover align-middle">
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
                                    <td>Languages & Proficiencies</td>
                                    <td>Abilities</td>
                                    <td>Allowed Classes</td>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedRaces.map(race => (
                                    <React.Fragment key={race.id}>
                                        <tr className='align-middle'>
                                            <th>{race.singName}</th>
                                            <td>{race.size}</td>
                                            <td>{race.speed}</td>
                                            <td>{race.str && (`+${race.str}`)}</td>
                                            <td>{race.dex && (`+${race.dex}`)}</td>
                                            <td>{race.con && (`+${race.con}`)}</td>
                                            <td>{race.int && (`+${race.int}`)}</td>
                                            <td>{race.wis && (`+${race.wis}`)}</td>
                                            <td>{race.cha && (`+${race.cha}`)}</td>
                                            <td>{race.armor_prof ? (
                                                <>
                                                    {race.languages.join(', ')}, {race.armor_prof.join(', ')}
                                                </>
                                                ) : (
                                                <>
                                                    {race.languages.join(', ')}
                                                </>
                                                )}</td>
                                            <td>
                                                {race.abilities && race.abilities.map(a => (
                                                    <a key={a.id} onClick={() => detailToggle(a)}>
                                                        {a.id === 0 ? '' : ', '}
                                                        {title === a.name ? (
                                                            <strong>{a.name}</strong>
                                                        ) : (<>{a.name}</>)}
                                                    </a>
                                                ))}
                                            </td>
                                            <td>{race.classes.join(', ')}</td>
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
                                                                <td>Allowed Classes</td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {race.topics.map(subrace => (
                                                                <tr className='align-middle'>
                                                                    <th>{subrace.singName}</th>
                                                                    <td>{subrace.str && (`+${subrace.str}`)}</td>
                                                                    <td>{subrace.dex && (`+${subrace.dex}`)}</td>
                                                                    <td>{subrace.con && (`+${subrace.con}`)}</td>
                                                                    <td>{subrace.int && (`+${subrace.int}`)}</td>
                                                                    <td>{subrace.wis && (`+${subrace.wis}`)}</td>
                                                                    <td>{subrace.cha && (`+${subrace.cha}`)}</td>
                                                                    <td>{subrace.any && (`+${subrace.any}`)}</td>
                                                                    <td>
                                                                        {subrace.abilities && subrace.abilities.map(a => (
                                                                            <a key={a.id} onClick={() => detailToggle(a)}>
                                                                                {a.id === 0 ? '' : ', '}
                                                                                {title === a.name ? (
                                                                                    <strong>{a.name}</strong>
                                                                                ) : (<>{a.name}</>)}
                                                                            </a>
                                                                        ))}
                                                                    </td>
                                                                    <td>{subrace.classes.join(', ')}</td>
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
                    {!(title === 'Ability') && (
                        <Button color="secondary" onClick={detailReset}>
                            Reset
                        </Button>
                    )}
                    <Button color="secondary" onClick={reset}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default RaceChart;