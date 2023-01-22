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
    // Character Name
    const [charName, setCharName] = useState("");
    
    // Ability Scores
    const [strength, setStrength] = useState("");
    const [dexterity, setDexterity] = useState("");
    const [constitution, setConstitution] = useState("");
    const [intelligence, setIntelligence] = useState("");
    const [wisdom, setWisdom] = useState("");
    const [charisma, setCharisma] = useState("");
    const allAbility = 72 - strength - dexterity - constitution - intelligence - wisdom - charisma;

    // Ability Score Modifiers
    const strMod = Math.floor((strength - 10) / 2);
    const dexMod = Math.floor((dexterity - 10) / 2);
    const conMod = Math.floor((constitution - 10) / 2);
    const intMod = Math.floor((intelligence - 10) / 2);
    const wisMod = Math.floor((wisdom - 10) / 2);
    const chaMod = Math.floor((charisma - 10) / 2);

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

<div className="container-fluid">
    <div className="row row-height">
        <form className="col text-center char-overflow">
            <h2>Your Builder</h2>
            <div className='mb-2 char-name-input'>
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
                        <select name='alignment' className="charPicklist" id="alignment-select" onChange={handleAlignment}>
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
                        <button type="button" className="btn"><i className="uil uil-info-circle"></i></button>
                        {alignment && (
                            <select name='gem-alignment' className="charPicklist" id='gem-alignment-select' onChange={handleGemAlignment}>
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
                        <select name='races' className="charPicklist" id='race-select' onChange={handleRace}>
                            <option value="">--Select a Race--</option>
                            {RACES.map((race) => (
                                <option value={race.name} key={race.id}>{race.name}</option>
                            ))}
                        </select>
                        {raceCur && (
                            <>
                                {raceCur.topics && (
                                    <select name='subraces' className="charPicklist" id='subrace-select' onChange={handleSubrace}>
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
                        <select name='orders' className="charPicklist" id='order-select' onChange={handleClass}>
                            <option value="">--Select a Class--</option>
                            {CLASSES.map((order) => (
                                <option value={order.name} key={order.id}>{order.name}</option>
                                ))}
                        </select>
                        {classCur && (
                            <>
                                {classCur.name === 'No Affiliation' && (
                                    <>
                                        <select name='subclasses' className="charPicklist" id='subclass-select' onChange={handleSubclass}>
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
        <div className="col text-center border-start border-3 border-light rounded char-overflow">
            <h2 className='mb-5'>Your Character: {charName}</h2>
            <h5 className='char-build-title'>
                {allAbility === 0 ? (<strong className='text-success'>✓ </strong>)
                : allAbility === 72 ? (<strong className='text-danger'>! </strong>)
                : (<strong className='text-warning'>... </strong>)}
                <strong>ABILITY SCORES</strong>
            </h5>
            <div className='row'>
                <p className='col-2'>STR: {strength}</p>
                <p className='col-2'>DEX: {dexterity}</p>
                <p className='col-2'>CON: {constitution}</p>
                <p className='col-2'>INT: {intelligence}</p>
                <p className='col-2'>WIS: {wisdom}</p>
                <p className='col-2'>CHA: {charisma}</p>
            </div>
            <div className='row mb-4'>
                {strMod !== -5 && (<p className='col-2'>{strMod}</p>)} 
                {dexMod !== -5 && (<p className='col-2'>{dexMod}</p>)} 
                {conMod !== -5 && (<p className='col-2'>{conMod}</p>)} 
                {intMod !== -5 && (<p className='col-2'>{intMod}</p>)} 
                {wisMod !== -5 && (<p className='col-2'>{wisMod}</p>)} 
                {chaMod !== -5 && (<p className='col-2'>{chaMod}</p>)}
            </div>
            <div className='mb-5'>
            {alignment && !gemAlignment ? (
                !alignment.includes('Evil') ? (
                    <>
                        <h5 className='char-build-title'><strong className='text-warning'>... </strong><strong>ALIGNMENT: </strong>{alignment}</h5>
                        <p><strong>You can align to the following stones: </strong> Creator Stones, Moral Stones, Power Stones</p>
                    </>
                ) : (
                    <>
                        <h5 className='char-build-title'><strong className='text-warning'>... </strong><strong>ALIGNMENT: </strong>{alignment}</h5>
                        <p><strong>You can align to the following stones: </strong> Creator Stones, Synthetic Stones, Dark Stones, Power Stones</p>
                    </>
                )
            ) :  alignment && gemAlignment ? (
                <>
                    <h5 className='char-build-title'><strong className='text-success'>✓ </strong><strong> ALIGNMENT: </strong>{alignment} | {gemAlignment}</h5>
                </>
            ) : (
                <>
                    <h5 className='char-build-title'><strong className='text-danger'>! </strong><strong> ALIGNMENT: </strong></h5>
                </>
            )}
            </div>
            {!(Object.keys(raceCur).length === 0) ? (
                    <div className='mb-5'>
                        <h5 className='char-build-title'>
                            {raceCur.hasOwnProperty('topics') && !subrace ? (
                                <strong className='text-warning'>... </strong>
                            ) : (<strong className='text-success'>✓ </strong>)
                            }
                            <strong>RACE: </strong>{raceCur.name} {subrace && ( '| ' + subrace)}
                        </h5>
                        <div className='row'>
                            <p className='col'><strong>lifespan: </strong>{raceCur.lifespan}</p>
                            <p className='col'><strong>size: </strong>{raceCur.size}</p>
                            <p className='col'><strong>speed: </strong>{raceCur.speed}</p>
                        </div>
                    </div>
            ) : (
                <h5 className='mb-5 char-build-title'><strong className='text-danger'>! </strong><strong>RACE: </strong></h5>
            )}
            {!(Object.keys(classCur).length === 0) ? (
                <div className='mb-5'>
                    <h5 className='char-build-title'>
                        {(classCur.topics[0].name === 'Adventurer') && !subclass ? (
                            <strong className='text-warning'>... </strong>
                        ) : (<strong className='text-success'>✓ </strong>)
                        }
                        <strong>CLASS: </strong>{classCur.name} {subclass && ('| ' + subclass)}
                    </h5>
                    <div className='row'>
                        <p className='col'><strong>Proficiencies: </strong>{raceCur.lifespan}</p>
                        <p className='col'><strong>Languages: </strong>{raceCur.size}</p>
                    </div>
                </div>
            ) : (
                <h5 className='mb-5 char-build-title'><strong className='text-danger'>! </strong><strong>CLASS: </strong></h5>
            )}
        </div>
    </div>
</div>

    );
}

export default CharacterBuilder;