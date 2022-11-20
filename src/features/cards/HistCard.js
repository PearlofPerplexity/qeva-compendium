import LgInnerNav from '../LgInnerNav';
import { HistIcon } from "../../utils/icon";
import { HistLink } from "../../utils/link";
import BottomNav from '../BottomNav';

const HistCard = (props) => {
    return (
        <>
            <LgInnerNav name='History' icon={HistIcon} link={HistLink} right={props.right} left={props.left} />
            <section className="highlights mt-4">
                <div className="row">
                    <div className="col col-lg-10 col-xl-9 rounded-2">
                        <div className="box d-flex align-items-center mb-lg-0 p-3">
                            <h3 className="mb-0 p-3">{props.array.name}</h3>
                        </div>
                        {props.array.image ? (
                            <img className='card-img' src={props.array.image} />
                        ) 
                        : ('')}
                    </div>
                </div>
            </section>
            <div className="container-fluid">
                {props.array.topics.map((topic) => {
                    return (
                        <div className="col col-lg-10 col-xl-9 mt-4" key={topic.id}>
                            <div className="row align-items-center background-box rounded-2">
                                <div className="col p-0 fs-7">
                                    <div className="card p-3">
                                        <div className="card-body">
                                            <h5 className="card-title fs-4">{topic.name}</h5>
                                            <p>{topic.year}</p>
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
            <BottomNav name='History' link={HistLink} right={props.right} left={props.left} />
        </>
    );
}

export default HistCard;