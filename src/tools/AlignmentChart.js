import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Offcanvas,
    OffcanvasBody,
    OffcanvasHeader
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { ALIGNMENTS } from '../assets/shared/ALIGNMENTS';

const AlignmentChart = () => {
    
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [moral, setMoral] = useState(false);
    const [ethic, setEthic] = useState(false);
    const moralToggle = () => setMoral(!moral);
    const ethicToggle = () => setEthic(!ethic);

    const reset = () => {
        toggle();
        console.clear();
    }

    return (
        <div className="col-lg-4">
            <Link className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3"  onClick={toggle}>
                <i className="iconify fs-2" data-icon="twemoji:gem-stone"></i>
                <div className="ms-3">
                    <div className="d-flex align-items-center">
                        <h3 className="mb-0">Alignment Chart</h3>
                    </div>
                </div>
            </Link>
            <Modal isOpen={modal} toggle={toggle} fullscreen>
                <ModalHeader toggle={toggle}><i className="iconify fs-2" data-icon="twemoji:gem-stone"></i> Alignment Chart</ModalHeader>
                <ModalBody>
                <div className='container'>
                    <div className='row text-center'>
                        <h3>Ethical Axis 
                            <Button className='text-center info' onClick={ethicToggle}>
                                🛈
                            </Button>
                        </h3>
                        <Offcanvas isOpen={ethic} toggle={ethicToggle} direction={'end'}>
                            <OffcanvasHeader toggle={ethicToggle}>
                            Ethical Axis
                            </OffcanvasHeader>
                            <OffcanvasBody>
                                {ALIGNMENTS[0].topics.map(e => {
                                    return (
                                        <div key={e.id}>
                                            <h6><strong>{e.name}</strong></h6>
                                            <p>{e.description}</p>
                                        </div>
                                    );
                                })}
                            </OffcanvasBody>
                        </Offcanvas>
                    </div>
                    <div className='row align-items-center text-center'>
                        <div className='col-2'>
                            <h3>Moral Axis
                                <Button className='text-center info' onClick={moralToggle}>
                                    🛈
                                </Button>
                            </h3>
                            <Offcanvas isOpen={moral} toggle={moralToggle}>
                                <OffcanvasHeader toggle={moralToggle}>
                                Moral Axis
                                </OffcanvasHeader>
                                <OffcanvasBody>
                                    {ALIGNMENTS[1].topics.map(e => {
                                        return (
                                            <div key={e.id}>
                                                <h6><strong>{e.name}</strong></h6>
                                                <p>{e.description}</p>
                                            </div>
                                        );
                                    })}
                                </OffcanvasBody>
                            </Offcanvas>
                        </div>
                        <div className='col-8'>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">LAWFUL</th>
                                        <th scope="col">NEUTRAL</th>
                                        <th scope="col">CHAOTIC</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">GOOD</th>
                                        <td>LAWFUL GOOD</td>
                                        <td>NEUTRAL GOOD</td>
                                        <td>CHAOTIC GOOD</td>
                                        </tr>
                                    <tr>
                                        <th scope="row">NEUTRAL</th>
                                        <td>LAWFUL NEUTRAL</td>
                                        <td>TRUE NEUTRAL</td>
                                        <td>CHAOTIC NEUTRAL</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">EVIL</th>
                                        <td>LAWFUL EVIL</td>
                                        <td>NEUTRAL EVIL</td>
                                        <td>CHAOTIC EVIL</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='col-2'></div>
                    </div>
                </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={reset}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default AlignmentChart;