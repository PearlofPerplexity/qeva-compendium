import LgInnerNav from "../navs/LgInnerNav";
import { RaceIcon, DRaceIcon } from "../../utils/icon";
import { RaceLink, DRaceLink } from "../../utils/link";
import BottomNav from "../navs/BottomNav";

// Used for Both Races & Dark Races with ternary operators handling differences below

const SingRaceCard = (props) => {
    const { image, imageAlt, name, heartStone, spawnStone, origin, elden, lifespan, height, weight, appearance, language, government, residence, foundedOrders, description } = props.array;

    return (
    
    <>
      {spawnStone ? (
        <LgInnerNav name='Races' icon={RaceIcon} link={RaceLink} right={props.right} left={props.left} />
      ) : ( 
        <LgInnerNav name='Dark Races' icon={DRaceIcon} link={DRaceLink} right={props.right} left={props.left} />
      )}
      <div className="container-fluid">
        <div className="col col-lg-10 col-xl-9 mt-4">
          <div className="row align-items-center background-box">
            <div className="mx-auto col-md-4 col-lg-2 md-fixed-width">
              <img className="card-img" src={image} alt={imageAlt} />
            </div>
            <div className="col p-0 fs-7">
              <div className="card p-3 border-bottom-0">
                <div className="card-body">
                  <h5 className="card-title fs-4 ps-3">{name}</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Heart Stone</b> {heartStone}</li>
                    {spawnStone ? (
                      <li className="list-group-item"><b>Spawn Stone</b> {spawnStone}</li>
                    ) : ( 
                      <li className="list-group-item"><b>Origin</b> {origin}</li>
                    )}
                    <li className="list-group-item"><b>Elden</b> {elden}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="col col-lg-10 col-xl-9">
        <div className="row align-items-center background-box">
          <div className="col p-0 fs-7">
            <div className="card p-5 border-top-0">
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>Lifespan</b> {lifespan}</li>
                <li className="list-group-item"><b>Size</b> {height} | {weight}</li>
                <li className="list-group-item"><b>Appearance</b> {appearance}</li>
                <li className="list-group-item"><b>Language</b> {language}</li>
                <li className="list-group-item"><b>Government</b> {government}</li>
                <li className="list-group-item"><b>Residence</b> {residence}</li>
                {foundedOrders ? (
                <li className="list-group-item"><b>Founded Orders</b> {foundedOrders}</li>
                ) : ( '' )}
              </ul>
            </div>
          </div>
          <div className="card-text p-4 px-5">
            {description}
          </div>
        </div>
      </div>
  </div>
  {spawnStone ? (
        <BottomNav name='Races' icon={RaceIcon} link={RaceLink} right={props.right} left={props.left} />
      ) : ( 
        <BottomNav name='Dark Races' icon={DRaceIcon} link={DRaceLink} right={props.right} left={props.left} />
      )}
</>

    );
}

export default SingRaceCard;