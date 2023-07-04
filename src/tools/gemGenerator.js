import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
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
import uncut2 from '../assets/imgs/gems/cut/uncut2.png';
import uncut3 from '../assets/imgs/gems/cut/uncut3.png';
import uncut4 from '../assets/imgs/gems/cut/uncut4.png';

const GemGenerator = () => {
    
    const [type, setType] = useState("");
    const [carat, setCarat] = useState(0);
    const [clarity, setClarity] = useState("");
    const [color, setColor] = useState("");
    const [cut, setCut] = useState("");
    const [cutImg, setCutImg] = useState();
    const [value, setValue] = useState(0);
    const [max, setMax] = useState(25);

    const gemTypes = ["Tourmaline", "Celestite", "Obsidian", "Aquamarine", "Tiger's Eye", "Diamond", "Citrine", "Amethyst", "Pyrite", "Sapphire", "Emerald", "Onyx", "Turquoise", "Ruby", "Opal", "Topaz", "Quartz", "Crocoite", "Azurite", "Rutile", "Tanzanite", "Jade", "Shungite", "Chryscocolla", "Jasper", "Bismuth", "Amber", "Whitestone"];

    const gemClarity = ["FL", "VVS1", "VVS2", "VS1", "VS2", "SI1", "SI2", "SI3", "I1", "I2", "I3"];

    const gemColor = ["D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    const gemCut = ["Uncut", "Brilliant", "Cushion", "Emerald", "Island", "Lozenge", "Marquise", "Oval", "Pear", "Peruzzi", "Portuguese", "Princess", "Radiant", "Single", "Trillion"];

    const uncutArray = [uncut1, uncut2, uncut3, uncut4];

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
                // 120deg
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
                setType("Jet");
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
        if(clarityNum === 1) setClarity("FL");
        else if (clarityNum <= 3) setClarity("VVS1");
        else if (clarityNum <= 6) setClarity("VVS2");
        else if (clarityNum <= 11) setClarity("VS1");
        else if (clarityNum <= 18) setClarity("VS2");
        else if (clarityNum <= 27) setClarity("SI1");
        else if (clarityNum <= 38) setClarity("SI2");
        else if (clarityNum <= 51) setClarity("SI3");
        else if (clarityNum <= 66) setClarity("I1");
        else if (clarityNum <= 83) setClarity("I2");
        else setClarity("I3");
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
        let cutNum = Math.floor( Math.random() * 100) + 1;
        if(cutNum <= 25) {
            setCut("Uncut");
            setValue((value) => value - 50);
            setCutImg(uncutArray[Math.floor(Math.random() * 3) + 1]);
        } else if (cutNum <= 30) {
            setCut("Brilliant");
            setCutImg(brilliant);
        } else if (cutNum <= 35) {
            setCut("Cushion");
            setCutImg(cushion);
        } else if (cutNum <= 40) {
            setCut("Emerald");
            setCutImg(emeraldCut);
        } else if (cutNum <= 45) {
            setCut("Island");
            setCutImg(french);
        } else if (cutNum <= 50) {
            setCut("Lozenge");
            setCutImg(lozenge);
        } else if (cutNum <= 55) {
            setCut("Marquise");
            setCutImg(marquise);
        } else if (cutNum <= 60) {
            setCut("Oval");
            setCutImg(oval);
        } else if (cutNum <= 65) {
            setCut("Pear");
            setCutImg(pear);
        } else if (cutNum <= 70) {
            setCut("Peruzzi");
            setCutImg(peruzzi);
        } else if (cutNum <= 75) {
            setCut("Portuguese");
            setCutImg(portuguese);
        } else if (cutNum <= 80) {
            setCut("Princess");
            setCutImg(princess);
        } else if (cutNum <= 85) {
            setCut("Radiant");
            setCutImg(radiant);
        } else if (cutNum <= 92) {
            setCut("Single");
            setCutImg(single);
        } else {
            setCut("Trillion");
            setCutImg(trillion);
        }
    }
    const gemRand = () => {
        setValue(0);
        typeRand();
        clarityRand();
        caratRand();
        colorRand();
        cutRand();
    }
    
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const reset = () => {
        setType("");
        setCarat(0);
        setClarity("");
        setColor("");
        setCut("");
        setMax(25);
        setValue(0);
        toggle();
        console.clear();
    }

    const slider = (event) => {
        const sliderNum = event.target.value;
        setMax(sliderNum);
    }
    const typeValuer = (event) => {
        const typeVal = event.target.value;
        setType(typeVal);
    }
    const caratValuer = (event) => {
        const caratVal = event.target.value;
        setValue((value) => value - (carat * 100) + (caratVal * 100));
        setCarat(caratVal);
    }
    const clarityValuer = (event) => {
        const clarityVal = event.target.value;
        function clarityNum(val) {
            if (val === "FL") return 1;
            else if (val === "VVS1") return 3;
            else if (val === "VVS2") return 6;
            else if (val === "VS1") return 11;
            else if (val === "VS2") return 18;
            else if (val === "SI1") return 27;
            else if (val === "SI2") return 38;
            else if (val === "SI3") return 51;
            else if (val === "I1") return 66;
            else if (val === "I2") return 83;
            else if (val === "I3") return 90;
            else return 100;
        }
        setValue((value) => value - ((100 - clarityNum(clarity)) * 3) + ((100 - clarityNum(clarityVal)) * 3));
        setClarity(clarityVal);
    }
    const colorValuer = (event) => {
        const colorVal = event.target.value;
        function colorNum(val) {
            if (val === "D") return 1;
            else if (val === "E") return 3;
            else if (val === "F") return 5;
            else if (val === "G") return 8;
            else if (val === "H") return 11;
            else if (val === "I") return 14;
            else if (val === "J") return 17;
            else if (val === "K") return 21;
            else if (val === "L") return 25;
            else if (val === "M") return 30;
            else if (val === "N") return 35;
            else if (val === "O") return 40;
            else if (val === "P") return 45;
            else if (val === "Q") return 50;
            else if (val === "R") return 55;
            else if (val === "S") return 61;
            else if (val === "T") return 67;
            else if (val === "U") return 73;
            else if (val === "V") return 79;
            else if (val === "W") return 85;
            else if (val === "X") return 91;
            else if (val === "Y") return 97;
            else if (val === "Z") return 99;
            else return 100;
        }
        setValue((value) => value - ((100 - colorNum(color)) * 3) + ((100 - colorNum(colorVal)) * 3));
        setColor(colorVal);
    }
    const cutValuer = (event) => {
        const cutVal = event.target.value;
        function cutNum(val) {
            if (val.toLowerCase() === "uncut") return 50;
            else return 0;
        }
        if (cutVal.toLowerCase() === "brilliant") setCutImg(brilliant);
        else if (cutVal.toLowerCase() === "cushion") setCutImg(cushion);
        else if (cutVal.toLowerCase() === "emerald") setCutImg(emeraldCut);
        else if (cutVal.toLowerCase() === "island") setCutImg(french);
        else if (cutVal.toLowerCase() === "lozenge") setCutImg(lozenge);
        else if (cutVal.toLowerCase() === "marquise") setCutImg(marquise);
        else if (cutVal.toLowerCase() === "oval") setCutImg(oval);
        else if (cutVal.toLowerCase() === "pear") setCutImg(pear);
        else if (cutVal.toLowerCase() === "peruzzi") setCutImg(peruzzi);
        else if (cutVal.toLowerCase() === "portuguese") setCutImg(portuguese);
        else if (cutVal.toLowerCase() === "princess") setCutImg(princess);
        else if (cutVal.toLowerCase() === "radiant") setCutImg(radiant);
        else if (cutVal.toLowerCase() === "single") setCutImg(single);
        else if (cutVal.toLowerCase() === "trillion") setCutImg(trillion);
        else setCutImg(uncutArray[Math.floor(Math.random() * 3) + 1]);;

        setValue((value) => value + (cutNum(cut)) - (cutNum(cutVal)));
        setCut(cutVal);
    }
    
    return (
        <div className="col-lg-4">
            <Link className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3"  onClick={toggle}>
                <i className="iconify fs-2" data-icon="noto:gem-stone"></i>
                <div className="ms-3">
                    <div className="d-flex align-items-center">
                        <h3 className="mb-0">Gem Calculator</h3>
                    </div>
                </div>
            </Link>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}><i className="iconify fs-2" data-icon="noto:gem-stone"></i> Gem Calculator</ModalHeader>
                <ModalBody>
                    <div className='box container'>
                        <div className='row pb-3'>
                            <h4 className='col text-start'>Level: {(max/5)} </h4>
                            <input type="range" min='1' max='100' value={max} onChange={slider} className='col slider' />
                        </div>
                        <div className='row'>
                            <h4 className='col text-start'>Stone: </h4>
                            <input list="gemTypes" type="text" className='col' value={type} onChange={typeValuer} />
                            <datalist id="gemTypes">
                                {gemTypes.map((e, key) => {
                                    return <option key={key} value={e} />
                                })}
                            </datalist>
                        </div>
                        <div className='row'>
                            <h4 className='col text-start'>Carat: </h4>
                            <input className='col' value={carat} onChange={caratValuer} />
                        </div>
                        <div className='row'>
                            <h4 className='col text-start'>Clarity: </h4>
                            <input list="gemClarity" className='col' value={clarity} onChange={clarityValuer} />
                            <datalist id="gemClarity">
                                {gemClarity.map((e, key) => {
                                    return <option key={key} value={e} />
                                })}
                            </datalist>
                        </div>
                        <div className='row'>
                            <h4 className='col text-start'>Color: </h4>
                            <input list="gemColor" className='col' value={color} onChange={colorValuer} />
                            <datalist id="gemColor">
                                {gemColor.map((e, key) => {
                                    return <option key={key} value={e} />
                                })}
                            </datalist>
                        </div>
                        <div className='row'>
                            <h4 className='col text-start'>Cut: </h4>
                            <input list="gemCut" className='col' value={cut} onChange={cutValuer} />
                            <datalist id="gemCut">
                                {gemCut.map((e, key) => {
                                    return <option key={key} value={e} />
                                })}
                            </datalist>
                        </div>
                        <div className='row'>
                            <h4 className='col text-start'>Cost: </h4>
                            <input className='col' value={`$ ${value}`} readOnly />
                        </div>
                        {cut && gemCut.includes(cut) && (
                        <div id='img-holder'>
                            <img className='pt-2' id="gem-img" src={cutImg} style={{width:'150px'}} alt="gem-cut-img"/>
                        </div>
                        )}
                    </div>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={gemRand} >
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

export default GemGenerator;