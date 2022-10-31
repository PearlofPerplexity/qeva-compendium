import avikin from '../imgs/logos/avikin.png';
import caracadre from '../imgs/logos/caracadre.png';
import elvishcloaks from '../imgs/logos/elvishcloaks.png';
import ghostblade from '../imgs/logos/ghostblade.png';
import moonstone from '../imgs/logos/moonstone.png';
import sentinel from '../imgs/logos/sentinel.png';
import uncorrupted from '../imgs/logos/uncorrupted.png';
import avlimeth from '../imgs/logos/avlimeth.png';
import feather from '../imgs/logos/feather.png';

export const CLASSES = [
    {
        id: 0,
        link: `/classes/sentinels`,
        quality: `Supreme Guardians of Avlim`,
        goal: `Guide the Nations to Reflect DIA's Image`,
        name: `Sentinels`,
        race: `A lineage with an unopened stone`,
        primaryWeapon: `Zanhari`,
        sacredText: `Sa Siavana`,
        worldKnowledge: `High`,
        description: `Sentinels are the guardians of Qeva and are viewed as authoritative figures in all of Avlim. To maintain this, they are the only beings formally trained by the Eldar in the arts of divination - what is commonly known as magic. Given their prestige and weight of responsibility, A novitiate cannot volunteer, but can only be selected. Before accepting this role, one should know that Sentinels have a strict moral code and life of discipline; To follow this path is to accept a difficult and restricted life, but no less rewarding. However, only races endowed with the capacity for divination are fit to serve in such a role. To initiate themselves as sentinels, a novitiate must walk to the sacred island of agate and attune themselves with one of the cardinal stones that lies there. They also select a cut of turquoise, which is crucial to the forging of the iconic luminescent blade of a Sentinel.`,
        image: sentinel
    },
    {
        id: 1,
        link: `/classes/caracadre`,
        quality: `Rangers`,
        goal: `Bring Peace & Justice for the Common Man`,
        name: `Caracadre`,
        race: `Any`,
        primaryWeapon: `Any`,
        sacredText: `SenSavye (From the Sentinels)`,
        worldKnowledge: `Medium`,
        description: `Where Sentinels are selected, Caracadre volunteer. They are the rangers of Avlim who take it upon themselves to ensure peace and justice is given to all. They often sentry the wild and rural lands where a Sentinel presence is unfelt. Though often traveling alone or in small factions, they are all tied together by the Caracadre code, legends and songs. Like the sentinels, they believe gems promise unnatural and superior abilities and make it their goal to pursue the possession and mastery of these gems. However, unlike the sentinels, Caracadre tend to value common stones over spiritual stones as they offer more tangible benefits such as strength, dexterity and intelligence. One who possess and masters all seven common stones is known as a grand caracadre though it is difficult to obtain and attune to even one stone.`,
        image: caracadre
    },
    {
        id: 2,
        link: `/classes/avlimeth`,
        quality: `Rangers`,
        goal: `Bring Peace & Justice for the Common Man`,
        name: `Avlimeth`,
        race: `Any`,
        primaryWeapon: `Longsword`,
        sacredText: `SenSavye (From the Sentinels)`,
        worldKnowledge: `Medium`,
        description: `The Avlimeth or "Haven of Avlim" are warriors much like the caracadre for they once were part of there order. However, they broke away from the caracadre over differences  in their beliefs about gems. After reading the SenSavye, the Avlimeth disagreed with the caracadre's focus on the incidental stones for it ignored the value the Sentinels placed on the Cardinal stones. However, they did not feel it was right either to ignore the power of the incidental stones nor abandon them for they too were created by DIA. So they decided the gems should be pursued vertically by their shared element rather than horizontally by their class (divine, cardinal, incidental). For example, they recognize that amber, the incidental stone of constitution amd topaz, the cardinal stone of hope share the same elemental quality and effect. A person with hope will have constitution and a person with constitution will have hope. With this, elemental caracadre only pursue stones of a shared element.`,
        image: avlimeth
    },
    {
        id: 3,
        link: `/classes/elvish-cloaks`,
        quality: `Wood Elven Warriors`,
        goal: `Keep Watch over the Elvish Woodland Realms`,
        name: `Elvish Cloaks`,
        race: `Elves, Aves`,
        primaryWeapon: `Longbow`,
        sacredText: `Histories of Avlim`,
        worldKnowledge: `Medium-High`,
        description: `Prior to the void age, The Elvish domain of Navalil was the first line of defense against the dark armies in the east. Because of this, an order of elves was established to protect and keep watch over their borders. This was especially true of the forest of Ethel, which was considered impassible outside of elven permission. The only road to enter this great forest was the “Passage of the Elvish cloaks” a bridge between Ethel and Navenia that crossed the Thrush Mountains iconic for the towering elven statues on either side. They were the only order established by Sentinels and are rumored to have been graced with a small degree of knowledge in divination.`,
        image: elvishcloaks
    },
    {
        id: 4,
        link: `/classes/avikin`,
        quality: `Mountain Warriors`,
        goal: `Defend Altiavaire and Avlim at large from Evil`,
        name: `Avikin`,
        race: `Aviame, Aves & All races may become an Avikith`,
        primaryWeapon: `Longbow`,
        sacredText: `Thesathsia`,
        worldKnowledge: `Medium-High`,
        description: `In the ever-autumn mountains of the Anduir valley, the Aviame have devised their own order, known as the “Avikith.” This faction represents some of the most highly trained warriors in all of Avlim, notorious for their proficiency in archery and acrobatics. Though only a true Aviame can achieve the rank of master avikith, honorary training is open to all races. However, one must understand that such training is no small venture. To train is to set aside one's possessions and life for the foreseeable future and to promise never return if they leave before their training is complete.`,
        image: avikin
    },
    {
        id: 5,
        link: `/classes/ghost-blades`,
        quality: `Rogues`,
        goal: `Defend their home and people`,
        name: `Ghost Blades`,
        race: `Athiame, Ave`,
        primaryWeapon: `Two Daggers`,
        sacredText: `None`,
        worldKnowledge: `Low`,
        description: `Perhaps the most feared among the factions are the Athiame Ghost Blades. Though they are skilled warriors, public fear is due more to history than skill. One of the most lethal sorcerers to live was the dark lord Ithmaar of Athiame descent. Not only was he responsible for the cursing of the Mahelo wood and Rose Fields of Altiavaire, but he initiated the Aeoki genocide and was a ruthless oppressor during the Void age. His actions scarred the reputation of athiame became known as the “Athmari.” Being welcomed less and less elsewhere, The Athiame holed themselves up in the Athiare cliffs. Their borders were secured by the “ghost blades” who had such stealth that men would say a trespasser's neck would be slit before they even felt the blade. The recent actions of the Athiame, Theathe has somewhat redeemed the Athiame name, but there is still great skepticism and fear around the renowned Athmari ghost blades (though they prefer “Athiame ghost blades”).`,
        image: ghostblade
    },
    {
        id: 6,
        link: `/classes/uncorrupted`,
        quality: `Legionnaires`,
        goal: `Eradicate Evil Anywhere`,
        name: `The Uncorrupted`,
        race: `Osei`,
        primaryWeapon: `Pike`,
        sacredText: `None`,
        worldKnowledge: `Medium`,
        description: `The uncorrupted is the nickname given to a legion of disciplined Ohri soldiers with an unmatched reputation. They comprised the front lines in the retaking of Avlim and comprised the majority of the force in the war of all. Despite their reputation, there is very little known about them. They did not appear in Avlim until the end of the void age and it is a bit of a mystery of where they came from. Some speculate that they were a byproduct of Ithmaar's void magic or divined by the Eldar while others believe them to be underdwellers who burrowed up from the ground or voyagers from another land. Few dare to ask, as the uncorrupted are of a battle-hardened, stoic breed. They have perfect chemistry with each other, but struggle forming bonds with others.`,
        image: uncorrupted
    },
    {
        id: 7,
        link: `/classes/topplers`,
        quality: `Halfling Rabble Fighters`,
        goal: `Aid where there is none`,
        name: `The Topplers`,
        race: `Halfling`,
        primaryWeapon: `Slingshot`,
        sacredText: `None`,
        worldKnowledge: `Low`,
        description: `In response to the war of the weak, the Halflings became trained in combat by the man, Tyrns, a grand caracadre. This formed the first significant bond between men and halflings and their “order" became known as the “Topplers.” Before the void, they saw little action, but gave a small measure of pride and security to their people in the Fletcheren hills. Now in a different world, they call upon their distant training to aid in the restoration of Avlim. However, their lighthearted disposition, small stature and lack of experience in real battle has led them to be seen as  joke in the realm of warfare.`,
        image: uncorrupted
    },
    {
        id: 8,
        link: `/classes/order-of-the-feather`,
        quality: `Explorers, Sea Farrers & Cartographers`,
        goal: `Explore Qeṽa`,
        name: `Order of the Feather`,
        race: `Any`,
        primaryWeapon: `None`,
        sacredText: `None`,
        worldKnowledge: `Medium`,
        description: `This group of primarily gnomes has little care for rebuilding the infrastructure of Avlim, though they will help where they can - or more likely, where is convenient. They are driven by an obsession with exploration and travel around Qeva to see and experience the world. During the void age and the years before it, gnomes were the farthest from harm and the least involved with great wars and world events. This simple, lackluster legacy motivated their kind to form the order of the feather, to explore not only Avlim, but all continents of Qeva. Their order also includes cartographers who who seek to map out not only Avlim, but all the lands of Qeva. They share their maps and findings freely within the guild to grow the knowledge and intrigue of Avlim. They can be recognized by a feather, which tends to find itself somewhere on their person from their hat to their boot.`,
        image: feather
    },
    {
        id: 9,
        link: `/classes/unaffiliated`,
        name: `Unaffiliated`,
        classes: []
    },
];