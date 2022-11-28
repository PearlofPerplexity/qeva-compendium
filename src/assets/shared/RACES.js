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
import user from '../imgs/races/user.png';

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

*/

export const RACES = [
    {
        id: 0,
        link: `/races/elves`,
        name: `Elves`,
        heartStone: `Diamond (Love)`,
        spawnStone: `Quartz (Strength)`,
        elden: `Amare`,
        lifespan: `~120 yrs`,
        height: `5-6 ft`,
        weight: `120-180lbs`,
        language: `Elvish`,
        government: `Republic`,
        foundedOrders: `Elvish Cloaks`,
        description: `Elves were the first race to live in Qeṽa. They roamed the world and even the stars for a thousand years before the other races appeared. They are immortal therefore wisest of the races. They can be deciphered from men by their fair skin, and pointed ears. They are responsible for the cathedrals around Qeṽa mythed to be erected through divination and they are drawn to DIA's attributes in water and wood.`,
        topics: [
            {
                id: 0,
                name: `Wood Elves`,
                residence: `Forests of Navenia & Navalil`,
                appearance: `Gold Hair & White Skin`,
                description: 
                    `Wood elves are drawn to trees and so reside in forests where plantlife is abundant. They maintain the oldest and most central city of civilization, which is Brielle in the forest of Navenia. Other great cities include Eavano in Evendil, as well as Linda and Nalri in the west. They are traditionally vegetarian and perceptive to the nature of forest environments and plants.`,
                image: wood,
                imageAlt: `Qeṽa Wood Elf`
            },
            {
                id: 1,
                name: `River Elves`,
                residence: `Miolaire & Dundili Rivers`,
                appearance: `Black Hair & White Skin`,
                description: 
                    `River elves are those that are drawn most to flowing water and so build their cities adjacent to rivers. Their greatest cities are Thelos on the Silver river, Anuage on the Dundili, Vaiorse on the Oulaire, Eteala on the Neale and Helos on the Miolaire before the wood was cursed. They are traditionally pescatarian and perceptive to the nature of water.`,
                image: river,
                imageAlt: `Qeṽa River Elf`
            },
            {
                id: 2,
                name: `Desert Elves`,
                residence: `Miolaire & Dundili Rivers`,
                appearance: `Gold Hair & Tan Skin`,
                description: 
                    `Desert elves are those who withdrew from society to seek separation from the growing hostility in Avlim. They found seclusion in the northeastern deserts of Shaole, in an oasis they've hidden by illusions. Though their community was built on passivism, there are still those among them who reenter society to play a role in the events of history.`,
                image: desert,
                imageAlt: `Qeṽa Desert Elf`
            }
        ]
    },
    {
        id: 1,
        link: `/races/aviame`,
        name: `Aviame`,
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
        topics: [
            {
                id: 0,
                name: `Lumiare`,
                nickname: `Autumn Avi`,
                residence: `Mountains of Altiavaire`,
                appearance: `Black Hair & Tangerine Skin`,
                description: 
                    `The Lumiare or Autumn Avi have a tanish, orange tint to their skin, dark purple lips and black markings on their face. Their greatest city is Lumion in the Anduir valley of Altiavaire, though their kind can be found scattered throughout the mid-north. Unlike elves, they have a sense for mountainous terrain and wildlife. They are best known for their legendary mountain warfare school and companionship with birds.`,
                image: lumiare,
                imageAlt: `Qeṽa Lumiare Aviame`
            },
            {
                id: 1,
                name: `Athiame`,
                nickname: `Night Avi`,
                residence: `Athvari Cliffs`,
                appearance: `White Hair & Black Skin`,
                description: 
                    `The Athiame or “Night Avi” were degradingly called the Athmari after the Athiame-born tyrant, Ithmar reigned ruthlessly over Avlim in the age of darkness. This tie to the dark armies would scar their reputation as many of the noble races would compare their dark skin to the gray skin of orcs, declaring them as untrustworthy. Thus, the Athiame would lock themselves in the Athiari cliffs, guarded by their greatly feared order of the ghost blades.`,
                image: athiame,
                imageAlt: `Qeṽa Athiame`
            },
            {
                id: 2,
                name: `Asiame`,
                nickname: `Snow Avi`,
                residence: `High Mountains, Orcaṽa`,
                appearance: `White Hair & Skin`,
                description: 
                    `The Viame or Snow Avi or even High Aviame have a pale, white skin and blue lips. They live in the high mountains; most prevalently in the north ranges acting as a gatekeepers of Altiavaire. Beyond the normal tolerance of other Aviame, Tsiame are especially built for the cold so much so that some sailed north for inhabitable land after the Terracut.`,
                image: asiame,
                imageAlt: `Qeṽa Asiame`
            },
            {
                id: 3,
                name: `Half-Aviame, Half-Elf`,
                nickname: `Aves`,
                residence: `Elven & Aviame Communities`,
                appearance: `White Hair & Calico Skin`,
                description: 
                    `Aves are a half elf, half aviame race. Though they are given a warm welcome in Altiavaire and Navalil and experience the best of Elven and Aviame hospitality, they are not well-trusted among the other races. Along with their kind being rare, their often calico complexion sparks others races to distrust them and distance themselves. They are not numerous enough to have their own cities, but rather mix in with the elven and aviame population. They carry themselves like their parent races and do not often venture west.`,
                image: ave,
                imageAlt: `Qeṽa Ave`
            }
        ]
    },
    {
        id: 2,
        link: `/races/humans`,
        name: `Humans`,
        heartStone: `Onyx (Faithfulness)`,
        spawnStone: `Shungite (Loyalty)`,
        elden: `Çairça`,
        lifespan: `~120 yrs`,
        height: `5-6 ft`,
        weight: `120-180lbs`,
        language: `Common`,
        government: `Republic`,
        foundedOrders: `Caracadre, Helmsmen`,
        description: `Though no eldar oversees humans, many guess that one once did. An elden statue with the title, Çairça is erected in their capital city of Ekeveri. Rounded ears give them and their ancestors away as humans of Arvannon, though their hair and skin can take many shades from fair to dark. Also known as people of the North, Humans are the most eccentric of the noble races and have stretched their presence into Ouri and Altiavaire. Their greatest cities are Ekevri, Durik, Durakin, Farkrine and Urvek leit. They enjoy the company of halves in the good times and the alliance of aviame and elves in the evil times. In their short lifes of around 120 years, they are quick at picking up many a craft.`,
        topics: [
            {
                id: 0,
                name: `Humans`,
                residence: `Arvañon`,
                appearance: `Varied Hair & Skin`,
                description: 
                    `Though no eldar oversees humans, many guess that one once did. An elden statue with the title, Çairça is erected in their capital city of Ekeveri. Rounded ears give them and their ancestors away as humans of Arvannon, though their hair and skin can take many shades from fair to dark. Also known as people of the North, Humans are the most eccentric of the noble races and have stretched their presence into Ouri and Altiavaire. Their greatest cities are Ekevri, Durik, Durakin, Farkrine and Urvek leit. They enjoy the company of halves in the good times and the alliance of aviame and elves in the evil times. In their short lifes of around 120 years, they are quick at picking up many a craft.`,
                image: human,
                imageAlt: `Qeṽa Human`
            },
            {
                id: 1,
                name: `Half-Elves`,
                residence: `Elven & Human Communities`,
                appearance: `Eyes the color of their elven parent`,
                description: 
                    `Half-elves are half-human and half-elf and they are indistinguishable from either race depending on the genes they inherent. They walk among both races nearly unnoticed with only the most perceptive recognizing their irregularity. Some half-elves do not even know their heritage until they outlive their human counterparts or begin to show the signs of mortality. Half-elves live for around a century, depending on the purity of their elven bloodline.`,
                image: halfElf,
                imageAlt: `Qeṽa Half Elf`
            },
            {
                id: 2,
                name: `Elden`,
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
        name: `Osei`,
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
        imageAlt: `Qeṽa Osei`
    },
    {
        id: 4,
        link: `/races/dwarves`,
        name: `Dwarves`,
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
        topics: [
            {
                id: 0,
                name: `Thrauldem's Folk`,
                residence: `Thursh Mountains`,
                appearance: `~Black Hair, White Skin`,
                description: 
                    `The Dwarves of the west are dispersed in the Thrush mountains with their largest stronghold being in Haraduin. Acting as gatekeepers between Navalil and Ouri, they learned to have better relations with other races than eastern dwarves. They formed significant relationships with both halflings and elves.`,
                image: tdwarf,
                imageAlt: `Qeṽa Dwarf of the Thrush Mountains`
            },
            {
                id: 1,
                name: `Narduhelm's Folk`,
                residence: `Bare Mountains`,
                appearance: `~Brown Hair, White Skin`,
                description: 
                    `The eastern dwarves of the Bare Mountains are bread even harder than their western cousins and are not typically an amiable acquaintance. They reside in the barren lands of Shaole, where few things grow or last and their greatest city was Barahduil until it was overtaken by the dark armies. Now, any great gathering of western dwarves is hidden or eradicated and dispersed.`,
                image: bdwarf,
                imageAlt: `Qeṽa Dwarf of the Bare Mountains`
            }
        ]
    },
    {
        id: 5,
        link: `/races/gnomes`,
        name: `Gnomes`,
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
        topics: [
            {
                id: 0,
                name: `Green Gnomes`,
                residence: `Farathain`,
                appearance: `Green Skin`,
                description: 
                    `Green Gnomes can be found in Farathain, the southern region of Ouri below Fletcheren. Their greatest towns are Nalri in the wood and Nadia south of Loch Ladish. Unlike most sentient races, these Gnomes have a natural propensity for divination. Without any training, they begin forming minor illusions as children and progress in their skill from there.`,
                image: ggnome,
                imageAlt: `Qeṽa Green Gnome`
            },
            {
                id: 1,
                name: `Blue Gnomes`,
                residence: `Haven`,
                appearance: `Blue Skin`,
                description: 
                    `Blue Gnomes live on the island, Haven, southwest of Avlim with their greatest city being Amvil, city of bridges. They are the farthest removed from world events, though Haven was the primary refuge for all races during the reign of Ithmar and his void that brought on the age of darkness. Like green gnomes, they have a natural propensity for divination.`,
                image: bgnome,
                imageAlt: `Qeṽa Blue Gnome`
            },
            {
                id: 2,
                name: `Red Gnomes`,
                residence: `Baroach, Bare Mountains`,
                appearance: `Red Skin`,
                description: 
                    `Unlike green and blue gnomes, red gnomes do not have an ability to produce divination, but only magic. Also unlike other gnomes, they are unfriendly if not altogether hostile. No one seems to really know their source of origin, though most claim that they live in the uninhabited treelines of the thrush and bare mountains.`,
                image: rgnome,
                imageAlt: `Qeṽa Red Gnome`
            }
        ]
    },
    {
        id: 6,
        link: `/races/halflings`,
        name: `Halflings`,
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
        imageAlt: `Qeṽa Halfling`
    },
    {
        id: 7,
        link: `/races/aeoki`,
        name: `Aeoki`,
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
        imageAlt: `Qeṽa Aeoki`
    },
    {
        id: 8,
        link: `/races/arborums`,
        name: `Arborums`,
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
        description: `It was revealed later in history that some of the flora had become sentient. They may look like trees, but they move, walk and sometimes speak like the other beings. However, the treelings are shy folk and do not carry out business like other races. They seem to see themselves as more plant than people and keep to themselves in their forests, gravitating to the center of the forest.`,
        image: user,
        imageAlt: `Qeṽa Arborum`
    },
    {
        id: 9,
        link: `/races/dragons`,
        name: `Dragons`,
        heartStone: `Tourmaline (Immensity)`,
        spawnStone: `Bismuth (Intelligence)`,
        elden: `Moriel`,
        lifespan: `~10,000 yrs`,
        height: `Gargantuan`,
        weight: `3,000lbs`,
        appearance: `Various Colored-Scales & Wings`,
        language: `Common, Dark Speech`,
        government: `None`,
        residence: `Varied`,
        description: `Following his other creations, Moriel created another creature, one of great power and wisdom. Here he used a cut of tourmaline and puored an incredible portion of wisdom. After the beginning of wars, Moriel saw the flaws in his creation. In his lust for power, he deprived orcs of free-thinking. They lacked the ability to think creatively or strategize in battle. And so, he desired a creature clever enough to match the power and wisdom of the elder elves, one to fight at his side as an equal. In secrecy, he searched Avlim, for amber, the stone of wisdom. He bonded it to a shard of immensity from Arguthain and formed the dragon. In his crafting, Moriel was still weakened even in mind and lost control of the immensity stone and the dragons grew far larger than he planned. The dragons inspired fear even in himself. He approached them carefully and with respect.`,
        image: user,
        imageAlt: `Qeṽa Dragon`
    }
];
