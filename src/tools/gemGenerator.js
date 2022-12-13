import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import { Link } from 'react-router-dom';

const GemGenerator = () => {
    
    const [type, setType] = useState("-");
    const [carat, setCarat] = useState(0);
    const [clarity, setClarity] = useState("-");
    const [color, setColor] = useState("-");
    const [cut, setCut] = useState("-");
    const [value, setValue] = useState(0);
    const [max, setMax] = useState(50);

// Could input number into random function to limit the levels based on group's level
    const random100 = () => {
        return Math.floor( Math.random() * max) + 1;
    }
    const typeRand = () => {
        let typeNum = Math.floor( Math.random() * 27) + 1;
        switch (typeNum) {
            case 1:
                setType("Tourmaline");
                break;
            case 2:
                setType("Obsidian");
                break;
            case 3:
                setType("Aquamarine");
                break;
            case 4:
                setType("Tiger's Eye");
                break;
            case 5:
                setType("Diamond");
                break;
            case 6:
                setType("Citrine");
                break;
            case 7:
                setType("Amethyst");
                break;
            case 8:
                setType("Pyrite");
                break;
            case 9:
                setType("Sapphire");
                break;
            case 10:
                setType("Emerald");
                break;
            case 11:
                setType("Onyx");
                break;
            case 12:
                setType("Turquoise");
                break;
            case 13:
                setType("Ruby");
                break;
            case 14:
                setType("Opal");
                break;
            case 15:
                setType("Topaz");
                break;
            case 16:
                setType("Quartz");
                break;
            case 17:
                setType("Crocoite");
                break;
            case 18:
                setType("Azurite");
                break;
            case 19:
                setType("Rutile");
                break;
            case 20:
                setType("Tanzanite");
                break;
            case 21:
                setType("Jade");
                break;
            case 22:
                setType("Shungite");
                break;
            case 23:
                setType("Chryscocolla");
                break;
            case 24:
                setType("Jasper");
                break;
            case 25:
                setType("Bismuth");
                break;
            case 26:
                setType("Amber");
                break;
            case 27:
                setType("Whitestone");
                break;
            default:
                setType("Unknown");
        }
    }
    const caratRand = () => {
        let caratNum = random100() / 10;
        setCarat(Math.round(caratNum * 4) / 4);
        setValue((value) => value + (carat * 100));
    }
    const clarityRand = () => {
        let clarityNum = random100();
        setValue((value) => value + (100 - clarityNum) * 3);
        if(clarityNum === 1) {
            setClarity("FL");
        } else if (clarityNum <= 3) {
            setClarity("VVS1");
        } else if (clarityNum <= 6) {
            setClarity("VVS2");
        } else if (clarityNum <= 11) {
            setClarity("VS1");
        } else if (clarityNum <= 18) {
            setClarity("VS2");
        } else if (clarityNum <= 27) {
            setClarity("SI1");
        } else if (clarityNum <= 38) {
            setClarity("SI2");
        } else if (clarityNum <= 51) {
            setClarity("SI3");
        } else if (clarityNum <= 66) {
            setClarity("I1");
        } else if (clarityNum <= 83) {
            setClarity("I2");
        } else {
            setClarity("I3");
        }
    }
    const colorRand = () => {
        let colorNum = random100();
        setValue((value) => value + (100 - colorNum) * 3);
        if(colorNum === 1) {
            setColor("D");
        } else if (colorNum <= 3) {
            setColor("E");
        } else if (colorNum <= 5) {
            setColor("F");
        } else if (colorNum <= 8) {
            setColor("G");
        } else if (colorNum <= 11) {
            setColor("H");
        } else if (colorNum <= 14) {
            setColor("I");
        } else if (colorNum <= 17) {
            setColor("J");
        } else if (colorNum <= 21) {
            setColor("K");
        } else if (colorNum <= 25) {
            setColor("L");
        } else if (colorNum <= 30) {
            setColor("M");
        } else if (colorNum <= 35) {
            setColor("N");
        } else if (colorNum <= 40) {
            setColor("O");
        } else if (colorNum <= 45) {
            setColor("P");
        } else if (colorNum <= 50) {
            setColor("Q");
        } else if (colorNum <= 55) {
            setColor("R");
        } else if (colorNum <= 61) {
            setColor("S");
        } else if (colorNum <= 67) {
            setColor("T");
        } else if (colorNum <= 73) {
            setColor("U");
        } else if (colorNum <= 79) {
            setColor("V");
        } else if (colorNum <= 85) {
            setColor("W");
        } else if (colorNum <= 91) {
            setColor("X");
        } else if (colorNum <= 97) {
            setColor("Y");
        } else {
            setColor("Z");
        }
    }
    const cutRand = () => {
        let cutNum = random100();
        if(cutNum <= 25) {
            setCut("Uncut");
            setValue((value) => value - 50);
        } else if (cutNum <= 33) {
            setCut("Round");
        } else if (cutNum <= 41) {
            setCut("Princess");
        } else if (cutNum <= 49) {
            setCut("Oval");
        } else if (cutNum <= 57) {
            setCut("Marquise");
        } else if (cutNum <= 65) {
            setCut("Emerald");
        } else if (cutNum <= 73) {
            setCut("Pear");
        } else if (cutNum <= 81) {
            setCut("Asscher");
        } else if (cutNum <= 89) {
            setCut("Cushion");
        } else if (cutNum <= 95) {
            setCut("Trillion");
        } else {
            setCut("Radiant");
        }
    }
    const gemRand = () => {
        setValue(0);
        typeRand();
        clarityRand();
        caratRand();
        colorRand();
        cutRand();
        console.log(`${type} | ${clarity} | ${carat} | ${color} | ${cut} | $${value}`);
    }

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const reset = () => {
        setType("-");
        setCarat(0);
        setClarity("-");
        setColor("-");
        setCut("-");
        setMax(50);
        setValue(0);
        toggle();
    }

    const valuer = (event) => {
        const caratNum = event.target.value;
        setValue((value) => value - (carat * 100));
        setCarat(caratNum);
        setValue((value) => value + (carat * 100));
    }

    const slider = (event) => {
        const sliderNum = event.target.value;
        setMax(sliderNum);
        console.log(max);
    }

    return (
        <div className="col-lg-4">
            <Link className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3"  onClick={toggle}>
                <i className="iconify fs-2" data-icon="twemoji:gem-stone"></i>
                <div className="ms-3">
                    <div className="d-flex align-items-center">
                        <h3 className="mb-0">Gem Generator</h3>
                    </div>
                </div>
            </Link>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}><i className="iconify fs-2" data-icon="twemoji:gem-stone"></i> Gem Generator</ModalHeader>
                <ModalBody>
                    <div className='box container'>
                        <div className='row pb-3'>
                            <h4 className='col text-start'>Level: {(max/5)} </h4>
                            <input type="range" min='1' max='100' value={max} onChange={slider} className='col slider' />
                        </div>
                        <div className='row'>
                            <h4 className='col text-start'>Stone: </h4>
                            <input type="text" className='col' value={type} readOnly />
                        </div>
                        <div className='row'>
                            <h4 className='col text-start'>Carat: </h4>
                            <input className='col' value={carat} onChange={valuer} />
                        </div>
                        <div className='row'>
                            <h4 className='col text-start'>Clarity: </h4>
                            <input className='col' value={clarity} readOnly />
                        </div>
                        <div className='row'>
                            <h4 className='col text-start'>Color: </h4>
                            <input className='col' value={color} readOnly />
                        </div>
                        <div className='row'>
                            <h4 className='col text-start'>Cut: </h4>
                            <input className='col' value={cut} readOnly />
                        </div>
                        <div className='row'>
                            <h4 className='col text-start'>Value: </h4>
                            <input className='col' value={`$ ${value}`} readOnly />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={gemRand} >
                    Calculate
                </Button>{' '}
                <Button color="secondary" onClick={reset}>
                    Cancel
                </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default GemGenerator;