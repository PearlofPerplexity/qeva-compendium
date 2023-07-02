/* Lays out levels for classes 

    Each class has an array of objects which represent each level for that class

    oracles
    caracadre
    avlimeth
    elvish cloaks
    avikin
    ghost blades
    the uncorrupted
    the topplers
    order of the feather
    adventurer
    acolyte
    bard
    crafter
    druid
    fighter
    gemcutter
    scribe

*/

export const DNDLEVELS = {
    // ORACLE CLASS LEVELS
    oracles: [
        {
            // LEVEL 1
            id: 1,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Acrobat',
                    description: 'Acrobat things'
                }
            ],
            trackables: ["test", "other"],
            spells: [
                {
                    id: 0,
                    name: 'LVL 1 Divination',
                    description: 'Keep divining.'
                }
            ]
        },
        {
            // LEVEL 2
            id: 2,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Ability Score Increase',
                    description: 'Add +1 to any ability score'
                }
            ],
            trackables: [],
            spells: [
                {
                    id: 0,
                    name: 'LVL 1 Divination',
                    description: 'Keep divining.'
                }
            ]
        },
        {
            // LEVEL 3
            id: 3,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Ability Score Increase',
                    description: 'Add +1 to any ability score'
                }
            ],
            trackables: [],
            spells: [
                {
                    id: 0,
                    name: 'LVL 1 Divination',
                    description: 'Keep divining.'
                }
            ]
        },
        {
            // LEVEL 4
            id: 4,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Ability Score Increase',
                    description: 'Allocate 2 ability score points (1 pt to 2 ability scores or 2 pts to 1 ability score)'
                }
            ],
            trackables: [],
            spells: [
                {
                    id: 0,
                    name: 'LVL 1 Divination',
                    description: 'Keep divining.'
                }
            ]
        },
        {
            // LEVEL 5
            id: 5,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: 'Ability Score Increase',
                    description: 'Allocate 2 ability score points (1 pt to 2 ability scores or 2 pts to 1 ability score)'
                }
            ],
            trackables: [],
            spells: [
                {
                    id: 0,
                    name: 'LVL 1 Divination',
                    description: 'Keep divining.'
                }
            ]
        },
        {
            // LEVEL 6
            id: 6,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: 'Acrobat',
                    description: 'Acrobat things'
                }
            ],
            trackables: [],
            spells: [
                {
                    id: 0,
                    name: 'LVL 1 Divination',
                    description: 'Keep divining.'
                }
            ]
        },
        {
            // LEVEL 7
            id: 7,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: 'Ability Score Increase',
                    description: 'Add +1 to any ability score'
                }
            ],
            trackables: [],
            spells: [
                {
                    id: 0,
                    name: 'LVL 1 Divination',
                    description: 'Keep divining.'
                }
            ]
        },
        {
            // LEVEL 8
            id: 8,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: 'Ability Score Increase',
                    description: 'Allocate 2 ability score points (1 pt to 2 ability scores or 2 pts to 1 ability score)'
                }
            ],
            trackables: [],
            spells: [
                {
                    id: 0,
                    name: 'LVL 1 Divination',
                    description: 'Keep divining.'
                }
            ]
        },
        {
            // LEVEL 9
            id: 9,
            prof_bonus: '+4',
            features: [
                {
                    id: 0,
                    name: 'Ability Score Increase',
                    description: 'Add +1 to any ability score'
                }
            ],
            trackables: [],
            spells: [
                {
                    id: 0,
                    name: 'LVL 1 Divination',
                    description: 'Keep divining.'
                }
            ]
        },
        {
            // LEVEL 10
            id: 10,
            prof_bonus: '+4',
            features: [
                {
                    id: 0,
                    name: 'Ability Score Increase',
                    description: 'Allocate 2 ability score points (1 pt to 2 ability scores or 2 pts to 1 ability score)'
                }
            ],
            trackables: [],
            spells: [
                {
                    id: 0,
                    name: 'LVL 1 Divination',
                    description: 'Keep divining.'
                }
            ]
        },
    ],
    /* ---------- NEXT CLASS -------------------- CARACADRE ---------- */
    caracadre: [
        {
            // LEVEL 1
            id: 1,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Tracker',
                    description: 'You are proficient in tracking creatures. While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.'
                },
                {
                    id: 1,
                    name: 'Natural Explorer',
                    description: "You ignore difficult terrain & difficult terrain doesn't slow your group's travel. While traveling alone you can move stealthily at a normal pace. When foraging, you find twice as much food as you normally would. You have proficiency in nature skills."
                }
            ],
        },
        {
            // LEVEL 2
            id: 2,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'SELECT A FIGHTING STYLE',
                    description: 'See the Fighting Style chart and select a style.'
                }
            ],
        },
        {
            // LEVEL 3
            id: 3,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: "SELECT A FEATURE",
                    description: "..."
                },
                {
                    id: 1,
                    name: "Colossus Slayer",
                    description: "Your tenacity can wear down the most potent foes. When you hit a creature with a weapon attack, the creature takes an extra 1d8 damage if it's below its hit point maximum. You can deal this extra damage only once per turn."
                },
                {
                    id: 2,
                    name: "Giant Killer",
                    description: "When a Large or larger creature within 5 feet of you hits or misses you with an attack, you can use your reaction to attack that creature immediately after its attack, provided that you can see the creature."
                },
                {
                    id: 3,
                    name: "Horde Breaker",
                    description: "Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature that is within 5 feet of the original target and within range of your weapon."
                },
            ],
        },
        {
            // LEVEL 4
            id: 4,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Ability Score Increase',
                    description: 'Allocate 2 ability score points (1 pt to 2 ability scores or 2 pts to 1 ability score)'
                },
                {
                    id: 1,
                    name: 'Caracara Companion',
                    description: 'You have the ability to interact with the Crested Caracara, the fowl-friend of the caracadre. You understand their calls and can have simple interactions with these creatures. You can even use them to carry and receive messages between yourself and other caracadre'
                }
            ],
        },
        {
            // LEVEL 5
            id: 5,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: 'Extra Attack',
                    description: 'You can attack twice, instead of once, whenever you take the Attack action on your turn.'
                },
                {
                    id: 1,
                    name: 'Coordinated Attack',
                    description: 'When you use the Attack action on your turn, if a caracara can see you, it can use its reaction to make a melee attack.'
                },
            ],
        },
        {
            // LEVEL 6
            id: 6,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: "Bird's Defense",
                    description: 'While the caracara can see you, it has advantage on all saving throws.'
                }
            ],
        },
        {
            // LEVEL 7
            id: 7,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: 'SELECT A DEFENSE TACTIC',
                    description: '...'
                },
                {
                    id: 1,
                    name: 'Escape the Horde',
                    description: 'Opportunity attacks against you are made with disadvantage.'
                },
                {
                    id: 1,
                    name: 'Multi-Attack Defense',
                    description: 'When a creature hits you with an attack, you gain a +4 bonus to AC against all subsequent attacks made by that creature for the rest of the turn'
                },
                {
                    id: 2,
                    name: 'Steel Will',
                    description: 'You have advantage on saving throws against being frightened.'
                },
            ],
        },
        {
            // LEVEL 8
            id: 8,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: 'Ability Score Increase',
                    description: 'Allocate 2 ability score points (1 pt to 2 ability scores or 2 pts to 1 ability score)'
                },
                {
                    id: 1,
                    name: 'Fleet of Foot',
                    description: 'You can use the Dash action as a bonus action on your turn.'
                }
            ],
        },
        {
            // LEVEL 9
            id: 9,
            prof_bonus: '+4',
            features: [
                {
                    id: 0,
                    name: '-',
                    description: 'No features earned at this level.'
                }
            ],
        },
        {
            // LEVEL 10
            id: 10,
            prof_bonus: '+4',
            features: [
                {
                    id: 0,
                    name: 'Hide in Plain Sight',
                    description: 'When you attempt to hide on your turn, you can opt to not move on that turn. If you avoid moving, creatures that attempt to detect you take a -10 penalty to their Wisdom (Perception) checks until the start of your next turn. You lose this benefit if you move or fall prone, either voluntarily or because of some external effect. You are still automatically detected if any effect or action causes you to no longer be hidden. If you are still hidden on your next turn, you can continue to remain motionless and gain this benefit until you are detected.'
                }
            ],
        },
    ],
    /* ---------- NEXT CLASS -------------------- AVIKIN ---------- */
    avikin: [
        {
            // LEVEL 1
            id: 1,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Unarmoredd Defense',
                    description: 'While you are wearing light or no armor and not wielding a shield, your AC equal 10 + your Dexterity modifier + your Wisdom modifier.'
                },
                {
                    id: 1,
                    name: 'Ranged Arts',
                    description: "You can use Dexterity instead of Strength for the attack and damage rolIs of your attacks. Also, When you use the attack action with a bow on your turn, you can make the same attack as a bonus action."
                }
            ],
            trackables: ["Ki: 0", "UM: +0"],
        },
        {
            // LEVEL 2
            id: 2,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Ki',
                    description: 'Your training allows you to harness a divine energy (ki). Your access to this energy is represented by a number of ki points. Your level determines the number of points you have, as shown in the ki points column of the table, You can spend these points to fuel various ki features. You start knowing two such features: Patient Defense, and Step of the Wind, When you spend a ki poinl. it is unavailable until you finish a short or long rest.'
                },
                {
                    id: 1,
                    name: 'Patience Defense',
                    description: 'You can spend 1 ki point to take the Dodge action as a bonus action on your turn.'
                },
                {
                    id: 2,
                    name: 'Step of the Wind',
                    description: 'You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn.'
                },
                {
                    id: 3,
                    name: 'Unarmored Movement (UM)',
                    description: 'Your speed increases by 10 ft while you are light or no armor.'
                }
            ],
            trackables: ["Ki: 2", "UM: +10"],
        },
        {
            // LEVEL 3
            id: 3,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: "Pass without Trace",
                    description: "For 1 hour, you have a +10 bonus to Dexterity (Stealth) checks and can't be tracked except by magical means. A creature that receives this bonus leaves behind no tracks or other traces of its passage."
                },
                {
                    id: 1,
                    name: "Deflect Missiles",
                    description: "You can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier +your leveI. If you reduce the damage to O,you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free, If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack."
                }
            ],
            trackables: ["Ki: 3", "UM: +10"],
        },
        {
            // LEVEL 4
            id: 4,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Ability Score Increase',
                    description: 'Allocate 2 ability score points (1 pt to 2 ability scores or 2 pts to 1 ability score)'
                },
                {
                    id: 1,
                    name: 'Slow Fall',
                    description: 'You can use your reaction when you fall to reduce any falling damage you take by an amount equal to 5x your level.'
                }
            ],
            trackables: ["Ki: 4", "UM: +10"],
        },
        {
            // LEVEL 5
            id: 5,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: 'Extra Attack',
                    description: 'You can attack twice, instead of once, whenever you take the Attack action on your turn.'
                },
                {
                    id: 1,
                    name: 'Stunning Strike',
                    description: 'When you hit another creature with a melee weapon attack. you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn.'
                },
            ],
            trackables: ["Ki: 5", "UM: +10"],
        },
        {
            // LEVEL 6
            id: 6,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: "Wholeness of Body",
                    description: 'You gain the ability to heal yourself. As an action, you can regain hit points equal to 3x your level. You must finish a long rest before you can use this feature again.'
                }
            ],
            trackables: ["Ki: 6", "UM: +15"],
        },
        {
            // LEVEL 7
            id: 7,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: 'Evasion',
                    description: 'When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.'
                },
                {
                    id: 1,
                    name: 'Stillness of Mind',
                    description: 'You can use your action to end one effect on yourself that is causing you to be charmed or frightened.'
                }
            ],
            trackables: ["Ki: 7", "UM: +15"],
        },
        {
            // LEVEL 8
            id: 8,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: 'Ability Score Increase',
                    description: 'Allocate 2 ability score points (1 pt to 2 ability scores or 2 pts to 1 ability score)'
                }
            ],
            trackables: ["Ki: 8", "UM: +15"],
        },
        {
            // LEVEL 9
            id: 9,
            prof_bonus: '+4',
            features: [
                {
                    id: 0,
                    name: 'Unarmored Movement Improvement',
                    description: 'You gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move.'
                }
            ],
            trackables: ["Ki: 9", "UM: +15"],
        },
        {
            // LEVEL 10
            id: 10,
            prof_bonus: '+4',
            features: [
                {
                    id: 0,
                    name: 'Purity of Body',
                    description: 'You are immune to disease and poison.'
                }
            ],
            trackables: ["Ki: 10", "UM: +20"],
        },
    ],
    /* ---------- NEXT CLASS -------------------- GHOST BLADES ---------- */
    ghostBlades: [
        {
            // LEVEL 1
            id: 1,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Expertise',
                    description: 'Choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.'
                },
                {
                    id: 1,
                    name: 'Sneak Attack',
                    description: "you know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon. You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll. The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the table."
                },
                {
                    id: 2,
                    name: "Night Avi's Cant",
                    description: "During your training you learned Night Avi's cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows the Night Avi's cant can understand such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly. In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a guild."
                },
            ],
            trackables: ["Sneak Attack: 1d6"],
        },
        {
            // LEVEL 2
            id: 2,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Cunning Action',
                    description: 'You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage or Hide action (NOT Dodge).'
                }
            ],
            trackables: ["Sneak Attack: 1d6"],
        },
        {
            // LEVEL 3
            id: 3,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: "Second-Story Work",
                    description: "You gain the ability to climb faster than normal; climbing no longer costs you extra movement. In addition, when you make a running jump, the distance you cover increases by a number of feet equal to your Dexterity modifier."
                },
                {
                    id: 1,
                    name: "Assassinate",
                    description: "You are at your deadliest when you get the drop on your enemies. You have advantage on attack rolls against any creature that hasn't taken a turn in the combat yet. In addition, any hit you score against a creature that is surprised is a critical hit."
                }
            ],
            trackables: ["Sneak Attack: 2d6"],
        },
        {
            // LEVEL 4
            id: 4,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Ability Score Increase',
                    description: 'Allocate 2 ability score points (1 pt to 2 ability scores or 2 pts to 1 ability score)'
                }
            ],
            trackables: ["Sneak Attack: 2d6"],
        },
        {
            // LEVEL 5
            id: 5,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: 'Uncanny Dodge',
                    description: "When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you."
                }
            ],
            trackables: ["Sneak Attack: 3d6"],
        },
        {
            // LEVEL 6
            id: 6,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: "Expertise",
                    description: "Choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies."
                }
            ],
            trackables: ["Sneak Attack: 3d6"],
        },
        {
            // LEVEL 7
            id: 7,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: "Evasion",
                    description: "You can nimbly dodge out of the way of certain area effects, such as a red dragon's fiery breath or an ice storm spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
                }
            ],
            trackables: ["Sneak Attack: 4d6"],
        },
        {
            // LEVEL 8
            id: 8,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: 'Ability Score Increase',
                    description: 'Allocate 2 ability score points (1 pt to 2 ability scores or 2 pts to 1 ability score)'
                }
            ],
            trackables: ["Sneak Attack: 4d6"],
        },
        {
            // LEVEL 9
            id: 9,
            prof_bonus: '+4',
            features: [
                {
                    id: 0,
                    name: 'Supreme Sneak',
                    description: 'Starting at 9th level, you have advantage on a Dexterity (Stealth) check if you move no more than half your speed on the same turn.'
                }
            ],
            trackables: ["Sneak Attack: 5d6"],
        },
        {
            // LEVEL 10
            id: 10,
            prof_bonus: '+4',
            features: [
                {
                    id: 0,
                    name: 'Ability Score Increase',
                    description: 'Allocate 2 ability score points (1 pt to 2 ability scores or 2 pts to 1 ability score)'
                }
            ],
            trackables: ["Sneak Attack: 5d6"],
        },
    ],
    /* ---------- NEXT CLASS -------------------- UNCORRUPTED ---------- */
    uncorrupted: [
        {
            // LEVEL 1
            id: 1,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Rage',
                    description: "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, you gain the following benefits: (1) You have advantage on Strength checks and Strength saving throws. (2) When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the table. (3) You have resistance to bludgeoning, piercing, and slashing damage. (4) Your rage lasts for 1 minute. lt ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action. Once you have raged the number of times shown for your barbarian leveI in the Rages column of the table, you must finish a long rest before you can rage again."
                },
                {
                    id: 1,
                    name: 'Spartan Wall',
                    description: "When carrying a shield and within 5 feet of another soldier with a shield (trained in uncorrupted shield strategy) all attack rolls are taken at disadvantage. It takes 7 days to train another soldier in uncorrupted shield strategy."
                }
            ],
            trackables: ["Rage: 2", "Rage Damage: +2"],
        },
        {
            // LEVEL 2
            id: 2,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Reckless Attack',
                    description: 'You can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.'
                },
                {
                    id: 1,
                    name: 'Danger Sense',
                    description: "You gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps. To gain this benefit, you can't be blinded, deafened, or incapacitated."
                }
            ],
            trackables: ["Rage: 2", "Rage Damage: +2"],
        },
        {
            // LEVEL 3
            id: 3,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: "Set Spear",
                    description: "If carrying a pole weapon, you can set your weapon against a charge as a reaction, and roll an attack against the charging opponent."
                },
                {
                    id: 1,
                    name: "Vault",
                    description: "Spears are more than just weapons to these legionnaires. With vault, you gain a +10 bonus to Acrobatics skill checks while wielding a spear."
                },
                {
                    id: 2,
                    name: "Trip",
                    description: "Pole weapons are considered trip weapons."
                }
            ],
            trackables: ["Rage: 3", "Rage Damage: +2"],
        },
        {
            // LEVEL 4
            id: 4,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Ability Score Increase',
                    description: 'Allocate 2 ability score points (1 pt to 2 ability scores or 2 pts to 1 ability score)'
                }
            ],
            trackables: ["Rage: 3", "Rage Damage: +2"],
        },
        {
            // LEVEL 5
            id: 5,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: 'Extra Attack',
                    description: 'You can attack twice, instead of once, whenever you take the Attack action on your turn.'
                },
                {
                    id: 1,
                    name: 'Shield Bash',
                    description: 'You can use your shield to push a medium-sized creature. On a successful bash, the creature is pushed one square back. On a critical, the creature is knocked prone.'
                }
            ],
            trackables: ["Rage: 3", "Rage Damage: +2"],
        },
        {
            // LEVEL 6
            id: 6,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: "Ranged Marksman",
                    description: "You deal an additional 1d6 damage when you successfully hit with a pole weapon ranged attack. You also may make trip attacks with a spear at a range of 30 feet."
                }
            ],
            trackables: ["Rage: 4", "Rage Damage: +2"],
        },
        {
            // LEVEL 7
            id: 7,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: "Feral Instinct",
                    description: "Your instincts are so honed that you have advantage on initiative rolls. Additionally, if you are surprised at the beginning of combat and aren't incapacitated. you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn."
                }
            ],
            trackables: ["Rage: 4", "Rage Damage: +2"],
        },
        {
            // LEVEL 8
            id: 8,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: 'Ability Score Increase',
                    description: 'Allocate 2 ability score points (1 pt to 2 ability scores or 2 pts to 1 ability score)'
                }
            ],
            trackables: ["Rage: 4", "Rage Damage: +2"],
        },
        {
            // LEVEL 9
            id: 9,
            prof_bonus: '+4',
            features: [
                {
                    id: 0,
                    name: 'Brutal Critical',
                    description: 'You can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack.'
                }
            ],
            trackables: ["Rage: 4", "Rage Damage: +3"],
        },
        {
            // LEVEL 10
            id: 10,
            prof_bonus: '+4',
            features: [
                {
                    id: 0,
                    name: 'Charge',
                    description: 'You deal double damage when you charge. If you successfully scores a critical hit on a charge, a pikeman deals triple normal damage (with a shortspear) or quadruple the normal damage (with a spear or long spear).'
                }
            ],
            trackables: ["Rage: 4", "Rage Damage: +3"],
        },
    ],
    /* ---------- NEXT CLASS -------------------- TOPPLERS ---------- */
    topplers: [
        {
            // LEVEL 1
            id: 1,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Connections',
                    description: "Topplers have many friends in cities and trees. Show the toppler emblem at any tavern and they will provide tips and accommodation. In nature, greet a tree and when danger is near, they will shake their branches. If you fall in battle, a branch will lift you away from the battlefield, into safety."
                },
                {
                    id: 1,
                    name: 'Tough',
                    description: "Whenever you gain a level, your hit point maximum increases by an additional 2 hit points."
                }
            ],
        },
        {
            // LEVEL 2
            id: 2,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'SELECT AN EXPERT WEAPON',
                    description: '...'
                },
                {
                    id: 1,
                    name: 'Dagger',
                    description: "When wielding a light weapon, you gain a +2 bonus to initiative. Your throwing range for daggers increases to 60/120. You gain advantage on any Dexterity (Sleight of Hand) checks to conceal a dagger on your person. When you use the attack action and attack with a dagger, you can use a bonus action to make two additional attacks with that weapon."
                },
                {
                    id: 2,
                    name: 'Crossbow',
                    description: "No loading, no within 5 ft. disadvantage, bonus action attack with hand crossbow."
                },
            ],
        },
        {
            // LEVEL 3
            id: 3,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: "Halfling Nimbleness",
                    description: "You can move through the space of any creature that is of a size larger than yours. If you are a halfling, you can move through any enemy space, regardless of the size of the creature."
                },
                {
                    id: 1,
                    name: "GRENADIER",
                    description: "The topplers have mastered methods to take clay and explosive material to create a jar that explodes upon impact like a grenade. You can throw grenades up to 60 feet away. Select a type of grenade below to craft and wield (other creatures are not trained with these weapons): (1) Concussion, (2) Smoke, (3) Fragmentation, (4) Illumination, (5) Incendiary"
                }
            ],
        },
        {
            // LEVEL 4
            id: 4,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Ability Score Increase',
                    description: 'Allocate 2 ability score points (1 pt to 2 ability scores or 2 pts to 1 ability score)'
                }
            ],
        },
        {
            // LEVEL 5
            id: 5,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: 'Grenadier Upgrade',
                    description: 'Selection an Option: (1) New Grenade: Select another grenade to craft and wield., (2) Improve Impact: Add 2d6 to the damage roll of a currently mastered grenade., (3) Improve Radius: Add 10 feet to the radius of a currently mastered grenade.'
                }
            ],
        },
        {
            // LEVEL 6
            id: 6,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: "Expert Improvement",
                    description: "Your expert weapon deals an additional 1d6 damage with a successful hit."
                }
            ],
        },
        {
            // LEVEL 7
            id: 7,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: 'Grenadier Upgrade',
                    description: 'Selection an Option: (1) New Grenade: Select another grenade to craft and wield., (2) Improve Impact: Add 2d6 to the damage roll of a currently mastered grenade., (3) Improve Radius: Add 10 feet to the radius of a currently mastered grenade.'
                }
            ],
        },
        {
            // LEVEL 8
            id: 8,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: 'Ability Score Increase',
                    description: 'Allocate 2 ability score points (1 pt to 2 ability scores or 2 pts to 1 ability score)'
                }
            ],
        },
        {
            // LEVEL 9
            id: 9,
            prof_bonus: '+4',
            features: [
                {
                    id: 0,
                    name: 'Grenadier Upgrade',
                    description: 'Selection an Option: (1) New Grenade: Select another grenade to craft and wield., (2) Improve Impact: Add 2d6 to the damage roll of a currently mastered grenade., (3) Improve Radius: Add 10 feet to the radius of a currently mastered grenade.'
                }
            ],
        },
        {
            // LEVEL 10
            id: 10,
            prof_bonus: '+4',
            features: [
                {
                    id: 0,
                    name: 'Nimble Dodge',
                    description: 'You can use the dodge action as a reaction. The dodge action only lasts for a single enemy and NOT the whole turn.'
                }
            ],
        },
    ],

    // CARACADRE CLASS LEVELS
    // AVLIMETH CLASS LEVELS
    // ELVISH CLOAKS CLASS LEVELS
    // AVIKIN CLASS LEVELS
    // GHOST BLADES CLASS LEVELS
    // THE UNCORRUPTED CLASS LEVELS
    // THE TOPPLERS CLASS LEVELS
    // ORDER OF THE FEATHER CLASS LEVELS
    // ADVENTURER CLASS LEVELS
    // ACOLYTE CLASS LEVELS
    // BARD CLASS LEVELS
    // CRAFTER CLASS LEVELS
    // DRUID CLASS LEVELS
    // FIGHTER CLASS LEVELS
    // GEMCUTTER CLASS LEVELS
    // SCRIBE CLASS LEVELS
}