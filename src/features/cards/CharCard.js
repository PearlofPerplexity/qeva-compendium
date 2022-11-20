import { 
  Navbar, 
  Nav,
  NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const CharCard = (props) => {

return (

<>
  {props.array.topics.map((charx) => {
      const { id, name, life, residence, affiliation, race, personality, description } = charx;

      return (
        <div className="container-fluid" key={id}>
          <div className="col col-lg-10 col-xl-9 mt-4">
            <div className="row align-items-center background-box">
              <div className="col p-0 fs-7">
                <div className="card p-3">
                  <div className="card-body">
                      <h5 className="card-title fs-4">{name}</h5>
                      <p className="m-0">{life}</p>
                  </div>
                  <ul className="list-group list-group-flush">
                      <li className="list-group-item"><b>Residence</b> {residence}</li>
                      <li className="list-group-item"><b>Race</b> {race}</li>
                      <li className="list-group-item"><b>Affiliation</b> {affiliation}</li>
                      <li className="list-group-item"><b>Personality</b> {personality}</li>
                  </ul>
                  <div className="card-body"> 
                    <p className="card-text">{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  })}
  <section className="highlights mt-4">
            <div className="row">
                <div className="col-md-12 col-lg-10 col-xl-9">
                    <div className='d-flex align-items-center p-0 m-0'>
                        <Navbar dark className='container p-0 m-0' id='lgnav' expand='xs'>   
                            <Nav className='tab row text-center p-0 m-0 rounded-2' style={{width: '100%'}} navbar>
                                <NavItem className='col button'>
                                    <NavLink className='nav-link p-0' to={props.other.link}>{props.other.name} Characters</NavLink>
                                </NavItem>
                            </Nav>
                        </Navbar>
                    </div>
                </div>
            </div>
        </section>
</>

    );
}

export default CharCard;