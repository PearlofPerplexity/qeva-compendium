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

const dndClasses = [...CLASSES.slice(0,8), ...CLASSES[9].topics];


const ClassChart = () => {
    
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
        setTitle(e.name);
        setDetail(e.description);
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
            <Link className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3"  onClick={toggle}>
                <i className="iconify fs-2" data-icon="noto-v1:crossed-swords"></i>
                <div className="ms-3">
                    <div className="d-flex align-items-center">
                        <h3 className="mb-0">Class Chart</h3>
                    </div>
                </div>
            </Link>
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
                                {dndClasses.map((classOpt) => (
                                    <option value={classOpt.name} key={classOpt.id}>{classOpt.name}</option>
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
                                </tr>
                            </thead>
                            <tbody>
                                {selectedClasses.map((cl, index) => (
                                    <React.Fragment key={index}>
                                        <tr className='align-middle'>
                                            <th>{cl.name}</th>
                                            <td>{cl.quality}</td>
                                            <td>{cl.hitDie}</td>
                                            <td>{cl.equipment.join(', ')}</td>
                                            <td>
                                                <strong>Armor: </strong>{cl.armor_prof ? cl.armor_prof.join(', ') : ('none')}, 
                                                <strong>Weapons: </strong>{cl.weapon_prof ? cl.weapon_prof.join(', ') : ('none')}, 
                                                <strong>Tool: </strong>{cl.tool_prof ? cl.tool_prof.join(', ') : ('none')}, 
                                                <strong>Saving Throws: </strong>{cl.saving_throw_prof ? cl.saving_throw_prof.join(', ') : ('none')}, 
                                                <strong>Skills: </strong>{cl.skill_prof ? cl.skill_prof.join(', ') : ('none')}
                                            </td>
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
                                                                                {a.id === 0 ? '' : ', '}{a.name}
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

export default ClassChart;