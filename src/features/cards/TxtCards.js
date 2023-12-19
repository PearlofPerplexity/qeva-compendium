import { useContext } from 'react';
import { AdminContext } from '../../contexts/adminContext';

const TxtCards = (props) => {

    const [isAdmin, setIsAdmin] = useContext(AdminContext);

    return (
        <div className="container-fluid">
            {props.array.topics.map((topic) => (
                <>
                {((!isAdmin && !topic.adminOnly) || (isAdmin)) && (
                    <div className="col col-lg-10 col-xl-9 mt-4" key={topic.id}>
                        <div className="row align-items-center background-box rounded-2">
                            <div className="col p-0 fs-7">
                                <div className="card p-3">
                                    <div className="card-body">
                                        <h5 className="card-title fs-4">{topic.name}</h5>
                                        {topic.year ? (
                                            <p>{topic.year}</p>
                                        ) : ('')}
                                        <p className="card-text">{topic.description} {isAdmin && topic.admin && topic.admin}</p>
                                        {topic.subtopics && (
                                            topic.subtopics.map((props) => (
                                                <>
                                                {((!isAdmin && !props.adminOnly) || (isAdmin)) && (
                                                <div key={props.id}>
                                                    {props.image ? (
                                                        <div className="d-flex align-items-center p-2 mb-3" >
                                                            <div className="img">
                                                                <img className="img-fluid"
                                                                    width="75" height="75"
                                                                    src={props.image}
                                                                    alt={props.imageAlt} />
                                                            </div>
                                                            <div className="ms-3 covered-div">
                                                                <h3 className="fs-5 mb-1">{props.name}</h3>
                                                                <p className="mb-0">{props.description} {isAdmin && props.admin && props.admin}</p>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                    <>
                                                        <strong>{props.name}</strong><br />
                                                        {props.description} {isAdmin && topic.admin && topic.admin}
                                                    </>
                                                    )}
                                                </div>
                                                )}
                                                </>
                                            )))
                                        }
                                        {topic.image && (
                                            <img className='card-img' src={topic.image} alt={topic.imageAlt} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                </>
            ))}
        </div>
    );
}

export default TxtCards;