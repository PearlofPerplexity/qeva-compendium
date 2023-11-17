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
    const [classes, setClasses] = useState(CLASSES);

    const allAbility = 72 - character.str - character.dex - character.con - character.int - character.wis - character.cha;

    const handleCharacter = (prop, value) => {
        let charObj = character;
        charObj[prop] = value;
        setCharacter({...charObj});
    };
    const handleAbilityScore = (prop, val) => {
        let charObj = character;
        let value = parseInt(val);

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
        console.log('prop: ' + prop);
        console.log('id: ' + id);
        console.log('character.alignmentType: ' + character.alignmentType);
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
                    charObj[prop] = GEMS[2].topics[id];
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
        let classCompliant;
        if (prop === 'race') {
            if (id) {
                newrace = RACES[id];
                charObj[prop] = newrace;
                if (!newrace.topics) {
                    charObj.endrace = newrace;
                } else {
                    charObj.subrace = null;
                    charObj.endrace = null;
                }
                classCompliant = setClassOptions(charObj);
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
                classCompliant = setClassOptions(charObj);
            }
            else {
                charObj[prop] = null;
                charObj.endrace = character.race;
            }
        }
        if(!classCompliant) {
            charObj.myClass = null;
            charObj.subclass = null;
            charObj.endclass = null;
        }
        setCharacter({...charObj});
    }
    const setClassOptions = (char) => {
        const race = char.endrace ? char.endrace : char.race;
        const myClass = char.endclass ? char.endclass : char.myClass;
        let raceClasses;
        if (race.hasOwnProperty('classes')) {
            raceClasses = CLASSES.filter(cls => race.classes.includes(cls.name));
        } else {
            raceClasses = CLASSES;
        }
        setClasses(raceClasses);
        if (myClass !== null && !raceClasses.find(cls => cls.name === myClass.name)) {
            return false;
        } else {
            return true;
        }
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
                        <div className='row m-lg-2'>
                            <div className="modbox col col-xl-4 col-xxl-2 m-sm-3 m-lg-0">
                                <div>
                                    <label htmlFor="str_score">STR</label>
                                    <input value={character.str} name="str_score" type="number" onChange={(e) => handleAbilityScore('str', e.target.value)} />
                                </div>
                            </div>
                            <div className="modbox col col-xl-4 col-xxl-2 m-sm-3 m-lg-0">
                                <div>
                                    <label htmlFor="dex_score">DEX</label>
                                    <input value={character.dex} name="dex_score" type="number" onChange={(e) => handleAbilityScore('dex', e.target.value)} />
                                </div>
                            </div>
                            <div className="modbox col col-xl-4 col-xxl-2 m-sm-3 m-lg-0 mb-lg-3">
                                <div>
                                    <label htmlFor="con_score">CON</label>
                                    <input value={character.con} name="con_score" type="number" onChange={(e) => handleAbilityScore('con', e.target.value)} />
                                </div>
                            </div>
                            <div className="modbox col col-xl-4 col-xxl-2 m-sm-3 m-lg-0">
                                <div>
                                    <label htmlFor="int_score">INT</label>
                                    <input value={character.int} name="int_score" type="number" onChange={(e) => handleAbilityScore('int', e.target.value)} />
                                </div>
                            </div>
                            <div className="modbox col col-xl-4 col-xxl-2 m-sm-3 m-lg-0">
                                <div>
                                    <label htmlFor="wis_score">WIS</label>
                                    <input value={character.wis} name="wis_score" type="number" onChange={(e) => handleAbilityScore('wis', e.target.value)} />
                                </div>
                            </div>
                            <div className="modbox col col-xl-4 col-xxl-2 m-sm-3 m-lg-0">
                                <div>
                                    <label htmlFor="cha_score">CHA</label>
                                    <input value={character.cha} name="cha_score" type="number" onChange={(e) => handleAbilityScore('cha', e.target.value)} />
                                </div>
                            </div>
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
                                <option value={race.id} key={race.id}>{race.singName}</option>
                            ))}
                        </select>
                        {character.race && character.race.topics && (
                            <select 
                                name='subraces' 
                                className="charPicklist" 
                                id='subrace-select' 
                                onChange={(e) => handleRace('subrace', e.target.value)}
                                defaultValue=""
                            >
                                <option value="">--Select Subrace--</option>
                                {character.race.topics.map((subrace) => (
                                    <option value={subrace.id} key={subrace.id}>{subrace.singName}</option>
                                ))}
                            </select>
                        )}
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId='4'>Class</AccordionHeader>
                    <AccordionBody accordionId='4'>
                        <ClassChart loc="charCreate" />
                        <select 
                            name='orders' 
                            className="charPicklist" 
                            id='order-select' 
                            onChange={(e) => handleClass('myClass', e.target.value)}
                        >
                            <option value="">--Select a Class--</option>
                            {classes.map((order) => (
                                <option value={order.id} key={order.id}>{order.name}</option>
                                ))}
                        </select>
                        {character.myClass && character.myClass.name === 'No Affiliation' && (
                            <select 
                                name='subclasses' 
                                className="charPicklist" 
                                id='subclass-select' 
                                onChange={(e) => handleClass('subclass', e.target.value)}
                            >
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
                        <div className='row mb-3'>
                            <p>Develop the below elements to be awarded the following by your DM:</p>
                            <ul className='ps-5 text-start list-group mb-3'>
                                <li>1 Skill Proficiency</li>
                                <li>1 Tool Proficiencies or Language</li>
                                <li>1 Equipment Items</li>
                                <li>&nbsp;Inspiration</li>
                            </ul>
                            <div className='col char-name-textarea sm-textarea'>
                                <h5 className='text-start'>Backstory:</h5>
                                <textarea className='form-control' rows="5" value={character.backstory} onChange={(e) => handleCharacter("backstory", e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col char-name-textarea'>
                                <h5 className='text-start'>Personality:</h5>
                                <textarea className='form-control' rows="2" value={character.personality} onChange={(e) => handleCharacter("personality", e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col char-name-textarea'>
                                <h5 className='text-start'>Ideals:</h5>
                                <textarea className='form-control' rows="2" value={character.ideals} onChange={(e) => handleCharacter("ideals", e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col char-name-textarea'>
                                <h5 className='text-start'>Flaws:</h5>
                                <textarea className='form-control' rows="2" value={character.flaws} onChange={(e) => handleCharacter("flaws", e.target.value)}></textarea>
                            </div>
                        </div>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </form>
        <div className="col text-center border-start border-3 border-light rounded char-overflow d-none d-md-block">
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
                <p className='col-2'>{character.strMod !== -5 ? character.strMod : ""}</p> 
                <p className='col-2'>{character.dexMod !== -5 ? character.dexMod : ""}</p> 
                <p className='col-2'>{character.conMod !== -5 ? character.conMod : ""}</p> 
                <p className='col-2'>{character.intMod !== -5 ? character.intMod : ""}</p> 
                <p className='col-2'>{character.wisMod !== -5 ? character.wisMod : ""}</p> 
                <p className='col-2'>{character.chaMod !== -5 ? character.chaMod : ""}</p> 
            </div>
            <div className='mb-4'>
            {character.alignment && !character.alignmentGem ? (
                <>
                    <h5 className='char-build-title'><strong className='text-warning'>... </strong><strong>ALIGNMENT: </strong>{character.alignment}</h5>
                    <p className='mx-3'><strong>You can align to the following stones: </strong> 
                        Creator Stones,&nbsp; 
                        { !character.alignment.includes('evil') ? ('Moral Stones') : ('Dark Stones')},&nbsp;
                        { !character.alignment.includes('good') ? ('Unbound Stones,') : ('')}&nbsp;
                        Power Stones
                    </p>
                </>
            ) :  character.alignment && character.alignmentGem ? (
                <>
                    <h5 className='char-build-title mb-3'><strong className='text-success'>
                        ✓ </strong><strong> ALIGNMENT: </strong>{character.alignment} | {character.alignmentGem.name}
                    </h5>
                    {character.alignmentType === 'Incidental' ? (
                        <h6><strong>ABILITY: </strong>{character.alignmentGem.lvls[0]} | <em>cost: 2pts</em></h6>
                    ) : (
                        <>
                            <h6><strong>ABILITY: </strong><em>{character.alignmentGem.lvls[0].name}</em> | <em>cost: 2pts</em></h6>
                            <p>{character.alignmentGem.lvls[0].description}</p>
                        </>
                    )}
                </>
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