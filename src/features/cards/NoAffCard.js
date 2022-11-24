import LgInnerNav from "../navs/LgInnerNav";
import { ClassIcon } from "../../utils/icon";
import { ClassLink } from "../../utils/link";
import Intro from "../intro";
import BottomNav from "../navs/BottomNav";

const NoAffCard = (props) => {

const { name, description } = props.array;

return (

<>
  <LgInnerNav name='Classes' icon={ClassIcon} link={ClassLink} left={props.left} right={props.right} />
    <Intro name={name} description={description} />
  {props.array.topics.map((classx) => {
      const { id, name, expertise, equipment, description } = classx;

      return (
        <div className="container-fluid" key={id}>
          <div className="col col-lg-10 col-xl-9 mt-4">
            <div className="row align-items-center background-box">
              <div className="col p-0 fs-7">
                <div className="card p-3">
                  <div className="card-body">
                      <h5 className="card-title fs-4">{name}</h5>
                  </div>
                  <ul className="list-group list-group-flush">
                      <li className="list-group-item"><b>Expertise</b> {expertise}</li>
                      <li className="list-group-item"><b>Equipment</b> {equipment}</li>
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
  <BottomNav name='Classes' link={ClassLink} left={props.left} right={props.right} />
</>

    );
}

export default NoAffCard;