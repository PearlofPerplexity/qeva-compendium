const Intro = (props) => {
    return (
        <div className="container-fluid">
            <div className="col col-lg-10 col-xl-9 mt-4">
                <div className="row align-items-center">
                    <div className="col p-0 fs-7">
                        <div className="intro p-3">
                            <div className="card-body">
                                <h5 className="fs-4">{props.name}</h5>
                                <p className="card-text">{props.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;