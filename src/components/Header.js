
import React, { useState, useEffect } from 'react';
import { 
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import { 
    BasicLink,
    DivineLink,
    DRaceLink,
    GemLink,
    RaceLink,
    ClassLink,
    CharLink,
    FaunaLink,
    FloraLink,
    HistLink,
    LocLink,
    MapLink
} from '../utils/link';
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
import SearchBar from '../utils/SearchBar';

const Header = (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const [menu, setMenu] = useState("Qeṽa Compendium");

    const toggle = () => setIsOpen(!isOpen);

    const wikiToggle = () => setMenu("Qeṽa Compendium");
    const toolToggle = () => setMenu("Qeṽa Tools");

    useEffect(() => {
        if(window.location.pathname === '/tools') {
            toolToggle();
        } else {
            wikiToggle();
        }
      });
    
    return (
        <Navbar {...args} dark sticky='top' expand='md' className='topnavbar py-2'>

            <UncontrolledDropdown nav inNavbar className='fs-5 mx-3'>
              <DropdownToggle nav caret>
                {menu}
              </DropdownToggle>
              <DropdownMenu dark>
                <DropdownItem href="/" onClick={wikiToggle}>Qeṽa Compendium</DropdownItem>
                <DropdownItem href="/tools" onClick={toolToggle}>Qeṽa Tools</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <SearchBar />

            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav 
                    className="mx-2 d-md-none navbar-nav-scroll" 
                    navbar
                    style={{height: '200px'}}
                >
                    <NavItem className="nav-item">
                        <NavLink href={BasicLink}>
                            <i className={BasicIcon} />
                            &nbsp; The Basics
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink href={GemLink}>
                            <i className={GemIcon} />
                            &nbsp; Gemstones
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink href={DivineLink}>
                            <i className={DivineIcon} />
                            &nbsp; Divination
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink href={RaceLink}>
                            <i className={RaceIcon} />
                            &nbsp; Races
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink href={DRaceLink}>
                            <i className={DRaceIcon} />
                            &nbsp; Dark Races
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink href={ClassLink}>
                            <i className={ClassIcon} />
                            &nbsp; Classes
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink href={CharLink}>
                            <i className={CharIcon} />
                            &nbsp; Characters
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink href={FaunaLink}>
                            <i className={FaunaIcon} />
                            &nbsp; Fauna
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink href={FloraLink}>
                            <i className={FloraIcon} />
                            &nbsp; Flora
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink href={HistLink}>
                            <i className={HistIcon} />
                            &nbsp; History
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink href={LocLink}>
                            <i className={LocIcon} />
                            &nbsp; Locations
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink href={MapLink}>
                            <i className={MapIcon} />
                            &nbsp; Map
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;