import { 
    BasicLink,
    GemLink,
    EthLink,
    DivineLink,
    DRaceLink
} from "../../utils/link";

export const BASICS = [
    {
        id: 0,
        link: BasicLink,
        name: `Basics`,
        topics: [
            {
                id: 0,
                link: GemLink,
                name: `Centrality of Gemstones`,
                description: `In Qeṽa, the whole world is prefaced around the idea that gemstones are the purest physical reflection of DIA (god) and are the source of all things. Every created thing grew from a combination of gemstones and the gemstones that remain in their original form hold great power. Each gemstone holds a unique attribute of DIA and individuals only receive the power in these gemstones if they align themselves to the stones' attribute.`
            },
            {
                id: 1,
                link: EthLink,
                name: `Involvement of Ethereals`,
                description: `Though fey creatures and spirits are expected in all fantasy worlds, Ethereals play a much more tangible role in Qeṽa. A pure ethereals' sole mission is to shepherd the creation of DIA and they are ever-present in the workings of the world, sometimes taking physical form to do so. On the other hand, fowl ethereals take many monstrous physical forms and bend magic to create even fowler things in the world.`
            },
            {
                id: 2,
                link: DivineLink,
                name: `Mechanics of Divination`,
                description: `The magic in Qeṽa is unique in that it sources its power from the combination of gemstones and ethereals. Gemstones are the source of divination and yet, ethereals are needed to draw this power out. Not only must gemstones and ethereals be present, but an individual must align themselves to both the qualities of the stone and the qualities of the ethereal in order for divination to occur.`
            },
            {
                id: 3,
                link: DRaceLink,
                name: `Darkening of Races`,
                description: `Unlike other worlds, the races of Qeṽa risks falling into a dark form if they are not careful. The more one strays from the attributes of DIA, the more they risk this transformation. However, such a transformation is not permanent. Orcs for example are merely the dark form of Osei. A orc may then become good like any other race and no sentient creature is beyond purification. This is ture for all beings except for ethereals that is. Once an ethereal has darkened, they are too consumed by a singular nature of evil to ever return. Unlike other dark races, dark ethereals or wraiths may take a variety of monstrous.`
            }
        ]
    }
];