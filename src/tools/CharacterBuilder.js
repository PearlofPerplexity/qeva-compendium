import React, { useState, useContext } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';
import { RACES } from "../assets/shared/RACES";
import { CLASSES } from "../assets/shared/CLASSES";
import { GEMS } from "../assets/shared/GEMS";
import { DGEMS } from '../assets/shared/DGEMS';
import AlignmentChart from './AlignmentChart';
import RaceChart from './RaceChart';
import ClassChart from './ClassChart';
//CONTEXT
import { CharacterContext } from '../contexts/characterContext';

// Create help badges showing different alignments, races, etc.

const CharacterBuilder = () => {

    const [open, setOpen] = useState('');
    const toggle = (id) => {
        if (open === id) setOpen();
        else setOpen(id);
    };

    const [character, setCharacter] = useContext(CharacterContext);

    // Ability Scores
    const abilityScoreArray = [8, 10, 12, 13, 14, 15];
    const allAbility = 72 - character.str - character.dex - character.con - character.int - character.wis - character.cha;

    const handleCharacter = (prop, value) => {
        let charObj = character;
        charObj[prop] = value;
        setCharacter({...charObj});
    };
    const handleAbilityScore = (prop, value) => {
        let charObj = character;

        //Determine value of ABILITY SCORE | ex. 'dex'
        charObj[prop] = value;

        // Determine value of MODIFIER
        let modNum, modVal, modProp;
        modNum = (Math.floor((value - 10) / 2));
        //Adds a '+' if the modifier is >= 0
        if (modNum >= 0 ) modVal = `+${modNum}`;
        else modVal = modNum;
        //Creates the Modifier | ex. 'dexMod'
        modProp = `${prop}Mod`;
        charObj[modProp] = modVal;

        //Determine value of SAVE
        let saveNum, saveVal, saveProp;
        saveNum = parseInt(modNum) + 2;
        //Adds a '+' if the modifier is >= 0
        if (saveNum >= 0 ) saveVal = `+${saveNum}`;
        else saveVal = saveNum;
        //Creates the Saving Throw | ex. 'dexSave'
        saveProp = `${prop}Save`;
        charObj[saveProp] = saveVal;

        setCharacter({...charObj});
    }
    const handleAlignment = (prop, id) => {
        let charObj = character;
        if (prop === 'alignment') {
            charObj[prop] = id;
            charObj.alignmentType = '';
            charObj.alignmentGem = '';
        } else if (prop === 'alignmentType') {
            charObj[prop] = id;
            charObj.alignmentGem = '';
        } else if (prop === 'alignmentGem') {
            switch (character.alignmentType) {
                case 'Divine':
                    charObj[prop] = GEMS[0].topics[id];
                    break;
                case 'Cardinal':
                    charObj[prop] = GEMS[1].topics[id];
                    break;
                case 'Incidental':
                    charObj[prop] = GEMS[1].topics[id];
                    break;
                case 'Unbound':
                    charObj[prop] = DGEMS[0].topics[id];
                    break;
                case 'Dark':
                    charObj[prop] = DGEMS[1].topics[id];
                    break;
                default:
                    break;
            }
        } else return;
        setCharacter({...charObj});
    }
    const handleRace = (prop, id) => {
        let charObj = character;
        let newrace;
        if (prop === 'race') {
            if (id) {
                newrace = RACES[id];
                charObj[prop] = newrace;
                charObj.endrace = newrace;
            } else {
                charObj[prop] = null;
                charObj.endrace = null;
            }
            charObj.subrace = null;
        } else if (prop === 'subrace') {
            if (id) {
                newrace = character.race.topics[id];
                charObj[prop] = newrace;
                charObj.endrace = newrace;
            }
            else {
                charObj[prop] = null;
                charObj.endrace = character.race;
            }
        }
        setCharacter({...charObj});
    }
    const handleClass = (prop, id) => {
        let charObj = character;
        let newclass;
        console.log(prop, id);
        if (prop === 'myClass') {
            if (id) {
                newclass = CLASSES[id];
                charObj[prop] = newclass;
                if (!(newclass.name === 'No Affiliation')) {
                    charObj.endclass = newclass;
                    console.log(charObj.endclass);
                } else charObj.endclass = null;
            }
            else {
                charObj[prop] = null;
                charObj.endclass = null;
            };
            charObj.subclass = null;
        } else if (prop === 'subclass') {
            if (id) {
                newclass = character.myClass.topics[id];
                charObj[prop] = newclass;
                charObj.endclass = newclass;
            }
            else {
                charObj[prop] = null;
                charObj.endclass = null;
            };
        }
        setCharacter({...charObj});
    }

    return (

<div className="container-fluid">
    <div className="row row-height">
        <form className="col text-center char-overflow">
            <h2>Your Builder</h2>
            <div className='mb-2 char-name-input'>
                <label>Character Name:&nbsp;</label>
                <input type='text' value={character.name} onChange={(e) => handleCharacter('name', e.target.value)} />
            </div>
            <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                <AccordionHeader targetId='1'>Ability Scores | Available Points: {allAbility}</AccordionHeader>
                    <AccordionBody accordionId='1'>
                        <div className='row mb-3'>
                            <h4>Strength</h4>
                            {abilityScoreArray.map((num, key) => (
                                <div className='col-2' key={key}>
                                    <input type='radio' id={num} name='str_scores' value={num} onClick={() => handleAbilityScore('str', num)} />
                                    <label htmlFor={num}>&nbsp;{num}</label>
                                </div>
                            ))}
                        </div>
                        <div className='row mb-3'>
                            <h4>Dexterity</h4>
                            {abilityScoreArray.map((num, key) => (
                                <div className='col-2' key={key}>
                                    <input type='radio' id={num} name='dex_scores' value={num} onClick={() => handleAbilityScore('dex', num)} />
                                    <label htmlFor={num}>&nbsp;{num}</label>
                                </div>
                            ))}
                        </div>
                        <div className='row mb-3'>
                            <h4>Constitution</h4>
                            {abilityScoreArray.map((num, key) => (
                                <div className='col-2' key={key}>
                                    <input type='radio' id={num} name='con_scores' value={num} onClick={() => handleAbilityScore('con', num)} />
                                    <label htmlFor={num}>&nbsp;{num}</label>
                                </div>
                            ))}
                        </div>
                        <div className='row mb-3'>
                            <h4>Intelligence</h4>
                            {abilityScoreArray.map((num, key) => (
                                <div className='col-2' key={key}>
                                    <input type='radio' id={num} name='int_scores' value={num} onClick={() => handleAbilityScore('int', num)} />
                                    <label htmlFor={num}>&nbsp;{num}</label>
                                </div>
                            ))}
                        </div>
                        <div className='row mb-3'>
                            <h4>Wisdom</h4>
                            {abilityScoreArray.map((num, key) => (
                                <div className='col-2' key={key}>
                                    <input type='radio' id={num} name='wis_scores' value={num} onClick={() => handleAbilityScore('wis', num)} />
                                    <label htmlFor={num}>&nbsp;{num}</label>
                                </div>
                            ))}
                        </div>
                        <div className='row mb-3'>
                            <h4>Charisma</h4>
                            {abilityScoreArray.map((num, key) => (
                                <div className='col-2' key={key}>
                                    <input type='radio' id={num} name='cha_scores' value={num} onClick={() => handleAbilityScore('cha', num)} />
                                    <label htmlFor={num}>&nbsp;{num}</label>
                                </div>
                            ))}
                        </div>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId='2'>Alignment</AccordionHeader>
                    <AccordionBody accordionId='2'>
                        <AlignmentChart loc="charCreate" />
                        <select name='alignment' className="charPicklist" id="alignment-select" onChange={(e) => handleAlignment('alignment', e.target.value)}>
                            <option value="">--Select Alignment--</option>
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
                        {character.alignment && (
                            <select name='alignment' className="charPicklist" id="alignment-select" onChange={(e) => handleAlignment('alignmentType', e.target.value)}>
                                <option value="">--Select Stone Type--</option>
                                <option value="Divine">Creator Stones</option>
                                { !character.alignment.includes('Evil')
                                    ? (<option value="Cardinal">Moral Stones</option>)
                                    : (<option value="Dark">Dark Stones</option>)}
                                { !character.alignment.includes('Good') && (
                                    <option value="Unbound">Unbound Stones</option>
                                )}
                                <option value="Incidental">Power Stones</option>
                            </select>
                        )}
                        {character.alignment && character.alignmentType && (
                            <select name='gem-alignment' className="charPicklist" id='gem-alignment-select' onChange={(e) => handleAlignment('alignmentGem', e.target.value)}>
                                <option value="">--Select Gem to Pursue--</option>
                                { character.alignmentType === 'Divine' ? (
                                    <>
                                        {GEMS[0].topics.map((gem) => (
                                            <option value={gem.id} key={gem.id}>{gem.name} - {gem.quality}</option>
                                        ))}
                                    </>
                                ) : character.alignmentType === 'Cardinal' ? (
                                    <>
                                        {GEMS[1].topics.map((gem) => (
                                            <option value={gem.id} key={gem.id}>{gem.name} - {gem.quality}</option>
                                        ))}
                                    </>
                                ) : character.alignmentType === 'Incidental' ? (
                                    <>
                                        {GEMS[2].topics.map((gem) => (
                                            <option value={gem.id} key={gem.id}>{gem.name} - {gem.quality}</option>
                                        ))}
                                    </>
                                ) : character.alignmentType === 'Unbound' ? (
                                    <>
                                        {DGEMS[0].topics.map((gem) => (
                                            <option value={gem.id} key={gem.id}>{gem.name} - {gem.quality}</option>
                                        ))}
                                    </>
                                ) : character.alignmentType === 'Dark' ? (
                                    <>
                                        {DGEMS[1].topics.map((gem) => (
                                            <option value={gem.id} key={gem.id}>{gem.name} - {gem.quality}</option>
                                        ))}
                                    </>
                                ) : ('')}
                            </select>
                        )}
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId='3'>Race</AccordionHeader>
                    <AccordionBody accordionId='3'>
                        <RaceChart loc="charCreate" />
                        <select name='races' className="charPicklist" id='race-select' onChange={(e) => handleRace('race', e.target.value)}>
                            <option value="">--Select a Race--</option>
                            {RACES.map((race) => (
                                <option value={race.id} key={race.id}>{race.name}</option>
                            ))}
                        </select>
                        {character.race && character.race.topics && (
                            <select name='subraces' className="charPicklist" id='subrace-select' onChange={(e) => handleRace('subrace', e.target.value)}>
                                <option value="">--Select Subrace--</option>
                                {character.race.topics.map((subrace) => (
                                    <option value={subrace.id} key={subrace.id}>{subrace.name}</option>
                                ))}
                            </select>
                        )}
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId='4'>Class</AccordionHeader>
                    <AccordionBody accordionId='4'>
                        <ClassChart loc="charCreate" />
                        <select name='orders' className="charPicklist" id='order-select' onChange={(e) => handleClass('myClass', e.target.value)}>
                            <option value="">--Select a Class--</option>
                            {CLASSES.map((order) => (
                                <option value={order.id} key={order.id}>{order.name}</option>
                                ))}
                        </select>
                        {character.myClass && character.myClass.name === 'No Affiliation' && (
                            <select name='subclasses' className="charPicklist" id='subclass-select' onChange={(e) => handleClass('subclass', e.target.value)}>
                                <option value="">--Select a Subclass--</option>
                                {character.myClass.topics.map((subclass) => (
                                    <option value={subclass.id} key={subclass.id}>{subclass.name}</option>
                                ))}
                            </select>
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
            <h2 className='mb-5'>{character.playerName ? (`${character.playerName.split(' ')[0]}'s`) : ('Your')} Character: {character.name}</h2>
            <h5 className='char-build-title'>
                {allAbility === 0 ? (<strong className='text-success'>✓ </strong>)
                : allAbility === 72 ? (<strong className='text-danger'>! </strong>)
                : (<strong className='text-warning'>... </strong>)}
                <strong>ABILITY SCORES</strong>
            </h5>
            <div className='row'>
                <p className='col-2'>STR: {character.str}</p>
                <p className='col-2'>DEX: {character.dex}</p>
                <p className='col-2'>CON: {character.con}</p>
                <p className='col-2'>INT: {character.int}</p>
                <p className='col-2'>WIS: {character.wis}</p>
                <p className='col-2'>CHA: {character.cha}</p>
            </div>
            <div className='row mb-4'>
                {character.strMod !== -5 && (<p className='col-2'>{character.strMod}</p>)} 
                {character.dexMod !== -5 && (<p className='col-2'>{character.dexMod}</p>)} 
                {character.conMod !== -5 && (<p className='col-2'>{character.conMod}</p>)} 
                {character.intMod !== -5 && (<p className='col-2'>{character.intMod}</p>)} 
                {character.wisMod !== -5 && (<p className='col-2'>{character.wisMod}</p>)} 
                {character.chaMod !== -5 && (<p className='col-2'>{character.chaMod}</p>)}
            </div>
            <div className='mb-5'>
            {character.alignment && !character.alignmentGem ? (
                <>
                    <h5 className='char-build-title'><strong className='text-warning'>... </strong><strong>ALIGNMENT: </strong>{character.alignment}</h5>
                    <p><strong>You can align to the following stones: </strong> 
                        Creator Stones,&nbsp; 
                        { !character.alignment.includes('evil') ? ('Moral Stones') : ('Dark Stones')},&nbsp;
                        { !character.alignment.includes('good') ? ('Unbound Stones,') : ('')}&nbsp;
                        Power Stones
                    </p>
                </>
            ) :  character.alignment && character.alignmentGem ? (
                <h5 className='char-build-title'><strong className='text-success'>
                    ✓ </strong><strong> ALIGNMENT: </strong>{character.alignment} | {character.alignmentGem.name}
                </h5>
            ) : (
                <h5 className='char-build-title'><strong className='text-danger'>
                    ! </strong><strong> ALIGNMENT: </strong>
                </h5>
            )}
            </div>
            {character.race ? (
                    <div className='mb-5'>
                        <h5 className='char-build-title'>
                            {character.race.hasOwnProperty('topics') && !character.subrace ? (
                                <strong className='text-warning'>... </strong>
                            ) : (<strong className='text-success'>✓ </strong>)
                            }
                            <strong>RACE: </strong>{character.race.name} {character.subrace && ( '| ' + character.subrace.name)}
                        </h5>
                        <div className='row'>
                            <p className='col'><strong>lifespan: </strong>{character.race.lifespan}</p>
                            <p className='col'><strong>size: </strong>{character.race.size}</p>
                            <p className='col'><strong>speed: </strong>{character.race.speed}</p>
                        </div>
                    </div>
            ) : (
                <h5 className='mb-5 char-build-title'><strong className='text-danger'>! </strong><strong>RACE: </strong></h5>
            )}
            {character.myClass ? (
                <div className='mb-5'>
                    <h5 className='char-build-title'>
                        {(character.myClass.topics[0].name === 'Adventurer') && !character.subclass ? (
                            <strong className='text-warning'>... </strong>
                        ) : (<strong className='text-success'>✓ </strong>)
                        }
                        <strong>CLASS: </strong>{character.myClass.name} {character.subclass && ('| ' + character.subclass.name)}
                    </h5>
                    {character.endclass && (
                        <div className='row'>
                            <p className='col'><strong>Goal: </strong>{character.endclass.goal}</p>
                            <p className='col'><strong>Equipment: </strong>{character.endclass.equipment.join(', ')}</p>
                        </div>
                    )}
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