import { GEMS } from "../../assets/shared/GEMS";

const GemOvr = () => {
    return (
        <div className="container-fluid">
            {GEMS[3].topics.map((gem) => {
                return (
                    <div className="col col-lg-10 col-xl-9 mt-4" key={gem.id}>
                        <div className="row align-items-center background-box rounded-2">
                            <div className="col p-0 fs-7">
                                <div className="card p-3">
                                    <div className="card-body">
                                        <h5 className="card-title fs-4">{gem.name}</h5>
                                        <p className="card-text">{gem.description}</p>
                                        {gem.subtopics ? (
                                            gem.subtopics.map((props) => {
                                                return (
                                                    <p key={props.id}>
                                                        <strong>{props.name}</strong><br />
                                                        {props.description}
                                                    </p>
                                                )
                                            })
                                            ) : ( '' )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default GemOvr;