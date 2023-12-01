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
import { INGREDIENTS } from '../assets/shared/INGREDIENTS';
import { CONCOCTIONS } from '../assets/shared/CONCOCTIONS';
import { sortObjArray } from '../utils/dnd';

const ingredients = sortObjArray(INGREDIENTS);

const concoctions = sortObjArray(CONCOCTIONS);

const CraftingChart = (props) => {
    
    const [selectedIngredients, setSelectedIngredients] = useState(ingredients);

    const handleLocation = (e) => {
        if (e.target.value === 'all') {
            setSelectedIngredients(ingredients);
        } else {
            const curIngredients = ingredients.filter(ingredient => ingredient.location.includes(e.target.value));
            setSelectedIngredients(curIngredients);
        }
    }

    const [selectedPotions, setSelectedPotions] = useState(concoctions);

    const [selectedPotionTypes, setSelectedPotionTypes] = useState(concoctions);

    const handlePotionType = (e) => {
        if (e.target.value === 'all') {
            setSelectedPotionTypes(concoctions);
            setSelectedPotions(selectedPotionIngredients);
        } else {
            const newTypes = concoctions.filter(potion => potion.type === e.target.value);
            const newPotions = selectedPotionIngredients.filter(potion => potion.type === e.target.value);
            setSelectedPotionTypes(newTypes);
            setSelectedPotions(newPotions);
        }
    }

    const [selectedPotionIngredients, setSelectedPotionIngredients] = useState(concoctions);
    const [potionIngredients, setPotionIngredients] = useState([]);

    const handlePotionIngredients = (e) => {
        if (potionIngredients.includes(e.target.value)) {
            alert('You have already added this ingredient!')
        } else if (e.target.value === 'all') {
            setSelectedPotionIngredients(concoctions);
            setSelectedPotions(selectedPotionTypes);
            setPotionIngredients([]);
        } else {
            const newIngredients = [...potionIngredients, e.target.value];
            const newPIs = concoctions.filter(array => newIngredients.some(ingredient => array.ingredients.includes(ingredient)));
            const newPotions = selectedPotionTypes.filter(array => newIngredients.some(ingredient => array.ingredients.includes(ingredient)));
            setSelectedPotionIngredients(newPIs);
            setSelectedPotions(newPotions);
            setPotionIngredients(newIngredients);
        }
    }

    const removePotionIngredient = (e) => {
        const newIngredients = potionIngredients.filter(event => event !== e.target.ariaLabel);
        if (newIngredients.length === 0) {
            setSelectedPotionIngredients(concoctions);
            setSelectedPotions(selectedPotionTypes);
        } else {
            const newPIs = concoctions.filter(array => newIngredients.some(ingredient => array.ingredients.includes(ingredient)));
            const newPotions = selectedPotionTypes.filter(array => newIngredients.some(ingredient => array.ingredients.includes(ingredient)));
            setSelectedPotionIngredients(newPIs);
            setSelectedPotions(newPotions);
        }
        setPotionIngredients(newIngredients);
    }
    
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [info, setInfo] = useState(false);
    const infoToggle = () => setInfo(!info);

    const [info2, setInfo2] = useState(false);
    const info2Toggle = () => setInfo2(!info2);

    const reset = () => {
        toggle();
        setSelectedIngredients(ingredients);
        setPotionIngredients([]);
        setSelectedPotionTypes(concoctions);
        setSelectedPotionIngredients(concoctions);
        setSelectedPotions(concoctions);
        console.clear();
    }

    return (
        <div className="col-lg-4">
            {props.loc === 'toolPage' ? (
                <Link className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3"  onClick={toggle}>
                    <i className="iconify fs-2" data-icon="emojione-v1:herb"></i>
                    <div className="ms-3">
                        <div className="d-flex align-items-center">
                            <h3 className="mb-0">Crafting Chart</h3>
                        </div>
                    </div>
                </Link>
            ) : props.loc === 'classChart' ? (
                <button type="button" className="btn rounded-circle" onClick={toggle}>
                    <i className="uil uil-info-circle"></i>
                </button>
            ) : ('')}
            <Modal isOpen={modal} toggle={toggle} fullscreen>
                <ModalHeader toggle={toggle}><i className="iconify fs-2" data-icon="emojione-v1:herb"></i> Crafting Chart</ModalHeader>
                <ModalBody>
                <div className='container'>
                    <div className='row text-center mb-4'>
                        <h3>Ingredients
                            <Button className='text-center info' onClick={infoToggle}>
                                🛈
                            </Button>                            
                        </h3>
                        <Offcanvas isOpen={info} toggle={infoToggle} direction={'end'}>
                            <OffcanvasHeader toggle={infoToggle}>
                            Crafting
                            </OffcanvasHeader>
                            <OffcanvasBody>
                                <p>
                                This table includes ingredients needed to create concoctions within Qeṽa.
                                </p>
                                <h5>Classes</h5>
                                <p>
                                The art of crafting is used by the following classes:
                                    <ul>
                                        <li>Adventurer</li>
                                        <li>Crafter</li>
                                        <li>Druid</li>
                                    </ul>
                                </p>
                            </OffcanvasBody>
                        </Offcanvas>
                        <table className="table table-hover table-sticky align-middle">
                            <thead>
                                <tr className='align-middle'>
                                    <td>D{selectedIngredients.length}</td>
                                    <th>Name</th>
                                    <td>
                                        <select name='locs' className="ms-2 charPicklist text-center" id='locs-select' onChange={handleLocation}>
                                            <option value="all">Location</option>
                                            <option value='Cave' >Cave</option>
                                            <option value='Field' >Field</option>
                                            <option value='Forest' >Forest</option>
                                        </select>
                                    </td>
                                    <td>Description</td>
                                    <td>Cost</td>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedIngredients.map((ing, key) => (
                                    <React.Fragment key={key}>
                                        <tr className='align-middle'>
                                            <td>{key + 1}</td>
                                            <th>{ing.name}</th>
                                            <td>{ing.location.join(', ')}</td>
                                            <td>{ing.description}</td>
                                            <td>{ing.cost}</td>
                                        </tr>
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='container'>
                    <div className='row text-center mb-4'>
                        <h3>Concoctions
                            <Button className='text-center info' onClick={info2Toggle}>
                                🛈
                            </Button>                            
                        </h3>
                        <p>
                            What ingredients do you have?
                            <select name='potionType' className="ms-2 charPicklist" id='typeSelect' onChange={handlePotionIngredients}>
                                <option value="all">Ingredients</option>
                                {ingredients.map(e => (
                                    <option key={e.id} value={e.name}>{e.name}</option>
                                ))}
                            </select>
                            {potionIngredients.map((e, index) => (
                            <a key={index} aria-label={e} className='charPicklist' onClick={removePotionIngredient}>
                                {e} x
                            </a>
                            ))}
                        </p>
                        <Offcanvas isOpen={info2} toggle={info2Toggle} direction={'end'}>
                            <OffcanvasHeader toggle={info2Toggle}>
                            Crafting
                            </OffcanvasHeader>
                            <OffcanvasBody>
                                <p>
                                This table includes all known concoctions within Qeṽa.
                                </p>
                                <h5>Classes</h5>
                                <p>
                                The art of crafting is used by the following classes:
                                    <ul>
                                        <li>Adventurer</li>
                                        <li>Crafter</li>
                                        <li>Druid</li>
                                    </ul>
                                </p>
                            </OffcanvasBody>
                        </Offcanvas>
                        <table className="table table-hover table-sticky align-middle">
                            <thead>
                                <tr className='align-middle'>
                                    <th>Concoction</th>
                                    <td>
                                        <select name='potionType' className="ms-2 charPicklist text-center" id='typeSelect' onChange={handlePotionType}>
                                            <option value="all">Type</option>
                                            <option value='Healing' >Healing</option>
                                            <option value='Amplification' >Amplification</option>
                                            <option value='Harm' >Harm</option>
                                            <option value='Meddling' >Meddling</option>
                                        </select>
                                    </td>
                                    <td>Effect</td>
                                    <td>Ingredients</td>
                                    <td>Selling Price</td>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedPotions.map(potion => (
                                    <React.Fragment key={potion.id}>
                                        <tr className='align-middle'>
                                            <th>{potion.name}</th>
                                            <td>{potion.type}</td>
                                            <td>{potion.description}</td>
                                            <td>
                                                {potion.ingredients.filter(x => !potionIngredients.includes(x)).join(', ')}
                                                {(potion.ingredients.filter(x => potionIngredients.includes(x)).length !== 0) && 
                                                (potion.ingredients.filter(x => !potionIngredients.includes(x)).length !== 0) ? (
                                                    <span>, </span>
                                                ) : ('')}
                                                <strong>
                                                    {potion.ingredients.filter(x => potionIngredients.includes(x)).join(', ')}
                                                </strong>
                                            </td>
                                            <td>{potion.price}</td>
                                        </tr>
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
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

export default CraftingChart;