export const SIMPLEWEAPONS = [
    {
        id: 0,
        name: 'Club',
        damage: '1d4',
        damageType: 'bludgeoning',
        properties: 'Light',
        weight: 2
    },
    {
        id: 1,
        name: 'Dagger',
        damage: '1d4',
        damageType: 'piercing',
        properties: 'Finesse, light, thrown',
        weight: 1
    },
    {
        id: 2,
        name: 'Greatclub',
        damage: '1d8',
        damageType: 'bludgeoning',
        properties: 'Two-handed',
        weight: 10
    },
    {
        id: 3,
        name: 'Handaxe',
        damage: '1d6',
        damageType: 'slashing',
        properties: 'Light, thrown (range 20/60)',
        weight: 2
    },
    {
        id: 4,
        name: 'Javelin',
        damage: '1d6',
        damageType: 'piercing',
        properties: 'Thrown (range 30/120)',
        weight: 2
    },
    {
        id: 5,
        name: 'Light hammer',
        damage: '1d4',
        damageType: 'bludgeoning',
        properties: 'Light, thrown (range 20/60)',
        weight: 2
    },
    {
        id: 6,
        name: 'Mace',
        damage: '1d6',
        damageType: 'bludgeoning',
        properties: '-',
        weight: 4
    },
    {
        id: 7,
        name: 'Quarterstaff',
        damage: '1d6',
        damageType: 'bludgeoning',
        properties: 'Versatile (1d8)',
        weight: 4
    },
    {
        id: 8,
        name: 'Sickle',
        damage: '1d4',
        damageType: 'slashing',
        properties: 'Light',
        weight: 2
    },
    {
        id: 9,
        name: 'Spear',
        damage: '1d6',
        damageType: 'piercing',
        properties: 'Thrown (range 20/60), versatile (1d8)',
        weight: 3
    },
    {
        id: 10,
        name: 'Crossbow, light',
        damage: '1d8',
        damageType: 'piercing',
        properties: 'Ammunition (range 80/320), loading, two-handed',
        weight: 5
    },
    {
        id: 11,
        name: 'Dart',
        damage: '1d4',
        damageType: 'piercing',
        properties: 'Finesse, thrown (range 20/60)',
        weight: 5
    },
    {
        id: 12,
        name: 'Shortbow',
        damage: '1d6',
        damageType: 'piercing',
        properties: 'Ammunition (range 80/320), two-handed',
        weight: 2
    },
    {
        id: 13,
        name: 'Sling',
        damage: '1d4',
        damageType: 'bludgeoning',
        properties: 'Ammunition (range 30/120)',
        weight: 1
    },
];

export const MARTIALWEAPONS = [
    {
        id: 0,
        name: 'Battleaxe',
        damage: '1d8 slashing',
        weight: 4,
        properties: 'Versatile (1d10)'
    },
    {
        id: 1,
        name: 'Flail',
        damage: '1d8 bludgeoning',
        weight: 2,
        properties: ''
    },
    {
        id: 2,
        name: 'Glaive',
        damage: '1d10 slashing',
        weight: 6,
        properties: 'Heavy, reach, two-handed'
    },
    {
        id: 3,
        name: 'Greataxe',
        damage: '1d12 slashing',
        weight: 7,
        properties: 'Heavy, two-handed'
    },
    {
        id: 4,
        name: 'Greatsword',
        damage: '2d6 slashing',
        weight: 6,
        properties: 'Heavy, two-handed'
    },
    {
        id: 5,
        name: 'Halberd',
        damage: '1d10 slashing',
        weight: 6,
        properties: 'Heavy, reach, two-handed'
    },
    {
        id: 6,
        name: 'Lance',
        damage: '1d12 piercing',
        weight: 6,
        properties: 'Reach, special'
    },
    {
        id: 7,
        name: 'Longsword',
        damage: '1d8 slashing',
        weight: 3,
        properties: 'Versatile (1d10)'
    },
    {
        id: 8,
        name: 'Maul',
        damage: '2d6 bludgeoning',
        weight: 10,
        properties: 'Heavy, two-handed'
    },
    {
        id: 9,
        name: 'Morningstar',
        damage: '1d8 piercing',
        weight: 4,
        properties: ''
    },
    {
        id: 10,
        name: 'Pike',
        damage: '1d10 piercing',
        weight: 18,
        properties: 'Heavy, reach, two-handed'
    },
    {
        id: 11,
        name: 'Rapier',
        damage: '1d8 piercing',
        weight: 2,
        properties: 'Finesse'
    },
    {
        id: 12,
        name: 'Scimitar',
        damage: '1d6 slashing',
        weight: 3,
        properties: 'Finesse, light'
    },
    {
        id: 13,
        name: 'Shortsword',
        damage: '1d6 piercing',
        weight: 2,
        properties: 'Finesse, light'
    },
    {
        id: 14,
        name: 'Trident',
        damage: '1d6 piercing',
        weight: 4,
        properties: 'Thrown (range 20/60), versatile (1d8)'
    },
    {
        id: 15,
        name: 'War pick',
        damage: '1d8 piercing',
        weight: 2,
        properties: ''
    },
    {
        id: 16,
        name: 'Warhammer',
        damage: '1d8 bludgeoning',
        weight: 2,
        properties: 'Versatile (1d10)'
    },
    {
        id: 17,
        name: 'Whip',
        damage: '1d4 slashing',
        weight: 3,
        properties: 'Finesse, reach'
    },
    {
        id: 18,
        name: 'Blowgun',
        damage: '1 piercing',
        weight: 1,
        properties: 'Ammunition (range 25/100), loading'
    },
    {
        id: 19,
        name: 'Crossbow, hand',
        damage: '1d6 piercing',
        weight: 3,
        properties: 'Ammunition (range 30/120), light, loading'
    },
    {
        id: 20,
        name: 'Crossbow, heavy',
        damage: '1d10 piercing',
        weight: 18,
        properties: 'Ammunition (range 100/400), heavy, loading, two-handed'
    },
    {
        id: 21,
        name: 'Longbow',
        damage: '1d8 piercing',
        weight: 2,
        properties: 'Ammunition (range 150/600), heavy, two-handed'
    },
    {
        id: 22,
        name: 'Net',
        damage: '',
        weight: 3,
        properties: 'Special, thrown (range 5/15)'
    },
];

export const RANGEDWEAPONS = [
    {
        id: 0,
        name: 'Crossbow, light',
        damage: '1d8',
        damageType: 'piercing',
        properties: 'Ammunition (range 80/320), loading, two-handed',
        weight: 5
    },
    {
        id: 1,
        name: 'Dart',
        damage: '1d4',
        damageType: 'piercing',
        properties: 'Finesse, thrown (range 20/60)',
        weight: 5
    },
    {
        id: 2,
        name: 'Shortbow',
        damage: '1d6',
        damageType: 'piercing',
        properties: 'Ammunition (range 80/320), two-handed',
        weight: 2
    },
    {
        id: 3,
        name: 'Sling',
        damage: '1d4',
        damageType: 'bludgeoning',
        properties: 'Ammunition (range 30/120)',
        weight: 1
    },
    {
        id: 4,
        name: 'Blowgun',
        damage: '1 piercing',
        weight: 1,
        properties: 'Ammunition (range 25/100), loading'
    },
    {
        id: 5,
        name: 'Crossbow, hand',
        damage: '1d6 piercing',
        weight: 3,
        properties: 'Ammunition (range 30/120), light, loading'
    },
    {
        id: 6,
        name: 'Crossbow, heavy',
        damage: '1d10 piercing',
        weight: 18,
        properties: 'Ammunition (range 100/400), heavy, loading, two-handed'
    },
    {
        id: 7,
        name: 'Longbow',
        damage: '1d8 piercing',
        weight: 2,
        properties: 'Ammunition (range 150/600), heavy, two-handed'
    },
    {
        id: 8,
        name: 'Net',
        damage: '',
        weight: 3,
        properties: 'Special, thrown (range 5/15)'
    },
];

export const LIGHTARMOR = [
    {
        id: 0,
        name: 'Padded',
        ac: 11,
        addDexMod: true,
        stealthDisad: true,
        weight: 8,
    },
    {
        id: 1,
        name: 'Leather',
        ac: 11,
        addDexMod: true,
        stealthDisad: false,
        weight: 10,
    },
    {
        id: 2,
        name: 'Studded leather',
        ac: 12,
        addDexMod: true,
        stealthDisad: false,
        weight: 13,
    }
];

export const MEDIUMARMOR = [
    {
        id: 0,
        name: 'Hide',
        ac: 12,
        addDexMod: true,
        stealthDisad: true,
        weight: 12,
    },
    {
        id: 1,
        name: 'Chain shirt',
        ac: 13,
        addDexMod: true,
        stealthDisad: false,
        weight: 20,
    },
    {
        id: 2,
        name: 'Scale mail',
        ac: 14,
        addDexMod: true,
        stealthDisad: true,
        weight: 45,
    },
    {
        id: 3,
        name: 'Breastplate',
        ac: 14,
        addDexMod: true,
        stealthDisad: false,
        weight: 20,
    },
    {
        id: 4,
        name: 'Half plate',
        ac: 15,
        addDexMod: true,
        stealthDisad: true,
        weight: 40,
    },
];

export const HEAVYARMOR = [
    {
        id: 0,
        name: 'Ring mail',
        ac: 14,
        addDexMod: false,
        stealthDisad: true,
        weight: 40,
    },
    {
        id: 1,
        name: 'Chain mail',
        ac: 16,
        addDexMod: false,
        stealthDisad: true,
        stealthStr: 13,
        weight: 55,
    },
    {
        id: 2,
        name: 'Splint',
        ac: 17,
        addDexMod: false,
        stealthDisad: true,
        stealthStr: 15,
        weight: 60,
    },
    {
        id: 3,
        name: 'Plate',
        ac: 18,
        addDexMod: false,
        stealthDisad: true,
        stealthStr: 15,
        weight: 65,
    },
];