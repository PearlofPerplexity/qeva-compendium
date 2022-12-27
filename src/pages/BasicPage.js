import _ from "lodash";
import React from 'react';
import EdiText from 'react-editext';
import { Col } from "reactstrap";
import { GEMS } from '../assets/shared/GEMS';
import { DIVINE } from '../assets/shared/DIVINE';
import { BasicIcon } from "../utils/icon";
import InnerSmNav from "../features/navs/InnerSmNav";
import BottomSmNav from '../features/navs/BottomSmNav';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllBasics, updateBasics } from '../slices/basicsSlice';
import Error from "../utils/Error";
import Loading from "../utils/Loading";

const BasicPage = () => {
    const basics = useSelector(selectAllBasics);

    const dispatch = useDispatch();
    
    const handleSave = index => e => {
        let newArr = _.cloneDeep(basics);
        newArr[0].topics[index].description = e;
        dispatch(updateBasics(newArr));
    };

    const isLoading = useSelector((state) => state.basics.isLoading);
    const errMsg = useSelector((state) => state.basics.errMsg);

if(isLoading) {
    return (
        <Col md='5' className='m-1'>
            <Loading />
        </Col>
    );
}

if (errMsg) {
    return (
        <Col md='5' className='m-1'>
            <Error errMsg={errMsg}/>
        </Col>
    );
}

if (basics && basics.length > 0) {
    return (
        <div className='py-2 px-3'>
            <InnerSmNav icon={BasicIcon} name="The Basics - What makes Qeṽa unique?" />
            <div className="container-fluid">
                {basics[0].topics.map((topic, index) => {
                    return (
                        <div className="col col-lg-10 col-xl-9 mt-4" key={topic.id}>
                            <div className="row align-items-center background-box rounded-2">
                                <div className="col p-0 fs-7">
                                    <div className="card py-3 ps-3">
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
return (
    <Col md='5' className='m-1'>
        There is no information available.
    </Col>
)

}

export default BasicPage;