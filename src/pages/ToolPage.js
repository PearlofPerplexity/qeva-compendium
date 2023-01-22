import React from 'react';
import { Link } from 'react-router-dom';
import { BasicLink } from '../utils/link';
import GemGenerator from '../tools/GemGenerator';
import CharacterCreator from '../tools/CharacterCreator';
import NPCGenerator from '../tools/NPCGenerator';
import '../style.css'


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
                    <GemGenerator/>
                    <CharacterCreator/>
                    <NPCGenerator />
                </div>      
            </section>
            <section className="highlights mt-4">
                <table>
                    <tr>
                        <th></th>
                    </tr>
                </table>
            </section>
        </div>
    );
};

export default ToolPage;