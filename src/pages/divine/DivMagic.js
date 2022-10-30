import { DIVINE } from "../../assets/shared/DIVINE";

const DivMagic = () => {
    return (
        <div className="container-fluid">
            {DIVINE[1].topics.map((topic) => {
                return (
                    <div className="col col-lg-10 col-xl-9 mt-4" key={topic.id}>
                        <div className="row align-items-center background-box rounded-2">
                            <div className="col p-0 fs-7">
                                <div className="card p-3">
                                    <div className="card-body">
                                        <h5 className="card-title fs-4">{topic.name}</h5>
                                        <p className="card-text">{topic.description}</p>
                                        {topic.subtopics ? (
                                            topic.subtopics.map((props) => {
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

export default DivMagic;