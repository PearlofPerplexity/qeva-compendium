import { useState } from 'react';
import { 
    Navbar, 
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { 
    GLinkDiv,
    GLinkCard,
    GLinkInc,
    GLinkOvr
} from '../../utils/link';

const GemNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='p-2'>
            <div className="row">
                <div className="col-lg-12 rounded-2">
                    <Navbar dark color='primary' sticky='top' expand='xs'>
                        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                        <Collapse isOpen={menuOpen} navbar>
                            <Nav className='mr-auto' navbar>
                                <NavItem>
                                    <NavLink className='nav-link' to={GLinkDiv}>Divine</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to={GLinkCard}>Cardinal</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to={GLinkInc}>Incidental</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to={GLinkOvr}>Overview</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </div>
        </div>
    );
}

export default GemNav;

/*
        <div className='p-4'>
            <section className="highlights mt-2">
                <div className="row">
                    <div className="col-lg-12 rounded-2">
                        <div className="box d-flex align-items-center mb-4 mb-lg-0 p-3">
                            <i className="iconify fs-2" data-icon="twemoji:gem-stone"></i>
                            <div className="ms-3">
                                <div className="d-flex align-items-center">
                                    <h3 className="mb-0">Gemstones</h3>
                                </div>
                            </div>
                        </div>
                        <div className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 pb-3">
                            <div className="ms-3">
                                <div className="d-flex align-items-center">
                                    <div className="tab row">
                                        <button className="tablinks col-md active"><Link>Divine Stones</Link></button>
                                        <button className="tablinks col-md" onclick="window.location.href='/gems-cardinal';">Cardinal Stones</button>
                                        <button className="tablinks col-md" onclick="window.location.href='/gems-incidental';">Incidental Stones</button>
                                        <button className="tablinks col-md" onclick="window.location.href='/gems-overview';">Overview</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
*/