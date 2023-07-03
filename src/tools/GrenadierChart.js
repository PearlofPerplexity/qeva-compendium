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

const grenades = [
    {
        id: 0,
        name: 'Concussion',
        dcSave: 15,
        description: "Each creature within a 10ft radius must make a DC 15 DEX saving throw or become stunned until the end of its next turn. Creatures within 5 ft. of the grenade take 3d6 thunder damage. On a successful save, a creature takes half damage and isn't stunned.",
        effect: 'Stun (10ft), 3d6 damage (5ft)',
        range: 10,
        time: 'Instantaneous'
    },
    {
        id: 1,
        name: 'Smoke',
        description: "Emits a cloud of smoke that creates a heavily obscured area in a 20ft radius.",
        effect: 'Obscure',
        range: 20,
        time: '10 min'
    },
    {
        id: 2,
        name: 'Fragmentation',
        dcSave: 15,
        description: "Each creature within a 20ft radius must make a DC 15 DEX saving throw, taking 3d6 piercing damage on a failed save, or half as much damage on a successful one. Experiment with different materials to fragment.",
        effect: '3d6 thunder damage',
        range: 20,
        time: 'Instantaneous'
    },
    {
        id: 3,
        name: 'Illumination',
        dcSave: 15,
        description: "Each creature within a 10ft radius must make a DC 15 DEX saving throw or become blinded until the end of its next turn.",
        effect: 'Blind',
        range: 10,
        time: '1 min'
    },
    {
        id: 4,
        name: 'Incendiary',
        dcSave: 15,
        description: "Creates a 15ft radius of fire that lasts 10 minute. Any creature within the space or that enters the space takes 1d6 fire damage every turn until they take an action to put themself out. Creatures must make a DC 10 Dexterity saving throw to successfully put themselves out.",
        effect: '3d6 Fire Damage',
        range: 10,
        time: '1 hr'
    },
    {
        id: 5,
        name: 'Toxic',
        dcSave: 15,
        description: "Emits a cloud of noxious fumes in a 20ft radius. Creatures must make a DC 15 DEX saving throw or be poisoned and suffer the ill effects of the poison. A crafter's poison is required.",
        effect: 'Subject to Posion used',
        range: 10,
        time: '10 min'
    },
    {
        id: 6,
        name: 'Crystal',
        description: "Topplers have learned to burst gems into a mist, which instills their qualities in all who are effected (thus a crystal is required for this grenade). Each creature within a 5ft radius is proficient in the stone used in the grenade. Apart from alignment and rock traps, this is the only known method to sustain a stones quality in one's possession.",
        effect: 'Skill Prof. in Crystal used.',
        range: 5,
        time: '1 min'
    },
    {
        id: 7,
        name: 'Dark Crystal',
        description: "Topplers have learned to burst gems into a mist, which instills their qualities in all who are effected (thus a crystal is required for this grenade). If a darkened crystal is used, each creature within a 10ft radius will have disadvatage on their rolls for 1 minute. Use of this grenade impedes one's abilities to use undarkened crystals.",
        effect: 'Disadvantage on rolls',
        range: 10,
        time: '1 min'
    },
];

const GrenadierChart = () => {
        
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
                <i className="iconify fs-2" data-icon="fluent-emoji:bottle-with-popping-cork"></i>
                <div className="ms-3">
                    <div className="d-flex align-items-center">
                        <h3 className="mb-0">Grenadier Chart</h3>
                    </div>
                </div>
            </Link>
            <Modal isOpen={modal} toggle={toggle} fullscreen>
                <ModalHeader toggle={toggle}><i className="iconify fs-2" data-icon="fluent-emoji:bottle-with-popping-cork"></i> Grenadier Chart</ModalHeader>
                <ModalBody>
                <div className='container'>
                    <div className='row text-center mb-4'>
                        <h3>Grenade Upgrades
                            <Button className='text-center info' onClick={infoToggle}>
                                🛈
                            </Button>                            
                        </h3>
                        <Offcanvas isOpen={info} toggle={infoToggle} direction={'end'}>
                            <OffcanvasHeader toggle={infoToggle}>
                            Grenades
                            </OffcanvasHeader>
                            <OffcanvasBody>
                                <p>
                                This table includes a list of grenades developed in the Toppler clan.
                                </p>
                            </OffcanvasBody>
                        </Offcanvas>
                        <table className="table table-hover table-sticky align-middle">
                            <thead>
                                <tr className='align-middle'>
                                    <td>New Grenade</td>
                                    <td>Improve Impact</td>
                                    <td>Improve Radius</td>
                                    <td>Increase Dex Save DC</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='align-middle'>
                                    <td>
                                        Select or invent <strong>1 additional type of grenade</strong> to craft and wield.
                                    </td>
                                    <td><strong>+2d6 to the damage roll</strong> of a currently mastered grenade.</td>
                                    <td><strong>+10ft to the radius</strong> of a currently mastered grenade. </td>
                                    <td><strong>+1 to the Dex Save</strong> of a currently mastered grenade.</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>Types of Grenades</h3>
                        <table className="table table-hover table-sticky align-middle">
                            <thead>
                                <tr className='align-middle'>
                                    <th>Name</th>
                                    <td>Description</td>
                                    <td>DEX Save</td>
                                    <td>Effect</td>
                                    <td>Range</td>
                                    <td>Time</td>
                                </tr>
                            </thead>
                            <tbody>
                                {grenades.map(grenade => (
                                    <React.Fragment key={grenade.id}>
                                        <tr className='align-middle'>
                                            <th>{grenade.name}</th>
                                            <td>{grenade.description}</td>
                                            <td>{grenade.dcSave ? grenade.dcSave : '-'}</td>
                                            <td>{grenade.effect}</td>
                                            <td>{grenade.range} ft</td>
                                            <td>{grenade.time}</td>
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

export default GrenadierChart;