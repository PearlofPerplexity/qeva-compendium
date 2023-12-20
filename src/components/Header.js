
import React, { useState, useEffect, useContext, useRef } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import { useLocation } from 'react-router-dom';
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
import { AdminContext } from '../contexts/adminContext';

const Header = (args) => {
    const inputRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [menu, setMenu] = useState("Qeṽa Compendium");
    const [isAdmin, setIsAdmin] = useContext(AdminContext);
    const [adminModal, setAdminModal] = useState(false);
    const [adminPassword, setAdminPassword] = useState('');
    const [adminError, setAdminError] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const adminToggle = () => {
        if(adminModal) {
            setAdminError(false);
            setAdminPassword('');
        }
        setAdminModal(!adminModal);
    }

    const location = useLocation();
    const wikiToggle = () => setMenu("Qeṽa Compendium");
    const toolToggle = () => setMenu("Qeṽa Tools");

    useEffect(() => {
        if(window.location.pathname === '/tools') {
            toolToggle();
        } else {
            wikiToggle();
        }
      }, [location]);

    const handleAdminSwitch = () => {
        if (isAdmin) setIsAdmin(!isAdmin);
        else adminToggle();
        setTimeout(() => {
            if (inputRef) {
                inputRef.current.focus();
            }
        }, 500);
    }
    const handlePassword = (e) => {
        setAdminPassword(e.target.value);
    }
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            checkPassword();
        }
    }
    const checkPassword = () => {
        if (adminPassword === 'francis') {
            setIsAdmin(!isAdmin);
            setAdminError(false);
            adminToggle();
        } else {
            setAdminError(true);
        }
    }
    
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
            <div 
                nav 
                className="form-check form-switch d-none d-md-block" 
                style={{ position: 'absolute', top: '15px', right: '15px'}}
            >
                <input 
                    className="form-check-input" 
                    type="checkbox"
                    id="switch"
                    onChange={handleAdminSwitch}
                    checked={isAdmin}
                />
                <label className="form-check-label" for="flexSwitchCheckChecked">Admin</label>
            </div>

            <Modal isOpen={adminModal} toggle={adminToggle}>
                <ModalHeader>
                    Enter Admin View
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className='mt-3 text-center'>Type the password below to enter admin view.</div>
                        <div className='d-flex justify-content-center char-name-input'>
                            <input 
                                className='m-2 mx-auto' 
                                type="password" 
                                onChange={handlePassword} 
                                onKeyUp={handleEnter}
                                ref={inputRef}
                                autoComplete='off'
                            />
                        </div>
                        {adminError && (
                            <p className='text-danger text-center'>That password is incorrect. Please try again.</p>
                        )}
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={checkPassword} >
                        Sign In
                    </Button>{' '}
                    <Button color="danger" onClick={adminToggle}>
                        Cancel
                    </Button>   
                </ModalFooter>
            </Modal>
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
                            &nbsp; Luminance
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