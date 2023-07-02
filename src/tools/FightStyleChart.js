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

const fightingStyles = [
    {
        id: 1,
        name: 'Archery',
        description: 'You gain a +2 bonus to attack rolls you make with ranged weapons.'
    },
    {
        id: 2,
        name: 'Close Quarters Shooter',
        description: 'When making a ranged attack while you are within 5 feet of a hostile creature, you do not have disadvantage on the attack roll. Your ranged attacks ignore half cover and three-quarters cover against targets within 30 feet of you. You have a +1 bonus to attack rolls on ranged attacks.'
    },
    {
        id: 3,
        name: 'Defense',
        description: 'While you are wearing armor, you gain a +1 bonus to AC.'
    },
    {
        id: 4,
        name: 'Dueling',
        description: 'When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.'
    },
    {
        id: 5,
        name: 'Mariner',
        description: 'As long as you are not wearing heavy armor or using a shield, you have a swimming speed and a climbing speed equal to your normal speed, and you gain a +1 bonus to armor class.'
    },
    {
        id: 6,
        name: 'Tunnel Fighter',
        description: 'As a bonus action, you can enter a defensive stance that lasts until the start of your next turn. While in your defensive stance, you can make opportunity attacks without using your reaction, and you can use your reaction to make a melee attack against a creature that moves more than 5 feet while within your reach.'
    },
    {
        id: 7,
        name: 'Two-Weapon Fighting',
        description: 'When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.'
    },
    {
        id: 8,
        name: 'Blind Fighting',
        description: "Being unable to see a creature doesn't impose disadvantage on your attack rolls against it, provided the creature isn't hidden from you."
    },
    {
        id: 9,
        name: 'Interception',
        description: "When a creature you can see hits a target that is within 5 feet of you with an attack, you can use your reaction to reduce the damage the target takes by 1d10 + your proficiency bonus (to a minimum of 0 damage). You must be wielding a shield or a simple or martial weapon to use this reaction."
    },
    {
        id: 10,
        name: 'Thrown Weapon Fighting',
        description: "You can draw a weapon that has the thrown property as part of the attack you make with the weapon. In addition, when you hit with a ranged attack using a thrown weapon, you gain a +1 bonus to the damage roll."
    },
    {
        id: 11,
        name: 'Unarmed Fighting',
        description: "Your unarmed strikes can deal bludgeoning damage equal to 1d6 + your Strength modifier. If you strike with two free hands, the d6 becomes a d8. When you successfully start a grapple, you can deal 1d4 bludgeoning damage to the grappled creature. Until the grapple ends, you can also deal this damage to the creature whenever you hit it with a melee attack."
    }
];

const FightingStyleChart = () => {
        
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [info, setInfo] = useState(false);
    const infoToggle = () => setInfo(!info);

    const reset = () => {
        toggle();
        console.clear();
    }

    return (
        <div className="col-lg-4">
            <Link className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3"  onClick={toggle}>
                <i className="iconify fs-2" data-icon="fluent-emoji:crossed-swords"></i>
                <div className="ms-3">
                    <div className="d-flex align-items-center">
                        <h3 className="mb-0">Fighting Styles</h3>
                    </div>
                </div>
            </Link>
            <Modal isOpen={modal} toggle={toggle} fullscreen>
                <ModalHeader toggle={toggle}><i className="iconify fs-2" data-icon="fluent-emoji:crossed-swords"></i> Fighting Styles</ModalHeader>
                <ModalBody>
                <div className='container'>
                    <div className='row text-center mb-4'>
                        <h3>Choose a Fighting Style
                            <Button className='text-center info' onClick={infoToggle}>
                                🛈
                            </Button>                            
                        </h3>
                        <Offcanvas isOpen={info} toggle={infoToggle} direction={'end'}>
                            <OffcanvasHeader toggle={infoToggle}>
                            Fighting Styles
                            </OffcanvasHeader>
                            <OffcanvasBody>
                                <p>
                                This table includes all available fighting styles.
                                </p>
                                <h5>Classes</h5>
                                <p>
                                Fighting Styles are used by the following classes:
                                    <ul>
                                        <li>Adventurer</li>
                                        <li>Avlimeth</li>
                                        <li>Caracadre</li>
                                        <li>Fighter</li>
                                    </ul>
                                </p>
                            </OffcanvasBody>
                        </Offcanvas>
                        <table className="table table-hover table-sticky align-middle">
                            <thead>
                                <tr className='align-middle'>
                                    <th>Name</th>
                                    <td>Description</td>
                                </tr>
                            </thead>
                            <tbody>
                                {fightingStyles.map(fs => (
                                    <React.Fragment key={fs.id}>
                                        <tr className='align-middle'>
                                            <th>{fs.name}</th>
                                            <td>{fs.description}</td>
                                        </tr>
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
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

export default FightingStyleChart;