import {
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';
  import { Link } from 'react-router-dom';

const Sidebar = (props) => {
    return (
        <AccordionItem>
            <AccordionHeader targetId={props.id}><i className={props.icon}></i>&nbsp; {props.name}
            </AccordionHeader>
            <AccordionBody accordionId={props.id}>
                <ul className="sidebar-dropdown list-unstyled">
                    {props.array.map((props) => {
                        return (
                            <li key={props.id}>
                                <Link to={props.link}>{props.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </AccordionBody>
        </AccordionItem>
    );
}

export default Sidebar;