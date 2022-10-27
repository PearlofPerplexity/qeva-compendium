import {
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';
  import { Link } from 'react-router-dom';
  import { GEMS } from '../../assets/shared/GEMS';

const GemSidebar = () => {
    return (
        <AccordionItem>
            <AccordionHeader targetId="2"><i className="uil-diamond"></i>&nbsp; Gemstones
            </AccordionHeader>
            <AccordionBody accordionId="2">
                <ul className="sidebar-dropdown list-unstyled">
                    {GEMS.map((gem) => {
                        return (
                            <li key={gem.id}>
                                <Link to={gem.link}>{gem.type}</Link>
                            </li>
                        );
                    })}
                </ul>
            </AccordionBody>
        </AccordionItem>
    );
}

export default GemSidebar;