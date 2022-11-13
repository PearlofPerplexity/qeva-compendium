import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import mainLogo from '../assets/imgs/sentinel-logo-white.png';
import { 
    BasicIcon,
    DivineIcon,
    DRaceIcon,
    GemIcon,
    RaceIcon,
    ClassIcon,
    CharIcon,
    FaunaIcon,
    FloraIcon,
    HistIcon,
    LocIcon,
    MapIcon
} from '../utils/icon';
import { BasicLink } from '../utils/link';
import Sidebar from '../features/Sidebar';
import { CLASSES } from '../assets/shared/CLASSES';
import { DIVINE } from '../assets/shared/DIVINE';
import { DRACES } from '../assets/shared/DRACES';
import { GEMS } from '../assets/shared/GEMS';
import { RACES } from '../assets/shared/RACES';
import { CHARACTERS } from '../assets/shared/CHARACTERS';
import { FAUNA } from '../assets/shared/FAUNA';
import { FLORA } from '../assets/shared/FLORA';
import { HISTORY } from '../assets/shared/HISTORY';
import { LOCATIONS } from '../assets/shared/LOCATIONS';



function Aside() {
    const [open, setOpen] = useState('');
    const toggle = (id) => {
      if (open === id) {
        setOpen();
      } else {
        setOpen(id);
      }
    };

    return (
        <aside className='sidebar position-fixed top-0 left-0 overflow-auto h-100 float-left" id="show-side-navigation1 d-none d-md-block'>
            <Link to="/">
                <div className="sidebar-header d-flex justify-content-center align-items-center px-3 py-4">
                    <img
                        className="rounded-pill img-fluid"
                        width="65"
                        src={mainLogo}
                        alt="worldbuilding logo" />
                </div>
            </Link>

            <div className="search position-relative text-center px-4 py-3 mt-2">
                <input type="text" className="text-white form-control w-100 border-0 bg-transparent" placeholder="Search here" />
                <i className="fa fa-search position-absolute d-block fs-6"></i>
            </div>
            <Accordion flush open={open} toggle={toggle}>
                <AccordionItem>
                    <AccordionHeader targetId="1">
                        <i className={BasicIcon}></i>
                        &nbsp; The Basics
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
                        <ul className='sidebar-dropdown list-unstyled'>
                            <li><Link to={BasicLink}>Discover what makes Qeṽa unique.</Link></li>
                        </ul>
                    </AccordionBody>
                </AccordionItem>
                <Sidebar name="Gemstones" id="2" array={GEMS} icon={GemIcon} />
                <Sidebar name="Divination" id="3" array={DIVINE} icon={DivineIcon} />
                <Sidebar name="Races" id="4" array={RACES} icon={RaceIcon} />
                <Sidebar name="Dark Races" id="5" array={DRACES} icon={DRaceIcon} />
                <Sidebar name="Classes" id="6" array={CLASSES} icon={ClassIcon} />
                <Sidebar name="Characters" id="7" array={CHARACTERS} icon={CharIcon} />
                <Sidebar name="Fauna" id="8" array={FAUNA} icon={FaunaIcon} />
                <Sidebar name="Flora" id="9" array={FLORA} icon={FloraIcon} />
                <Sidebar name="History" id="10" array={HISTORY} icon={HistIcon} />
                <Sidebar name="Locations" id="11" array={LOCATIONS} icon={LocIcon} />
            </Accordion>
        </aside>
    )
}

export default Aside;


/*           
                <li className="has-dropdown">
                    <i className="uil-fire"></i><Link to="/" className="side-menu-header"> Classes</Link>
                    <ul className="sidebar-dropdown list-unstyled">
                        <li><Link to="/">Sentinels</Link></li>
                        <li><Link to="/">Caracadre</Link></li>
                        <li><Link to="/">Elvish Cloaks</Link></li>
                        <li><Link to="/">Avikin</Link></li>
                        <li><Link to="/">Ghost Blades</Link></li>
                        <li><Link to="/">Uncorrupted</Link></li>
                        <li><Link to="/">Topplers</Link></li>
                        <li><Link to="/">Moonstone Guild</Link></li>
                        <li><Link to="/">Quartagraphers</Link></li>
                        <li><Link to="/">No Affiliation</Link></li>
                    </ul>
                </li>
                <li className="has-dropdown">
                    <i className="uil-user"></i><Link to="/" className="side-menu-header"> Characters</Link>
                    <ul className="sidebar-dropdown list-unstyled">
                        <li><Link to="/">Merith</Link></li>
                        <li><Link to="/">Rhins</Link></li>
                        <li><Link to="/">Atia</Link></li>
                        <li><Link to="/">Alohir</Link></li>
                        <li><Link to="/">Alrhyme</Link></li>
                        <li><Link to="/">Cathelia</Link></li>
                        <li><Link to="/">Hartri</Link></li>
                        <li><Link to="/">Gatling</Link></li>
                    </ul>
                </li>
                <li className="has-dropdown">
                    <i className="uil-twitter-alt"></i><Link to="/" className="side-menu-header"> Fauna</Link>
                    <ul className="sidebar-dropdown list-unstyled">
                        <li><Link to="/">Birds</Link></li>
                        <li><Link to="/">Owls</Link></li>
                        <li><Link to="/">Dragons</Link></li>
                        <li><Link to="/">Wolves</Link></li>
                        <li><Link to="/">Insects</Link></li>
                        <li><Link to="/">Leeches</Link></li>
                    </ul>
                </li>
                <li className="has-dropdown">
                    <i className="uil-pagelines"></i><Link to="/" className="side-menu-header"> Flora</Link>
                    <ul className="sidebar-dropdown list-unstyled">
                        <li><Link to="/">Trees</Link></li>
                        <li><Link to="/">Medicinal Plants & Herbs</Link></li>
                        <li><Link to="/">Fruits & Vegetables</Link></li>
                    </ul>
                </li>
                <li className="has-dropdown">
                    <i className="uil-book-open"></i><Link to="/" className="side-menu-header"> Histories</Link>
                    <ul className="sidebar-dropdown list-unstyled">
                        <li><Link to="/">Sparkling Age</Link></li>
                        <li><Link to="/">Quintessential Age</Link></li>
                        <li><Link to="/">Divergent Age</Link></li>
                        <li><Link to="/">Void Age</Link></li>
                        <li><Link to="/">Mortal Age</Link></li>
                        <li><Link to="/">Agate Above</Link></li>
                    </ul>
                </li>
                <li className="has-dropdown">
                    <i className="uil-university fa-fw"></i><Link to="/" className="side-menu-header"> Locations</Link>
                    <ul className="sidebar-dropdown list-unstyled">
                        <li><Link to="/">Qeṽa</Link></li>
                        <li><Link to="/">Avlim</Link></li>
                        <li><Link to="/">Malunë</Link></li>
                        <li><Link to="/">Orcaṽa</Link></li>
                        <li><Link to="/">Baroach</Link></li>
                    </ul>
                </li>
                <li className="">
                    <i className="uil-map-marker"></i><Link to="/" className="side-menu-header"> Map</Link>
                </li>
*/