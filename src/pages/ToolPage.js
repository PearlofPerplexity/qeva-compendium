import React from 'react';
import { Link } from 'react-router-dom';
import { BasicLink } from '../utils/link';
import GemGenerator from '../tools/GemGenerator';
import CharacterCreator from '../tools/CharacterCreator';
import CharacterEditor from '../tools/CharacterEditor';
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
import Codex from '../tools/Codex';
//STYLES
import '../style.css';
//CONTEXTS
import { CharacterProvider } from '../contexts/characterContext';


const ToolPage = () => {

    return (
        <CharacterProvider>
            <div className="p-4">
                <div className="welcome">
                    <div className="content rounded-3 p-3">
                        <h1 className="fs-3">Welcome to the Qeṽa Tools!</h1>
                        <p className="mb-0">Access the tools below or return to the compendium <Link to={BasicLink}>here</Link>. May every blessing of DIA be upon you!</p>
                    </div>
                </div>
                <section className="highlights mt-4">
                    <div className="row">
                        <CharacterCreator />
                        <CharacterEditor />
                        <RaceChart loc='toolPage' />
                    </div>      
                </section>
                <section className="highlights mt-4">
                    <div className='row'>
                        <AlignmentChart loc='toolPage' />
                        <GemGenerator />
                        <GemcutterChart />
                    </div>
                </section>
                <section className="highlights mt-4">
                    <div className='row'>
                        <ClassChart loc='toolPage' />
                        <FightingChart loc='toolPage' />
                        <NPCGenerator />
                    </div>
                </section>
                <section className="highlights mt-4">
                    <div className='row'>
                        <CraftingChart />
                        <CraftGenerator />
                        <GrenadierChart />
                    </div>
                </section>
                <section className="highlights mt-4">
                    <div className='row'>
                        <LootGenerator />
                        <TravelGenerator />
                        <Codex loc='toolPage' />
                    </div>
                </section>
            </div>
        </CharacterProvider>
    );
};

export default ToolPage;