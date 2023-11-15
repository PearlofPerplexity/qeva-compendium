import { DIVINE } from "../../assets/shared/DIVINE";
import Intro from "../../features/intro";
import BottomSmNav from '../../features/navs/BottomSmNav';

const DivEther = () => {
return (
<>
    <Intro name={DIVINE[2].name} description={DIVINE[2].description} />
    <div className="container-fluid" id="accordionEth">
        {DIVINE[2].topics.map((eth) => {
        let headingID = 'heading' + eth.id;
        let collapseID = 'collapse' + eth.id;
        let dataTarget = '#collapse' + eth.id;
        
        return (
            <div className="col col-lg-10 col-xl-9 mt-4" key={eth.id}>
                <div className="row align-items-center background-box rounded-2">
                    <div className="mx-auto col-md-4 col-lg-2 d-none d-md-block md-fixed-width">
                        <img className="card-img" src={eth.image} alt={eth.imageAlt} />
                    </div>
                    <div className="col p-0 fs-7">
                        <div className="card p-3">
                            <div className="card-body">
                                <h5 className="card-title fs-4">{eth.name}</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><b>Alignment</b> {eth.alignment}</li>
                                <li className="list-group-item"><b>Form</b> {eth.form}</li>
                                <li className="list-group-item"><b>Influence</b> {eth.influence}</li>
                            </ul>
                            <div className="card-body">
                                {eth.smDescription}
                            </div>
                        </div>
                    </div>
                    <div className="accordion p-0" id="accordionEth">
                        <div className="accordion-item border border-0">
                            <h2 className="accordion-header" id={headingID}>
                                <button className="accordion-button collapsed border border-0" type="button" data-bs-toggle="collapse" data-bs-target={dataTarget} aria-expanded="true" aria-controls={collapseID}>
                                More Info
                                </button>
                            </h2>
                            <div id={collapseID} className="accordion-collapse collapse" aria-labelledby={headingID} data-bs-parent="#accordionEth">
                                <div className="accordion-body border border-0 p-5 fs-5">
                                {eth.description}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
        })}
    </div>
    <BottomSmNav left={DIVINE[1]} right={DIVINE[3]} />
</>
);
}

export default DivEther;