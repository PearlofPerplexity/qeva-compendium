import wood from '../imgs/races/wood.png';
import river from '../imgs/races/river.png';
import desert from '../imgs/races/desert.png';
import lumiare from '../imgs/races/lumiare.png';
import athiame from '../imgs/races/athiame.png';
import asiame from '../imgs/races/viame.png';
import ave from '../imgs/races/ave.png';
import elder from '../imgs/races/eldar.png';
import human from '../imgs/races/human.png';
import halfElf from '../imgs/races/half-elf.png';
import bdwarf from '../imgs/races/bdwarf.png';
import tdwarf from '../imgs/races/tdwarf.png';
import ggnome from '../imgs/races/ggnome.png';
import bgnome from '../imgs/races/bgnome.png';
import rgnome from '../imgs/races/rgnome.png';
import osei from '../imgs/races/osei.png';
import half from '../imgs/races/half.png';
import aeoki from '../imgs/races/aeoki.png';
import treefolk from '../imgs/races/treefolk.png';
import spirit from '../imgs/ethereal/spirit.png';
import spectre from '../imgs/ethereal/spectre.png';
//import user from '../imgs/races/user.png';

/* INCLUDES:

Elves
Aviame
Humans
Osei
Gnomes
Dwarves
Halflings
Aeoki
Arborums
Dragons

*/

export const RACES = [
    {
        id: 0,
        link: `/races/elves`,
        name: `Elves`,
        singName: "Elf",
        classes: [
            'Oracles', 
            'Caracadre', 
            'Avlimeth', 
            'Elvish Cloaks',
            'Avikin',
            'Order of the Feather',
            'No Affiliation'
        ],
        heartStone: `Diamond (Love)`,
        spawnStone: `Quartz (Strength)`,
        elden: `Amare`,
        lifespan: `Immortal`,
        height: `5-6 ft`,
        weight: `120-180lbs`,
        language: `Elvish`,
        government: `Republic`,
        foundedOrders: `Elvish Cloaks`,
        description: `Elves were the first race to live in Qeṽa. They roamed the world and even the stars for a thousand years before the other races appeared. They are immortal therefore wisest of the races. They can be deciphered from men by their fair skin, and pointed ears. They are responsible for the cathedrals around Qeṽa mythed to be erected through divination and they are drawn to DIA's attributes in water and wood.`,
        image: wood,
        speed: 30,
        size: 'M',
        dex: '+2',
        proficiencies: ['longsword', 'shortsword', 'shortbow', 'longbow'],
        languages: ['common', 'elvish'],
        topics: [
            {
                id: 0,
                name: `Wood Elves`,
                singName: "Wood Elf",
                classes: [
                    'Oracles', 
                    'Caracadre', 
                    'Avlimeth', 
                    'Elvish Cloaks',
                    'Avikin',
                    'Order of the Feather',
                    'No Affiliation'
                ],
                residence: `Forests of Navenia & Navalil`,
                appearance: `Gold Hair & White Skin`,
                description: 
                    `Wood elves are drawn to trees and so reside in forests where plantlife is abundant. They maintain the oldest and most central city of civilization, which is Brielle in the forest of Navenia. Other great cities include Eavano in Evendil, as well as Linda and Nalri in the west. They are traditionally vegetarian and perceptive to the nature of forest environments and plants.`,
                image: wood,
                imageAlt: `Qeṽa Wood Elf`,
                wis: '+1',
                proficiencies: [''],
                abilities: [
                    {
                        id: 0,
                        name: 'Nightvision',
                        description: "You can see in darkness under an open sky up to 60 ft."
                    },
                    {
                        id: 1,
                        name: "Fleet of Foot",
                        description: "Your base walking speed increases to 35 feet."
                    },
                    {
                        id: 2,
                        name: "Mask of the Wild",
                        description: "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
                    }
                ]
            },
            {
                id: 1,
                name: `River Elves`,
                singName: "River Elf",
                classes: [
                    'Oracles', 
                    'Caracadre', 
                    'Avlimeth', 
                    'Elvish Cloaks',
                    'Avikin',
                    'Order of the Feather',
                    'No Affiliation'
                ],
                residence: `Miolaire & Dundili Rivers`,
                appearance: `Black Hair & White Skin`,
                description: 
                    `River elves are those that are drawn most to flowing water and so build their cities adjacent to rivers. Their greatest cities are Thelos on the Silver river, Anuage on the Dundili, Vaiorse on the Oulaire, Eteala on the Neale and Helos on the Miolaire before the wood was cursed. They are traditionally pescatarian and perceptive to the nature of water.`,
                image: river,
                imageAlt: `Qeṽa River Elf`,
                int: '+1',
                abilities: [
                    {
                        id: 0,
                        name: 'Swim',
                        description: "You maintain same visibility underwater as on land and speed if not wearing metal armor. You have 2x lung capacity under water."
                    },
                    {
                        id: 1,
                        name: "Flow",
                        description: "When attuned to the gem, aquamarine and standing in a body of water, you can cast control water on that body of water."
                    }
                ]
            },
            {
                id: 2,
                name: `Desert Elves`,
                singName: "Desert Elf",
                classes: [
                    'Oracles', 
                    'Caracadre', 
                    'Avlimeth', 
                    'Elvish Cloaks',
                    'Avikin',
                    'Order of the Feather',
                    'No Affiliation'
                ],
                residence: `Miolaire & Dundili Rivers`,
                appearance: `Gold Hair & Tan Skin`,
                description: 
                    `Desert elves are those who withdrew from society to seek separation from the growing hostility in Avlim. They found seclusion in the northeastern deserts of Shaole, in an oasis they've hidden by illusions. Though their community was built on passivism, there are still those among them who reenter society to play a role in the events of history.`,
                image: desert,
                imageAlt: `Qeṽa Desert Elf`,
                con: '+1',
                abilities: [
                    {
                        id: 0,
                        name: 'Sandstep',
                        description: "Your travel speed is not hindered by difficult terrain."
                    },
                    {
                        id: 1,
                        name: "Minor Illusion",
                        description: "You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again. Every one foot of illusion requires +1 dice roll (ex. a 15 sq ft. illusion requires an intelligence roll of 15+)."
                    }
                ]
            }
        ]
    },
    {
        id: 1,
        link: `/races/aviame`,
        name: `Aviame`,
        singName: "Aviame",
        classes: [
            'Oracles', 
            'Caracadre', 
            'Avlimeth', 
            'Avikin',
            'Ghost Blades',
            'Order of the Feather',
            'No Affiliation'
        ],
        heartStone: `Ruby (Self-control)`,
        spawnStone: `Crocoite (Dexterity)`,
        elden: `Thelmiel`,
        lifespan: `~1000 yrs`,
        height: `5-6 ft`,
        weight: `120-180lbs`,
        language: `Lumiare`,
        government: `Autocracy`,
        foundedOrders: `Avikin, Ghost Blades`,
        description: `Aviame or Avi are a race under the guidance of the eldar, Nware. They are the most similar in build to elves, but easily identifiable from them by their shades of skin color and face markings. While Avis live longer than most, they are not immortal and few age past a century. They tend to prefer mountainous regions where the air is thinner and the temperature colder as their bodies have a higher tolerance for the cold.`,
        image: lumiare,
        speed: 30,
        size: 'M',
        dex: '+2',
        proficiencies: ['longsword', 'shortsword', 'shortbow', 'longbow'],
        languages: ['common', 'lumiare'],
        topics: [
            {
                id: 0,
                name: `Lumiare`,
                singName: "Autumn Avi",
                nickname: `Autumn Avi`,
                classes: [
                    'Oracles', 
                    'Caracadre', 
                    'Avlimeth', 
                    'Avikin',
                    'Elvish Cloaks',
                    'Order of the Feather',
                    'No Affiliation'
                ],
                residence: `Mountains of Altiavaire`,
                appearance: `Black Hair & Tangerine Skin`,
                description: 
                    `The Lumiare or Autumn Avi have a tanish, orange tint to their skin, dark purple lips and black markings on their face. Their greatest city is Lumion in the Anduir valley of Altiavaire, though their kind can be found scattered throughout the mid-north. Unlike elves, they have a sense for mountainous terrain and wildlife. They are best known for their legendary mountain warfare school and companionship with birds.`,
                image: lumiare,
                imageAlt: `Qeṽa Lumiare Aviame`,
                wis: '+1',
                abilities: [
                    {
                        id: 0,
                        name: 'Acclimated to Low Peaks',
                        description: "Aviame do not have to attempt the Fortitude save in low peak or high pass mountain travel."
                    },
                    {
                        id: 1,
                        name: "Songbird",
                        description: "You have a relationship with all birdkind and many are loyal to you. You can speak to birds and sometimes command them."
                    }
                ]
            },
            {
                id: 1,
                name: `Athiame`,
                singName: "Night Avi",
                nickname: `Night Avi`,
                classes: [
                    'Oracles', 
                    'Caracadre', 
                    'Avlimeth', 
                    'Avikin',
                    'Ghost Blades',
                    'Order of the Feather',
                    'No Affiliation'
                ],
                residence: `Athvari Cliffs`,
                appearance: `White Hair & Black Skin`,
                description: 
                    `The Athiame or “Night Avi” were degradingly called the Athmari after the Athiame-born tyrant, Ithmar reigned ruthlessly over Avlim in the age of darkness. This tie to the dark armies would scar their reputation as many of the noble races would compare their dark skin to the gray skin of orcs, declaring them as untrustworthy. Thus, the Athiame would lock themselves in the Athiari cliffs, guarded by their greatly feared order of the ghost blades.`,
                image: athiame,
                imageAlt: `Qeṽa Athiame`,
                dex: '+1',
                abilities: [
                    {
                        id: 0,
                        name: 'Acclimated to High Mountain Passes',
                        description: "You do not have to attempt the Fortitude save in high pass mountain travel."
                    },
                    {
                        id: 1,
                        name: "Owlhoot",
                        description: "You have a relationship with all owlkind and many are loyal to you. You can speak to owls and sometimes command them."
                    },
                    {
                        id: 2,
                        name: "Darkvision",
                        description: "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
                    }
                ]
            },
            {
                id: 2,
                name: `Asiame`,
                singName: "Snow Avi",
                nickname: `Snow Avi`,
                classes: [
                    'Oracles', 
                    'Caracadre', 
                    'Avlimeth', 
                    'Avikin',
                    'Order of the Feather',
                    'No Affiliation'
                ],
                residence: `High Mountains, Orcaṽa`,
                appearance: `White Hair & Skin`,
                description: 
                    `The Asiame or Snow Avi or even High Aviame have pale white skin and hair. They live in the high mountains; most prevalently in the north ranges acting as a gatekeepers of Altiavaire. Beyond the normal tolerance of other Aviame, Asiame are especially built for the cold so much so that some sailed north for inhabitable land after the Terracut.`,
                image: asiame,
                imageAlt: `Qeṽa Asiame`,
                int: '+1',
                abilities: [
                    {
                        id: 0,
                        name: 'Acclimated to High Peaks',
                        description: "You do not have to attempt the Fortitude save in any mountain travel including high peaks."
                    },
                    {
                        id: 1,
                        name: "Prophet",
                        description: "Given the Asiame's history and heritage, ethereals are more likely to speak with you than most. Asiame can signal for a dream from the ethereal realm and have proficiency in interpreting these dreams. DREAMS: The noble races call dreams the 'speech of spirits' for it is the most common way ethereals communicate to physical beings. In order to receive a dream or vision, one must sleep in a place distanced from evil."
                    }
                ]
            },
            {
                id: 3,
                name: `Half-Aviame, Half-Elf`,
                singName: "Ave",
                nickname: `Aves`,
                classes: [
                    'Oracles', 
                    'Caracadre', 
                    'Avlimeth', 
                    'Elvish Cloaks',
                    'Avikin',
                    'Ghost Blades',
                    'Order of the Feather',
                    'No Affiliation'
                ],
                residence: `Elven & Aviame Communities`,
                appearance: `White Hair & Calico Skin`,
                description: 
                    `Aves are a half elf, half aviame race. Though they are given a warm welcome in Altiavaire and Navalil and experience the best of Elven and Aviame hospitality, they are not well-trusted among the other races. Along with their kind being rare, their often calico complexion sparks others races to distrust them and distance themselves. They are not numerous enough to have their own cities, but rather mix in with the elven and aviame population. They carry themselves like their parent races and do not often venture west.`,
                image: ave,
                imageAlt: `Qeṽa Ave`,
                cha: '+1',
                any: '+1',
                abilities: [
                    {
                        id: 0,
                        name: 'Acclimated to High Mountain Passes',
                        description: "You do not have to attempt the Fortitude save in high pass mountain travel."
                    },
                    {
                        id: 2,
                        name: "Nightvision",
                        description: "You can see in darkness under an open sky up to 60 ft."
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        link: `/races/humans`,
        name: `Humans`,
        singName: "Human",
        classes: [
            'Oracles', 
            'Caracadre', 
            'Avlimeth', 
            'Avikin',
            'Elvish Cloaks',
            'Topplers',
            'Order of the Feather',
            'No Affiliation'
        ],
        heartStone: `Onyx (Faithfulness)`,
        spawnStone: `Jet (Loyalty)`,
        elden: `Çairça`,
        lifespan: `~120 yrs`,
        height: `5-6 ft`,
        weight: `120-180lbs`,
        language: `Common`,
        government: `Republic`,
        foundedOrders: `Caracadre, Helmsmen`,
        description: `Though no eldar oversees humans, many guess that one once did. An elden statue with the title, Çairça is erected in their capital city of Ekeveri. Rounded ears give them and their ancestors away as humans of Arvannon, though their hair and skin can take many shades from fair to dark. Also known as people of the North, Humans are the most eccentric of the noble races and have stretched their presence into Ouri and Altiavaire. Their greatest cities are Ekevri, Durik, Durakin, Farkrine and Urvek leit. They enjoy the company of halves in the good times and the alliance of aviame and elves in the evil times. In their short lifes of around 120 years, they are quick at picking up many a craft.`,
        image: human,
        speed: 30,
        size: 'M',
        proficiencies: ['-'],
        languages: ['common', 'one other language'],
        topics: [
            {
                id: 0,
                name: `Humans`,
                singName: "Human",
                classes: [
                    'Oracles', 
                    'Caracadre', 
                    'Avlimeth', 
                    'Avikin',
                    'Topplers',
                    'Order of the Feather',
                    'No Affiliation'
                ],
                residence: `Arvañon`,
                appearance: `Varied Hair & Skin`,
                description: 
                    `Though no eldar oversees humans, many guess that one once did. An elden statue with the title, Çairça is erected in their capital city of Ekeveri. Rounded ears give them and their ancestors away as humans of Arvannon, though their hair and skin can take many shades from fair to dark. Also known as people of the North, Humans are the most eccentric of the noble races and have stretched their presence into Ouri and Altiavaire. Their greatest cities are Ekevri, Durik, Durakin, Farkrine and Urvek leit. They enjoy the company of halves in the good times and the alliance of aviame and elves in the evil times. In their short lifes of around 120 years, they are quick at picking up many a craft.`,
                image: human,
                imageAlt: `Qeṽa Human`,
                str: '+1',
                dex: '+1',
                con: '+1',
                int: '+1',
                wis: '+1',
                cha: '+1'
            },
            {
                id: 1,
                name: `Half-Elves`,
                singName: "Half-Elf",
                classes: [
                    'Oracles', 
                    'Caracadre', 
                    'Avlimeth', 
                    'Elvish Cloaks',
                    'Avikin',
                    'Topplers',
                    'Order of the Feather',
                    'No Affiliation'
                ],
                residence: `Elven & Human Communities`,
                appearance: `Eyes the color of their elven parent`,
                description: 
                    `Half-elves are half-human and half-elf and they are indistinguishable from either race depending on the genes they inherent. They walk among both races nearly unnoticed with only the most perceptive recognizing their irregularity. Some half-elves do not even know their heritage until they outlive their human counterparts or begin to show the signs of mortality. Half-elves live for around a century, depending on the purity of their elven bloodline.`,
                image: halfElf,
                imageAlt: `Qeṽa Half Elf`,
                cha: '+2',
                any: '+2',
                abilities: [
                    {
                        id: 0,
                        name: 'Nightvision',
                        description: "You can see in darkness under an open sky up to 60 ft."
                    },
                    {
                        id: 1,
                        name: "Skill Versatility",
                        description: "You gain proficiency in two skills of your choice."
                    }
                ]
            },
            {
                id: 2,
                name: `Elden`,
                singName: "Elden",
                classes: [
                    'Oracles', 
                    'Caracadre', 
                    'Avlimeth',
                    'Elvish Cloaks', 
                    'Avikin',
                    'Topplers',
                    'Order of the Feather',
                    'No Affiliation'
                ],
                residence: `Brielle`,
                appearance: `Each elden different`,
                description: 
                    `The Elden were the first nine created by Dia and from them all men were born. Their names are not all known, but nearly all are familiar with Amare, Xaradriel, Çairça and Nware. They were the only elves taught divination directly from DIA and so were commanded to oversee the oracle order. Thus, they are said to be the wisest of all.`,
                image: elder,
                imageAlt: `Qeṽa Elden`
            }
        ]
    },
    {
        id: 3,
        link: `/races/osei`,
        name: `Ocri`,
        singName: "Ocrim",
        classes: [
            'Caracadre', 
            'Avlimeth', 
            'Avikin',
            'The Uncorrupted',
            'Order of the Feather',
            'No Affiliation'
        ],
        heartStone: `Amethyst (Peace)`,
        spawnStone: `Azurite (Charisma)`,
        elden: `Moriel`,
        lifespan: `~60 yrs`,
        height: `6-7 ft`,
        weight: `180-250lbs`,
        appearance: `Pale White Skin, No Hair`,
        language: `Common`,
        government: `Theocracy`,
        residence: `None`,
        foundedOrders: `The Uncorrupted`,
        description: `Among the known peoples of Avlim, the Ocra seem to be the only race without a homeland and without the guidance of an eldar. They have pale skin and a tall muscular build. They are nearly as stoic as the elves, but with a sharper sense of hardened character. Not surprisingly, they are not fast made friends, though they are rumored to be the kindest of strangers if approached. This temperament and body type matches their known recognition for being great warriors with unmatched discipline. They mix into the various lands of Qeṽa, often holding high military positions.`,
        image: osei,
        imageAlt: `Qeṽa Osei`,
        speed: 30,
        size: 'M',
        str: '+2',
        con: '+1',
        proficiencies: ['Intimidation'],
        languages: ['common', 'orc'],
        abilities: [
            {
                id: 0,
                name: 'Unbreakable',
                description: "You can focus yourself to occasionally shrug off injury. When you take damage, you can use your reaction to roll a d12. Add your Constitution modifier to the number rolled and reduce the damage by that total. After you use this trait, you can't use it again until you finish a short or long rest."
            },
            {
                id: 1,
                name: "Darkvision",
                description: "You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
            },
            {
                id: 2,
                name: "Savage Attacks",
                description: "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit."
            }
        ]
    },
    {
        id: 4,
        link: `/races/dwarves`,
        name: `Dwarves`,
        singName: "Dwarf",
        classes: [
            'Oracles', 
            'Caracadre', 
            'Avlimeth', 
            'Avikin',
            'Order of the Feather',
            'No Affiliation'
        ],
        heartStone: `Pyrite (Patience)`,
        spawnStone: `Rutile (Endurance)`,
        elden: `Ferthrui`,
        lifespan: `~400 yrs`,
        height: `4-5 ft`,
        weight: `120-180lbs`,
        language: `Dwarvish`,
        government: `Oligarchy`,
        residence: `Within Mountain & Rock`,
        foundedOrders: `Gemcutters`,
        description: `If you are looking for skilled craftsmen, look no further than the dwarves. In their great mountain halls, they have mastered the crafting of metal and stone. With their thick beards and stout stature standing at 4 feet tall, they appear as tough as the stone they cut and metal they beat. They are slower to trust, but more loyal than any when their trust is gained. Their lifespan can reach up to half a century though most live to about 400 years.`,
        image: tdwarf,
        speed: 25,
        size: 'M',
        con: '+2',
        proficiencies: ['battleaxe', 'handaxe', 'light hammer', 'warhammer','artisan tools of your choice'],
        languages: ['common', 'dwarvish'],
        abilities: [
            {
                id: 0,
                name: 'Superior Darkvision',
                description: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
            },
            {
                id: 1,
                name: "Dwarven Resilience",
                description: "You have advantage on saving throws against poison, and you have resistance against poison damage."
            },
            {
                id: 2,
                name: "Stonecunning",
                description: "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus."
            },
            {
                id: 3,
                name: "Soul Note",
                description: "Every dwarf has what is called a soul note. It is a specific note on the scale that they can find with impeccable consistency. Dwarves learn each other's soul note and can identify each other from long distances and with little context. It is the deepest form of communication between dwarves and they can pick up on nuances within the tone."
            }
        ],
        topics: [
            {
                id: 0,
                name: `Thrauldem's Folk`,
                singName: "Thrush Mtn Dwarf",
                classes: [
                    'Oracles', 
                    'Caracadre', 
                    'Avlimeth', 
                    'Avikin',
                    'Order of the Feather',
                    'No Affiliation'
                ],
                residence: `Thursh Mountains`,
                appearance: `~Black Hair, White Skin`,
                description: 
                    `The Dwarves of the west are dispersed in the Thrush mountains with their largest stronghold being in Haraduin. Acting as gatekeepers between Navalil and Ouri, they learned to have better relations with other races than eastern dwarves. They formed significant relationships with both halflings and elves.`,
                image: tdwarf,
                imageAlt: `Qeṽa Dwarf of the Thrush Mountains`,
                wis: '+1',
                abilities: [
                    {
                        id: 0,
                        name: 'Dwarven Toughness',
                        description: "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level."
                    }
                ]
            },
            {
                id: 1,
                name: `Narduhelm's Folk`,
                singName: "Bare Mtn Dwarf",
                classes: [
                    'Oracles', 
                    'Caracadre', 
                    'Avlimeth', 
                    'Avikin',
                    'Order of the Feather',
                    'No Affiliation'
                ],
                residence: `Bare Mountains`,
                appearance: `~Brown Hair, White Skin`,
                description: 
                    `The eastern dwarves of the Bare Mountains are bread even harder than their western cousins and are not typically an amiable acquaintance. They reside in the barren lands of Shaole, where few things grow or last and their greatest city was Barahduil until it was overtaken by the dark armies. Now, any great gathering of western dwarves is hidden or eradicated and dispersed.`,
                image: bdwarf,
                imageAlt: `Qeṽa Dwarf of the Bare Mountains`,
                str: '+2',
                abilities: [
                    {
                        id: 0,
                        name: 'Dwarven Armor Training',
                        description: "You have proficiency with light and medium armor."
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        link: `/races/gnomes`,
        name: `Gnomes`,
        singName: "Gnome",
        classes: [
            'Oracles', 
            'Caracadre', 
            'Avlimeth', 
            'Avikin',
            'Order of the Feather',
            'No Affiliation'
        ],
        heartStone: `Sapphire (Kindness)`,
        spawnStone: `Tanzanite (Truth)`,
        elden: `Nware`,
        lifespan: `~250 yrs`,
        height: `4-5 ft`,
        weight: `80-120lbs`,
        language: `Gnomish`,
        government: `None`,
        residence: `Greenlands`,
        foundedOrders: `Order of the Feather`,
        description: `The Gnomes are some of the least involved in world events. They are 4-5 feet tall with long pointy ears and a unique face. Like halflings, they have little affinity for glory in war, but unlike halflings they are positioned to avoid it. Their settlements are greatly distanced from Shaole and buffered by mountains, oceans and surrounding nations. Removed from conflict, they find tranquility in the trades of leatherwork and fishing, though a spark of curiosity inspires many to become travelers and adventurers. The Eldar, Çairça watches over them.`,
        image: ggnome,
        speed: 25,
        size: 'S',
        int: '+2',
        proficiencies: ['-'],
        languages: ['common', 'gnomish'],
        abilities: [
            {
                id: 0,
                name: 'Natural Illusionist',
                description: "You know the minor illusion cantrip. Intelligence is your Spellcasting ability for it.  Every one foot of illusion requires +1 dice roll (ex. a 15 sq ft. illusion requires an intelligence roll of 15+)."
            },
            {
                id: 1,
                name: "Fey Ancestry",
                description: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."
            }
        ],
        topics: [
            {
                id: 0,
                name: `Green Gnomes`,
                singName: "Green Gnome",
                classes: [
                    'Oracles', 
                    'Caracadre', 
                    'Avlimeth', 
                    'Avikin',
                    'Order of the Feather',
                    'No Affiliation'
                ],
                residence: `Farathain`,
                appearance: `Green Skin`,
                description: 
                    `Green Gnomes can be found in Farathain, the southern region of Ouri below Fletcheren. Their greatest towns are Nalri in the wood and Nadia south of Loch Ladish. Unlike most sentient races, these Gnomes have a natural propensity for divination. Without any training, they begin forming minor illusions as children and progress in their skill from there.`,
                image: ggnome,
                imageAlt: `Qeṽa Green Gnome`,
                wis: '+1',
                abilities: [
                    {
                        id: 0,
                        name: 'Speak with Small Beasts',
                        description: "Through Sounds and gestures, you can communicate simple ideas with Small or smaller beasts. Forest Gnomes love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other Creatures as beloved pets."
                    },
                    {
                        id: 1,
                        name: 'Dancing Lights',
                        description: "You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. Each light sheds light in a 10-foot radius. As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell's range."
                    }
                ]
            },
            {
                id: 1,
                name: `Blue Gnomes`,
                singName: "Blue Gnome",
                classes: [
                    'Oracles', 
                    'Caracadre', 
                    'Avlimeth', 
                    'Avikin',
                    'Order of the Feather',
                    'No Affiliation'
                ],
                residence: `Haven`,
                appearance: `Blue Skin`,
                description: 
                    `Blue Gnomes live on the island, Haven, southwest of Avlim with their greatest city being Amvil, city of bridges. They are the farthest removed from world events, though Haven was the primary refuge for all races during the reign of Ithmar and his void that brought on the age of darkness. Like green gnomes, they have a natural propensity for divination.`,
                image: bgnome,
                imageAlt: `Qeṽa Blue Gnome`,
                dex: '+1',
                abilities: [
                    {
                        id: 0,
                        name: "Artificer's Lore",
                        description: "Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply."
                    },
                    {
                        id: 1,
                        name: 'Tinker',
                        description: "You have proficiency with artisan's tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a small mechanical device (AC 5, 1 hp). Successful creation of the device requires a 16+ Dexterity roll. On a failed roll you can spend an additional 1 hour and 2 gp to reattempt. You can make no more than five attempts per day."
                    }
                ]
            },
            {
                id: 2,
                name: `Red Gnomes`,
                singName: "Red Gnome",
                classes: [
                    'Oracles', 
                    'Caracadre', 
                    'Avlimeth', 
                    'Avikin',
                    'Order of the Feather',
                    'No Affiliation'
                ],
                residence: `Baroach, Bare Mountains`,
                appearance: `Red Skin`,
                description: 
                    `Unlike green and blue gnomes, red gnomes do not have an ability to produce divination, but only magic. Also unlike other gnomes, they are unfriendly if not altogether hostile. No one seems to really know their source of origin, though most claim that they live in the uninhabited treelines of the thrush and bare mountains.`,
                image: rgnome,
                imageAlt: `Qeṽa Red Gnome`,
                con: '+1',
                abilities: [
                    {
                        id: 0,
                        name: "Dark Vision",
                        description: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
                    },
                    {
                        id: 1,
                        name: 'Lights Out',
                        description: "You can remove all artificial light in a room or area within a 200ft. radius."
                    },
                    {
                        id: 2,
                        name: "Dabbler with Darkness",
                        description: "You cannot align to cardinal gems in their natural state, but only in their synthetic form. You can align to incidental gems in all forms."
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        link: `/races/halflings`,
        name: `Halflings`,
        singName: "Halfling",
        classes: [
            'Oracles', 
            'Caracadre', 
            'Avlimeth', 
            'Avikin',
            'Topplers',
            'Order of the Feather',
            'No Affiliation'
        ],
        heartStone: `Jasper (Joy)`,
        spawnStone: `Scarlet Scolecite (Happiness)`,
        elden: `Xaradriel`,
        lifespan: `~150 yrs`,
        height: `3 ft`,
        weight: `40-60lbs`,
        appearance: `Varied Hair & Skin`,
        language: `Common`,
        government: `Democracy`,
        residence: `Fletcheren`,
        foundedOrders: `The Topplers`,
        description: `Halflings or Halves have the faces of men, but not the stature. At 3 feet tall, there are among the shortest in Avlim and yet occupy some of the lushest land for farming in the Fletcheren hills. If not for their hearty disposition, they are known for a narcotic stimulant, the scolecite stone, which is sparsely found outside their lands. While not much trouble stirs up among halflings, an order of vanguards known as the Topplers were trained by the Eldar, Xaradriel and oracle, Tyrns to secure their borders and resolve disputes. Their greatest city is Harbollow, which accounts for 75% of all halflings. Halflings life for around 120 years, a fraction of the Elves and Aviame.`,
        image: half,
        speed: 25,
        size: 'S',
        dex: '+2',
        proficiencies: ['-'],
        languages: ['common', 'halfling'],
        abilities: [
            {
                id: 0,
                name: 'Lucky',
                description: "When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll."
            },
            {
                id: 1,
                name: "Brave",
                description: "You have advantage on saving throws against being frightened."
            },
            {
                id: 2,
                name: "Halfling Nimbleness",
                description: "You can move through the space of any creature that is of a size larger than yours."
            }
        ],
        imageAlt: `Qeṽa Halfling`
    },
    {
        id: 7,
        link: `/races/aeoki`,
        name: `Oaki`,
        singName: "Oaki",
        classes: [
            'Oracles', 
            'Caracadre',
            'Avlimeth', 
            'Avikin',
            'Order of the Feather',
            'No Affiliation'
        ],
        heartStone: `Turqouise (Gentleness)`,
        spawnStone: `Chryscocolla (Stealth)`,
        elden: `Mhindil`,
        lifespan: `Unknown`,
        height: `2 ft`,
        weight: `20-25lbs`,
        appearance: `Tan Skin & Brown Hair`,
        language: `Kigaul`,
        government: `Communal`,
        residence: `Mhindileth`,
        description: `Rarely seen are the Aeoki. Though they appear innocent with their large eyes, petite figure and tenderhearted disposition, they are more dangerous than most with an intense proclivity for divination. Though it is not in their nature to use this ability for evil, they will not hesitate to defend a friend or themself. Their whereabouts are hidden by the oracles, but rumors place them somewhere in the High Mountains. They understand the common tongue, but cannot speak it.`,
        image: aeoki,
        speed: 20,
        size: 'S',
        dex: '+1',
        cha: '+2',
        proficiencies: ['-'],
        languages: ['*lumiare', 'kigaul'],
        abilities: [
            {
                id: 0,
                name: 'Darkvision',
                description: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
            },
            {
                id: 1,
                name: "Fey Ancestry",
                description: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."
            }
        ],
        imageAlt: `Qeṽa Aeoki`
    },
    {
        id: 8,
        link: `/races/arborums`,
        name: `Arborums`,
        singName: "Arborum",
        classes: [
            'Oracles', 
            'Caracadre', 
            'Avlimeth', 
            'Avikin',
            'Topplers',
            'Order of the Feather',
            'No Affiliation'
        ],
        heartStone: `Emerald (Goodness)`,
        spawnStone: `Jade (Awareness)`,
        elden: `Arboriul`,
        lifespan: `~10,000 yrs`,
        height: `20 ft`,
        weight: `1,000lbs`,
        appearance: `Barkskin & Leaves`,
        language: `Treeish`,
        government: `Communal`,
        residence: `Mahelos`,
        description: `It was revealed later in history that some of the flora had become sentient and in some areas of the world (Ellowood forest, Mahelos and the richest in Aguave), all flora. They may look like trees, but they move, walk and sometimes speak like the other beings. However, the treelings are often shy folk and do not carry out business like other races. This may because they do not have ears or eyes like other folk and rather see and hear through the vibrations of their many branches. Or it is because they can only speek treeish and communication with other races is tedious. Either way, they are a seldom seen race. However, if one does make the effort to know them, they reap great rewards. Arborums are fierce friends and a great source of wisdom. When a arborum first grows roots, it pulls them out of the ground and is able to walk the surface of the earth, only taking root to heal and rest. They walk the earth until their stature grows and their trunks stiffen to the point that mobility is difficult. At this point, they choose their final resting place - often their homeland - and dig their roots back on the earth to remain their for the rest of their years. Some live thousands of years and offer thousands of years of wisdom. It is the sapplings who protect them and walkabout the earth.`,
        image: treefolk,
        speed: 30,
        size: 'M',
        str: '+1',
        con: '+2',
        proficiencies: ['-'],
        languages: ['*elvish', '*lumiare', 'speak with plants'],
        abilities: [
            {
                id: 0,
                name: 'Barkskin',
                description: "Treefolk's bark-like skin provides them with natural protection. A Treefolk's Armor Class equals 14 + their Dexterity modifier + their Constitution modifier. They also have resistance to bludgeoning damage."
            },
            {
                id: 1,
                name: "Take Root",
                description: "Treefolk do not sleep, but they must put down roots each night and enter a semi-conscious dormant state for at least 4 hours. Treefolk can take root in sand, dirt, mud, loose gravel or similar material; but not worked stone or bare rock. While rooted, a Treefolk's speed becomes 0, and they become immune to both the prone condition and any form of forced movement, but have disadvantage on Dexterity saving throws. You can take root and unroot as an action. Taking root adds +2 to every dice roll and gives you advantage on any save or ability check to resist forced movement."
            },
            {
                id: 2,
                name: "Flammable",
                description: "Treefolk have vulnerability to fire damage. Treefolk are weak to fire, and burn easily.",
            },
            {
                id: 3,
                name: "Tremor",
                description: "You see and hear through your branche's vibrations. As long as you have your branches, you cannot be blinded or deafened. When rooted, medium size creatures and above within 100 feet of you must achieve a 15+ Stealth check or be detected."
            },
            {
                id: 4,
                name: "Regrowth",
                description: "Whenever your health drops below 0, you lose a tree branch/limb. The number of points you drop below zero equals the number of days it will require to regrow the limb. During the healing process, you have disadvantage on attacks with two-handed weapons."
            }
        ],
        imageAlt: `Qeṽa Arborum`
    },
    {
        id: 9,
        link: `/races/ethereals`,
        name: `Ethereals`,
        singName: "Ethereal",
        classes: [
            'Oracles', 
            'Caracadre', 
            'Avlimeth', 
            'Avikin',
            'Order of the Feather',
            'No Affiliation'
        ],
        heartStone: `Celestite (Holiness)`,
        spawnStone: `None`,
        elden: `DIA`,
        lifespan: `Immortal`,
        height: `7-8 ft`,
        weight: `Weightless`,
        language: `Celestial`,
        government: `Theocracy`,
        residence: `The Etherworld`,
        foundedOrders: `Avlimeth`,
        description: `Spirits (or Haelas in the celestial tongue) are the original and intended form of all ethereals. They dwell and act from the ether as immortal beings and are perfectly aligned with DIA meaning they have never committed evil. However, this does not mean that they do the greatest good. Some are free of evil and still lazy, unfocused or simply untapped of their full potential.`,
        image: spirit,
        speed: 30,
        size: 'M',
        dex: '+2',
        proficiencies: ['-'],
        languages: ['celestial', '*all'],
        abilities: [
            {
                id: 0,
                name: 'Truesight',
                description: "You can see in normal and magical darkness, see invisible creatures and objects, automatically detect visual illusions and succeed on saving throws against them. Furthermore, the creature can see into the Ethereal Plane."
            },
            {
                id: 1,
                name: "Synergy",
                description: "Spirits don't need to sleep. Instead, they enter a state of prayer, remaining semiconscious, for 2 hours a day. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep."
            },
            {
                id: 2,
                name: "Bless",
                description: "If a physical being reflects a quality of DIA, you have the ability to amplify it. You can add proficiency to any roll attached to such a quality in an individual."
            },
            {
                id: 3,
                name: "Read Thoughts",
                description: "In their truesight, spirits can see beyond physical things. They can see into the soul. As a spirit, once per day you can enter the mind of a physical being."
            }
        ],
        topics: [
            {
                id: 0,
                name: `Spirits`,
                singName: "Spirit",
                classes: [],
                residence: `The Etherworld`,
                appearance: `Invisible`,
                description: 
                    `Spirits (or Haelas in the celestial tongue) are the original and intended form of all ethereals. They dwell and act from the ether as immortal beings and are perfectly aligned with DIA meaning they have never committed evil. However, this does not mean that they do the greatest good. Some are free of evil and still lazy, unfocused or simply untapped of their full potential.`,
                image: spirit,
                imageAlt: `Qeṽa Spirit`,
                wis: '+2',
                abilities: [
                    {
                        id: 0,
                        name: 'Invisible',
                        description: "In your natural state, you are invisible to the naked eye."
                    },
                    {
                        id: 1,
                        name: 'Take Shape',
                        description: 'Once per day, you can make yourself visible to physical beings. You can take a human or another form (humanoid-sized).'
                    }
                ]
            },
            {
                id: 1,
                name: `Spectres`,
                singName: "Spectre",
                classes: [
                    'Oracles', 
                    'Caracadre', 
                    'Avlimeth', 
                    'Avikin',
                    'Order of the Feather',
                    'No Affiliation'
                ],
                residence: `The Natural World`,
                appearance: `White Hair, White Skin, White Eyes`,
                description: 
                    `Spectres or Estrayas commonly branded fallen stars are spirits which have lost or given up their celestite to take a physical form and yet have remained faithful to their alignment to DIA and HIS goodness. This choice however has made them mortal. They would look identical to humans if not for their luminescence. They are rare in Qeṽa and are generally seen as untrustworthy. At one time, specters told their stories until rumors spread that they were ripped out of the ether on account of a fall from grace.`,
                image: spectre,
                imageAlt: `Qeṽa Spectre`,
                cha: '+2',
                abilities: [
                    {
                        id: 0,
                        name: 'Fey Ancestry',
                        description: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."
                    }
                ]
            }
        ]
    }
];
