import { BASICS } from "../assets/shared/BASICS";

const BasicPage = () => {
    return (
        <div className='py-2 px-3'>
            <section className="highlights mt-2">
                <div className="row">
                    <div className="col col-lg-10 col-xl-9 rounded-2">
                        <div className="box d-flex align-items-center mb-lg-0 p-3">
                            <h3 className="mb-0">The Basics - What makes Qeṽa unique?</h3>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container-fluid">
                {BASICS[0].topics.map((topic) => {
                    return (
                        <div className="col col-lg-10 col-xl-9 mt-4" key={topic.id}>
                            <div className="row align-items-center background-box rounded-2">
                                <div className="col p-0 fs-7">
                                    <div className="card p-3">
                                        <div className="card-body">
                                            <h5 className="card-title fs-4">{topic.name}</h5>
                                            <p className="card-text">
                                            {topic.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default BasicPage;