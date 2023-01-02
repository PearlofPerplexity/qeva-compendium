import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';
import { RACES } from "../assets/shared/RACES";
import { CLASSES } from "../assets/shared/CLASSES";
import { GEMS } from "../assets/shared/GEMS";

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
    const [gemAlignment, setGemAlignment] = useState("");

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

    const handleAlignment = (e) => {
        setAlignment(e.target.value);
        setGemAlignment('');
    }
    const handleGemAlignment = (e) => setGemAlignment(e.target.value);

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
                        {alignment && (
                            <select name='gem-alignment' id='gem-alignment-select' onChange={handleGemAlignment}>
                                <option value="">--Select a Gem to Pursue--</option>
                                {[...GEMS[0].topics, ...GEMS[2].topics].map((gem) => (
                                    <option value={gem.name} key={gem.id}>{gem.name} - {gem.quality}</option>
                                ))}
                                {!alignment.includes('Evil') ? (
                                    <>
                                        {GEMS[1].topics.map((gem) => (
                                            <option value={gem.name} key={gem.id}>{gem.name} - {gem.quality}</option>
                                        ))}
                                    </>
                                ) : (
                                    <>
                                        {GEMS[1].topics.map((gem) => (
                                            <>
                                                <option value={gem.syntheticStone} key={gem.id}>Refracted {gem.name} - {gem.syntheticStone}</option>
                                                <option value={gem.darkStone} key={gem.id}>Dark {gem.name} - {gem.darkStone}</option>
                                            </>
                                        ))}
                                    </>
                                )}
                            </select>
                        )}
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId='3'>Race</AccordionHeader>
                    <AccordionBody accordionId='3'>
                        <select name='races' id='race-select' onChange={handleRace}>
                            <option value="">--Select a Race--</option>
                            {RACES.map((race) => (
                                <option value={race.name} key={race.id}>{race.name}</option>
                            ))}
                        </select>
                        {raceCur && (
                            <>
                                {raceCur.topics && (
                                    <select name='subraces' id='subrace-select' onChange={handleSubrace}>
                                        <option value="">--Select Subrace--</option>
                                        {raceCur.topics.map((subrace) => (
                                            <option value={subrace.name} key={subrace.id}>{subrace.name}</option>
                                        ))}
                                    </select>
                                )}
                            </>
                        )}
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId='4'>Class</AccordionHeader>
                    <AccordionBody accordionId='4'>
                        <select name='orders' id='order-select' onChange={handleClass}>
                            <option value="">--Select a Class--</option>
                            {CLASSES.map((order) => (
                                <option value={order.name} key={order.id}>{order.name}</option>
                                ))}
                        </select>
                        {classCur && (
                            <>
                                {classCur.name === 'No Affiliation' && (
                                    <>
                                        <select name='subclasses' id='subclass-select' onChange={handleSubclass}>
                                            <option value="">--Select a Subclass--</option>
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
                <AccordionItem>
                    <AccordionHeader targetId='5'>Background</AccordionHeader>
                    <AccordionBody accordionId='5'>
                        <p>Develop a character backstory and receive the following:</p>
                        <ul className='ps-5 text-start list-group'>
                            <li>2 Skill Proficiencies</li>
                            <li>2 Tool Proficiencies or Languages</li>
                            <li>2 Equipment Items</li>
                        </ul>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </form>
        <div className="col text-center border-start border-bottom border-3 border-light rounded">
            <h2 className='mb-5'>Your Character: {charName}</h2>
            {allAbility === 0 ? (
                <h5><strong className='text-success'>✓ </strong>ABILITY SCORES</h5>
            ) : allAbility === 72 ? (
                <h5><strong className='text-danger'>✖ </strong>ABILITY SCORES</h5>
            ) : (
                <h5><strong className='text-warning'>... </strong>ABILITY SCORES</h5>
            )}
            <div className='row mb-4'>
                <p className='col-2'>STR: {strength}</p>
                <p className='col-2'>DEX: {dexterity}</p>
                <p className='col-2'>CON: {constitution}</p>
                <p className='col-2'>INT: {intelligence}</p>
                <p className='col-2'>WIS: {wisdom}</p>
                <p className='col-2'>CHA {charisma}</p>
            </div>
            {alignment && !gemAlignment && (
                !alignment.includes('Evil') ? (
                    <div className='mb-5'>
                        <h5><strong className='text-warning'>... </strong><strong>ALIGNMENT: </strong>{alignment}</h5>
                        <p><strong>You can align to the following stones: </strong> Creator Stones, Moral Stones, Power Stones</p>
                    </div>
                ) : (
                    <div className='mb-5'>
                        <h5><strong className='text-danger'>✖ </strong><strong>ALIGNMENT: </strong>{alignment}</h5>
                        <p><strong>You can align to the following stones: </strong> Creator Stones, Synthetic Stones, Dark Stones, Power Stones</p>
                    </div>
                )
            )}
            {alignment && gemAlignment && (
                <div className='mb-5'>
                    <h5><strong className='text-success'>✓ </strong><strong> ALIGNMENT: </strong>{alignment} | {gemAlignment}</h5>
                </div>
            )}
            {!(Object.keys(raceCur).length === 0) && (
                    <div className='mb-5'>
                        {raceCur.hasOwnProperty('topics') && !subrace ? (
                            <h5><strong className='text-warning'>... </strong><strong>RACE: </strong>{raceCur.name}</h5>
                        ) : subrace? (
                            <h5><strong className='text-success'>✓ </strong><strong>RACE: </strong>{raceCur.name} | {subrace}</h5>
                        ) : (
                            <h5><strong className='text-success'>✓ </strong><strong>RACE: </strong>{raceCur.name}</h5>
                        )}
                        <div className='row'>
                            <p className='col'><strong>lifespan: </strong>{raceCur.lifespan}</p>
                            <p className='col'><strong>size: </strong>{raceCur.size}</p>
                            <p className='col'><strong>speed: </strong>{raceCur.speed}</p>
                        </div>
                    </div>
            )}
            {!(Object.keys(classCur).length === 0) && (
                <div className='mb-5'>
                    {(classCur.topics[0].name === 'Adventurer') && !subclass ? (
                        <h5><strong className='text-warning'>... </strong><strong>CLASS: </strong>{classCur.name}</h5>
                    ) : subclass? (
                        <h5><strong className='text-success'>✓ </strong><strong>CLASS: </strong>{classCur.name} | {subclass}</h5>
                    ) : (
                        <h5><strong className='text-success'>✓ </strong><strong>CLASS: </strong>{classCur.name}</h5>
                    )}
                    <div className='row'>
                        <p className='col'><strong>Proficiencies: </strong>{raceCur.lifespan}</p>
                        <p className='col'><strong>Languages: </strong>{raceCur.size}</p>
                    </div>
                </div>
            )}
        </div>
    </div>
</div>

    );
}

export default CharacterBuilder;