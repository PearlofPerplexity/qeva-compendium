import user from '../imgs/races/user.png';
import orc from '../imgs/races/orc.png';
import husk from '../imgs/races/husk.png';
import ronin from '../imgs/races/ronin.png';

/* INCLUDES:

Orcs
Husks
Ronin
Jackals
Mongrels

*/

export const DRACES = [
    {
        id: 0,
        link: `/dark-races/orcs`,
        name: `Orcs`,
        origin: `Osei`,
        heartStone: `Black Amethyst (Mayhem)`,
        elden: `Moriel`,
        lifespan: `~60 yrs`,
        height: `5-6 ft`,
        weight: `90-150lbs`,
        appearance: `Gray Skin & No Hair`,
        language: `Dark Speech`,
        government: `Tyranny`,
        residence: `Shaöle`,
        description: `There are many creatures hidden in the veil of the east, but most well known among them is the orc. It seems to be of a natural evil if good-hearted ones were not fabled. Everything about them is horrid. From yellowed teeth, to oily hair, gray skin and filthy garments, they seem to have forgot any of the goodness they were created with. All wars of the past seem to be stirred up by them and the rest of the evil races known as the “dark armies.” Not much more is known about them and not much is desired to be known. It is a popular prayers to not run across such a beast in one's life.`,
        image: orc,
        imageAlt: `Qeṽa Orc`
    },
    {
        id: 1,
        link: `/dark-races/husks`,
        name: `Husks`,
        origin: `Elves, Aviame, or Humans`,
        heartStone: `Black Diamond (Hate), Black Ruby (Havoc) or Dead Onyx (Faithless)`,
        elden: `Moriel`,
        lifespan: `~Half-life of original race`,
        height: `4-5 ft`,
        weight: `70-140lbs`,
        appearance: `Gray Skin & Sparse, Oily Hair`,
        language: `Dark Speech`,
        government: `Tyranny`,
        residence: `Shaöle`,
        description: `In company with the orc is the husk. Husks share many traits with the orc from rotten teeth, to damaged hair, gray skin and filthy garments. The only difference seems to be in their face. The face of a husk is strangely familiar. So much so, that some rumor they are the reincarnations of relatives from long before; zombies who have crawled from their graves to seek revenge. No matter their story, husks share the same temperament as orcs if not more unkempt and quicker to violence.`,
        image: husk,
        imageAlt: `Qeṽa Husk`
    },
    {
        id: 2,
        link: `/dark-races/ronin`,
        name: `Ronin`,
        origin: `Mating of a Reaper with an Elf, Aviame, or Human`,
        heartStone: `Black Diamond (Hate), Black Ruby (Havoc) or Dead Onyx (Faithless)`,
        elden: `The Great Demon`,
        lifespan: `~Half-life of original race`,
        height: `6-7 ft`,
        weight: `180-250lbs`,
        appearance: `White Eyes, Gray Skin & Long White Hair`,
        language: `Dark Speech, Ethereal`,
        government: `None`,
        residence: `Shaöle`,
        description: `Wraiths who become reapers can take many physical forms and some reapers maintain their original humanoid form. When these humanoid reapers mate with either elves, aviame or humans they produce a child known as ronin. Though not as strong and terrifying as reapers, ronin or "hunters" are terrible beings to come across. They are often great swordsman and have slayed many noble warriors. Their armor is reminiscent of a heavily armored samurai.`,
        image: ronin,
        imageAlt: `Qeṽa Ronin`
    },
    {
        id: 3,
        link: `/dark-races/jackals`,
        name: `Jackals`,
        origin: `Corrupt creation of Ithmaar in collusion with the wraith-world`,
        heartStone: `None`,
        elden: `Ithmaar`,
        lifespan: `~20 yrs`,
        height: `4-5 ft`,
        weight: `70-120lbs`,
        appearance: `Raptor-reptillian-like`,
        language: `Dark Speech, Ethereal`,
        government: `None`,
        residence: `Shaöle`,
        description: `Jackals are the deranged experiment of Moriel in collusion with the wraith-world; the permanent hybrid of dragon and orc heredity. They have long snouts, tails and spiked manes like dragons, but are bi-pedal and small like orcs. They have reptillian skin, which shares the greenish hue of orcs. All creatures require moonstone, the stone of sentience crafted along with another cardinal stone. However, when Moriel crafted jackals he did away with the cardinal stone and created them only with moonstone. That is why many consider them to be barely sentient. This void of a cardinal stone leaves them ever hungry for gemstones. While an ordinary, sentient being may return to the attriubte of their heart stone when they feel empty, the jackal has no such source of relief. They hungrily seek out gems and devour them in hopes they will satisfy, but they never do. They merely exit their system empty and dark. They sniff out stones in rock and even in the chambers of people's souls.`,
        image: user,
        imageAlt: `Qeṽa Jackal`
    },
    {
        id: 4,
        link: `/dark-races/mongrels`,
        name: `Mongrels`,
        origin: `Mating of a monstrous reaper with a dragon, mongrel or another monstrous reaper`,
        heartStone: `Black Emerald (Evil)`,
        elden: `The Great Demon`,
        lifespan: `Immortal`,
        size: `Gargantuan`,
        appearance: `Varied Forms`,
        language: `Dark Speech, Ethereal`,
        government: `None`,
        residence: `Shaöle`,
        description: `Wraiths who become reapers can take many physical forms. The spawns of these reapers are mongrels and can even breed with one another to take other inventive shapes, though usually they are solitary creatures. They live for hate, destruction and evil and few survive their presence.`,
        image: user,
        imageAlt: `Qeṽa Mongrel`
    }
];
