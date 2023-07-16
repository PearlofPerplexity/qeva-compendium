import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import { Link } from 'react-router-dom';

const qualityArray = [
    "common",
    "uncommon",
    "rare",
    "epic",
    "legendary",
];

const lootAdjectives = [
    'Brittle',
    'Intricate',
    'Worn',
    'New',
    'Old',
    'Polished',
    'Engraved',
    'Mysterious',
    'Fragile',
    'Weathered',
    'Ornate',
    'Sleek',
    'Dull',
    'Ancient',
    'Delicate',
    'Sturdy',
    'Exquisite',
    'Faded',
    'Elegant',
    'Rough',
    'Unusual',
    'Opulent',
    'Simple',
    'Enchanted',
    'Mundane',
    'Embroidered',
    'Jeweled',
    'Singed',
    'Tarnished',
    'Untarnished',
    'Practical',
    'Mysterious',
    'Worn-out',
    'Well-crafted',
    'Filigreed',
    'Stained',
    'Whispering',
    'Wicked',
    'Dusty',
    'Etched',
    'Gilded',
    'Scarred',
    'Unassuming',
    'Chipped',
    'Lustrous',
    'Resilient',
    'Antique',
    'Charming',
    'Rugged',
    'Gleaming',
    'Arcane',
    'Cracked',
    'Resplendent',
    'Patchwork',
    'Wrinkled',
    'Refined',
    'Heavy',
    'Majestic',
    'Modest',
    'Reliable',
    'Tattered',
    'Vibrant',
    'Cursed',
    'Blessed',
    'Silent',
    'Venerable',
    'Unbreakable',
    'Austere',
    'Timeless',
    'Hallowed',
    'Primal',
    'Serene',
    'Noble',
    'Shimmering',
    'Stark',
    'Spectral',
    'Wild',
    'Vivid',
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
    'Ration',
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
    'Pair of Dice',
    'Plants for crafting'      
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
        setLevel(5);
        setNumber(10);
        setLootResults([]);
        setLootCoins();
    }

    const [level, setLevel] = useState(5);
    const slider = (e) => {
        const sliderNum = e.target.value;
        setLevel(sliderNum);
    }

    const [number, setNumber] = useState(10);
    const handleNumber = (e) => {
        setNumber(e.target.value);
    }

    const [lootCoins, setLootCoins] = useState();
    const [lootResults, setLootResults] = useState([]);
    const ingredientGen = () => {
        const lootArray = [];
        const qualityRandLength = qualityArray.length * 200
        for (let i = 0; i < number; i++) {
            
            let randNum, randAdj, randItem, newItem, lootItem;
            
            //GENERATE NUMBER found
            randNum = Math.floor( Math.random() * (5)) + 1;
            //GENERATE LOOT ADJECTIVE
            const randAdjNum = Math.floor( Math.random() * (lootAdjectives.length));
            randAdj = lootAdjectives[randAdjNum];
            
            //GENERATE LOOT QUALITY & ITEM
            const randQual = Math.floor( Math.random() * (qualityRandLength));
            switch (true) {
                case (randQual < (qualityRandLength * 0.5)):
                    randItem = Math.floor( Math.random() * (commonItemArray.length));
                    newItem = commonItemArray[randItem];
                    break;
                case (randQual < (qualityRandLength * 0.75)):
                    randItem = Math.floor( Math.random() * (uncommonItemArray.length));
                    newItem = uncommonItemArray[randItem];
                    break;
                case (randQual < (qualityRandLength * 0.9)):
                    randItem = Math.floor( Math.random() * (rareItemArray.length));
                    newItem = rareItemArray[randItem];
                    break;
                case (randQual < (qualityRandLength * 0.99)):
                    randItem = Math.floor( Math.random() * (epicItemArray.length));
                    newItem = epicItemArray[randItem];
                    break;
                default:
                    randItem = Math.floor( Math.random() * (legendaryItemArray.length));
                    newItem = legendaryItemArray[randItem];
                    break;
            }
            lootItem = `${randAdj} ${newItem} (${randNum})`;
            //PUSH LOOT ITEM TO ARRAY
            lootArray.push(lootItem);
        }
        setLootResults(lootArray);

        const randCts = Math.floor( Math.random() * (100)) + 1;
        const randKs = Math.floor( Math.random() * (100)) + 1;
        setLootCoins({
            carats: randCts,
            karats: randKs
        });
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
                            <h4 className='col text-start'>Class Level: {level} </h4>
                            <input type="range" step='1' min='1' max='10' disabled value={level} onChange={slider} className='col slider' />
                        </div>
                        <div className='row mb-3'>
                            <h4 className='col text-start'># of Items: </h4>
                            <input className='col' type="number" value={number} onChange={handleNumber} />
                        </div>
                        <div className='row mb-3'>
                            <h4 className='col text-start'>Results: </h4>
                            {lootCoins && `Coins: ${lootCoins.carats}ct (carats), ${lootCoins.karats}k (karats), `}{lootResults.join(', ')}
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