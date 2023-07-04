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

const QualityArray = [
    "common",
    "uncommon",
    "rare",
    "epic",
    "legendary",
];

const commonItemArray = [
    'Empty Barrel',
    'Bag of Coins',
    'Bottle of Gin',
    'Writing Paper',
    'Silver Necklace',
    'Scroll of Secrets',
    'Iron Key',
    'Lucky Dice',
    'Lockpick Set',
    'Torch',
    'Cloth Rags',
    'Map Fragment',
    'Fishing Net',
    'Cooking Pot',
    'Flint and Steel',
    'Fur Cloak',
    'Quill and Ink',
    'Sack of Flour',
    'Iron Nails',
    'Wooden Bowl',
    'Hand Mirror',
    'Glass Bottle',
    'Wax Candle',
    'Rope (50 feet)',
    'Whetstone',
    'Chalk Set',
    'Traveler\'s Clothes',
    'Herbal Medicine Kit',
    'Leather Gloves',
    'Wooden Tankard',
    'Playing Cards',
    'Crowbar',
    'Spool of String',
    'Hammer',
    'Tinderbox',
    'Pouch of Marbles',
    'Iron Spike',
    'Rations (1 day)',
    'Holy Oracle Pendent',
    'Mess Kit',
    'Soap',
    'Climbing Pitons',
    'Wooden Bedroll',
    'Water Flask',
    'Iron Pot',
    'Silver Spoon',
    'Ink Pen',
    'Bag of Seeds',
    'Worn Boots',
    'Glass Flask',
    'Small Bell',
    'Cooking Spices',
    'Paintbrush',
    'Small Sewing Kit',
    'Copper Bracelet',
    'Dice Bag',
    'Wooden Spoon',
    'Glass Jar',
    'Charcoal',
    'Bundle of Herbs',
    'Worn Hat',
    'Clay Pipe',
    'Deck of Playing Cards',
    'Silver Coin',
    'Iron Dagger',
    'Wooden Plate',
    'Sealing Wax',
    'Cookbook',
    'Sewing Needle',
    'Iron Chain',
    'Wooden Cup',
    'Hourglass',
    'Bottle of Ink',
    'Box of Matches',
    'Bird Whistle',
    'Small Lock',
    'Brass Key',
    'Wooden Flute',
    'Metal File',
    'Empty Scroll Case',
    'Parchment Sheets',
    'Embroidered Handkerchief',
    'Wooden Chess Set',
    'Glass Prism',
    'Tobacco Pouch',
    'Silver Ring',
    'Inscribed Stone',
    'Bag of Marbles',
    'Sewing Thread',
    'Iron Fork',
    'Wooden Comb',
    'Wax Seal Stamp',
    'Folding Fan',
    'Iron Spatula',
    'Fancy Hat',
    'Pouch of Copper Coins',
    'Empty Waterskin',
    'Iron Dagger',
    'Sack of Wheat',
    'Cloth Bandages',
    'Woolen Blanket',
    'Wagon Wheel',
    'Wooden Stool',
    'Clay Mug',
    'Bundle of Firewood',
    'Copper Bracelet',
    'Hemp Rope (50 feet)',
    'Wooden Bowl',
    'Carved Wooden Figurine',
    'Pewter Tankard',
    'Jar of Pickles',
    'Iron Key',
    'Wax Candle',
    'Pair of Leather Gloves',
    'Set of Wooden Blocks',
    'Sewing Kit',
    'Horn Comb',
    'Spool of Thread',
    'Bag of Marbles',
    'Brass Compass',
    'Mason Jar',
    'Patchwork Quilt',
    'Set of Bone Dice',
    'Bar of Soap',
    'Bundle of Dried Herbs',
    'Bottle of Vinegar',
    'Cotton Socks',
    'Hand Mirror',
    'Stack of Playing Cards',
    'Bundle of Straw',
    'Iron Cooking Pot',
    'Glass Bottle',
    'Jar of Honey',
    'Pair of Spectacles',
    'Wooden Spoon',
    'Jar of Homemade Jam',
    'Bundle of Incense Sticks',
    'Silver Coin',
    'Iron Tongs',
    'Mug of Ale',
    'Small Lock',
    'Wooden Flute',
    'Copper Wire',
    'Box of Chalk',
    'Small Whistle',
    'Wicker Basket',
    'Bundle of Wheat Stalks',
    'Iron Bell',
    'Satchel of Herbs',
    'Pottery Mug',
    'Set of Metal Files',
    'Piece of Chalkboard',
    'Bundle of Feathers',
    'Pair of Leather Boots',
    'Carved Wooden Bowl',
    'Bundle of Firecrackers',
    'Patch of Leather',
    'Jar of Ink',
    'Pewter Spoon',
    'Set of Wooden Spoons',
    'Copper Bracelet',
    'Bundle of String',
    'Pair of Mittens',
    'Clay Pipe',
    'Bundle of Willow Branches',
    'Wooden Yo-yo',
    'Bag of Marbles',
    'Bottle of Perfume',
    'Woven Basket',
    'Set of Brass Keys',
    'Pair of Knitted Socks',
    'Wooden Toy Sword',
    'Quill Pen',
    'Bundle of Candles',
    'Copper Ring',
    'Set of Carving Tools',
    'Piece of Parchment',
    'Jar of Olives',
    'Small Lockpick Set',
    'Jar of Dried Fruit',
    'Pair of Leather Gloves',
    'Wooden Toy Boat',
    'Iron Nail',
    'Bundle of Straw',
    'Glass Jar',
    'Wicker Basket',
    'Set of Wooden Hangers',
    'Piece of Colored Glass',
    'Jar of Almonds',
    'Wooden Comb',
    'Bundle of Rope (50 feet)',
    'Pewter Figurine',
    'Pair of Dice'      
];

const uncommonItemArray = [
    'Club',
    'Dagger',
    'Greatclub',
    'Handaxe',
    'Javelin',
    'Light hammer',
    'Mace',
    'Quarterstaff',
    'Sickle',
    'Spear',
    'Light crossbow',
    'Dart',
    'Shortbow',
    'Sling',
    'Battleaxe',
    'Flail',
    'Glaive',
    'Greataxe',
    'Greatsword',
    'Halberd',
    'Lance',
    'Longsword',
    'Maul',
    'Morningstar',
    'Pike',
    'Rapier',
    'Scimitar',
    'Shortsword',
    'Trident',
    'War pick',
    'Warhammer',
    'Whip',
    'Blowgun',
    'Hand crossbow',
    'Heavy crossbow',
    'Longbow',
    'Net',
    'Padded Armor',
    'Leather Armor',
    'Studded Leather Armor',
    'Hide Armor',
    'Chain Shirt',
    'Scale Mail',
    'Breastplate',
    'Half Plate',
    'Ring Mail',
    'Chain Mail',
    'Splint Armor',
    'Plate Armor',
    'Shield'
];

const rareItemArray = [
    "Obsidian", "Aquamarine", "Diamond", "Citrine", "Amethyst", "Pyrite", "Sapphire", "Emerald", "Onyx", "Turquoise", "Ruby", "Opal", "Topaz", "Quartz", "Crocoite", "Azurite", "Rutile", "Tanzanite", "Jade", "Shungite", "Chryscocolla", "Jasper", "Bismuth", "Amber", "Whitestone"
];

const epicItemArray = [
    "Tourmaline", "Tiger's Eye", "Celestite"
];

const legendaryItemArray = [
    "Zanhari Blade", "Pearl", "Sa Siavana"
];

  
const LootGenerator = () => {
    
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const reset = () => {
        toggle();
        setSparsity(25);
        setSelectedIngredients(ingredients);
        setNumber(5);
        setIngredientResults([]);
    }

    const [sparsity, setSparsity] = useState(5);
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
            <Link className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3"  onClick={toggle}>
                <i className="iconify fs-2" data-icon="noto:coin"></i>
                <div className="ms-3">
                    <div className="d-flex align-items-center">
                        <h3 className="mb-0">Loot Generator</h3>
                    </div>
                </div>
            </Link>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}><i className="iconify fs-2" data-icon="noto:coin"></i> Loot Generator</ModalHeader>
                <ModalBody>
                    <div className='box container'>
                        <div className='row pb-3'>
                            <h4 className='col text-start'>Class Level: {sparsity} </h4>
                            <input type="range" step='1' min='1' max='10' value={sparsity} onChange={slider} className='col slider' />
                        </div>
                        <div className='row mb-3'>
                            <h4 className='col text-start'># of Items: </h4>
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

export default LootGenerator;