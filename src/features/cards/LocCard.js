import LgInnerNav from "../LgInnerNav";
import { LocIcon } from "../../utils/icon";
import { LocLink } from "../../utils/link";
import TxtCards from "./TxtCards";
import BottomNav from "../BottomNav";

const LocCard = (props) => {

return (
<>
<LgInnerNav name='Locations' icon={LocIcon} link={LocLink} right={props.right} left={props.left} />
<div className="container-fluid">
<section className="highlights mt-4">
    <div className="row">
        <div className="col col-lg-10 col-xl-9 welcome">
            <div className="box mb-lg-0 p-3 card-body rounded-2">
                <h3 className="mb-0 p-3">{props.array.name}</h3>
                <p className="card-text ps-3">{props.array.description}</p>
            </div>
            {props.array.image ? (
                <img className='card-img' src={props.array.image} />
            ) 
            : ('')}
        </div>
    </div>
</section>
    {props.array.topics ? (
        props.array.topics.map((topic) => {
            let headingID = 'heading' + topic.id;
            let collapseID = 'collapse' + topic.id;
            let dataTarget = '#collapse' + topic.id;
            return (
                <div className="col col-lg-10 col-xl-9 mt-4" key={topic.id}>
                    <div className="align-items-center background-box rounded-2">
                        { topic.image ? (
                            <div className="mx-auto md-fixed-width">
                                <img className="card-img" src={topic.image} alt="Card image cap" />
                            </div>
                        ) : ('') }
                        <div className=" p-0 fs-7">
                            <div className="card p-3">
                                <div className="card-body">
                                    <h5 className="card-title fs-4">{topic.name}</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <b>Climate</b> {topic.climate}
                                    </li>
                                    <li className="list-group-item">
                                        {topic.description}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    {topic.subtopics ? (
                        <div className="accordion p-0" id="accordionLoc">
                            <div className="accordion-item border border-0">
                                <h2 className="accordion-header" id={headingID}>
                                    <button className="accordion-button collapsed border border-0" type="button" data-bs-toggle="collapse" data-bs-target={dataTarget} aria-expanded="true" aria-controls={collapseID}>
                                    Regions within {topic.name}
                                    </button>
                                </h2>
                                <div id={collapseID} className="accordion-collapse collapse" aria-labelledby={headingID} data-bs-parent="#accordionLoc">
                                    <div className="accordion-body border border-0 p-3">
                                        {topic.subtopics.map((place) => {
                                            const { id, name, race, cities, features, description, image } = place;
    
                                            return (
                                                <div className="mb-3 d-flex justify-content-center align-items-center container" key={id}>
                                                    <div className="row align-items-center rounded-2">
                                                        { place.image ? (
                                                            <div className="mx-auto col-md-4 col-lg-2 d-none d-md-block md-fixed-width">
                                                                <img className="card-img" src={place.image} alt="Card image cap" />
                                                            </div>
                                                        ) : ('') }
                                                        <div className="col p-0">
                                                            <div className="card p-2">
                                                                <div className="card-body">
                                                                    <h5 className="card-title fs-7">{name}</h5>
                                                                </div>
                                                                <ul className="list-group list-group-flush">
                                                                    <li className="list-group-item"><b>Native Races</b> {race}</li>
                                                                    <li className="list-group-item"><b>Major Cities</b> {cities}</li>
                                                                    <li className="list-group-item"><b>Natural Features</b> {features}</li>
                                                                    <li className="list-group-item">{description}</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            );
                                            })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : ( '' )
                    }
                    </div>
                </div>
            );
        })
        ) : ( '' )
    }
    {props.array.hTopics ? ( 
        <>
            <section className="highlights mt-4">
                <div className="row">
                    <div className="col col-lg-10 col-xl-9 welcome">
                        <div className="box mb-lg-0 p-3 card-body rounded-2">
                            <h3 className="mb-0 p-3">History of {props.array.name}</h3>
                        </div>
                    </div>
                </div>
            </section>
            <TxtCards array={props.array.hTopics[0]} /> 
        </>
    ) : ('')}
</div>
<BottomNav name='Locations' icon={LocIcon} link={LocLink} right={props.right} left={props.left} />
</>
);
}

export default LocCard;