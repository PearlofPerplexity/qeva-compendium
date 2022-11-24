import BottomSmNav from '../BottomSmNav';

const FaunaCard = (props) => {

    return (
    <>
        <div className="container-fluid">
            {props.array.topics.map((fauna) => {
                const { id, name, habitat, home, description, image, imageAlt } = fauna;

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
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><b>Habitat</b> {habitat}</li>
                                        <li className="list-group-item"><b>Home</b> {home}</li>
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
        <BottomSmNav left={props.left} right={props.right} />
    </>
    );
}

export default FaunaCard;