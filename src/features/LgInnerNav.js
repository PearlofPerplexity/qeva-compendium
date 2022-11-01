import { 
    Navbar, 
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const LgInnerNav = () => {
    return (
        <Navbar dark className='box mb-4 mb-lg-0'>   
            <Nav className='tab row' style={{width: '100%'}} navbar>
                <NavItem className='button'>
                    <NavLink className='nav-link text-nowrap text-center' to={props.link} >All {props.name}</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default LgInnerNav;