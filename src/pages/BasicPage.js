import React, { useState } from 'react';
import EdiText from 'react-editext';
import { BASICS } from "../assets/shared/BASICS";
import { GEMS } from '../assets/shared/GEMS';
import { DIVINE } from '../assets/shared/DIVINE';
import { BasicIcon } from "../utils/icon";
import InnerSmNav from "../features/navs/InnerSmNav";
import BottomSmNav from '../features/navs/BottomSmNav';

const BasicPage = () => {

    const [basics, setBasics] = useState(    
        BASICS[0].topics
    );
    
    const handleSave = index => e => {
        let newArr = [...basics];
        newArr[index].description = e.target.value;
        setBasics(newArr);
    };

    return (
        <div className='py-2 px-3'>
            <InnerSmNav icon={BasicIcon} name="The Basics - What makes Qeṽa unique?" />
            <div className="container-fluid">
                {basics.map((topic, index) => {
                    return (
                        <div className="col col-lg-10 col-xl-9 mt-4" key={topic.id}>
                            <div className="row align-items-center background-box rounded-2">
                                <div className="col p-0 fs-7">
                                    <div className="card p-3">
                                        <div className="card-body">
                                            <h5 className="card-title fs-4">{topic.name}</h5>
                                            <EdiText 
                                                showButtonsOnHover
                                                type="textarea"
                                                value={topic.description}
                                                onSave={handleSave(index)}
                                                className='card-text'
                                                inputProps={{
                                                    style:{
                                                        border: 'none',
                                                        Height: 'auto'
                                                    },
                                                    rows: 7
                                                }}
                                            >
                                            </EdiText>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <BottomSmNav left={GEMS[3]} right={DIVINE[3]} />
        </div>
    );
}

export default BasicPage;