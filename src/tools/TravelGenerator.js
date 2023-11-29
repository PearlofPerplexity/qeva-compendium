import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import { Link } from 'react-router-dom';

const travelArray = [
    'Restless Night, receive no benefits from longrest',
    'A pack of jackals approaches the camp',
    'The one on watch begins to nod off, Roll CON to stay awake.',
    '3 wolves come sniffing for food',
    'A player starts talking in their sleep',
    'A husk is walking past the camp in the distance',
    'An aviame lone rider passes through; gives 1 piece of advice',
    '2 orc archers beginning firing on the encampment',
    'A bird shows up and refuses to leave',
    'Player gets stung by a scorpion',
    'A small rodent enters into your camp begging for food',
    'The group camped out on a sink hole. Roll a d20. On a 17 or above, the sinkhole gives way. The sinkhole could lead to an abandoned mine or simply entrapment.',
    'A traveling merchant passes through',
    'A bear cub is rolling around in one of the tents',
    'A wolf howls in the distance',
    'The next day is sunny, players have advantage on ability checks',
    'An ember catches fire',
    'It rains during the night, all rations are ruined and the party is encumber for 1d12 hours',
    'You recieve an extra restful sleep. Each player gets +5 temp. hit points',
    'You hear the cackling of a party of orcs',
    "The party smells something cooking. (There is a nearby goblin camp and they are roasting a pig on a spit. They don't notice the player unless they are particularly careless.)",
    'A drunken soldiers wanders into the camp',
    "The night has been particularly cold, there is a random small, sleeping creature wrapped up in the corner of one of the PC's tents in order to stay warm and dry.",
    '[Dream] A mongrel stands before the party member on guard after they blink.',
    "2 Soldiers invite you to their camp",
    "Party member is overcome with a false sense of dread",
    "The brush nearby shakes. A farmer with a mule walks in. He offers supplies and thanks the party for their service to Avlim.",
    "A small native animal approaches. If the PCs are kind to it, it reveals itself to be a wildshaped druid, and casts a beneficial spell. If they are unkind it reveals itself to be a druid and casts a detrimental spell. It then leaves.",
    "A group of 1d4 wild boars attempt to eat players' rations",
    "You receive a message delivered by a crested Caracara bird. It's message is addressed and intended for another.",
    "One player won't stop snoring. Other players roll CON or are woken up and cannot get back to sleep due to the snoring. Disadvantage on ability checks for 1d4 hours in the morning.",
    "Players share tales of their homelands",
    "The person on watch falls asleep and begins to dream. All events that happen until that person 'dies' is a dream. They wake up as soon as they are 'dead'",
    "A fog covers the camp, perception checks disadvantage for 1d4 hours",
    "One companion hears screaming and the rest of their companions are gone, captured by husk party.",
    "A snake is found coiled near the camp. If approached it slithers quickly away leaving a nest of 2d4+2 red eggs. They act as a healing potion if added to food.",
    "Kids are hiding nearby throwing pebbles into the camp.",
    "Insects get into 1d4 rations",
    "Player accidentally slept on a poisonous plant. They are poisoned and begin to have visions until they are cured.",
    "Players notice an edible plant nearby; It offers 1 day of rations for the party",
    "You meet a group of adventurers coming the other way. They are friendly and share information.",
    "Players share tales of valiant deeds.",
    "A group of 1d4 bandits raid the camp at night, Players must succeed a d10 perception check to notice",
    "You get a restful sleep and restore one additional hit die in the morning.",
    "Players play truth or dare",
    "There are tremors in the middle of the night. If camped out near structures, awake and make a Dex save or take damage from falling structures",
    "Player finds patch of berries nearby",
    "A sentinel approaches the group and offers them wisdom",
    "Player finds a hole in their bag, they lose one item",
    "You hear the nearby cry of a Woman & Child",
    "Players discuss the names of their weapons",
    "A farmer claims they own the land they've camped on and demands 2d4 silver to camp there",
    "A partymember finds an orc-weapon under the grass of their camp",
    "The weather is windy the next day. The group has disadvantage on dexterity ability checks for 1d4 hours",
    "Player finds someone's satchel at camp, with a few coins, a gem and a wallet with the name: Anselm",
    "Wild horses stampede through the camp;  roll Dex 12 save to get out of the way or suffer d12 damage",
    "A Wild horse is eating grass nearby",
    "Player recognize beaver tracks at their camp",
    "A caracadre comes looking for a place to camp. Will join the party if asked.",
    "A vulture is seen watching the party in the treeline",
    "A mystery key is found laying in the road.",
    "One partymember rolls d15 perception check; if fails, 2 husk gets a surprise round attack on sleeping player and attempt to kidnap them.",
    "Players discuss their favorite songs; what gets them in the zone for battle.",
    "Players hear a deer getting attacked by wolves in the forest",
    "Players were travelling in the wrong direction. Add a day of travel to your journey.",
    "An owl hoot is heard in the night",
    "Players discuss their line of work before becoming adventurers",
    "Player come upon a hoard of treasure; but it smells of husk. Weapons must be cleaned before use or they will be used at disadvantage",
    "A smiling roadside merchant roasts rats, frogs, and squirrels on sticks. He offers a bite to the PCs.",
    "Two guards hold a wanted poster. They carefully studies the party as they pass by.",
    "A lush garden is filled with ripe vegetables is nearby. A sign is hung at its entrance reading 'No Trespassing'",
    "A bridle ties a well-groomed speckled horse to a nearby tree. The horse is fitted with an elegant but empty saddle.",
    "A homeless bard asks for a lift to the nearest inn. The bard is an ethereal.",
    "A stub of paper lies on the ground. It lists 3 ingredients for a concoction on it, with a recipe of how to prepare it. The concoction produces an unusual ability.",
    "As bandits attack, the PCs realize a friend of theirs is among the robbers.",
    "An orc younling runs out from the brush, suprised to see you.",
    "A parchment of paper is stuck in to the tree reading 'The Keys to Life: Love, Hope & Charity. Humble ears hear'. It has a strange good feeling to it, written in ethereal pen.",
    "The group happens upon two caracadre faction groups arguing in the middle of the road.",
    "A husk on fire runs through the party's camp. He was lit by his own people.",
    "An overturned rowboat sits on the side of the road. There is no river or stream nearby. Under the rowboat is an entrance to a lair.",
    "A group of guardsmen hang wanted posters on trees. One face looks familiar to a PC.",
    "A cathedral glitters in the distance",
    "As the road passes through a hilly region, you spy a cave, from which can be heard the voice of a single note. If dwarven, they will recognize it as the soul note of a dwarven lass.",
    "A bounty hunter pulls out a poster of the man he is hunting. He asks for their help.",
    "A man offers to give them shelter in his farm. He appears nepharious. If they stay, the group wakes up to a husk pillaging through their material. The man is gone.",
    "A caracadre party joins your encampment. An attractive maiden is with them and flirts with you.",
    "Three orc youth are torturing a bird.",
    "A vial of liquid lies on the ground, unidentifiable to the group. The vial is filled with a special blend of truth serum that enables them to know the answer to a question and say it. If the party member lies, they go unconcious for 3 days and wake up without its abilities.",
    "A set of broken shackles is hidden at the base of a tree."
];
  
const TravelGenerator = () => {
    
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const init = () => {
        setNumber(rand100());
        toggle();
    }

    const reset = () => {
        toggle();
        setLevel(5);
        setTravelItem("");
    }

    const rand100 = () => {
        return Math.floor(Math.random() * 100) + 1;
    }
    const [number, setNumber] = useState();
    const handleNumber = (e) => {
        setNumber(e.target.value);
    }

    const [level, setLevel] = useState(5);
    const slider = (e) => {
        const sliderNum = e.target.value;
        setLevel(sliderNum);
    }

    const [travelItem, setTravelItem] = useState("");
    const travelGen = () => {
        
        const randTravelNum = number - 1;
        const arrayLength = travelArray.length;
        const arrayHalfRemainder = (100 - travelArray.length) / 2;

        switch (true) {
            case (randTravelNum < arrayLength):
                setTravelItem(travelArray[randTravelNum]);
                break;
            case (randTravelNum < (arrayLength + arrayHalfRemainder)):
                setTravelItem('The Night passes without event.');
                break;
            default:
                setTravelItem("DM's Choice");
                break;
        }

        /*
        const arrayLength = (travelArray.length * 3);
        const randTravelNum = Math.floor( Math.random() * (arrayLength));
        const randTravelIndex = Math.floor(randTravelNum / 3);

        switch (true) {
            case (randTravelNum < (arrayLength * 0.5)):
                setTravelItem(travelArray[randTravelIndex]);
                break;
            case (randTravelNum < (arrayLength * 0.75)):
                setTravelItem('The Night passes without event.');
                break;
            default:
                setTravelItem("DM's Choice");
                break;
        }
        */
    }
    
    return (
        <div className="col-lg-4">
            <Link className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3"  onClick={init}>
                <i className="iconify fs-2" data-icon="flat-color-icons:night-landscape"></i>
                <div className="ms-3">
                    <div className="d-flex align-items-center">
                        <h3 className="mb-0">Travel Generator</h3>
                    </div>
                </div>
            </Link>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}><i className="iconify fs-2" data-icon="flat-color-icons:night-landscape"></i> Travel Generator</ModalHeader>
                <ModalBody>
                    <div className='box container'>
                        <div className='row mb-3'>
                            <h4 className='col text-start'>D100 Roll: </h4>
                            <input className='col' type="number" value={number} onChange={handleNumber} />
                        </div>
                        <div className='row mb-3 text-start'>
                            <h4>Results: </h4>
                            <p>{travelItem}</p>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={travelGen} >
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

export default TravelGenerator;