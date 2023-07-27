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
    //const [max, setMax] = useState(25);
    const [lvl, setLvl] = useState(5);
    const [maxPower, setMaxPower] = useState({
        maxPwrCon: 14, // MAX POWER CONTAINMENT
        maxPwrOut: 0, // MAX POWER OUTPUT
        caratPts: 0,
        clarityPts: 0,
        colorPts: 0,
        cutPtCon: 0,
        cutPtOut: 0,
    });
    const maxPwrArray = {
        caratPts: 0,
        clarityPts: 0,
        colorPts: 0,
        cutPtCon: 0,
        cutPtOut: 0,
    };
    const [lvlQualified, setLvlQualified] = useState(true);

    const gemTypes = ["Tourmaline", "Celestite", "Obsidian", "Aquamarine", "Tiger's Eye", "Diamond", "Citrine", "Amethyst", "Pyrite", "Sapphire", "Emerald", "Onyx", "Turquoise", "Ruby", "Opal", "Topaz", "Quartz", "Crocoite", "Azurite", "Rutile", "Tanzanite", "Jade", "Shungite", "Chryscocolla", "Jasper", "Bismuth", "Amber", "Whitestone"];

    const gemClarity = ["FL", "VVS1", "VVS2", "VS1", "VS2", "SI1", "SI2", "SI3", "I1", "I2", "I3"];

    const gemColor = ["D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    const gemCut = ["Uncut", "Brilliant", "Cushion", "Emerald", "Island", "Lozenge", "Marquise", "Oval", "Pear", "Peruzzi", "Portuguese", "Princess", "Radiant", "Single", "Trillion"];

    const uncutArray = [uncut1, uncut2, uncut3, uncut4];

    const random100 = () => {
        //return Math.floor( Math.random() * max) + 1;
        return Math.floor( Math.random() * 100) + 1;
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
        let caratInput = Math.round(caratNum * 4) / 4;
        if (caratInput === 0) caratInput = 0.01;
        setCarat(caratInput);
        setValue((value) => value + (carat * 100));
        //Set the Carat MAX POWER OUTPUT
        maxCaratPowerValuer(caratInput);
    }
    const clarityRand = () => {
        let clarityNum = random100();
        let clarityVal;
        setValue((value) => value + (100 - clarityNum) * 3);
        if(clarityNum === 1) setClarity("FL");
        else if (clarityNum <= 3) clarityVal = "VVS1";
        else if (clarityNum <= 6) clarityVal = "VVS2";
        else if (clarityNum <= 11) clarityVal = "VS1";
        else if (clarityNum <= 18) clarityVal = "VS2";
        else if (clarityNum <= 27) clarityVal = "SI1";
        else if (clarityNum <= 38) clarityVal = "SI2";
        else if (clarityNum <= 51) clarityVal = "SI3";
        else if (clarityNum <= 66) clarityVal = "I1";
        else if (clarityNum <= 83) clarityVal = "I2";
        else clarityVal = "I3";

        setClarity(clarityVal);
        maxClarityPowerValuer(clarityVal);
    }
    const colorRand = () => {
        let colorVal_R;
        let colorNum = random100();
        setValue((value) => value + (100 - colorNum) * 3);
        if(colorNum === 1) {
            colorVal_R = "D";
        } else if (colorNum <= 3) {
            colorVal_R = "E";
        } else if (colorNum <= 5) {
            colorVal_R = "F";
        } else if (colorNum <= 8) {
            colorVal_R = "G";
        } else if (colorNum <= 11) {
            colorVal_R = "H";
        } else if (colorNum <= 14) {
            colorVal_R = "I";
        } else if (colorNum <= 17) {
            colorVal_R = "J";
        } else if (colorNum <= 21) {
            colorVal_R = "K";
        } else if (colorNum <= 25) {
            colorVal_R = "L";
        } else if (colorNum <= 30) {
            colorVal_R = "M";
        } else if (colorNum <= 35) {
            colorVal_R = "N";
        } else if (colorNum <= 40) {
            colorVal_R = "O";
        } else if (colorNum <= 45) {
            colorVal_R = "P";
        } else if (colorNum <= 50) {
            colorVal_R = "Q";
        } else if (colorNum <= 55) {
            colorVal_R = "R";
        } else if (colorNum <= 61) {
            colorVal_R = "S";
        } else if (colorNum <= 67) {
            colorVal_R = "T";
        } else if (colorNum <= 73) {
            colorVal_R = "U";
        } else if (colorNum <= 79) {
            colorVal_R = "V";
        } else if (colorNum <= 85) {
            colorVal_R = "W";
        } else if (colorNum <= 91) {
            colorVal_R = "X";
        } else if (colorNum <= 97) {
            colorVal_R = "Y";
        } else {
            colorVal_R = "Z";
        }

        //const lvlNum = Math.floor(max / 5);
        setColor(colorVal_R);
        levelQualValuer(lvl, colorVal_R);
    }
    const cutRand = () => {
        let cutNum = Math.floor( Math.random() * 100) + 1;
        let cutVal;
        if(cutNum <= 25) {
            cutVal = "Uncut";
            setValue((value) => value - 50);
            setCutImg(uncutArray[Math.floor(Math.random() * 3) + 1]);
        } else if (cutNum <= 30) {
            cutVal = "Brilliant";
            setCutImg(brilliant);
        } else if (cutNum <= 35) {
            cutVal = "Cushion";
            setCutImg(cushion);
        } else if (cutNum <= 40) {
            cutVal = "Emerald";
            setCutImg(emeraldCut);
        } else if (cutNum <= 45) {
            cutVal = "Island";
            setCutImg(french);
        } else if (cutNum <= 50) {
            cutVal = "Lozenge";
            setCutImg(lozenge);
        } else if (cutNum <= 55) {
            cutVal = "Marquise";
            setCutImg(marquise);
        } else if (cutNum <= 60) {
            cutVal = "Oval";
            setCutImg(oval);
        } else if (cutNum <= 65) {
            cutVal = "Pear";
            setCutImg(pear);
        } else if (cutNum <= 70) {
            cutVal = "Peruzzi";
            setCutImg(peruzzi);
        } else if (cutNum <= 75) {
            cutVal = "Portuguese";
            setCutImg(portuguese);
        } else if (cutNum <= 80) {
            cutVal = "Princess";
            setCutImg(princess);
        } else if (cutNum <= 85) {
            cutVal = "Radiant";
            setCutImg(radiant);
        } else if (cutNum <= 92) {
            cutVal = "Single";
            setCutImg(single);
        } else {
            cutVal = "Trillion";
            setCutImg(trillion);
        }

        setCut(cutVal);
        cutPointValuer(cutVal);
    }
    const gemRand = () => {
        setValue(0);
        typeRand();
        clarityRand();
        caratRand();
        colorRand();
        cutRand();
        let powerOutput;
        if(maxPwrArray.caratPts >= maxPwrArray.clarityPts) {
            powerOutput = maxPwrArray.caratPts + maxPwrArray.cutPtOut;
            setMaxPower({
                ...maxPower, 
                maxPwrOut: powerOutput,
                caratPts: maxPwrArray.caratPts,
                clarityPts: maxPwrArray.clarityPts,
                cutPtCon: maxPwrArray.cutPtCon,
                cutPtOut: maxPwrArray.cutPtOut,
            });
        } else {
            powerOutput = maxPwrArray.clarityPts + maxPwrArray.cutPtOut;
            setMaxPower({
                ...maxPower, 
                maxPwrOut: powerOutput,
                caratPts: maxPwrArray.caratPts,
                clarityPts: maxPwrArray.clarityPts,
                cutPtCon: maxPwrArray.cutPtCon,
                cutPtOut: maxPwrArray.cutPtOut,
            });
        }
    }
    
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const reset = () => {
        setType("");
        setCarat(0);
        setClarity("");
        setColor("");
        setCut("");
        setLvl(5);
        //setMax(25);
        setValue(0);
        setLvlQualified(true);
        setMaxPower({
            maxPwrCon: 14,
            maxPwrOut: 0,
            caratPts: 0,
            clarityPts: 0,
            colorPts: 0,
            cutPtCon: 0,
            cutPtOut: 0,
        });
        maxPwrArray.caratPts = 0;
        maxPwrArray.clarityPts = 0;
        maxPwrArray.colorPts = 0;
        maxPwrArray.cutPtCon = 0;
        maxPwrArray.cutPtOut = 0;
        toggle();
        console.clear();
    }

    const slider = (event) => {
        const sliderNum = parseInt(event.target.value);
        //const lvlNum = Math.floor(sliderNum / 5);
        //setMax(sliderNum);
        setLvl(sliderNum);
        maxPowerContainmentValuer(sliderNum);
        levelQualValuer(sliderNum, color);
    }
    const typeValuer = (event) => {
        const typeVal = event.target.value;
        setType(typeVal);
    }
    const caratValuer = (event) => {
        const caratVal = event.target.value;
        setValue((value) => value - (carat * 100) + (caratVal * 100));
        setCarat(caratVal);
        maxCaratPowerValuer(caratVal);
        let powerOutput;
        if(maxPwrArray.caratPts >= maxPower.clarityPts) {
            powerOutput = maxPwrArray.caratPts + maxPower.cutPtOut;
            setMaxPower({
                ...maxPower, 
                maxPwrOut: powerOutput,
                caratPts: maxPwrArray.caratPts,
            });
        } else {
            powerOutput = maxPower.clarityPts + maxPower.cutPtOut;
            setMaxPower({
                ...maxPower, 
                maxPwrOut: powerOutput,
                caratPts: maxPwrArray.caratPts,
            });
        }
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

        maxClarityPowerValuer(clarityVal);
        let powerOutput;
        if(maxPower.caratPts >= maxPwrArray.clarityPts) {
            powerOutput = maxPower.caratPts + maxPower.cutPtOut;
            setMaxPower({
                ...maxPower,
                maxPwrOut: powerOutput,
                clarityPts: maxPwrArray.clarityPts,
            });
        } else {
            powerOutput = maxPwrArray.clarityPts + maxPower.cutPtOut;
            setMaxPower({
                ...maxPower, 
                maxPwrOut: powerOutput,
                clarityPts: maxPwrArray.clarityPts,
            });
        }
    }
    const colorValuer = (event) => {
        const colorVal_V = event.target.value;
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
        setValue((value) => value - ((100 - colorNum(color)) * 3) + ((100 - colorNum(colorVal_V)) * 3));
        setColor(colorVal_V);
        //let lvlNum = Math.floor(max / 5);
        levelQualValuer(lvl, colorVal_V);

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
        cutPointValuer(event.target.value); //cutPointValuer is not in lowercase

        let powerOutput = maxPower.maxPwrOut - maxPower.cutPtOut + maxPwrArray.cutPtOut;
        let powerContainment = maxPower.maxPwrCon - maxPower.cutPtCon + maxPwrArray.cutPtCon;
        setMaxPower({
            ...maxPower, 
            maxPwrOut: powerOutput,
            maxPwrCon: powerContainment,
            cutPtCon: maxPwrArray.cutPtCon,
            cutPtOut: maxPwrArray.cutPtOut,
        });
        
    }
    const maxCaratPowerValuer = (caratInput) => {
        switch (true) {
            case (caratInput <= 0.05):
                maxPwrArray.caratPts = 1;
                break;
            case (caratInput <= 0.1):
                maxPwrArray.caratPts = 2;
                break;
            case (caratInput <= 0.15):
                maxPwrArray.caratPts = 3;
                break;
            case (caratInput <= 0.2):
                maxPwrArray.caratPts = 4;
                break;
            case (caratInput <= 0.25):
                maxPwrArray.caratPts = 5;
                break;
            case (caratInput <= 0.35):
                maxPwrArray.caratPts = 6;
                break;
            case (caratInput <= 0.45):
                maxPwrArray.caratPts = 7;
                break;
            case (caratInput <= 0.55):
                maxPwrArray.caratPts = 8;
                break;
            case (caratInput <= 0.65):
                maxPwrArray.caratPts = 9;
                break;
            case (caratInput <= 0.75):
                maxPwrArray.caratPts = 10;
                break;
            case (caratInput <= 1):
                maxPwrArray.caratPts = 11;
                break;
            case (caratInput <= 1.25):
                maxPwrArray.caratPts = 12;
                break;
            case (caratInput <= 1.5):
                maxPwrArray.caratPts = 13;
                break;
            case (caratInput <= 1.75):
                maxPwrArray.caratPts = 14;
                break;
            case (caratInput <= 2):
                maxPwrArray.caratPts = 15;
                break;
            case (caratInput <= 2.5):
                maxPwrArray.caratPts = 16;
                break;
            case (caratInput <= 3):
                maxPwrArray.caratPts = 17;
                break;
            case (caratInput <= 3.5):
                maxPwrArray.caratPts = 18;
                break;
            case (caratInput <= 4):
                maxPwrArray.caratPts = 19;
                break;
            case (caratInput <= 4.5):
                maxPwrArray.caratPts = 20;
                break;
            case (caratInput <= 5.25):
                maxPwrArray.caratPts = 21;
                break;
            case (caratInput <= 6):
                maxPwrArray.caratPts = 22;
                break;
            case (caratInput <= 7.25):
                maxPwrArray.caratPts = 23;
                break;
            case (caratInput <= 8.25):
                maxPwrArray.caratPts = 24;
                break;
            default:
                maxPwrArray.caratPts = 30;
                break;
        }
    }
    const maxClarityPowerValuer = (clarityInput) => {
        switch (clarityInput) {
            case 'I3':
                maxPwrArray.clarityPts = 2;
                break;
            case 'I2':
                maxPwrArray.clarityPts = 5;
                break;
            case 'I1':
                maxPwrArray.clarityPts = 8;
                break;
            case 'SI3':
                maxPwrArray.clarityPts = 11;
                break;
            case 'SI2':
                maxPwrArray.clarityPts = 14;
                break;
            case 'SI1':
                maxPwrArray.clarityPts = 16;
                break;
            case 'VS2':
                maxPwrArray.clarityPts = 18;
                break;
            case 'VS1':
                maxPwrArray.clarityPts = 20;
                break;
            case 'VVS2':
                maxPwrArray.clarityPts = 22;
                break;
            case 'VVS1':
                maxPwrArray.clarityPts = 23;
                break;
            case 'FL':
                maxPwrArray.clarityPts = 30;
                break;
        }        
    }
    const maxPowerContainmentValuer = (sliderNum) => {
        // const level = sliderNum / 5;
        const level = sliderNum;
        let pwrCon;
        switch (true) {
            case (level <= 1):
                pwrCon = 2;
                break;
            case (level <= 2):
                pwrCon = 5;
                break;
            case (level <= 3):
                pwrCon = 8;
                break;
            case (level <= 4):
                pwrCon = 11;
                break;
            case (level <= 5):
                pwrCon = 14;
                break;
            case (level <= 6):
                pwrCon = 16;
                break;
            case (level <= 7):
                pwrCon = 18;
                break;
            case (level <= 8):
                pwrCon = 20;
                break;
            case (level <= 9):
                pwrCon = 22;
                break;
            case (level <= 10):
                pwrCon = 23;
                break;
            case (level <= 11):
                pwrCon = 24;
                break;
            case (level <= 12):
                pwrCon = 25;
                break;
            case (level <= 13):
                pwrCon = 26;
                break;
            case (level <= 14):
                pwrCon = 27;
                break;
            case (level <= 15):
                pwrCon = 28;
                break;
            case (level <= 16):
                pwrCon = 29;
                break;
            case (level <= 17):
                pwrCon = 30;
                break;
            case (level <= 18):
                pwrCon = 31;
                break;
            case (level <= 19):
                pwrCon = 32;
                break;
            default:
                pwrCon = 33;
                break;
        }
        let powerContainment = pwrCon + maxPower.cutPtCon;
        setMaxPower({
            ...maxPower, 
            maxPwrCon: powerContainment,
        });
    }
    const cutPointValuer = (cutVal) => {
        switch (cutVal) {
            case "Uncut":
                maxPwrArray.cutPtCon = 0;
                maxPwrArray.cutPtOut = 0;
                break;
            case "Single":
                maxPwrArray.cutPtCon = 2;
                maxPwrArray.cutPtOut = 1;
                break;
            case "Emerald":
                maxPwrArray.cutPtCon = 2;
                maxPwrArray.cutPtOut = 2;
                break;
            case "Lozenge":
                maxPwrArray.cutPtCon = 4;
                maxPwrArray.cutPtOut = 1;
                break;
            case "Island":
                maxPwrArray.cutPtCon = 4;
                maxPwrArray.cutPtOut = 2;
                break;
            case "Marquise":
                maxPwrArray.cutPtCon = 4;
                maxPwrArray.cutPtOut = 4;
                break;
            case "Oval":
                maxPwrArray.cutPtCon = 8;
                maxPwrArray.cutPtOut = 2;
                break;
            case "Brilliant":
                maxPwrArray.cutPtCon = 6;
                maxPwrArray.cutPtOut = 3;
                break;
            case "Cushion":
                maxPwrArray.cutPtCon = 10;
                maxPwrArray.cutPtOut = 1;
                break;
            case "Pear":
                maxPwrArray.cutPtCon = 2;
                maxPwrArray.cutPtOut = 5;
                break;
            case "Princess":
                maxPwrArray.cutPtCon = 10;
                maxPwrArray.cutPtOut = 3;
                break;
            case "Radiant":
                maxPwrArray.cutPtCon = 8;
                maxPwrArray.cutPtOut = 4;
                break;
            case "Peruzzi":
                maxPwrArray.cutPtCon = 6;
                maxPwrArray.cutPtOut = 5;
                break;
            case "Trillion":
                maxPwrArray.cutPtCon = 4;
                maxPwrArray.cutPtOut = 6;
                break;
            case "Portuguese":
                maxPwrArray.cutPtCon = 10;
                maxPwrArray.cutPtOut = 5;
                break;
            default:
                break;
        }
    }
    const levelQualValuer = (_level, _color) => {
        // assign a PT value
        let pts;
        if (_color === "D") pts = 1;
        else if (_color === "E") pts = 2;
        else if (_color === "F") pts = 3;
        else if (_color === "G") pts = 4;
        else if (_color === "H") pts = 5;
        else if (_color === "I") pts = 6;
        else if (_color === "J") pts = 7;
        else if (_color === "K") pts = 8;
        else if (_color === "L") pts = 9;
        else if (_color === "M") pts = 10;
        else if (_color === "N") pts = 11;
        else if (_color === "O") pts = 12;
        else if (_color === "P") pts = 13;
        else if (_color === "Q") pts = 14;
        else if (_color === "R") pts = 15;
        else if (_color === "S") pts = 16;
        else if (_color === "T") pts = 17;
        else if (_color === "U") pts = 18;
        else if (_color === "V") pts = 19;
        else if (_color === "W") pts = 20;
        else if (_color === "X") pts = 21;
        else if (_color === "Y") pts = 22;
        else if (_color === "Z") pts = 23;

        console.log('_level: ' + _level);
        console.log('_level: ' + typeof _level);
        console.log('pts: ' + pts);
        console.log('pts: ' + typeof pts);

        if (_level === 1 && pts > 2) {
            setLvlQualified(false);
            return;
        } else if (_level === 2 && pts > 5) {
            setLvlQualified(false);
            return;
        } else if (_level === 3 && pts > 8) {
            setLvlQualified(false);
            return;
        } else if (_level === 4 && pts > 11) {
            setLvlQualified(false);
            return;
        } else if (_level === 5 && pts > 14) {
            setLvlQualified(false);
            return;
        } else if (_level === 6 && pts > 16) {
            setLvlQualified(false);
            return;
        } else if (_level === 7 && pts > 18) {
            setLvlQualified(false);
            return;
        } else if (_level === 8 && pts > 20) {
            setLvlQualified(false);
            return;
        } else if (_level === 9 && pts > 22) {
            setLvlQualified(false);
            return;
        } else if (_level === 10 && pts > 23) {
            setLvlQualified(false);
            return;
        } else {
            console.log('why?');
            setLvlQualified(true);
        }
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
                            <h4 className='col text-start'>Level: {lvl} </h4>
                            <input type="range" min={1} step={1} max={20} value={lvl} onChange={slider} className='col slider' />
                        </div>
                        <div className='row'>
                            {!lvlQualified && (
                                <p className='text-danger'>You are not qualified to wield this stone</p>
                            )}
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
                        <div className='row'>
                            <h6 className='col text-start'>MAX PWR Containment: </h6>
                            <input className='col' value={maxPower.maxPwrCon} readOnly />
                        </div>
                        <div className='row'>
                            <h6 className='col text-start'>MAX PWR Output: </h6>
                            <input className='col' value={maxPower.maxPwrOut} readOnly />
                        </div>
                        {cut && gemCut.includes(cut) && (
                        <div id='img-holder'>
                            <img className='pt-2' id="gem-img" src={cutImg} style={{width:'50px'}} alt="gem-cut-img"/>
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