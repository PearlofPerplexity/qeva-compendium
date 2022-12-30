import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';
import { RACES } from "../assets/shared/RACES";
import { CLASSES } from "../assets/shared/CLASSES";

// Create help badges showing different alignments, races, etc.

const CharacterBuilder = () => {
    const [charName, setCharName] = useState("");
    
    const [strength, setStrength] = useState("");
    const [dexterity, setDexterity] = useState("");
    const [constitution, setConstitution] = useState("");
    const [intelligence, setIntelligence] = useState("");
    const [wisdom, setWisdom] = useState("");
    const [charisma, setCharisma] = useState("");
    const allAbility = 72 - strength - dexterity - constitution - intelligence - wisdom - charisma;

    const [alignment, setAlignment] = useState("");
    const [raceCur, setRaceCur] = useState({});
    const [subrace, setSubrace] = useState("");
    const [subclass, setSubclass] = useState("");
    const [classCur, setClassCur] = useState({});

    const nameValuer = (event) => {
        const nameVal = event.target.value;
        setCharName(nameVal);
    }

    const abilityScoreArray = ['8', '10', '12', '13', '14', '15'];
    const handleStrength = (num) => setStrength(num);
    const handleDexterity = (num) => setDexterity(num);
    const handleConstitution = (num) => setConstitution(num);
    const handleIntelligence = (num) => setIntelligence(num);
    const handleWisdom = (num) => setWisdom(num);
    const handleCharisma = (num) => setCharisma(num);
    const [open, setOpen] = useState('');
    const toggle = (id) => {
        if (open === id) setOpen();
        else setOpen(id);
    };

    const handleAlignment = (e) => setAlignment(e.target.value);
    const handleRace = (e) => {
        if (e.target.value === '') {
            setRaceCur({});
        } else {
            setRaceCur(RACES.find(event => event.name === e.target.value));
        }
        setSubrace('');
    }
    const handleSubrace = (e) => setSubrace(e.target.value);
    const handleClass = (e) => {
        if (e.target.value === '') {
            setClassCur({});
        } else {
            setClassCur(CLASSES.find(event => event.name === e.target.value));
        }
        setSubclass('');
    }
    const handleSubclass = (e) => setSubclass(e.target.value);

    return (

<div className="container">
    <div className="row">
        <form className="col text-center">
            <h2 className='mb-5'>Your Builder</h2>
            <div className='mb-3'>
                <label>Character Name&nbsp;</label>
                <input type='text' value={charName} onChange={nameValuer} />
            </div>
            <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                <AccordionHeader targetId='1'>Ability Scores | Available Points: {allAbility}</AccordionHeader>
                    <AccordionBody accordionId='1'>
                        <div className='row mb-3'>
                            <h4>Strength</h4>
                            {abilityScoreArray.map((num, key) => (
                                <div className='col-2' key={key}>
                                    <input type='radio' id={num} name='str_scores' value={num} onClick={(e) => handleStrength(num)} />
                                    <label htmlFor={num}>&nbsp;{num}</label>
                                </div>
                            ))}
                        </div>
                        <div className='row mb-3'>
                            <h4>Dexterity</h4>
                            {abilityScoreArray.map((num, key) => (
                                <div className='col-2' key={key}>
                                    <input type='radio' id={num} name='dex_scores' value={num} onClick={(e) => handleDexterity(num)} />
                                    <label htmlFor={num}>&nbsp;{num}</label>
                                </div>
                            ))}
                        </div>
                        <div className='row mb-3'>
                            <h4>Constitution</h4>
                            {abilityScoreArray.map((num, key) => (
                                <div className='col-2' key={key}>
                                    <input type='radio' id={num} name='con_scores' value={num} onClick={(e) => handleConstitution(num)} />
                                    <label htmlFor={num}>&nbsp;{num}</label>
                                </div>
                            ))}
                        </div>
                        <div className='row mb-3'>
                            <h4>Intelligence</h4>
                            {abilityScoreArray.map((num, key) => (
                                <div className='col-2' key={key}>
                                    <input type='radio' id={num} name='int_scores' value={num} onClick={(e) => handleIntelligence(num)} />
                                    <label htmlFor={num}>&nbsp;{num}</label>
                                </div>
                            ))}
                        </div>
                        <div className='row mb-3'>
                            <h4>Wisdom</h4>
                            {abilityScoreArray.map((num, key) => (
                                <div className='col-2' key={key}>
                                    <input type='radio' id={num} name='wis_scores' value={num} onClick={(e) => handleWisdom(num)} />
                                    <label htmlFor={num}>&nbsp;{num}</label>
                                </div>
                            ))}
                        </div>
                        <div className='row mb-3'>
                            <h4>Charisma</h4>
                            {abilityScoreArray.map((num, key) => (
                                <div className='col-2' key={key}>
                                    <input type='radio' id={num} name='cha_scores' value={num} onClick={(e) => handleCharisma(num)} />
                                    <label htmlFor={num}>&nbsp;{num}</label>
                                </div>
                            ))}
                        </div>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId='2'>Alignment</AccordionHeader>
                    <AccordionBody accordionId='2'>
                    <select name='alignment' id="alignment-select" onChange={handleAlignment}>
                        <option value="">--Select an Alignment--</option>
                        <option value="Lawful Good">Lawful Good</option>
                        <option value="Neutral Good">Neutral Good</option>
                        <option value="Chaotic Good">Chaotic Good</option>
                        <option value="Lawful Neutral">Lawful Neutral</option>
                        <option value="Neutral">Neutral</option>
                        <option value="Chaotic Neutral">Chaotic Neutral</option>
                        <option value="Lawful Evil">Lawful Evil</option>
                        <option value="Neutral Evil">Neutral Evil</option>
                        <option value="Chaotic Evil">Chaotic Evil</option>
                    </select>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId='3'>Race</AccordionHeader>
                    <AccordionBody accordionId='3'>
                        <h2>Race</h2>
                        <select name='races' className="mb-4" id='race-select' onChange={handleRace}>
                            <option value="">--Select a Race--</option>
                            {RACES.map((race) => (
                                <option value={race.name} key={race.id}>{race.name}</option>
                                ))}
                        </select>
                        {raceCur && (
                            <>
                                {raceCur.topics && (
                                    <>
                                        <h4>SubRace</h4>
                                        <select name='subraces' className="mb-4" id='subrace-select' onChange={handleSubrace}>
                                            <option value="">--Select Subrace--</option>
                                            {raceCur.topics.map((subrace) => (
                                                <option value={subrace.name} key={subrace.id}>{subrace.name}</option>
                                            ))}
                                        </select>
                                    </>
                                )}
                            </>
                        )}
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId='4'>Class</AccordionHeader>
                    <AccordionBody accordionId='4'>
                        <h2>Class</h2>
                        <select name='orders' className="mb-4" id='order-select' onChange={handleClass}>
                            <option value="">--Select a Class--</option>
                            {CLASSES.map((order) => (
                                <option value={order.name} key={order.id}>{order.name}</option>
                                ))}
                        </select>
                        {classCur && (
                            <>
                                {classCur.name === 'No Affiliation' && (
                                    <>
                                        <h4>Subclass</h4>
                                        <select name='subclasses' id='subclass-select' onChange={handleSubclass}>
                                            <option value="">--Select Subclass--</option>
                                            {classCur.topics.map((subclass) => (
                                                <option value={subclass.name} key={subclass.id}>{subclass.name}</option>
                                            ))}
                                        </select>
                                    </>
                                )}
                            </>
                        )}
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </form>
        <div className="col text-center border-start border-bottom border-3 border-light rounded">
            <h2 className='mb-5'>Your Character: {charName}</h2>
            {allAbility === 0 ? (
                <h5 className='text-success'>ABILITY SCORES ✓</h5>
            ) : (
                <h5 className='text-danger'>ABILITY SCORES ✖</h5>
            )}
            <div className='row'>
                <p className='col-2'>STR: {strength}</p>
                <p className='col-2'>DEX: {dexterity}</p>
                <p className='col-2'>CON: {constitution}</p>
                <p className='col-2'>INT: {intelligence}</p>
                <p className='col-2'>WIS: {wisdom}</p>
                <p className='col-2'>CHA {charisma}</p>
            </div>
            {alignment && (
                !alignment.includes('Evil') ? (
                    <div className='mb-3'>
                        <h5><strong>ALIGNMENT: </strong>{alignment}</h5>
                        <p><strong>You can align to the following stones: </strong> Creator Stones, Moral Stones, Power Stones</p>
                    </div>
                ) : (
                    <div className='mb-3'>
                        <h5><strong>ALIGNMENT: </strong>{alignment}</h5>
                        <p><strong>You can align to the following stones: </strong> Power Stones, Synthetic Stones, Dark Stones</p>
                    </div>
                )
            )}
            {!(Object.keys(raceCur).length === 0) && (
                    <div className=''>
                        <h5><strong>RACE: </strong>{raceCur.name}</h5>
                        <div className='row'>
                            <p className='col'><strong>lifespan: </strong>{raceCur.lifespan}</p>
                            <p className='col'><strong>size: </strong>{raceCur.size}</p>
                            <p className='col'><strong>speed: </strong>{raceCur.speed}</p>
                        </div>
                    </div>
            )}
            {subrace && (
                <h5><strong>SUBRACE: </strong>{subrace}</h5>
            )}
            {!(Object.keys(classCur).length === 0) && (
                <h5><strong>CLASS: </strong>{classCur.name}</h5>
            )}
            {subclass && (
                <h5><strong>SUBCLASS: </strong>{subclass}</h5>
            )}
        </div>
    </div>
</div>

    );
}

export default CharacterBuilder;