import LgInnerNav from "../navs/LgInnerNav";
import { ClassIcon } from "../../utils/icon";
import { ClassLink } from "../../utils/link";
import TxtCards from "./TxtCards";
import BottomNav from "../navs/BottomNav";

// Used for Both Races & Dark Races with ternary operators handling differences below

const ClassCard = (props) => {
    const { image, imageAlt, name, quality, goal, race, primaryWeapon, sacredText, worldKnowledge } = props.array;

    return (
    
    <>
      <LgInnerNav name='Classes' icon={ClassIcon} link={ClassLink} right={props.right} left={props.left} />
      <div className="container-fluid">
        <div className="col col-lg-10 col-xl-9 mt-4">
          <div className="row align-items-center background-box">
            <div className="mx-auto col-md-4 col-lg-2 sm-fixed-width">
              <img className="card-img" src={image} alt={imageAlt} />
            </div>
            <div className="col p-0 fs-7">
              <div className="card p-4 border-bottom-0">
                <div className="card-body">
                  <h5 className="card-title fs-4">{name}</h5>
                  <p>{quality}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="col col-lg-10 col-xl-9">
        <div className="row background-box">
          <div className="col p-0 fs-7">
            <div className="card p-5 border-top-0">
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>Goal</b> {goal}</li>
                <li className="list-group-item"><b>Sacred Text</b> {sacredText}</li>
                <li className="list-group-item"><b>World Knowledge</b> {worldKnowledge}</li>
                <li className="list-group-item"><b>Possible Races</b> {race}</li>
                <li className="list-group-item"><b>Primary Weapon</b> {primaryWeapon}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  </div>
  <TxtCards array={props.array} />
  <BottomNav name='Classes' link={ClassLink} right={props.right} left={props.left} />
</>

    );
}

export default ClassCard;