import { DIVINE } from "../../assets/shared/DIVINE";

const DivLayers = () => {
    return (
        <div className="container-fluid">
            {DIVINE[0].layers.map((layer) => {
                return (
                    <div className="col col-lg-10 col-xl-9 mt-4" key={layer.id}>
                        <div className="row align-items-center background-box rounded-2">
                            <div className="col p-0 fs-7">
                                <div className="card p-3">
                                    <div className="card-body">
                                        <h5 className="card-title fs-4">{layer.name}</h5>
                                        <p className="card-text">{layer.description}</p>
                                        {layer.subtopics ? (
                                            layer.subtopics.map((props) => {
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

export default DivLayers;