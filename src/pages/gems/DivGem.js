import { GEMS } from "../../assets/shared/GEMS";

const DivGem = () => {
    return (
        <div className="container-fluid" id="accordionGem">
            {GEMS[0].gems.map((gem) => {
            let headingID = 'heading' + gem.id;
            let collapseID = 'collapse' + gem.id;
            let dataTarget = '#collapse' + gem.id;
            
            return (
                <div className="col col-lg-10 col-xl-9 mt-4" key={gem.id}>
                    <div className="row align-items-center background-box rounded-2">
                        <div className="mx-auto col-md-4 col-lg-2 d-none d-md-block fixed-width">
                            <img className="card-img" src={gem.image} alt="Card image cap" />
                        </div>
                        <div className="col p-0 fs-7">
                            <div className="card p-3">
                                <div className="card-body">
                                    <h5 className="card-title fs-4">{gem.name}</h5>
                                    <p className="card-text">{gem.quality}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><b>Purpose</b> {gem.purpose}</li>
                                    <li className="list-group-item"><b>Original Location</b> {gem.originalLocation}</li>
                                    <li className="list-group-item"><b>Notable Locations</b> {gem.notableLocations}</li>
                                </ul>
                                <div className="card-body">
                                    {gem.smDescription}
                                </div>
                            </div>
                        </div>
                        <div className="accordion p-0" id="accordionGem">
                            <div className="accordion-item border border-0">
                                <h2 className="accordion-header" id={headingID}>
                                    <button className="accordion-button collapsed border border-0" type="button" data-bs-toggle="collapse" data-bs-target={dataTarget} aria-expanded="true" aria-controls={collapseID}>
                                    More Info
                                    </button>
                                </h2>
                                <div id={collapseID} className="accordion-collapse collapse" aria-labelledby={headingID} data-bs-parent="#accordionGem">
                                    <div className="accordion-body border border-0 p-5 fs-5">
                                    {gem.description}
                                    </div>
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

export default DivGem;