import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { ALIGNMENTS } from '../assets/shared/ALIGNMENTS';
import { RACES } from '../assets/shared/RACES';
import { CLASSES } from '../assets/shared/CLASSES';

const NPCGenerator = () => {
    
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [level, setLevel] = useState(5);
    const [gender, setGender] = useState("");
    const [align, setAlign] = useState("");
    const [dispo, setDispo] = useState("");
    const [race, setRace] = useState("");
    const [raceImg, setRaceImg] = useState("");
    const [lifestyle, setLifestyle] = useState("");

    // Ability Scores
    const [strength, setStrength] = useState(0);
    const [dexterity, setDexterity] = useState(0);
    const [constitution, setConstitution] = useState(0);
    const [intelligence, setIntelligence] = useState(0);
    const [wisdom, setWisdom] = useState(0);
    const [charisma, setCharisma] = useState(0);

    // Ability Score Modifiers
    const strMod = Math.floor((strength - 10) / 2);
    const dexMod = Math.floor((dexterity - 10) / 2);
    const conMod = Math.floor((constitution - 10) / 2);
    const intMod = Math.floor((intelligence - 10) / 2);
    const wisMod = Math.floor((wisdom - 10) / 2);
    const chaMod = Math.floor((charisma - 10) / 2);

    // Other Stats
    let hp = (conMod * level) + (5 * level);
    const ac = dexMod + 10;
    const [speed, setSpeed] = useState("");

    // DICE ROLLS
    const d6 = () => Math.floor( Math.random() * 6) + 1;
    const d10 = () => Math.floor( Math.random() * 10) + 1;

    const slider = (event) => {
        const sliderNum = event.target.value;
        setLevel(sliderNum);
    };

    const abilityRand = () => {
        setStrength(d10() * 3);
        setDexterity(d10() * 3);
        setConstitution(d10() * 3);
        setIntelligence(d10() * 3);
        setWisdom(d10() * 3);
        setCharisma(d10() * 3);
        for(let i=1; i<=(level*2); i++) {
            let abiSelect = d6();
            if (abiSelect === 1) setStrength(e => e + 1);
            if (abiSelect === 2) setDexterity(e => e + 1);
            if (abiSelect === 3) setConstitution(e => e + 1);
            if (abiSelect === 4) setIntelligence(e => e + 1);
            if (abiSelect === 5) setWisdom(e => e + 1);
            if (abiSelect === 6) setCharisma(e => e + 1);
        }
    }

    const npcNameApi = () => window.open('https://www.fantasynamegen.com/', '_blank');

    const genderRand = () => {
        let genderNum = Math.floor( Math.random() * 2) + 1;
        switch (genderNum) {
            case 1:
                setGender("Male");
                break;
            default:
                setGender("Female");
        }
    }

    const alignRand = () => {
        const alignLGTH = ALIGNMENTS[2].topics.length - 1;
        let alignNum = Math.floor( Math.random() * alignLGTH) + 1;
        for (let i=0; i<=alignLGTH; i++) {
            if (alignNum === i) setAlign(ALIGNMENTS[2].topics[i].name);
        }
    }

    const disRand = () => {
        let dispoNum = Math.floor( Math.random() * 4) + 1;
        switch (dispoNum) {
            case 1:
                setDispo("Friendly");
                break;
            case 2:
                setDispo("Indifferent");
                break;
            case 3:
                setDispo("Chaotic");
                break;
            default:
                setDispo("Hostile");
        }
    }

    const raceRand = () => {
        // -2 Removes Dragon & accounts for id's starting at 0
        const raceLGTH = RACES.length - 2;
        let raceNum = Math.floor( Math.random() * raceLGTH) + 1;
        for (let i=0; i<=raceLGTH; i++) {
            if (raceNum === i) {
                setRace(RACES[i].singName);
                setSpeed(RACES[i].speed);
                setRaceImg(RACES[i].image);
            }
        }
    }

    const lifeRand = () => {
        // This Adds class in the No Aff. Classes
        const naLifeLGTH = CLASSES[9].topics.length - 1;
        // Additional classes NOT included in the No Aff. Classes & NOT objects
        const otherLife = ["Caracadre", "Avlimeth", "Tradesman", "Merchant", "Shopkeeper", "Farmer", "Commoner", "Homeless"];
        const otherLifeLGTH = otherLife.length - 1;
        const lifeLGTH = naLifeLGTH + otherLifeLGTH;
        let lifeNum = Math.floor( Math.random() * lifeLGTH) + 1;
        for (let i=0; i<=naLifeLGTH; i++) {
            if (lifeNum === i) setLifestyle(CLASSES[9].topics[i].name);
        }
        for (let i=1; i<otherLifeLGTH; i++) {
            if (lifeNum === (naLifeLGTH + i)) setLifestyle(otherLife[i-1]);
        }
    }

    const npcRand = () => {
        abilityRand();
        genderRand();
        alignRand();
        disRand();
        raceRand();
        lifeRand();
        // add race image to bottom of generator
    }

    const reset = () => {
        toggle();
        setLevel(5);
        setSpeed("");
        setGender("");
        setAlign("");
        setDispo("");
        setRace("");
        setRaceImg("");
        setLifestyle("");
        setStrength(0);
        setDexterity(0);
        setConstitution(0);
        setIntelligence(0);
        setWisdom(0);
        setCharisma(0);
        console.clear();
    };
    
    return (
        <div className="col-lg-4">
            <Link className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3"  onClick={toggle}>
                <i className="iconify fs-2" data-icon="noto-v1:crossed-swords"></i>
                <div className="ms-3">
                    <div className="d-flex align-items-center">
                        <h3 className="mb-0">NPC Generator</h3>
                    </div>
                </div>
            </Link>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}><i className="iconify fs-2" data-icon="noto-v1:crossed-swords"></i> NPC Generator</ModalHeader>
                <ModalBody>
                    <div className='box container'>
                        <div className='row pb-3'>
                            <h4 className='col text-start'>Level: {level}</h4>
                            <input type="range" min='1' max='20' value={level} onChange={slider} className='col slider' />
                        </div>
                        <div className='row'>
                            <h4 className='col text-center'>Ability Scores: </h4>
                        </div>
                        <div className='row text-center'>
                            <h5 className='col'>STR</h5>
                            <h5 className='col'>DEX</h5>
                            <h5 className='col'>CON</h5>
                            <h5 className='col'>INT</h5>
                            <h5 className='col'>WIS</h5>
                            <h5 className='col'>CHA</h5>
                        </div>
                        <div className='row pb-2 text-center'>
                            <p className='col'><strong>{strength}</strong> | {strMod}</p>
                            <p className='col'><strong>{dexterity}</strong> | {dexMod}</p>
                            <p className='col'><strong>{constitution}</strong> | {conMod}</p>
                            <p className='col'><strong>{intelligence}</strong> | {intMod}</p>
                            <p className='col'><strong>{wisdom}</strong> | {wisMod}</p>
                            <p className='col'><strong>{charisma}</strong> | {chaMod}</p>
                        </div>
                        <div className='row pb-4'>
                            <div className="modbox col">
                                <div>
                                    <label htmlFor="ac">AC</label>
                                    <input readOnly value={ac} name="ac" type="text" />
                                </div>
                            </div>
                            <div className="modbox col">
                                <div>
                                    <label htmlFor="hp">HP</label>
                                    <input readOnly value={hp} name="hp" type="text" />
                                </div>
                            </div>
                            <div className="modbox col">
                                <div>
                                    <label htmlFor="speed">Speed</label>
                                    <input readOnly value={speed} name="speed" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className='row pb-3'>
                            <h4 className='col-6 text-start'>Name: </h4>
                            <input className='col col-3' />
                            <Button className='btn col-3 text-center' onClick={npcNameApi}>Generate</Button>
                        </div>
                        <div className='row'>
                            <h4 className='col text-start'>Gender: </h4>
                            <input readOnly list="npcGender" type="text" className='col' value={gender} />
                            <datalist id="npcGender">
                                <option value="Male" />
                                <option value="Female" />
                            </datalist>
                        </div>
                        <div className='row'>
                            <h4 className='col text-start'>Alignment: </h4>
                            <input readOnly list="npcAlign" className='col' value={align} />
                            <datalist id="npcAlign">
                                {ALIGNMENTS[2].topics.map((e) => {
                                    return <option key={e.id} value={e.name} />
                                })}
                            </datalist>
                        </div>
                        <div className='row'>
                            <h4 className='col text-start'>Disposition: </h4>
                            <input readOnly list="npcDispo" className='col' value={dispo} />
                        </div>
                        <div className='row'>
                            <h4 className='col text-start'>Race: </h4>
                            <input readOnly list="npcRace" className='col' value={race} />
                        </div>
                        <div className='row'>
                            <h4 className='col text-start'>Lifestyle: </h4>
                            <input readOnly list="npcLifestyle" className='col' value={lifestyle} />
                        </div>
                        {raceImg && (
                        <div classsName='row'>
                            <img className='mt-3' id="race-img" src={raceImg} style={{width:'150px'}} alt="cur-race-img"/>
                        </div>
                        )}
                    </div>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={npcRand} >
                    Generate
                </Button>{' '}
                <Button color="secondary" onClick={reset}>
                    Close
                </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default NPCGenerator;