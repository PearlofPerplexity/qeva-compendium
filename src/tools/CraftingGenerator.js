import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import { Link } from 'react-router-dom';

const ingredients = [
    {
        id: 0,
        name: 'Alfirin',
        location: ['Field', 'Forest'],
        description: '(Never-fade) A delicate bell-shaped, golden flower.',
        rarity: 0,
        cost: 17
    },
    {
        id: 1,
        name: 'Arthrif',
        location: ['Field', 'Forest'],
        description: '(Noble-bark) A thin silver-grey tree bark.',
        rarity: 0,
        cost: 15
    },
    {
        id: 2,
        name: 'Carandol',
        location: ['Forest', 'Cave'],
        description: '(Red Cap) A small mushroom with a brilliant red cap.',
        rarity: 0,
        cost: 13
    },
    {
        id: 3,
        name: 'Elanor',
        location: ['Field', 'Forest'],
        description: '(Sun-star) A small, golden, star-shaped flower.',
        rarity: 0,
        cost: 15
    },
    {
        id: 4,
        name: 'Gwinuial',
        location: ['Field', 'Forest'],
        description: '(Twilight Vine) A low creeper with tiny blooms resembling dim stars.',
        rarity: 0,
        cost: 22
    },
    {
        id: 5,
        name: 'Hithlas',
        location: ['Field', 'Forest'],
        description: '(Mist-leaf) A small bush with grey-green leaves.',
        rarity: 0,
        cost: 15
    },
    {
        id: 6,
        name: 'Morthond',
        location: ['Field', 'Forest'],
        description: '(Black Root) A dark, many-lobed tuber.',
        rarity: 0,
        cost: 18
    },
    {
        id: 7,
        name: 'Niphredil',
        location: ['Field', 'Forest'],
        description: '(Snowdrop) A pale white flower atop a slender green stalk.',
        rarity: 0,
        cost: 15
    },
    {
        id: 8,
        name: 'Remmenthond',
        location: ['Field', 'Forest'],
        description: '(Tangle Root) A cluster of thin, densely-intertwined roots.',
        rarity: 0,
        cost: 15
    },
    {
        id: 9,
        name: 'Grange Wilt',
        location: ['Field', 'Forest'],
        description: '(Winterthorn) A hardy shrub bearing many prickly leaves.',
        rarity: 0,
        cost: 11
    },
    {
        id: 10,
        name: 'Simbelmyne',
        location: ['Field', 'Forest'],
        description: '(Evermind) A small, low growing, white flower found in clusters.',
        rarity: 0,
        cost: 15
    },
    {
        id: 11,
        name: 'Athelas',
        location: ['Field', 'Forest'],
        description: '(Kingsfoil) green leaves small white blossoms.',
        rarity: 0,
        cost: 10
    },
    {
        id: 12,
        name: 'Lothrond',
        location: ['Cave'],
        description: '(Cave-flower) A fungus with a colorful cap which grows in separate segments reminiscent of the petals of a flower.',
        rarity: 0,
        cost: 15
    },
    {
        id: 13,
        name: 'Meluinen',
        location: ['Cave'],
        description: '(Sweet-water) Crystal clear mineral water.',
        rarity: 0,
        cost: 20
    },
    {
        id: 14,
        name: 'Naugrimbas',
        location: ['Cave'],
        description: '(Dwarf-bread) A bloated, unappealing mushroom; edible, but foul. Often used by dwarves as an emergency ration.',
        rarity: 0,
        cost: 15
    },
    {
        id: 15,
        name: 'Naurivor',
        location: ['Cave'],
        description: '(Flame Crystal) Tiny, fiery-red crystals.',
        rarity: 0,
        cost: 20
    },
    {
        id: 16,
        name: 'Orchamarth',
        location: ['Cave'],
        description: '(Orc-bane) A sickly-looking fungus which often proves deadly to those who handle it improperly.',
        rarity: 0,
        cost: 16
    },
    {
        id: 17,
        name: 'Thornheart',
        location: ['Forest'],
        description: 'Weed that grows in the upper hills of the grave mountains',
        rarity: 0,
        cost: 10
    },
    {
        id: 18,
        name: 'Dexel',
        location: ['Forest'],
        description: 'Mountain flower',
        rarity: 0,
        cost: 15
    },
    {
        id: 19,
        name: 'Teepsod',
        location: ['Cave'],
        description: 'Deep Cave Moss',
        rarity: 0,
        cost: 12
    }
];

const CraftGenerator = () => {
    
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const init = () => {
        setSparsity(randSparsity());
        toggle();
    }

    const reset = () => {
        toggle();
        setSelectedIngredients(ingredients);
        setNumber(5);
        setIngredientResults([]);
    }

    const randSparsity = () => {
        return (Math.floor(Math.random() * 9) + 1) * 10;
    }
    const [sparsity, setSparsity] = useState();
    const slider = (e) => {
        const sliderNum = e.target.value;
        setSparsity(sliderNum);
    }

    const [selectedIngredients, setSelectedIngredients] = useState(ingredients);
    const handleLocation = (e) => {
        if (e.target.value === 'all') {
            setSelectedIngredients(ingredients);
        } else {
            const curIngredients = ingredients.filter(ingredient => ingredient.location.includes(e.target.value));
            setSelectedIngredients(curIngredients);
            console.log(curIngredients);
        }
    }

    const [number, setNumber] = useState(5);
    const handleNumber = (e) => {
        setNumber(e.target.value);
    }

    const [ingredientResults, setIngredientResults] = useState([]);
    const ingredientGen = () => {
        const sparseFactor = 1 + (sparsity / 50);
        const ingredientArray = [];
        for (let i = 0; i < number; i++) {
            // + 5 adds room for forager to find nothing
            const randNum = Math.floor( Math.random() * (selectedIngredients.length * sparseFactor));
            let newIngredient;
            // if number is not in array, create a 'nothing' category
            if (selectedIngredients[randNum]) {
                newIngredient = selectedIngredients[randNum];
            } else {
                newIngredient = {
                    id: ingredients.length,
                    name: 'Nothing'
                };
            }

            let ingredientExists = undefined;
            if (ingredientArray.length > 0) {
                ingredientExists = ingredientArray.find(ing => ing.name === newIngredient.name);
            }
            if (ingredientExists) {
                const index = ingredientExists.id;
                ingredientArray[index].quantity = ingredientArray[index].quantity + 1;
            } else {
                const arrayItem = {
                    id: (ingredientArray.length),
                    name: newIngredient.name,
                    quantity: 1
                };
                ingredientArray.push(arrayItem);
            }
        }
        setIngredientResults(ingredientArray);
    }
    
    return (
        <div className="col-lg-4">
            <Link className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3"  onClick={init}>
                <i className="iconify fs-2" data-icon="twemoji:herb"></i>
                <div className="ms-3">
                    <div className="d-flex align-items-center">
                        <h4 className="mb-0">Craft Generator</h4>
                    </div>
                </div>
            </Link>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}><i className="iconify fs-2" data-icon="twemoji:herb"></i> Craft Generator</ModalHeader>
                <ModalBody>
                    <div className='box container'>
                        <div className='row pb-3'>
                            <h4 className='col text-start'>Sparsity: {sparsity}% (D10)</h4>
                            <input type="range" step='10' min='10' max='90' value={sparsity} onChange={slider} className='col slider' />
                        </div>
                        <div className='row mb-3'>
                            <h4 className='col text-start'>Location: </h4>
                            <select name='locs' className="col ms-2 charPicklist" id='locs-select' onChange={handleLocation}>
                                <option value="all">All</option>
                                <option value='Cave' >Cave</option>
                                <option value='Field' >Field</option>
                                <option value='Forest' >Forest</option>
                            </select>
                        </div>
                        <div className='row mb-3'>
                            <h4 className='col text-start'>Number: </h4>
                            <input className='col' type="number" value={number} onChange={handleNumber} />
                        </div>
                        <div className='row mb-3'>
                            <h4 className='col text-start'>Results: </h4>
                            {ingredientResults.length > 0 && ingredientResults.map(i => (
                                <span className='fs-5'><strong>{i.quantity}</strong> {i.name}</span>
                            ))}
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={ingredientGen} >
                    Generate
                </Button>{' '}
                <Button color="secondary" onClick={reset}>
                    Close
                </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default CraftGenerator;