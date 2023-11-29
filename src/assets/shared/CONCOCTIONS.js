import { INGREDIENTS } from "./INGREDIENTS";

export const CONCOCTIONS = [
    {
        id: 0,
        name: 'Health Tonic',
        type: 'Healing',
        description: 'Regain hit points equal to 1d8 HP + your INT modifier.',
        ingredients: [
            INGREDIENTS[0].name,
            INGREDIENTS[19].name
        ],
        price: 50
    },
    {
        id: 1,
        name: 'Restoration Oil',
        type: 'Healing',
        description: 'End either one disease or one condition.',
        ingredients: [
            INGREDIENTS[1].name,
            INGREDIENTS[18].name
        ],
        price: 25
    },
    {
        id: 2,
        name: 'Immunity Booster',
        type: 'Healing',
        description: 'Regain the maximum number of hit points possible from any healing (compatible with oils and health tonics).',
        ingredients: [
            INGREDIENTS[2].name,
            INGREDIENTS[17].name
        ],
        price: 100
    },
    {
        id: 3,
        name: 'Stability Tonic',
        type: 'Healing',
        description: 'Creature rolling death saves is stabilized. Their health points remain unchanged until rest or healing is given.',
        ingredients: [
            INGREDIENTS[3].name,
            INGREDIENTS[16].name
        ],
        price: 25
    },
    {
        id: 4,
        name: 'Warding Tonic',
        type: 'Healing',
        description: 'The first time a target would drop to negative hit points as a result of taking damage, the target instead drops to 0 hit points.',
        ingredients: [
            INGREDIENTS[4].name,
            INGREDIENTS[15].name
        ],
        price: 25
    },
    {
        id: 5,
        name: 'Greater Health Tonic',
        type: 'Healing',
        description: 'Regain hit points equal to 2d8 HP + your INT modifier.',
        ingredients: [
            INGREDIENTS[0].name,
            INGREDIENTS[8].name,
            INGREDIENTS[19].name
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
            INGREDIENTS[5].name,
            INGREDIENTS[14].name
        ],
        price: 250
    },
    {
        id: 7,
        name: 'Past Pain Tonic',
        type: 'Healing',
        description: 'Grants 1d12 additional hit points that last 1 hour. If a short rest is taken, points are removed after the short rest is complete.',
        ingredients: [
            INGREDIENTS[6].name,
            INGREDIENTS[13].name
        ],
        price: 100
    },
    {
        id: 8,
        name: 'Elixir of Hardiness',
        type: 'Amplification',
        description: 'Grants +2 AC for 1 minute.',
        ingredients: [
            INGREDIENTS[7].name,
            INGREDIENTS[12].name
        ],
        price: 75
    },
    {
        id: 9,
        name: 'Elixir of Lethal Striking',
        type: 'Amplification',
        description: 'Adds +d4 to attack rolls for 1 minute.',
        ingredients: [
            INGREDIENTS[8].name,
            INGREDIENTS[11].name
        ],
        price: 75
    },
    {
        id: 10,
        name: 'Elixir of Learning',
        type: 'Amplification',
        description: 'Grants +5 INT for 1 hour.',
        ingredients: [
            INGREDIENTS[9].name,
            INGREDIENTS[10].name
        ],
        price: 50
    },
    {
        id: 11,
        name: 'Strength Tonic',
        type: 'Amplification',
        description: 'Grants +5 STR for 1 minute.',
        ingredients: [
            INGREDIENTS[1].name,
            INGREDIENTS[19].name
        ],
        price: 50
    },
    {
        id: 12,
        name: 'Tonic of Quickness',
        type: 'Amplification',
        description: 'Grants +5 SPD for 1 minute.',
        ingredients: [
            INGREDIENTS[2].name,
            INGREDIENTS[18].name
        ],
        price: 50
    },
    {
        id: 13,
        name: 'Tonic of Awareness',
        type: 'Amplification',
        description: 'Grants +5 to perception for 1 minute.',
        ingredients: [
            INGREDIENTS[3].name,
            INGREDIENTS[17].name
        ],
        price: 50
    },
    {
        id: 14,
        name: 'Liquid Expertise',
        type: 'Amplification',
        description: 'Choose one skill. You gain advantage in that skill for 8 hours.',
        ingredients: [
            INGREDIENTS[4].name,
            INGREDIENTS[16].name
        ],
        price: 50
    },
    {
        id: 15,
        name: 'Truth Serum',
        type: 'Amplification',
        description: 'A creature must succeed on a DC 11 Constitution saving throw or be unable to speak a lie for 1 hour.',
        ingredients: [
            INGREDIENTS[5].name,
            INGREDIENTS[15].name
        ],
        price: 75
    },
    {
        id: 16,
        name: 'Paralytic Toxin',
        type: 'Harm',
        description: 'A creature must succeed on a DC 13 CON saving throw or become paralyzed for 1 minute. The creature can repeat the saving throw at the end of each of its turns.',
        ingredients: [
            INGREDIENTS[6].name,
            INGREDIENTS[14].name
        ],
        price: 100
    },
    {
        id: 17,
        name: 'Drowse',
        type: 'Harm',
        description: 'A creature must succeed on a DC 15 CON saving throw or become unconscious for 4 hours. The creature wakes up if it takes damage or if another creature takes an action to shake it awake.',
        ingredients: [
            INGREDIENTS[7].name,
            INGREDIENTS[13].name
        ],
        price: 50
    },
    {
        id: 18,
        name: 'Slow Poison',
        type: 'Harm',
        description: 'A creature must succeed on a DC 12 CON saving throw or slowly drop 1d10 HP every hour for 8 hours without noticing. Each hour is a separate saving throw.',
        ingredients: [
            INGREDIENTS[8].name,
            INGREDIENTS[12].name
        ],
        price: 150
    },
    {
        id: 19,
        name: 'Sloth Incense',
        type: 'Harm',
        description: 'A creature must succeed on a DC 15 CON saving throw or become poisoned as long as they are exposed to the incense. The effects include -10ft speed, disadvantage on dexterity & strength saving throws.',
        ingredients: [
            INGREDIENTS[9].name,
            INGREDIENTS[11].name
        ],
        price: 100
    },
    {
        id: 20,
        name: 'Short Tail Venom',
        type: 'Harm',
        description: 'A creature must succeed on a DC 11 CON saving throw, taking 3d6 poison damage on a failed save, or half as much damage on a successful one.',
        ingredients: [
            INGREDIENTS[2].name,
            INGREDIENTS[19].name
        ],
        price: 150
    },
    {
        id: 21,
        name: "Dark Heart's Bane",
        type: 'Harm',
        description: "A creature must succeed on a DC 15 CON saving throw or become poisoned for 1 minute. This toxin contains stubborn cardinal gems that conflict with the evil in a creature's bloodstream. If a creature is evil, they will have disadvantage on all attacks.",
        ingredients: [
            INGREDIENTS[3].name,
            INGREDIENTS[18].name
        ],
        price: 200
    },
    {
        id: 22,
        name: "Well of Tears",
        type: 'Harm',
        description: "A creature must succeed on a DC 15 CON saving throw or be triggered into a severe anxiety attack for 1 minute. A creature under this effect will act irrationally. They may flee the area, curl into a ball or attack their own comrades.",
        ingredients: [
            INGREDIENTS[4].name,
            INGREDIENTS[17].name
        ],
        price: 75
    },
    {
        id: 23,
        name: "Forget-Me-Now",
        type: 'Harm',
        description: "A creature or must succeed on a DC 15 CON saving throw or face effects. The potions produce a potent mind-wiping effect that bestows amnesia.",
        ingredients: [
            INGREDIENTS[5].name,
            INGREDIENTS[16].name
        ],
        price: 200
    },
    {
        id: 24,
        name: "Solid-state Brew",
        type: 'Meddling',
        description: "You change the composition of a solid material or object into another solid-form.",
        ingredients: [
            INGREDIENTS[6].name,
            INGREDIENTS[15].name
        ],
        price: 200
    },
    {
        id: 25,
        name: "Water Brew",
        type: 'Meddling',
        description: "You change a body of liquid into pure water.",
        ingredients: [
            INGREDIENTS[7].name,
            INGREDIENTS[14].name
        ],
        price: 350
    },
    {
        id: 26,
        name: "Leeching Solution",
        type: 'Meddling',
        description: "You change a body of water into another liquid (liquid required to craft).",
        ingredients: [
            INGREDIENTS[8].name,
            INGREDIENTS[13].name
        ],
        price: 250
    },
    {
        id: 27,
        name: "Pollution",
        type: 'Meddling',
        description: "The atmosphere within a 20-ft radius fills with a gas concocted to the  color and texture specifications of your choice for 4 hours. It may be pitch black, smoke-like or a vibrant color.",
        ingredients: [
            INGREDIENTS[9].name,
            INGREDIENTS[12].name
        ],
        price: 75
    },
    {
        id: 28,
        name: "Sprouting",
        type: 'Meddling',
        description: "You can transform a stone into its creation equivalent.",
        ingredients: [
            INGREDIENTS[6].name,
            INGREDIENTS[15].name,
            "Tiger's Eye"
        ],
        price: 2000
    },
    {
        id: 29,
        name: "Crystaline Devolution",
        type: 'Meddling',
        description: "You can transform an object into crystal (specifically, the crystals that compose it)",
        ingredients: [
            INGREDIENTS[6].name,
            INGREDIENTS[15].name,
            "Tiger's Eye"
        ],
        price: 5000
    },
];