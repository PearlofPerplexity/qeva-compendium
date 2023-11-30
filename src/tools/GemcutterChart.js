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
import brilliant from '../assets/imgs/gems/cut/brilliant.png';
import cushion from '../assets/imgs/gems/cut/cushion.png';
import emeraldCut from '../assets/imgs/gems/cut/emerald-cut.png';
import french from '../assets/imgs/gems/cut/french.png';
import lozenge from '../assets/imgs/gems/cut/lozenge.png';
import marquise from '../assets/imgs/gems/cut/marquise.png';
import oval from '../assets/imgs/gems/cut/oval.png';
import pear from '../assets/imgs/gems/cut/pear.png';
import peruzzi from '../assets/imgs/gems/cut/peruzzi.png';
import portuguese from '../assets/imgs/gems/cut/portuguese.png';
import princess from '../assets/imgs/gems/cut/princess.png';
import radiant from '../assets/imgs/gems/cut/radiant.png';
import single from '../assets/imgs/gems/cut/single.png';
import trillion from '../assets/imgs/gems/cut/trillion.png';
import uncut1 from '../assets/imgs/gems/cut/uncut1.png';

const gemClarity = ["FL", "VVS1", "VVS2", "VS1", "VS2", "SI1", "SI2", "SI3", "I1", "I2", "I3"];

const gemColor = ["D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const gemCuts = [
    {
        id: 0,
        name: 'Polished',
        image: uncut1,
        dc: 5,
        daysToCut: 1,
        price: 25,
        containment: 0,
        output: 1
    },
    {
        id: 1,
        name: 'Brilliant',
        image: brilliant,
        dc: 16,
        daysToCut: 30,
        price: 475,
        containment: 6,
        output: 3
    },
    {
        id: 2,
        name: 'Cushion',
        image: cushion,
        dc: 16,
        daysToCut: 30,
        price: 460,
        containment: 10,
        output: 1
    },
    {
        id: 3,
        name: 'Emerald',
        image: emeraldCut,
        dc: 12,
        daysToCut: 14,
        price: 260,
        containment: 2,
        output: 2
    },
    {
        id: 4,
        name: 'Island',
        image: french,
        dc: 14,
        daysToCut: 7,
        price: 210,
        containment: 4,
        output: 2
    },
    {
        id: 5,
        name: 'Lozenge',
        image: lozenge,
        dc: 12,
        daysToCut: 10,
        price: 222,
        containment: 4,
        output: 1
    },
    {
        id: 6,
        name: 'Marquise',
        image: marquise,
        dc: 16,
        daysToCut: 35,
        price: 510,
        containment: 4,
        output: 4
    },
    {
        id: 7,
        name: 'Oval',
        image: oval,
        dc: 16,
        daysToCut: 35,
        price: 500,
        containment: 8,
        output: 2
    },
    {
        id: 8,
        name: 'Pear',
        image: pear,
        dc: 16,
        daysToCut: 25,
        price: 425,
        containment: 2,
        output: 5
    },
    {
        id: 9,
        name: 'Peruzzi',
        image: peruzzi,
        dc: 18,
        daysToCut: 40,
        price: 580,
        containment: 6,
        output: 5
    },
    {
        id: 10,
        name: 'Portuguese',
        image: portuguese,
        dc: 20,
        daysToCut: 60,
        price: 1500,
        containment: 10,
        output: 5
    },
    {
        id: 11,
        name: 'Princess',
        image: princess,
        dc: 18,
        daysToCut: 40,
        price: 725,
        containment: 10,
        output: 3
    },
    {
        id: 12,
        name: 'Radiant',
        image: radiant,
        dc: 18,
        daysToCut: 40,
        price: 690,
        containment: 8,
        output: 4
    },
    {
        id: 13,
        name: 'Single',
        image: single,
        dc: 10,
        daysToCut: 7,
        price: 100,
        containment: 2,
        output: 1
    },
    {
        id: 14,
        name: 'Trillion',
        image: trillion,
        dc: 18,
        daysToCut: 25,
        price: 450,
        containment: 4,
        output: 6
    }
];

const GemcutterChart = (props) => {
        
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [info, setInfo] = useState(false);
    const infoToggle = () => setInfo(!info);

    const [cuts, setCuts] = useState(gemCuts);
    const [curProp, setCurProp] = useState();
    const [filter, setFilter] = useState(false);
    const filterToggle = () => setFilter(!filter);

    const sortByValue = (property) => {
        let newCuts;
        if (property === curProp) {
            if (filter) {
                newCuts = cuts.sort((a, b) => b[property] - a[property]);
            } else {
                newCuts = cuts.sort((a, b) => a[property] - b[property]);
            }
            filterToggle();
        } else {
            newCuts = cuts.sort((a, b) => b[property] - a[property]);
            setFilter(false);
        }
        setCurProp(property);
        setCuts(newCuts);
    }

    const reset = () => {
        toggle();
        setInfo(false);
        setFilter(false);
        setCuts(gemCuts);
        console.clear();
    }

    return (
        <div className="col-lg-4">
            {props.loc === 'toolPage' ? (
                <Link className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3"  onClick={toggle}>
                    <i className="iconify fs-2" data-icon="fxemoji:ring"></i>
                    <div className="ms-3">
                        <div className="d-flex align-items-center">
                            <h3 className="mb-0">Gemcutter Chart</h3>
                        </div>
                    </div>
                </Link>
            ) : props.loc === 'classChart' ? (
                <button type="button" className="btn rounded-circle" onClick={toggle}>
                    <i className="uil uil-info-circle"></i>
                </button>
            ) : ('')}
            <Modal isOpen={modal} toggle={toggle} fullscreen>
                <ModalHeader toggle={toggle}><i className="iconify fs-2" data-icon="fxemoji:ring"></i> Gemcutting Chart</ModalHeader>
                <ModalBody>
                <div className='container'>
                    <div className='row text-center mb-4'>
                        <h3>Gemcutting Upgrades
                            <Button className='text-center info' onClick={infoToggle}>
                                🛈
                            </Button>                            
                        </h3>
                        <p>Each upgrade, select 3 of the following:</p>
                        <Offcanvas isOpen={info} toggle={infoToggle} direction={'end'}>
                            <OffcanvasHeader toggle={infoToggle}>
                            Gemcutting
                            </OffcanvasHeader>
                            <OffcanvasBody>
                                <p>
                                This table includes a list of all cuts taught in the gemcutter trade.
                                </p>
                            </OffcanvasBody>
                        </Offcanvas>
                        <table className="table table-hover table-sticky align-middle">
                            <thead>
                                <tr className='align-middle'>
                                    <td>New Cut</td>
                                    <td>Skill Development</td>
                                    <td>Expediency</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='align-middle'>
                                    <td>
                                        Select or invent <strong>1 additional cut</strong> to craft.
                                    </td>
                                    <td><strong>-2 DC</strong> to a currently mastered cut.</td>
                                    <td><strong>-10 days </strong> to cut a currently mastered cut. </td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>Types of Cuts</h3>
                        <table className="table table-hover table-sticky align-middle">
                            <thead>
                                <tr className='align-middle'>
                                    <td>♢</td>
                                    <th>Name</th>
                                    <td>
                                        <a onClick={() => sortByValue('dc')}>
                                            Quality (DC) ⇅
                                        </a>
                                    </td>
                                    <td>
                                        <a onClick={() => sortByValue('daysToCut')}>
                                            Days to Cut ⇅
                                        </a>
                                    </td>
                                    <td>
                                        <a onClick={() => sortByValue('price')}>
                                            Price ⇅
                                        </a>
                                    </td>
                                    <td>
                                        <a onClick={() => sortByValue('containment')}>
                                            Containment ⇅
                                        </a>
                                    </td>
                                    <td>
                                        <a onClick={() => sortByValue('output')}>
                                            Output ⇅
                                        </a>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {cuts.map(gem => (
                                    <React.Fragment key={gem.id}>
                                        <tr className='align-middle'>
                                            <th><img src={gem.image} className='card-img' style={{width: '50px'}} /></th>
                                            <th>{gem.name}</th>
                                            <td>{gem.dc}</td>
                                            <td>{gem.daysToCut}</td>
                                            <td>{gem.price}</td>
                                            <td>+{gem.containment}</td>
                                            <td>+{gem.output}</td>
                                        </tr>
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                        <p>* Every time you attempt a new cut, the carat drops one level</p>
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

export default GemcutterChart;