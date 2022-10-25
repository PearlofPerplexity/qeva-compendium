import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import mainLogo from '../assets/imgs/sentinel-logo-white.png';
import RaceSidebar from '../features/races/RaceSidebar';

function Aside(props) {
    const [open, setOpen] = useState('');
    const toggle = (id) => {
      if (open === id) {
        setOpen();
      } else {
        setOpen(id);
      }
    };

    return (
        <aside className='sidebar position-fixed top-0 left-0 overflow-auto h-100 float-left" id="show-side-navigation1'>
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
                        <i className="uil-comment-info"></i>
                        &nbsp; The Basics
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
                        <ul className='sidebar-dropdown list-unstyled'>
                            <li><Link to='/about'>Discover what makes Qeṽa unique.</Link></li>
                        </ul>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="2"><i className="uil-diamond"></i>&nbsp; Gemstones</AccordionHeader>
                    <AccordionBody accordionId="2">
                        <ul className="sidebar-dropdown list-unstyled">
                            <li><Link to="gemstones/gems-divine.html">Divine Stones</Link></li>
                            <li><Link to="gemstones/gems-cardinal.html">Cardinal Stones</Link></li>
                            <li><Link to="gemstones/gems-incidental.html">Incidental Stones</Link></li>
                            <li><Link to="gemstones/gems-overview.html">Overview</Link></li>
                        </ul>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="3"><i className="uil-wind"></i>&nbsp; Divintation</AccordionHeader>
                    <AccordionBody accordionId="3">
                        <ul className="sidebar-dropdown list-unstyled">
                            <li><Link to="divination/divination-layers.html">Layers of Heavens</Link></li>
                            <li><Link to="divination/divination-magic.html">Magic & Divination</Link></li>
                            <li><Link to="divination/divination-ethereal.html">Ethereals</Link></li>
                            <li><Link to="divination/divination-spiritual.html">Spiritual Realities</Link></li>
                        </ul>
                    </AccordionBody>
                </AccordionItem>
                <RaceSidebar />
                <AccordionItem>
                    <AccordionHeader targetId="5"><i className="uil-users-alt"></i>&nbsp; Dark Races</AccordionHeader>
                    <AccordionBody accordionId="5">
                        <ul className="sidebar-dropdown list-unstyled">
                            <li><Link to="d-races/orc.html">Orcs</Link></li>
                            <li><Link to="d-races/husks.html">Husks</Link></li>
                            <li><Link to="d-races/ronin.html">Ronin</Link></li>
                            <li><Link to="d-races/jackals.html">Jackals</Link></li>
                            <li><Link to="d-races/mongrels.html">Mongrels</Link></li>
                        </ul>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="6"><i className="uil-fire"></i>&nbsp; Classes</AccordionHeader>
                    <AccordionBody accordionId="6">
                        <ul className="sidebar-dropdown list-unstyled">
                            <li><Link to="divination/divination-layers.html">Layers of Heavens</Link></li>
                            <li><Link to="divination/divination-magic.html">Magic & Divination</Link></li>
                            <li><Link to="divination/divination-ethereal.html">Ethereals</Link></li>
                            <li><Link to="divination/divination-spiritual.html">Spiritual Realities</Link></li>
                        </ul>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </aside>
    )
}

export default Aside;


/*
const Aside = () => {
    return (
        <aside className="sidebar position-fixed top-0 left-0 overflow-auto h-100 float-left" id="show-side-navigation1">
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

            <ul className="categories list-unstyled">
                <li className="">
                    <i className="uil-comment-info"></i><Link to="basics.html"> The Basics</Link>
                </li>
                <li className="has-dropdown">
                    <i className="uil-diamond"></i><Link to="/" className="side-menu-header"> Gemstones</Link>
                    <ul className="sidebar-dropdown list-unstyled">
                        <li><Link to="gemstones/gems-divine.html">Divine Stones</Link></li>
                        <li><Link to="gemstones/gems-cardinal.html">Cardinal Stones</Link></li>
                        <li><Link to="gemstones/gems-incidental.html">Incidental Stones</Link></li>
                        <li><Link to="gemstones/gems-overview.html">Overview</Link></li>
                    </ul>
                </li>
                <li className="has-dropdown">
                    <i className="uil-wind"></i><Link to="/" className="side-menu-header"> Divination</Link>
                    <ul className="sidebar-dropdown list-unstyled">
                        <li><Link to="divination/divination-layers.html">Layers of Heavens</Link></li>
                        <li><Link to="divination/divination-magic.html">Magic & Divination</Link></li>
                        <li><Link to="divination/divination-ethereal.html">Ethereals</Link></li>
                        <li><Link to="divination/divination-spiritual.html">Spiritual Realities</Link></li>
                    </ul>
                </li>
                <li className="has-dropdown">
                    <i className="uil-users-alt"></i><Link to="/" className="side-menu-header"> Noble Races</Link>
                    <ul className="sidebar-dropdown list-unstyled">
                        <li><Link to="races/elves.html">Elves</Link></li>
                        <li><Link to="races/aviame.html">Aviame</Link></li>
                        <li><Link to="races/humans.html">Humans</Link></li>
                        <li><Link to="races/osei.html">Osei</Link></li>
                        <li><Link to="races/dwarves.html">Dwarves</Link></li>
                        <li><Link to="races/gnomes.html">Gnomes</Link></li>
                        <li><Link to="races/halflings.html">Halflings</Link></li>
                        <li><Link to="races/aeoki.html">Aeoki</Link></li>
                        <li><Link to="races/arborums.html">Arborums</Link></li>
                    </ul>
                </li>
                <li className="has-dropdown">
                    <i className="uil-users-alt"></i><Link to="/" className="side-menu-header"> Dark Races</Link>
                    <ul className="sidebar-dropdown list-unstyled">
                        <li><Link to="d-races/orc.html">Orcs</Link></li>
                        <li><Link to="d-races/husks.html">Husks</Link></li>
                        <li><Link to="d-races/ronin.html">Ronin</Link></li>
                        <li><Link to="d-races/jackals.html">Jackals</Link></li>
                        <li><Link to="d-races/mongrels.html">Mongrels</Link></li>
                    </ul>
                </li>
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
            </ul>
        </aside>
    );
};

export default Aside;
*/