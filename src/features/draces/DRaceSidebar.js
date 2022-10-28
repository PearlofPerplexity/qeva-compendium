import {
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';
import { Link } from 'react-router-dom';
import { DRACES } from '../../assets/shared/DRACES';

const DRaceSidebar = () => {
    return (
        <AccordionItem>
            <AccordionHeader targetId="5"><i className="uil-users-alt"></i>&nbsp; Dark Races
            </AccordionHeader>
            <AccordionBody accordionId="5">
                <ul className="sidebar-dropdown list-unstyled">
                    {DRACES.map((race) => {
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

export default DRaceSidebar;