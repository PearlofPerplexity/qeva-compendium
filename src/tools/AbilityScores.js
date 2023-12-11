import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';

const AbilityScores = () => {
        
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const reset = () => {
        toggle();
        console.clear();
    }

    return (
        <div className="col-lg-4">
            <button type="button" className="d-flex btn rounded-circle" onClick={toggle}>
                <i className="uil uil-info-circle"></i>
            </button>

            <Modal isOpen={modal} toggle={toggle} fullscreen>
                <ModalHeader toggle={toggle}><i className="iconify fs-2" data-icon="fluent-emoji:crossed-swords"></i> Ability Scores</ModalHeader>
                <ModalBody>
                <div className='container mb-5'>
                    <div className='row text-center'>
                        <h3>Impact of Ability Scores</h3>
                    </div>
                    <div className='row text-center'>
                        <pre>
                            Ability Scores are the basis for Ability Score Modifiers. <br></br>Ability Score Modifiers serve as the basis for the majority of a Character's calculations.
                        </pre>
                    </div>
                    <div className='row text-center mb-4'>
                        <h5><pre>
                            <strong className='text-warning'>Ability Score Modifiers </strong>
                            = (Ability Score − 10) /2
                        </pre></h5>
                    </div>
                    <div className='row text-center'>
                        <h5><pre>
                            <strong className='text-warning'>Armor Class (AC) </strong>
                            = Selected Armor + Dexterity Modifier (N/A for Heavy Armor)
                        </pre></h5>
                    </div>
                    <div className='row text-center mb-1'>
                        <h5><pre>
                            <strong className='text-warning'>Hit Points (HP) </strong>
                            = Class Hit Points + ( Constitution Modifier × Character Level )
                        </pre></h5>
                    </div>
                    <div className='row text-center'>
                        <h5><pre>
                            <strong className='text-warning'>Initiative (Init) </strong>
                            = Dexterity Modifier + D20 Roll (Automated)
                        </pre></h5>
                    </div>
                    <div className='row text-center mb-4'>
                        <h5><pre>
                            <strong className='text-warning'>Passive Perception </strong>
                            = 10 + Dexterity Modifier + Perception Proficiency Bonus (If Proficienct)
                        </pre></h5>
                    </div>
                    <div className='row text-center mb-1'>
                        <h4>Saving Throws</h4>
                    </div>
                    <div className='row text-center mb-4'>
                        <h5><pre>
                            <strong className='text-warning'>Saving Throws </strong>
                            = Ability Score Modifier + Proficiency Bonus (If Proficienct)
                        </pre></h5>
                    </div>
                    <div className='row text-center mb-1'>
                        <h4>Skills</h4>
                    </div>
                    <div className='row text-center mb-4'>
                        <h5><pre>
                            <strong className='text-warning'>Skills </strong>
                            = Ability Score Modifier + Proficiency Bonus (If Proficienct)
                        </pre></h5>
                    </div>
                    <div className='row text-center mb-1'>
                        <h4>Skills by Modifier</h4>
                    </div>
                    <div className='row text-center'>
                        <h5><pre>
                            <strong className='text-warning'>Wisdom Modifier </strong>
                            = Animal Handling, Insight, Medicine, Perception, Survival
                        </pre></h5>
                    </div>
                    <div className='row text-center'>
                        <h5><pre>
                            <strong className='text-warning'>Intelligence Modifier </strong>
                            = Arcana, History, Investigation, Nature, Religion
                        </pre></h5>
                    </div>
                    <div className='row text-center'>
                        <h5><pre>
                            <strong className='text-warning'>Charisma Modifier </strong>
                            = Deception, Intimidation, Performance, Persuasion
                        </pre></h5>
                    </div>
                    <div className='row text-center'>
                        <h5><pre>
                            <strong className='text-warning'>Dexterity Modifier </strong>
                            = Acrobatics, Sleight of Hand, Stealth
                        </pre></h5>
                    </div>
                    <div className='row text-center'>
                        <h5><pre>
                            <strong className='text-warning'>Strength Modifier </strong>
                            = Athletics
                        </pre></h5>
                    </div>
                    <div className='row text-center mb-4'>
                        <h5><pre>
                            <strong className='text-warning'>Constitution Modifier </strong>
                            = None
                        </pre></h5>
                    </div>
                </div>
                <div className='container'>
                    <div className='row text-center'>
                        <h3>Other Elements</h3>
                    </div>
                    <div className='row text-center mb-4'>
                        <pre>
                            These elements are not impacted by Ability Score Modifiers
                        </pre>
                    </div>
                    <div className='row text-center'>
                        <h5><pre>
                            <strong className='text-warning'>Speed </strong>
                            = Race Speed - Heavy Armor encumbrance
                        </pre></h5>
                    </div>
                    <div className='row text-center mb-1'>
                        <h5><pre>
                            <strong className='text-warning'>Proficiency Bonus </strong>
                            = Determined by Level (Level 1 = +2)
                        </pre></h5>
                    </div>
                    <div className='row text-center mb-1'>
                        <h5><pre>
                            <strong className='text-warning'>Gem Alignment Level </strong>
                            = Current Level + 1 (When Heart Stone or Spawn Stone)
                        </pre></h5>
                    </div>
                </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={reset}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default AbilityScores;