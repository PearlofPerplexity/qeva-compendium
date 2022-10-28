import {
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';
import { Link } from 'react-router-dom';
import { RACES } from '../../assets/shared/RACES';

const RaceSidebar = () => {
    return (
        <AccordionItem>
            <AccordionHeader targetId="4"><i className="uil-users-alt"></i>&nbsp; Races
            </AccordionHeader>
            <AccordionBody accordionId="4">
                <ul className="sidebar-dropdown list-unstyled">
                    {RACES.map((race) => {
                        return (
                            <li key={race.id}>
                                <Link to={race.link}>{race.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </AccordionBody>
        </AccordionItem>
    );
}

export default RaceSidebar;