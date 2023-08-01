import React from 'react';
import { Link } from 'react-router-dom';
import { BasicLink } from '../utils/link';
import GemGenerator from '../tools/GemGenerator';
import CharacterCreator from '../tools/CharacterCreator';
import NPCGenerator from '../tools/NPCGenerator';
import AlignmentChart from '../tools/AlignmentChart';
import RaceChart from '../tools/RaceChart';
import ClassChart from '../tools/ClassChart';
import CraftingChart from '../tools/CraftingChart';
import GemcutterChart from '../tools/GemcutterChart';
import GrenadierChart from '../tools/GrenadierChart';
import FightingChart from '../tools/FightingChart';
import CraftGenerator from '../tools/CraftingGenerator';
import LootGenerator from '../tools/LootGenerator';
import TravelGenerator from '../tools/TravelGenerator';
//STYLES
import '../style.css';
//CONTEXTS
import { CharacterProvider } from '../contexts/characterContext';


const ToolPage = () => {

    return (
        <div className="p-4">
            <div className="welcome">
                <div className="content rounded-3 p-3">
                    <h1 className="fs-3">Welcome to the Qeṽa Tools!</h1>
                    <p className="mb-0">Access the tools below or return to the compendium <Link to={BasicLink}>here</Link>. May every blessing of DIA be upon you!</p>
                </div>
            </div>
            <section className="highlights mt-4">
                <div className="row">
                    <GemGenerator />
                    <CharacterProvider>
                        <CharacterCreator />
                    </CharacterProvider>
                    <NPCGenerator />
                </div>      
            </section>
            <section className="highlights mt-4">
                <div className='row'>
                    <AlignmentChart loc='toolPage' />
                    <RaceChart loc='toolPage' />
                    <ClassChart loc='toolPage' />
                </div>
            </section>
            <section className="highlights mt-4">
                <div className='row'>
                    <GemcutterChart />
                    <CraftingChart />
                    <FightingChart />
                </div>
            </section>
            <section className="highlights mt-4">
                <div className='row'>
                    <GrenadierChart />
                    <CraftGenerator />
                    <LootGenerator />
                </div>
            </section>
            <section className="highlights mt-4">
                <div className='row'>
                    <TravelGenerator />
                </div>
            </section>
        </div>
    );
};

export default ToolPage;