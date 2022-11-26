import { 
    Navbar, 
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const InnerSmNav = (props) => {
    return (
        <section className="highlights mt-2">
            <div className="row">
                <div className="col-lg-12 rounded-2">
                    <div className="box d-flex align-items-center mb-lg-0 p-1">
                        <div className="ms-3">
                            <div className="d-flex align-items-center">
                            <i className={props.icon}></i>
                            <h5 className="mb-0">{props.name}</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-lg-10 col-xl-9'>
                        <div className='d-flex align-items-center p-0 m-0'>
                            <Navbar dark className='container p-0 m-0' id='lgnav' expand='xs'>   
                                <Nav className='tab row text-center p-0 m-0' style={{width: '100%'}} navbar>
                                    <NavItem className='col-12 button welcome'>
                                        <NavLink className='nav-link text-nowrap'  to='/' >Home</NavLink>
                                    </NavItem>
                                </Nav>
                            </Navbar>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InnerSmNav;