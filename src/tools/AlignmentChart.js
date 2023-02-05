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
import { ALIGNMENTS } from '../assets/shared/ALIGNMENTS';
import { GEMS } from '../assets/shared/GEMS';

const AlignmentChart = () => {
    
    const gemPoints = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, "+1", 33];
    
    // const gemClarity = ["I", "I3", "I2", "I1", "SI3", "SI2", "SI1", "VS2", "VS1", "VVS2", "VVS1", "FL"];

    const gemColor = ["D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", ""];

    const gemCarat = [0.05, 0.1, 0.15, 0.2, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3, 3.5, 4, 4.5, 5.25, 6, 7.25, 8.25, 9];

    const lvls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');

    const abilityInfo = (e) => {
        setTitle(e.name);
        setDetail(e.description);
    }

    const abilityInfoReset = () => {
        setTitle("");
        setDetail("");
    }

    const [moral, setMoral] = useState(false);
    const [ethic, setEthic] = useState(false);
    const [quality, setQuality] = useState(false);
    const [align, setAlign] = useState(false);

    const moralToggle = () => setMoral(!moral);
    const ethicToggle = () => setEthic(!ethic);
    const qualityToggle = () => setQuality(!quality);
    const alignToggle = () => setAlign(!align);

    const reset = () => {
        toggle();
        setDetail("")
        console.clear();
    }

    return (
        <div className="col-lg-4">
            <Link className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3"  onClick={toggle}>
                <i className="iconify fs-2" data-icon="twemoji:gem-stone"></i>
                <div className="ms-3">
                    <div className="d-flex align-items-center">
                        <h3 className="mb-0">Alignment Chart</h3>
                    </div>
                </div>
            </Link>
            <Modal isOpen={modal} toggle={toggle} fullscreen>
                <ModalHeader toggle={toggle}><i className="iconify fs-2" data-icon="twemoji:gem-stone"></i> Alignment Chart</ModalHeader>
                <ModalBody>
                <div className='container'>
                    <div className='row text-center'>
                        <h3>Ethical Axis 
                            <Button className='text-center info' onClick={ethicToggle}>
                                🛈
                            </Button>
                        </h3>
                        <Offcanvas isOpen={ethic} toggle={ethicToggle} direction={'end'}>
                            <OffcanvasHeader toggle={ethicToggle}>
                            Ethical Axis
                            </OffcanvasHeader>
                            <OffcanvasBody>
                                {ALIGNMENTS[0].topics.map(e => {
                                    return (
                                        <div key={e.id}>
                                            <h6><strong>{e.name}</strong></h6>
                                            <p>{e.description}</p>
                                        </div>
                                    );
                                })}
                            </OffcanvasBody>
                        </Offcanvas>
                    </div>
                    <div className='row align-items-center text-center mb-4'>
                        <div className='col-2'>
                            <h3>Moral Axis
                                <Button className='text-center info' onClick={moralToggle}>
                                    🛈
                                </Button>
                            </h3>
                            <Offcanvas isOpen={moral} toggle={moralToggle}>
                                <OffcanvasHeader toggle={moralToggle}>
                                Moral Axis
                                </OffcanvasHeader>
                                <OffcanvasBody>
                                    {ALIGNMENTS[1].topics.map(e => {
                                        return (
                                            <div key={e.id}>
                                                <h6><strong>{e.name}</strong></h6>
                                                <p>{e.description}</p>
                                            </div>
                                        );
                                    })}
                                </OffcanvasBody>
                            </Offcanvas>
                        </div>
                        <div className='col-8'>
                            <table className="table table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">LAWFUL</th>
                                        <th scope="col">NEUTRAL</th>
                                        <th scope="col">CHAOTIC</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">GOOD</th>
                                        <td>LAWFUL GOOD</td>
                                        <td>NEUTRAL GOOD</td>
                                        <td>CHAOTIC GOOD</td>
                                        </tr>
                                    <tr>
                                        <th scope="row">NEUTRAL</th>
                                        <td>LAWFUL NEUTRAL</td>
                                        <td>TRUE NEUTRAL</td>
                                        <td>CHAOTIC NEUTRAL</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">EVIL</th>
                                        <td>LAWFUL EVIL</td>
                                        <td>NEUTRAL EVIL</td>
                                        <td>CHAOTIC EVIL</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='row text-center mb-4'>
                        <h3>Gemstone Quality
                            <Button className='text-center info' onClick={qualityToggle}>
                                🛈
                            </Button>
                        </h3>
                        <Offcanvas isOpen={quality} toggle={qualityToggle} direction={'end'}>
                            <OffcanvasHeader toggle={qualityToggle}>
                            Gemstone Quality
                            </OffcanvasHeader>
                            <OffcanvasBody>
                                <p>
                                The potency of a gem is quanitified by alignment points, which are affected by two factors: the gem itself and the alignemnt of its wielder.
                                </p>
                                <h5>Power Containment</h5>
                                <p>
                                Power containment describes the amount of total alignment points a gem can hold (ex. a player at level 3 can wield all gems with color "K" and below. If the player has a gem with color "J", it will hold 7 alignment points). Gems' alignment points refresh at every short rest for moral stones, every long rest for power stones and never for divine stones. A player can increase a gem's alignment by aligning to its quality. Oppositely, they will decrease its quality by going against its quality. A gem's alignment points will not refresh if the gem is drawn down to 0 alignment points.
                                </p>
                                <h5>Power Output</h5>
                                <p>
                                Power output describes the amount of alignment points a gem can draw in a single action. It can be decided by either the clarity or carat of the gem - whichever is higher (ex. a gem with "I3" clarity and "0.65" carat can output 9 alignment points in a single action). Clarity and carat do not change and are not impacted by player level.
                                </p>
                            </OffcanvasBody>
                        </Offcanvas>
                        <table className="table table-hover table-responsive table-striped align-middle">
                            <thead>
                                <tr>
                                    <th scope='col'>Alignment Pts</th>
                                    {gemPoints.map((point, index) => (
                                        <td key={index}>{point}</td>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th colSpan="26">MAX Power &#40;Pts&#41; Containment</th>
                                </tr>
                                <tr>
                                    <th scope="col">LVL</th>
                                    <td colSpan="2 table-active">lvl 1</td>
                                    <td colSpan="3">lvl 2</td>
                                    <td colSpan="3">lvl 3</td>
                                    <td colSpan="3">lvl 4</td>
                                    <td colSpan="3">lvl 5</td>
                                    <td colSpan="2">lvl 6</td>
                                    <td colSpan="2">lvl 7</td>
                                    <td colSpan="2">lvl 8</td>
                                    <td colSpan="2">lvl 9</td>
                                    <td>10</td>
                                    <td>...</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <th scope='col'>Color</th>
                                    {gemColor.map((color, index) => (
                                        <td key={index}>{color}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <th colSpan="26">MAX Power &#40;Pts&#41; Output </th>
                                </tr>
                                <tr>
                                    <th scope="col">Clarity</th>
                                    <td colSpan="2">I3</td>
                                    <td colSpan="3">I2</td>
                                    <td colSpan="3">I1</td>
                                    <td colSpan="3">SI3</td>
                                    <td colSpan="3">SI2</td>
                                    <td colSpan="2">SI1</td>
                                    <td colSpan="2">VS2</td>
                                    <td colSpan="2">VS1</td>
                                    <td colSpan="2">VVS2</td>
                                    <td colSpan="1">VVS1</td>
                                    <td colSpan="2">FL</td>
                                </tr>
                                <tr>
                                    <th scope="col">Carat</th>
                                    {gemCarat.map((carat, index) => (
                                        <td key={index}>{carat}</td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='row text-center mb-4'>
                        <h3>Power Stone Alignment
                            <Button className='text-center info' onClick={alignToggle}>
                                🛈
                            </Button>
                        </h3>
                        <Offcanvas isOpen={align} toggle={alignToggle} direction={'end'}>
                            <OffcanvasHeader toggle={alignToggle}>
                            Gem Alignment - Choose Your Stone!
                            </OffcanvasHeader>
                            <OffcanvasBody>
                                <p>
                                While gemstone quality describes the power capacity of the gem itself, gem alignment describes the steps a player can take to align to it. 
                                </p>
                                <h5>Levels</h5>
                                <p>
                                A player must actively pursue a gem's quality to align to it. Each level, a player decides a gem they will pursue. With each level they unlock further abilities (ex. a Character who pursues "diamond" for three levels will unlock the "ethereal armor" ability. NOTICE: a player must physically have the gem to use its ability and the gem must meet the abilitiy's point requirements).
                                </p>
                                <h5>Alignment Points</h5>
                                <p>
                                See "Gemstone Quality" for more information on alignment points.
                                </p>
                                <h5>Power Stones</h5>
                                <p>
                                Power stones refresh at every long rest. The ability modifiers described here can only be used for a single roll and only one modifier can be used per roll.
                                </p>
                                <h5>Moral Stones</h5>
                                <p>
                                Moral Stones refresh at every short rest. Click on an ability in the chart to reveal its description.
                                </p>
                                <h5>Divine Stones</h5>
                                <p>
                                Divine stones do not operate like other stones. They can only be used once and can prove difficult to wield. To wield a divine stone's power, one must select the power level they want to wield at (2-20). They then roll a gemstone saving throw (D20) and add their alignment level to it. If their saving throw is above or equal to the power level number, they will wield the stone successfully at that power level. If not, the power is still unleashed, but not within the control of the wielder. Rolling a 1 is an automatic failure.
                                </p>
                            </OffcanvasBody>
                        </Offcanvas>
                        <table className="table table-hover align-middle">
                            <thead>
                                <tr>
                                    <th scope="col">LVL</th>
                                    <td>lvl 1</td>
                                    <td>lvl 3</td>
                                    <td>lvl 5</td>
                                    <td>lvl 8</td>
                                    <td>lvl 10</td>
                                    <td>lvl 20</td>
                                </tr>
                                <tr className='align-middle'>
                                    <th scope="col">Alignment Pts</th>
                                    <td>2pts</td>
                                    <td>5pts</td>
                                    <td>8pts</td>
                                    <td>10pts</td>
                                    <td>15pts</td>
                                    <td>-</td>
                                </tr>
                            </thead>
                            <tbody>
                                {GEMS[2].topics.map((gem) => (
                                    <tr key={gem.id}>
                                        <th scope='col'>{gem.name} ({gem.quality})</th>
                                        {gem.lvls && (gem.lvls.map((level, index) => (
                                            <td key={index}>{level}</td>
                                        )))}
                                        <td>Combine Modifiers</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='row text-center mb-4'>
                        <h3>Moral Stone Alignment
                            <Button className='text-center info' onClick={alignToggle}>
                                🛈
                            </Button>
                        </h3>
                        <table className="table table-striped align-middle">
                            <thead>
                                <tr>
                                    <th scope="col">LVL</th>
                                    <td>lvl 1</td>
                                    <td>lvl 3</td>
                                    <td>lvl 5</td>
                                    <td>lvl 8</td>
                                    <td>lvl 10</td>
                                    <td>lvl 20</td>
                                </tr>
                                <tr className='align-middle'>
                                    <th scope="col">Alignment Pts</th>
                                    <td>2pts</td>
                                    <td>5pts</td>
                                    <td>8pts</td>
                                    <td>10pts</td>
                                    <td>15pts</td>
                                    <td>-</td>
                                </tr>
                            </thead>
                            <tbody>
                                {GEMS[1].topics.map((gem) => (
                                    <React.Fragment key={gem.id}>
                                        <tr>
                                            <th scope='col' rowSpan='2'>{gem.name} ({gem.quality})</th>
                                            {gem.lvls && (gem.lvls.map((level) => (
                                                <td key={level.id} className='cardinal' onClick={() => abilityInfo(level)}>{level.name}</td>
                                            )))}
                                        </tr>
                                        <tr>
                                            {(gem.lvls.find(level => Object.values(level).includes(detail))) ? (
                                                <td colSpan='6'>
                                                    <em><strong>{title}: </strong>{detail}</em><a onClick={abilityInfoReset}>reset</a>
                                                </td>
                                            ) : (<td colSpan='6'></td>)
                                            }
                                        </tr>
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='row text-center mb-4'>
                        <h3>Divine Stone Alignment
                            <Button className='text-center info' onClick={alignToggle}>
                                🛈
                            </Button>
                        </h3>
                        <table className="table table-hover align-middle">
                            <thead>
                                <tr>
                                    <th scope="col" colSpan='4'>Alignment Level</th>
                                    {lvls.map((power, index) => (
                                        <td key={index}>{power}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <th scope="col" colSpan='4'>Level Modifiers (LVL MOD)</th>
                                    {lvls.map((power, index) => (
                                        <td key={index}>+{power}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <th scope='col' colSpan='4'>PWR LVL Wager / Roll</th>
                                    <td colSpan='22'><strong>1. </strong>Wager a number (2-20). This is your PWR LVL. <strong>2. </strong>Roll D20 + LVL MOD. <strong>3. </strong>If the roll &#8805; PWR LVL, wield ability at PWR LVL</td>
                                </tr>
                                <tr>
                                    <th scope="col" colSpan='2'>Gemstone</th>
                                    <td colSpan='1'>Ability</td>
                                    <td colSpan='21'>Description</td>
                                </tr>
                            </thead>
                            <tbody>
                                {GEMS[0].topics.map((gem) => (
                                    <tr key={gem.id}>
                                        <th scope='col'>{gem.name} ({gem.quality})</th>
                                        <td colSpan='2'>{gem.lvls[0].name}</td>
                                        <td colSpan='21'>{gem.lvls[0].description}</td>
                                    </tr>
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

export default AlignmentChart;