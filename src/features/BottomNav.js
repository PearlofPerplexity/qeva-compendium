import { 
    Navbar, 
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { leftArrow, rightArrow } from '../utils/icon';

const BottomNav = (props) => {
    return (
        <section className="highlights mt-4">
            <div className="row">
                <div className="col-md-12 col-lg-10 col-xl-9 rounded-2">
                    <div className='d-flex align-items-center p-0 m-0'>
                        <Navbar dark className='container p-0 m-0' id='lgnav' expand='xs'>   
                            <Nav className='tab row text-center p-0 m-0' style={{width: '100%'}} navbar>
                                <NavItem className='col-1 button'>
                                    <NavLink className='nav-link p-0' to={props.left.link}><i className={leftArrow}></i></NavLink>
                                </NavItem>
                                <NavItem className='col-10 button' id='not-active'>
                                    <NavLink className='nav-link text-nowrap' to={props.link} >All {props.name}</NavLink>
                                </NavItem>
                                <NavItem className='col-1 button'>
                                    <NavLink className='nav-link p-0' to={props.right.link}><i className={rightArrow}></i></NavLink>
                                </NavItem>
                            </Nav>
                        </Navbar>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BottomNav;