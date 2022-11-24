import { 
    Navbar, 
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { leftArrow, rightArrow } from '../../utils/icon';

const SmBottomNav = (props) => {
    return (
        <section className="highlights mt-4">
            <div className="row">
                <div className="col-md-12 col-lg-10 col-xl-9">
                    <div className='d-flex align-items-center p-0 m-0'>
                        <Navbar dark className='container p-0 m-0' id='lgnav' expand='xs'>   
                            <Nav className='tab row text-center p-0 m-0 rounded-2' style={{width: '100%'}} navbar>
                                <NavItem className='col button'>
                                    <NavLink className='nav-link p-0' to={props.left.link}><i className={leftArrow}></i>{props.left.name}</NavLink>
                                </NavItem>
                                <NavItem className='col button'>
                                    <NavLink className='nav-link p-0' to={props.right.link}>{props.right.name}<i className={rightArrow}></i></NavLink>
                                </NavItem>
                            </Nav>
                        </Navbar>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SmBottomNav;