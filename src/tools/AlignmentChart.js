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
import { DGEMS } from '../assets/shared/DGEMS';

const AlignmentChart = (props) => {
    
    // const gemPoints20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20];
    const gemPoints40 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, '...', 30, '...', 40];
    const gemClarity = ["I", "I3", "I2", "I1", "SI3", "SI2", "SI1", "VS2", "VS1", "VVS2", "VVS1", "FL"];
    const gemColor = ["Z","Y","X","W","V","U","T","S","R","Q","P","O","N","M","L","K","J","I","H","G","F","E","D",""];
    const gemCarat = [0.05, 0.1, 0.15, 0.2, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 2.75, 3, 3.25, 3.5, '...', 4.75, '...', 6];
    const lvls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    //const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');

    const abilityInfo = (e) => {
        if(e.description === detail) {
            abilityInfoReset();
        } else {
            //setTitle(e.name);
            setDetail(e.description);
        }
    }

    const abilityInfoReset = () => {
        //setTitle("");
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

    const [gem, setGem] = useState({
        lvl: 1,
        carat: 0.1,
        containmentPts: 2,
        color: "Z",
        clarity: "I",
        outputPts: 1,
    });

    const handleClarity = (clarity) => {
        let alignPts, _color;
        switch (clarity) {
            case "I":
                alignPts = 1;
                _color = "Z";
                break;
            case "I3":
                alignPts = 3;
                _color = "X";
                break;
            case "I2":
                alignPts = 5;
                _color = "V";
                break;
            case "I1":
                alignPts = 7;
                _color = "T";
                break;
            case "SI3":
                alignPts = 9;
                _color = "R";
                break;
            case "SI2":
                alignPts = 11;
                _color = "P";
                break;
            case "SI1":
                alignPts = 13;
                _color = "N";
                break;
            case "VS2":
                alignPts = 15;
                _color = "L";
                break;
            case "VS1":
                alignPts = 17;
                _color = "J";
                break;
            case "VVS2":
                alignPts = 19;
                _color = "H";
                break;
            case "VVS1":
                alignPts = 25;
                _color = "F";
                break;
            case "FL":
                alignPts = 35;
                _color = "D";
                break;
            default:
                break;
        }
        setGem({
            ...gem,
            outputPts: alignPts,
            clarity: clarity,
            color: _color,
        });
    }

    const handleCarat = (carat) => {
        let alignPts, _lvl;
        switch (carat) {
            case 0.05:
                alignPts = 1;
                _lvl = 1;
                break;
            case 0.1:
                alignPts = 2;
                _lvl = 1;
                break;
            case 0.15:
                alignPts = 3;
                _lvl = 2;
                break;
            case 0.2:
                alignPts = 4;
                _lvl = 2;
                break;
            case 0.25:
                alignPts = 5;
                _lvl = 3;
                break;
            case 0.35:
                alignPts = 6;
                _lvl = 3;
                break;
            case 0.45:
                alignPts = 7;
                _lvl = 4;
                break;
            case 0.55:
                alignPts = 8;
                _lvl = 4;
                break;
            case 0.65:
                alignPts = 9;
                _lvl = 5;
                break;
            case 0.75:
                alignPts = 10;
                _lvl = 5;
                break;
            case 1:
                alignPts = 11;
                _lvl = 6;
                break;
            case 1.25:
                alignPts = 12;
                _lvl = 6;
                break;
            case 1.5:
                alignPts = 13;
                _lvl = 7;
                break;
            case 1.75:
                alignPts = 14;
                _lvl = 7;
                break;
            case 2:
                alignPts = 15;
                _lvl = 8;
                break;
            case 2.5:
                alignPts = 16;
                _lvl = 8;
                break;
            case 2.75:
                alignPts = 17;
                _lvl = 9;
                break;
            case 3:
                alignPts = 18;
                _lvl = 9;
                break;
            case 3.25:
                alignPts = 19;
                _lvl = 10;
                break;
            case 3.5:
                alignPts = 20;
                _lvl = 10;
                break;
            case 4.75:
                alignPts = 30;
                _lvl = 15;
                break;
            case 6:
                alignPts = 40;
                _lvl = 20;
                break;
            default:
                break;
        }
        setGem({
            ...gem,
            containmentPts: alignPts,
            carat: carat,
            lvl: _lvl,
        });
    }

    const reset = () => {
        toggle();
        setDetail("");
        setGem({
            lvl: 1,
            carat: 0.1,
            containmentPts: 2,
            color: "Z",
            clarity: "I",
            outputPts: 1,
        });
        console.clear();
    }

    return (
        <div className="col-lg-4"> 
            {props.loc === 'toolPage' ? (
                <Link className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3"  onClick={toggle}>
                    <i className="iconify fs-2" data-icon="twemoji:gem-stone"></i>
                    <div className="ms-3">
                        <div className="d-flex align-items-center">
                            <h3 className="mb-0">Gem Chart</h3>
                        </div>
                    </div>
                </Link>
            ) : props.loc === 'charCreate' ? (
                <button type="button" className="d-flex btn rounded-circle" onClick={toggle}>
                    <i className="uil uil-info-circle"></i>
                </button>
            ) : ('')}
            <Modal isOpen={modal} toggle={toggle} fullscreen>
                <ModalHeader toggle={toggle}><i className="iconify fs-2" data-icon="twemoji:gem-stone"></i> Gem Chart</ModalHeader>
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
                        <div className='row text-center'>
                            <h5 className='col'><strong>CARAT: {gem.carat}</strong></h5>
                            <p className='col'>Req. Level: {gem.lvl}</p>
                            <p className='col'>Containment Pts: {gem.containmentPts}</p>
                            <h5 className='col'><strong>CLARITY: {gem.clarity}</strong></h5>
                            <p className='col'>Req. Color: {gem.color}</p>
                            <p className='col'>Output Pts: {gem.outputPts}</p>
                        </div>
                        <div className='row text-center'>
                        </div>
                        <table className="table table-hover table-responsive table-striped align-middle">
                            <thead>
                                <tr>
                                    <th colSpan="25">MAX Power &#40;Pts&#41; Containment</th>
                                </tr>
                                <tr>
                                    <th scope='col'>Alignment Pts</th>
                                    {gemPoints40.map((point, index) => (
                                        <td scope='col' key={index}>{point}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <th scope="col">Req. LVL</th>
                                    <td colSpan="2 table-active">lvl 1</td>
                                    <td colSpan="2">lvl 2</td>
                                    <td colSpan="2">lvl 3</td>
                                    <td colSpan="2">lvl 4</td>
                                    <td colSpan="2">lvl 5</td>
                                    <td colSpan="2">lvl 6</td>
                                    <td colSpan="2">lvl 7</td>
                                    <td colSpan="2">lvl 8</td>
                                    <td colSpan="2">9</td>
                                    <td colSpan="2">10</td>
                                    <td colSpan="2">15</td>
                                    <td colSpan="2">20</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="col">Carat</th>
                                    {gemCarat.map((carat, index) => (
                                        <React.Fragment key={index}>
                                            {carat === gem.carat? (
                                                <td className='cardinal bg-secondary text-light' onClick={() => handleCarat(carat)}>
                                                    {carat}
                                                </td>
                                            ) : (
                                                <td className='cardinal' onClick={() => handleCarat(carat)}>
                                                    {carat}
                                                </td>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </tr>
                            </tbody>
                            <thead>
                                <tr>
                                    <th colSpan="25">MAX Power &#40;Pts&#41; Output </th>
                                </tr>
                                <tr>
                                    <th scope='col'>Alignment Pts</th>
                                    {gemPoints40.map((point, index) => (
                                        <td colSpan='' key={index}>{point}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <th scope='col'>Req. Color</th>
                                    {gemColor.map((color, index) => (
                                        <td key={index}>{color}</td>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope='col'>Clarity</th>
                                    {gemClarity.map((clar, index) => (
                                        <React.Fragment key={index}>
                                            {clar === gem.clarity ? (
                                                <td 
                                                    className='cardinal bg-secondary text-light' 
                                                    onClick={() => handleClarity(clar)}
                                                    colSpan='2'
                                                >
                                                    {clar}
                                                </td>
                                            ) : (
                                                <td colSpan='2' className='cardinal' onClick={() => handleClarity(clar)}>
                                                    {clar}
                                                </td>
                                            )}
                                        </React.Fragment>
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
                                <h5>Unbound Stones</h5>
                                <p>Unbound stones are the cardinal stones when unbound by the other stones. Unbound, they are at the height of their power, but it comes at a price. Not only do the stones go against DIA, but they prevent a person from aligning with any other stone.</p>
                                <h5>Dark Stones</h5>
                                <p>Dark stones are cardinal stones in their darkened state and are their antithesis. They produce the opposite qualities, qualities, which oppose DIA.</p>
                                <p></p>
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
                                                <React.Fragment key={level.id}>
                                                    {level.description === detail ? (
                                                        <td className='cardinal bg-secondary text-light' onClick={() => abilityInfo(level)}>
                                                            {level.name}
                                                        </td>
                                                    ) : (
                                                        <td className='cardinal' onClick={() => abilityInfo(level)}>{level.name}</td>
                                                    )}
                                                </React.Fragment>
                                            )))}
                                        </tr>
                                        <tr>
                                            {(gem.lvls.find(level => Object.values(level).includes(detail))) ? (
                                                <td colSpan='6'><em>{detail}</em></td>
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
                    <div className='row text-center mb-4'>
                        <h3>Unbound Stone Alignment
                            <Button className='text-center info' onClick={alignToggle}>
                                🛈
                            </Button>
                        </h3>
                        <table className="table table-dark text-light table-striped align-middle">
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
                            {/* UNBOUND GEMS */}
                            <tbody className=''>
                                {DGEMS[0].topics.map((gem) => (
                                    <React.Fragment key={gem.id}>
                                        <tr>
                                            <th scope='col' rowSpan='2'>{gem.name} ({gem.quality})</th>
                                            {gem.lvls && (gem.lvls.map((level) => (
                                                <td key={level.id} className='cardinal' onClick={() => abilityInfo(level)}>
                                                    {level.description === detail ? (<span className='text-warning'>{level.name}</span>) : (<span>{level.name}</span>)}
                                                </td>
                                            )))}
                                        </tr>
                                        <tr>
                                            {(gem.lvls.find(level => Object.values(level).includes(detail))) ? (
                                                <td colSpan='6'><em>{detail}</em></td>
                                            ) : (<td colSpan='6'></td>)
                                            }
                                        </tr>
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='row text-center mb-4'>
                        <h3>Dark Stone Alignment
                            <Button className='text-center info' onClick={alignToggle}>
                                🛈
                            </Button>
                        </h3>
                        <table className="table table-dark text-light table-striped align-middle">
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
                            {/* DARK GEMS */}
                            <tbody className=''>
                                {DGEMS[1].topics.map((gem) => (
                                    <React.Fragment key={gem.id}>
                                        <tr>
                                            <th scope='col' rowSpan='2'>{gem.name} ({gem.quality})</th>
                                            {gem.lvls && (gem.lvls.map((level) => (
                                                <td key={level.id} className='cardinal' onClick={() => abilityInfo(level)}>
                                                    {level.description === detail ? (<span className='text-danger'>{level.name}</span>) : (<span>{level.name}</span>)}
                                                </td>
                                            )))}
                                        </tr>
                                        <tr>
                                            {(gem.lvls.find(level => Object.values(level).includes(detail))) ? (
                                                <td colSpan='6'><em>{detail}</em></td>
                                                ) : (<td colSpan='6'></td>)
                                            }
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

export default AlignmentChart;