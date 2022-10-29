import { useState } from 'react';
import { 
    Navbar, 
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { GemIcon } from '../../utils/icon';
import { GEMS } from '../../assets/shared/GEMS';

const GemNav = () => {
    return (
        <section className="highlights mt-2">
            <div className="row">
                <div className="col-lg-12 rounded-2">
                    <div className="box d-flex align-items-center mb-lg-0 p-1">
                        <div className="ms-3 ">
                            <div className="d-flex align-items-center">
                            <i className={GemIcon}></i>
                            <h5 className="mb-0">Gemstones</h5>
                            </div>
                        </div>
                    </div>
                    <div className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0">
                        <div className="">
                            <Navbar dark expand='xs'>
                                <Nav className='tab row' navbar>
                                    {GEMS.map((type) => {
                                        return (
                                            <NavItem className='col-md button' key={type.id}>
                                                <NavLink className='nav-link' to={type.link}>{type.type}</NavLink>
                                            </NavItem>
                                        );
                                    })}
                                </Nav>
                            </Navbar>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GemNav;