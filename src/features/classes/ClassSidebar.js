import {
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';
  import { Link } from 'react-router-dom';
  import { ClassIcon } from '../../utils/icon';
  import { CLASSES } from '../../assets/shared/CLASSES';

const ClassSidebar = () => {
    return (
        <AccordionItem>
            <AccordionHeader targetId="6"><i className={ClassIcon}></i>&nbsp; Classes
            </AccordionHeader>
            <AccordionBody accordionId="6">
                <ul className="sidebar-dropdown list-unstyled">
                    {CLASSES.map((props) => {
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

export default ClassSidebar;