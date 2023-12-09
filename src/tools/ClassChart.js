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
import { CLASSES } from '../assets/shared/CLASSES';
import { RACES } from '../assets/shared/RACES';
import FightingStyleChart from './FightingChart';
import GrenadierChart from './GrenadierChart';
import CraftingChart from './CraftingChart';
import GemcutterChart from './GemcutterChart';

import { sortObjArray } from '../utils/dnd';

const dndClasses = sortObjArray(
    [
    ...CLASSES.slice(0,9), 
    ...CLASSES[9].topics
    ]
);

const ClassChart = (props) => {
    
    const [selectedClasses, setSelectedClasses] = useState(dndClasses);
    const handleClass = (e) => {
        if ((dndClasses.length !== selectedClasses.length) && selectedClasses.find(cl => cl.name === e.target.value)) {
            alert('You have already added this class!');
        } else if (e.target.value === 'all') {
            setSelectedClasses(dndClasses);
        } else {
            const curClass = dndClasses.filter(event => event.name === e.target.value)
            if (selectedClasses.length === dndClasses.length) setSelectedClasses(curClass);
            else setSelectedClasses([...selectedClasses, ...curClass]);
        }
    }
    const removeClass = (e) => {
        console.log(e.target.ariaLabel);
        const curClasses = selectedClasses.filter(event => event.name !== e.target.ariaLabel);
        if (curClasses.length === 0) setSelectedClasses(dndClasses);
        else setSelectedClasses(curClasses);
    }

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [info, setInfo] = useState(false);
    const infoToggle = () => setInfo(!info);

    const [checkbox, setCheckbox] = useState(false);
    const checkboxToggle = () => setCheckbox(!checkbox);

    const [title, setTitle] = useState("See Description");
    const [detail, setDetail] = useState("Click on an ability, feature, cantrip or spell above to see its description.");
    const detailToggle = (e) => {
        if(e.name === title) {
            detailReset();
        } else {
            setTitle(e.name);
            setDetail(e.description);
        }
    }
    const detailReset = () => {
        setTitle("See Description");
        setDetail("Click on an ability, feature, cantrip or spell above to see its description.");
    }

    const reset = () => {
        toggle();
        setTitle("See Description");
        setDetail("Click on an ability, feature, cantrip or spell above to see its description.");
        setSelectedClasses(dndClasses);
        setCheckbox(false);
        console.clear();
    }

    return (
        <div className="col-lg-4">
            {props.loc === 'toolPage' ? (
                <Link className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3"  onClick={toggle}>
                    <i className="iconify fs-2" data-icon="noto-v1:crossed-swords"></i>
                    <div className="ms-3">
                        <div className="d-flex align-items-center">
                            <h3 className="mb-0">Class Chart</h3>
                        </div>
                    </div>
                </Link>
            ) : props.loc === 'charCreate' ? (
                <button type="button" className="d-flex btn rounded-circle" onClick={toggle}>
                    <i className="uil uil-info-circle"></i>
                </button>
            ) : ('')}
            
            <Modal isOpen={modal} toggle={toggle} fullscreen>
                <ModalHeader toggle={toggle}><i className="iconify fs-2" data-icon="noto-v1:crossed-swords"></i> Class Chart</ModalHeader>
                <ModalBody>
                <div className='container'>
                    <div className='row text-center mb-4'>
                        <h3>Classes
                            <Button className='text-center info' onClick={infoToggle}>
                                🛈
                            </Button>                            
                        </h3>
                        <p className='text-center'>
                            <select name='classes' className="ms-2 charPicklist" id='class-select' onChange={handleClass}>
                                <option value="all">--Select Classes--</option>
                                {dndClasses.map((classOpt, index) => (
                                    <option value={classOpt.name} key={index}>{classOpt.name}</option>
                                ))}
                            </select>
                            {(dndClasses.length !== selectedClasses.length) && selectedClasses.map((e, index) => (
                                <a key={index} aria-label={e.name} className='charPicklist' onClick={removeClass}>
                                    {e.name} x
                                </a>
                            ))}
                        </p>
                        <p>
                            <input name="classLvls" type="checkbox" onClick={checkboxToggle} />
                            <label htmlFor="classLvls">&nbsp;View Class Levels</label>
                        </p>
                        <Offcanvas isOpen={info} toggle={infoToggle} direction={'end'}>
                            <OffcanvasHeader toggle={infoToggle}>
                            Classes
                            </OffcanvasHeader>
                            <OffcanvasBody>
                                <p>
                                This table includes all the playable classes within Qeṽa.
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
                                    <th>Class</th>
                                    <td>Description</td>
                                    <td>Hit Die</td>
                                    <td>Equipment</td>
                                    <td>Proficiencies</td>
                                    <td>Allowed Races</td>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedClasses.map((cl, index) => (
                                    <React.Fragment key={index}>
                                        <tr className='align-middle'>
                                            <th>{cl.name}</th>
                                            <td>{cl.quality}</td>
                                            <td>{cl.hitDie}</td>
                                            <td>{[
                                                    ...cl.armor, 
                                                    ...cl.weapon,
                                                    ...cl.weapon2,
                                                    ...cl.weapon3,
                                                    ...cl.pack,
                                                    ...cl.other_equip
                                                ].join(', ')}</td>
                                            <td>
                                                {cl.name === 'Adventurer' ? (
                                                <>
                                                    <strong>Armor: </strong>Choose 1 from {cl.armor_options.join(', ')},
                                                    <strong> Weapons: </strong>Choose 1 Simple Weapon
                                                </>
                                                ) : (
                                                <>
                                                    <strong> Armor: </strong>{cl.armor_prof.length > 0 ? cl.armor_prof.join(', ') : ('None')},
                                                    <strong> Weapons: </strong>{cl.weapon_prof.length > 0 ? cl.weapon_prof.join(', ') : ('None')},
                                                </> 
                                                )}
                                                <strong> Tools: </strong>{cl.tool_prof.length > 0 ? cl.tool_prof.join(', ') : ('None')}, 
                                                <strong> Saving Throws: </strong>{cl.saving_throw_prof.length > 0 ? cl.saving_throw_prof.join(', ') : ('None')}, 
                                                <strong> Skills: </strong>
                                                    {
                                                    cl.skill_prof_selection ? (
                                                        ` Choose ${cl.skill_prof_num} from ${cl.skill_prof_selection.join(', ')}`
                                                    ) : (
                                                        cl.skill_prof.join(', ')
                                                    )
                                                    }
                                            </td>
                                            <td>{cl.race.join(', ')}</td>
                                        </tr>
                                        {cl.topics && checkbox && (
                                            <tr className='table table-container table-hover'>
                                                <td colSpan='12'>
                                                    <table className='table'>
                                                        <thead>
                                                            <tr className='align-middle'>
                                                                <th>LVL</th>
                                                                <td>Proficiency Bonus</td>
                                                                <td>Features</td>
                                                                {cl.lvls && cl.lvls.some(lvl => lvl.hasOwnProperty('trackables')) && (
                                                                <td>Trackables</td>
                                                                )}
                                                                {cl.lvls && cl.lvls.some(lvl => lvl.hasOwnProperty('spells')) && (
                                                                <td>Spells Known</td>
                                                                )}
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {cl.lvls && cl.lvls.map(lvl => (
                                                                <tr key={lvl.id} className='align-middle'>
                                                                    <th>{lvl.id}</th>
                                                                    <td>{lvl.prof_bonus}</td>
                                                                    <td>
                                                                        {lvl.features && lvl.features.map(a => (
                                                                            <a key={a.id} onClick={() => detailToggle(a)}>
                                                                                {a.id === 0 ? '' : ', '}
                                                                                {title === a.name ? (
                                                                                    <strong>{a.name}</strong>
                                                                                ) : (<>{a.name}</>)}
                                                                            </a>
                                                                        ))}
                                                                    </td>
                                                                    {lvl.trackables && (
                                                                        <td>{lvl.trackables.join(", ")}</td>
                                                                    )}
                                                                    {lvl.spells && (
                                                                        <td>{lvl.spells.map(a => (
                                                                            <a key={a.id} onClick={() => detailToggle(a)}>
                                                                                {a.id === 0 ? '' : ', '}{a.name} 
                                                                            </a>
                                                                        ))}
                                                                        </td>
                                                                    )}
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
                    </div>
                </div>
                </ModalBody>
                <ModalFooter>
                    <p className='text-start'>
                        <strong>{title.toUpperCase()}: </strong>
                        <em>{detail}</em>
                    </p>
                    {(title.toLowerCase().includes('fighting style') || title.toLowerCase().includes('maneuvers')) && (
                        <FightingStyleChart loc='classChart' />
                    )}
                    {title.toLowerCase().includes('craft') && (
                        <CraftingChart loc='classChart' />
                    )}
                    {title.toLowerCase().includes('cut expertise') && (
                        <GemcutterChart loc='classChart' />
                    )}
                    {title.toLowerCase().includes('grenadier') && (
                        <GrenadierChart loc='classChart' />
                    )}
                    {!(title === 'See Description') && (
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

export default ClassChart;