import LgInnerNav from "../LgInnerNav";
import { RaceIcon } from "../../utils/icon";
import { RaceLink } from "../../utils/link";
import BottomNav from "../BottomNav";

const MultiRaceCards = (props) => {
    const { name, heartStone, spawnStone, elden, lifespan, height, weight, language, government, foundedOrders, description, topics } = props.array;

    return (
        <>
        <LgInnerNav name='Races' icon={RaceIcon} link={RaceLink} left={props.left} right={props.right} />
        <div className="container-fluid">
            <div className="col col-lg-10 col-xl-9 mt-4">
                <div className="row align-items-center background-box rounded-2">
                    <div className="col p-0 fs-7">
                        <div className="card p-3">
                            <div className="card-body">
                                <h5 className="card-title fs-4">{name}</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><b>Heart Stone</b> {heartStone}</li>
                                <li className="list-group-item"><b>Spawn Stone</b> {spawnStone}</li>
                                <li className="list-group-item"><b>Elder</b> {elden}</li>
                                <li className="list-group-item"><b>Lifespan</b> {lifespan}</li>
                                <li className="list-group-item"><b>Size</b> {height} | {weight}</li>
                                <li className="list-group-item"><b>Language</b> {language}</li>
                                <li className="list-group-item"><b>Government</b> {government}</li>
                                <li className="list-group-item"><b>Founded Orders</b> {foundedOrders}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="accordion p-0" id="accordionRace">
                        <div className="accordion-item border border-0">
                            <h2 className="accordion-header" id="headingZero">
                                <button className="accordion-button collapsed border border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseZero" aria-expanded="true" aria-controls="collapseZero">
                                More Info
                                </button>
                            </h2>
                            <div id="collapseZero" className="accordion-collapse collapse" aria-labelledby="headingZero" data-bs-parent="#accordionRace">
                                <div className="accordion-body border border-0 p-5 fs-5">
                                {description}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {topics.map((race) => {
                const { id, name, nickname, residence, appearance, description, image, imageAlt } = race;

                return (
                    <div className="col col-lg-10 col-xl-9 mt-4" key={id}>
                        <div className="row align-items-center background-box rounded-2">
                            <div className="mx-auto col-md-4 col-lg-2 md-fixed-width">
                                <img className="card-img" src={image} alt={imageAlt} />
                            </div>
                            <div className="col p-0 fs-7">
                                <div className="card p-4">
                                    <div className="card-body">
                                        <h5 className="card-title fs-4">{name}</h5>
                                        <p>{nickname}</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><b>Residence</b> {residence}</li>
                                        <li className="list-group-item"><b>Appearance</b> {appearance}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-text p-4 px-5">
                                {description}
                            </div>
                        </div>
                    </div>
                );
            })}
      </div>
      <BottomNav name='Races' link={RaceLink} right={props.right} left={props.left} />
      </>
    );
}

export default MultiRaceCards;