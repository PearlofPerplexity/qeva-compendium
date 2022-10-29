
import React, { useState } from 'react';
import { 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { 
    BasicLink, 
    DivineLink, 
    DRaceLink, 
    GemLink, 
    RaceLink 
} from '../utils/link';
import { 
    BasicIcon, 
    DivineIcon, 
    DRaceIcon, 
    GemIcon, 
    RaceIcon } from '../utils/icon';

const Header = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <Navbar {...args} dark sticky='top' expand='md' className='topnavbar py-2'>
            <NavbarBrand href='/' className="mx-3" to="/">Qeṽa Compendium</NavbarBrand>

            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mx-2 d-md-none" navbar>
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
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;