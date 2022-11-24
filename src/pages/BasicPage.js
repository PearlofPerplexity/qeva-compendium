import { BASICS } from "../assets/shared/BASICS";
import { BasicIcon } from "../utils/icon";
import InnerSmNav from "../features/navs/InnerSmNav";
import BottomSmNav from '../features/navs/BottomSmNav';

const BasicPage = () => {
    return (
        <div className='py-2 px-3'>
            <InnerSmNav icon={BasicIcon} name="The Basics - What makes Qeṽa unique?" />
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
            <BottomSmNav left={BASICS[0].topics[0]} right={BASICS[0].topics[1]} />
        </div>
    );
}

export default BasicPage;