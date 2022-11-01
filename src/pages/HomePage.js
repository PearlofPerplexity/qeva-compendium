import { Link } from 'react-router-dom';
import avlimMap from '../assets/imgs/maps/avlim-map.jpg';
import lumiareValley from '../assets/imgs/locations/lumiare.jpg';
import sky from '../assets/imgs/sky.jpg';
import elf from '../assets/imgs/elf.jpg';
import book from '../assets/imgs/book.jpg';
import caracara from '../assets/imgs/caracara.jpg';
import forestTwo from '../assets/imgs/forest2.jpg';
import quill from '../assets/imgs/quill.jpg';
import { 
    TotalGemCount, 
    TotalRaceCount, 
    TotalClassCount 
} from '../utils/counter';
import { 
    BasicLink, 
    ClassLink, 
    DivineLink,
    GemLink, 
    RaceLink 
} from '../utils/link';
import {
    GemIcon, 
    RaceIcon } from '../utils/icon';

const HomePage = () => {
    return (
        <div className="p-4">
            <div className="welcome">
                <div className="content rounded-3 p-3">
                    <h1 className="fs-3">Welcome to the Qeṽa Compendium!</h1>
                    <p className="mb-0">Browse the options below or click on the hamburger icon in the top right hand corner to see the full menu. Or learn the basics <Link to={BasicLink}>here</Link>. May every blessing of DIA be upon you!</p>
                </div>
            </div>

            <section className="highlights mt-4">
                <div className="row">
                    <div className="col-lg-4 covered-div">
                        <Link to={GemLink} className="cover-link"></Link>
                        <div className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
                            <i className="iconify fs-2" data-icon="twemoji:gem-stone"></i>
                            <div className="ms-3">
                                <div className="d-flex align-items-center">
                                    <h3 className="mb-0">Gemstones</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 covered-div">
                        <Link to={RaceLink} className="cover-link"></Link>
                        <div className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
                            <i className="iconify fs-2" data-icon="noto:elf-medium-skin-tone"></i>
                            <div className="ms-3">
                                <div className="d-flex align-items-center">
                                    <h3 className="mb-0">Races</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 covered-div">
                        <Link to={ClassLink} className="cover-link"></Link>
                        <div className="box d-flex rounded-2 align-items-center p-3">
                            <i className="iconify fs-2" data-icon="noto-v1:crossed-swords"></i>
                            <div className="ms-3">
                                <div className="d-flex align-items-center">
                                    <h3 className="mb-0">Classes</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>      
            </section>

            <section className="charts mt-4">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="chart-container map-img rounded-2 p-3">
                            <img className="map-img" src={avlimMap} />
                            <div className="overlay">
                                <Link to="/" className="cover-link"></Link>
                                <div className="text">MAP</div>
                            </div> 
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="chart-container rounded-2 p-3">
                            <img className="map-img" src={lumiareValley} />
                            <div className="overlay">
                                <Link to="/" className="cover-link"></Link>
                                <div className="text">LOCATIONS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="admins mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="box">
                            <div className="admin d-flex align-items-center rounded-2 p-3 mb-4">
                                <div className="img">
                                    <img className="img-fluid rounded-pill"
                                        width="75" height="75"
                                        src={sky}
                                        alt="sky icon" />
                                </div>
                                <div className="ms-3 covered-div">
                                    <Link to={DivineLink} className="cover-link"></Link>
                                    <h3 className="fs-5 mb-1">Divination</h3>
                                    <p className="mb-0">Discover the unseen dimensions and the powers within.</p>
                                </div>
                            </div>
                            <div className="admin d-flex align-items-center rounded-2 p-3 mb-4">
                                <div className="img">
                                    <img className="img-fluid rounded-pill"
                                        width="75" height="75"
                                        src={elf}
                                        alt="elf-girl icon" />
                                </div>
                                <div className="ms-3">
                                    <h3 className="fs-5 mb-1">Characters</h3>
                                    <p className="mb-0">Read individual stories of characters throughout history.</p>
                                </div>
                            </div>
                            <div className="admin d-flex align-items-center rounded-2 p-3 mb-4">
                                <div className="img">
                                    <img className="img-fluid rounded-pill"
                                        width="75" height="75"
                                        src={book}
                                        alt="book icon" />
                                </div>
                                <div className="ms-3">
                                    <h3 className="fs-5 mb-1">Histories</h3>
                                    <p className="mb-0">Pour over the broad brushstrokes of history</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="box">
                            <div className="admin d-flex align-items-center rounded-2 p-3 mb-4">
                                <div className="img">
                                    <img className="img-fluid rounded-pill"
                                        width="75" height="75"
                                        src={caracara}
                                        alt="bird icon" />
                                </div>
                                <div className="ms-3">
                                    <h3 className="fs-5 mb-1">Fauna</h3>
                                    <p className="mb-0">Discover the native animals habitating Qeṽa.</p>
                                </div>
                            </div>
                            <div className="admin d-flex align-items-center rounded-2 p-3 mb-4">
                                <div className="img">
                                    <img className="img-fluid rounded-pill"
                                        width="75" height="75"
                                        src={forestTwo}
                                        alt="forest icon" />
                                </div>
                                <div className="ms-3">
                                    <h3 className="fs-5 mb-1">Flora</h3>
                                    <p className="mb-0">Discover the native plant-life and their significance.</p>
                                </div>
                            </div>
                            <div className="admin d-flex align-items-center rounded-2 p-3">
                                <div className="img">
                                    <img className="img-fluid rounded-pill"
                                        width="75" height="75"
                                        src={quill}
                                        alt="quill icon" />
                                </div>
                                <div className="ms-3">
                                    <h3 className="fs-5 mb-1">Languages</h3>
                                    <p className="mb-0">Learn the languages of Avlim.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="statis mt-4 text-center">
                <div className="row">
                    <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                        <div className="box gem-box p-3">
                            <Link to={GemLink} className="cover-link"></Link>
                            <i className={GemIcon}></i>
                            <h3>{TotalGemCount}</h3>
                            <p className="lead">Gemstones</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                        <div className="box race-box p-3">
                            <Link to={RaceLink} className="cover-link"></Link>
                            <i className={RaceIcon}></i>
                            <h3>{TotalRaceCount}</h3>
                            <p className="lead">Races</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                        <div className="box class-box p-3">
                            <Link to={ClassLink} className="cover-link"></Link>
                            <i className="uil-fire"></i>
                            <h3>{TotalClassCount}</h3>
                            <p className="lead">Classes</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="box potential-box p-3">
                            <Link to={BasicLink} className="cover-link"></Link>
                            <i className="uil-atom"></i>
                            <h3>Unlimited</h3>
                            <p className="lead">Potential</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;