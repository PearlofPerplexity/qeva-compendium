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

const fightingStyleManeuvers = [
    {
      id: 1,
      name: "Commander's Strike",
      description: "When you take the Attack action on your turn, you can forgo one of your attacks to direct an ally to strike. The ally can immediately use its reaction to make one weapon attack, adding your superiority die to the attack's damage."
    },
    {
      id: 2,
      name: "Disarming Attack",
      description: "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to disarm the target, forcing it to drop one item of your choice that it's holding. The target must make a Strength saving throw or drop the object."
    },
    {
      id: 3,
      name: "Distracting Strike",
      description: "When you hit a creature with a weapon attack, you can expend one superiority die to distract the creature, giving your allies an opening. The next attack roll against the target by an attacker other than you has advantage if the attack is made before the start of your next turn."
    },
    {
      id: 4,
      name: "Evasive Footwork",
      description: "When you move, you can expend one superiority die, rolling the die and adding the number rolled to your AC until you stop moving."
    },
    {
      id: 5,
      name: "Feinting Attack",
      description: "You can expend one superiority die and use a bonus action on your turn to feint, choosing one creature within 5 feet of you as your target. You have advantage on your next attack roll against that creature."
    },
    {
      id: 6,
      name: "Goading Attack",
      description: "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to goad the target into attacking you. The target must make a Wisdom saving throw. On a failed save, the target has disadvantage on all attack rolls against targets other than you until the end of your next turn."
    },
    {
      id: 7,
      name: "Lunging Attack",
      description: "When you make a melee weapon attack on your turn, you can expend one superiority die to increase your reach for that attack by 5 feet. If you hit, you add the superiority die to the attack's damage roll."
    },
    {
      id: 8,
      name: "Maneuvering Attack",
      description: "When you hit a creature with a weapon attack, you can expend one superiority die to maneuver one of your comrades into a more advantageous position. You add the superiority die to the attack's damage roll, and you choose a friendly creature who can see or hear you. That creature can use its reaction to move up to half its speed without provoking opportunity attacks from the target of your attack."
    },
    {
      id: 9,
      name: "Menacing Attack",
      description: "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to frighten the target. You add the superiority die to the attack's damage roll, and the target must make a Wisdom saving throw. On a failed save, it is frightened of you until the end of your next turn."
    },
    {
      id: 10,
      name: "Parry",
      description: "When another creature damages you with a melee attack, you can use your reaction and expend one superiority die to reduce the damage by the number you roll on your superiority die + your DEX modifier."
    },
    {
      id: 11,
      name: "Precision Attack",
      description: "When you make a weapon attack roll against a creature, you can expend one superiority die to add it to the roll. You can use this maneuver before or after making the attack roll, but before any effects of the attack are applied."
    },
    {
      id: 12,
      name: "Pushing Attack",
      description: "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to drive the target back. You add the superiority die to the attack's damage roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, you push the target up to 15 feet away from you."
    },
    {
      id: 13,
      name: "Rally",
      description: "On your turn, you can use a bonus action and expend one superiority die to bolster the resolve of one of your companions. The creature gains temporary hit points equal to the superiority die roll + your Charisma modifier."
    },
    {
      id: 14,
      name: "Riposte",
      description: "When a creature misses you with a melee attack, you can use your reaction and expend one superiority die to make a melee weapon attack against the creature. If you hit, you add the superiority die to the attack's damage roll."
    },
    {
      id: 15,
      name: "Sweeping Attack",
      description: "When you hit a creature with a melee weapon attack, you can expend one superiority die to attempt to damage another creature with the same attack. Choose another creature within 5 feet of the original target, and if the original attack roll would hit the second creature, it takes damage equal to the superiority die roll."
    },
    {
      id: 16,
      name: "Trip Attack",
      description: "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to knock the target down. You add the superiority die to the attack's damage roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, the target is prone."
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
                        <h3 className="mb-0">Fighting Charts</h3>
                    </div>
                </div>
            </Link>
            <Modal isOpen={modal} toggle={toggle} fullscreen>
                <ModalHeader toggle={toggle}><i className="iconify fs-2" data-icon="fluent-emoji:crossed-swords"></i> Fighting Charts</ModalHeader>
                <ModalBody>
                <div className='container'>
                    <div className='row text-center mb-4'>
                        <h3>Fighting Styles
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
                        <h3 className='mt-5'>Fighting Maneuvers</h3>
                        <table className="table table-hover table-sticky align-middle">
                            <thead>
                                <tr className='align-middle'>
                                    <th>Name</th>
                                    <td>Description</td>
                                </tr>
                            </thead>
                            <tbody>
                                {fightingStyleManeuvers.map(fs => (
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