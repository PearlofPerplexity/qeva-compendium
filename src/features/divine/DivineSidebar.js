import {
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';
  import { Link } from 'react-router-dom';
  import { DivineIcon } from '../../utils/icon';
  import { DIVINE } from '../../assets/shared/DIVINE';

const DivineSidebar = () => {
    return (
        <AccordionItem>
            <AccordionHeader targetId="3"><i className={DivineIcon}></i>&nbsp; Divination
            </AccordionHeader>
            <AccordionBody accordionId="3">
                <ul className="sidebar-dropdown list-unstyled">
                    {DIVINE.map((props) => {
                        return (
                            <li key={props.id}>
                                <Link to={props.link}>{props.category}</Link>
                            </li>
                        );
                    })}
                </ul>
            </AccordionBody>
        </AccordionItem>
    );
}

export default DivineSidebar;