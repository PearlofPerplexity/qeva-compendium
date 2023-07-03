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
    },
];

const concoctions = [
    {
        id: 0,
        name: 'Health Tonic',
        type: 'Healing',
        description: 'Regain hit points equal to 1d8 HP + your INT modifier.',
        ingredients: [
            ingredients[0].name,
            ingredients[19].name
        ],
        price: 50
    },
    {
        id: 1,
        name: 'Restoration Oil',
        type: 'Healing',
        description: 'End either one disease or one condition.',
        ingredients: [
            ingredients[1].name,
            ingredients[18].name
        ],
        price: 25
    },
    {
        id: 2,
        name: 'Immunity Booster',
        type: 'Healing',
        description: 'Regain the maximum number of hit points possible from any healing (compatible with oils and health tonics).',
        ingredients: [
            ingredients[2].name,
            ingredients[17].name
        ],
        price: 100
    },
    {
        id: 3,
        name: 'Stability Tonic',
        type: 'Healing',
        description: 'Creature rolling death saves is stabilized. Their health points remain unchanged until rest or healing is given.',
        ingredients: [
            ingredients[3].name,
            ingredients[16].name
        ],
        price: 25
    },
    {
        id: 4,
        name: 'Warding Tonic',
        type: 'Healing',
        description: 'The first time a target would drop to negative hit points as a result of taking damage, the target instead drops to 0 hit points.',
        ingredients: [
            ingredients[4].name,
            ingredients[15].name
        ],
        price: 25
    },
    {
        id: 5,
        name: 'Greater Health Tonic',
        type: 'Healing',
        description: 'Regain hit points equal to 2d8 HP + your INT modifier.',
        ingredients: [
            ingredients[0].name,
            ingredients[8].name,
            ingredients[19].name
        ],
        ingredient1: '',
        ingredient2: '',
        price: 250
    },
    {
        id: 6,
        name: 'Rejuvination Tonic',
        type: 'Healing',
        description: 'The crafter lights a sweet incense on the battlefield. For as long as the incense emanates, all creatures who have drank the rejuvenation tonic receive 1d8 HP.',
        ingredients: [
            ingredients[5].name,
            ingredients[14].name
        ],
        price: 250
    },
    {
        id: 7,
        name: 'Past Pain Tonic',
        type: 'Healing',
        description: 'Grants 1d12 additional hit points that last 1 hour. If a short rest is taken, points are removed after the short rest is complete.',
        ingredients: [
            ingredients[6].name,
            ingredients[13].name
        ],
        price: 100
    },
    {
        id: 8,
        name: 'Elixir of Hardiness',
        type: 'Amplification',
        description: 'Grants +2 AC for 1 minute.',
        ingredients: [
            ingredients[7].name,
            ingredients[12].name
        ],
        price: 75
    },
    {
        id: 9,
        name: 'Elixir of Lethal Striking',
        type: 'Amplification',
        description: 'Adds +d4 to attack rolls for 1 minute.',
        ingredients: [
            ingredients[8].name,
            ingredients[11].name
        ],
        price: 75
    },
    {
        id: 10,
        name: 'Elixir of Learning',
        type: 'Amplification',
        description: 'Grants +5 INT for 1 hour.',
        ingredients: [
            ingredients[9].name,
            ingredients[10].name
        ],
        price: 50
    },
    {
        id: 11,
        name: 'Strength Tonic',
        type: 'Amplification',
        description: 'Grants +5 STR for 1 minute.',
        ingredients: [
            ingredients[1].name,
            ingredients[19].name
        ],
        price: 50
    },
    {
        id: 12,
        name: 'Tonic of Quickness',
        type: 'Amplification',
        description: 'Grants +5 SPD for 1 minute.',
        ingredients: [
            ingredients[2].name,
            ingredients[18].name
        ],
        price: 50
    },
    {
        id: 13,
        name: 'Tonic of Awareness',
        type: 'Amplification',
        description: 'Grants +5 to perception for 1 minute.',
        ingredients: [
            ingredients[3].name,
            ingredients[17].name
        ],
        price: 50
    },
    {
        id: 14,
        name: 'Liquid Expertise',
        type: 'Amplification',
        description: 'Choose one skill. You gain advantage in that skill for 8 hours.',
        ingredients: [
            ingredients[4].name,
            ingredients[16].name
        ],
        price: 50
    },
    {
        id: 15,
        name: 'Truth Serum',
        type: 'Amplification',
        description: 'A creature must succeed on a DC 11 Constitution saving throw or be unable to speak a lie for 1 hour.',
        ingredients: [
            ingredients[5].name,
            ingredients[15].name
        ],
        price: 75
    },
    {
        id: 16,
        name: 'Paralytic Toxin',
        type: 'Harm',
        description: 'A creature must succeed on a DC 13 CON saving throw or become paralyzed for 1 minute. The creature can repeat the saving throw at the end of each of its turns.',
        ingredients: [
            ingredients[6].name,
            ingredients[14].name
        ],
        price: 100
    },
    {
        id: 17,
        name: 'Drowse',
        type: 'Harm',
        description: 'A creature must succeed on a DC 15 CON saving throw or become unconscious for 4 hours. The creature wakes up if it takes damage or if another creature takes an action to shake it awake.',
        ingredients: [
            ingredients[7].name,
            ingredients[13].name
        ],
        price: 50
    },
    {
        id: 18,
        name: 'Slow Poison',
        type: 'Harm',
        description: 'A creature must succeed on a DC 12 CON saving throw or slowly drop 1d10 HP every hour for 8 hours without noticing. Each hour is a separate saving throw.',
        ingredients: [
            ingredients[8].name,
            ingredients[12].name
        ],
        price: 150
    },
    {
        id: 19,
        name: 'Sloth Incense',
        type: 'Harm',
        description: 'A creature must succeed on a DC 15 CON saving throw or become poisoned as long as they are exposed to the incense. The effects include -10ft speed, disadvantage on dexterity & strength saving throws.',
        ingredients: [
            ingredients[9].name,
            ingredients[11].name
        ],
        price: 100
    },
    {
        id: 20,
        name: 'Short Tail Venom',
        type: 'Harm',
        description: 'A creature must succeed on a DC 11 CON saving throw, taking 3d6 poison damage on a failed save, or half as much damage on a successful one.',
        ingredients: [
            ingredients[2].name,
            ingredients[19].name
        ],
        price: 150
    },
    {
        id: 21,
        name: "Dark Heart's Bane",
        type: 'Harm',
        description: "A creature must succeed on a DC 15 CON saving throw or become poisoned for 1 minute. This toxin contains stubborn cardinal gems that conflict with the evil in a creature's bloodstream. If a creature is evil, they will have disadvantage on all attacks.",
        ingredients: [
            ingredients[3].name,
            ingredients[18].name
        ],
        price: 200
    },
    {
        id: 22,
        name: "Well of Tears",
        type: 'Harm',
        description: "A creature must succeed on a DC 15 CON saving throw or be triggered into a severe anxiety attack for 1 minute. A creature under this effect will act irrationally. They may flee the area, curl into a ball or attack their own comrades.",
        ingredients: [
            ingredients[4].name,
            ingredients[17].name
        ],
        price: 75
    },
    {
        id: 23,
        name: "Forget-Me-Now",
        type: 'Harm',
        description: "A creature or must succeed on a DC 15 CON saving throw or face effects. The potions produce a potent mind-wiping effect that bestows amnesia.",
        ingredients: [
            ingredients[5].name,
            ingredients[16].name
        ],
        price: 200
    }
];

const CraftingChart = () => {
    
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
            <Link className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3"  onClick={toggle}>
                <i className="iconify fs-2" data-icon="emojione-v1:herb"></i>
                <div className="ms-3">
                    <div className="d-flex align-items-center">
                        <h3 className="mb-0">Crafting Chart</h3>
                    </div>
                </div>
            </Link>
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
                                {selectedIngredients.map(ing => (
                                    <React.Fragment key={ing.id}>
                                        <tr className='align-middle'>
                                            <td>{ing.id + 1}</td>
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