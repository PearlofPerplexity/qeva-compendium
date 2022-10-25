import {
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';
  import { Link } from 'react-router-dom';
  import { RACES } from '../../assets/shared/RACES';

const RaceSidebar = (props) => {
    return (
        <AccordionItem>
            <AccordionHeader targetId="4"><i className="uil-users-alt"></i>&nbsp; Races
            </AccordionHeader>
            <AccordionBody accordionId="4">
                {RACES.map((race) => {
                    return (
                        <ul className="sidebar-dropdown list-unstyled" key={race.id}>
                            <li><Link to={race.link}>{race.race}</Link></li>
                        </ul>
                    );
                })}
            </AccordionBody>
        </AccordionItem>
    );
}

export default RaceSidebar;