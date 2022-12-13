import React from 'react';
import { Link } from 'react-router-dom';
import { 
    BasicLink, 
    ClassLink,
    GemLink
} from '../utils/link';
import GemGenerator from '../tools/gemGenerator';


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
                    <div className="col-lg-4">
                        <Link className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
                            <i className="iconify fs-2" data-icon="noto:elf-medium-skin-tone"></i>
                            <div className="ms-3">
                                <div className="d-flex align-items-center">
                                    <h3 className="mb-0">Race Generator</h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4" >
                        <Link className="box d-flex rounded-2 align-items-center p-3" to={ClassLink}>
                            <i className="iconify fs-2" data-icon="noto-v1:crossed-swords"></i>
                            <div className="ms-3">
                                <div className="d-flex align-items-center">
                                    <h3 className="mb-0">Class Generator</h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>      
            </section>
            <section className="highlights mt-4">
                <div className="row">
                    <div className="col-lg-4">
                        <Link className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3" to={GemLink}>
                            <i className="iconify fs-2" data-icon="twemoji:gem-stone"></i>
                            <div className="ms-3">
                                <div className="d-flex align-items-center">
                                    <h3 className="mb-0">Gem Calculator</h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>      
            </section>
        </div>
    );
};

export default ToolPage;