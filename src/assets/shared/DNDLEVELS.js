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
                    name: 'LVL 1 Divination',
                    description: 'Size: 5ft cube, Range: 15ft'
                },
                {
                    id: 1, 
                    name: "Endless Blesing",
                    description: "You live in a constant state of blessing, guarded by ethereals.You can add proficiency to any roll."
                },
            ],
        },
        {
            // LEVEL 2
            id: 2,
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
            // LEVEL 3
            id: 3,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'LVL 2 Divination',
                    description: 'Size: 10ft cube, Range: 30ft'
                },
                {
                    id: 1, 
                    name: "Share the Wealth",
                    description: "Any caracadre that you give an unburnt olive leaf, lives in a constant state of blessing and is guarded by ethereals for as long as they abide in DIA. They can add proficiency to any roll."
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
                    name: 'LVL 3 Divination',
                    description: 'Size: 15ft cube, Range: 60ft'
                },
                {
                    id: 1, 
                    name: "Celestial Tongue",
                    description: "You can comprehend the speech of ethereals"
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
                    name: 'Ability Score Increase',
                    description: 'Allocate 2 ability score points (1 pt to 2 ability scores or 2 pts to 1 ability score)'
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
                    name: 'LVL 4 Divination',
                    description: 'Size: 20ft cube, Range: 120ft'
                },
                {
                    id: 1, 
                    name: "Communion",
                    description: "Above cloudline, you can receive direction from DIA"
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
                    name: '-',
                    description: 'No features earned at this level.'
                }
            ],
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
                    description: "Options presented in-line"
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
                    description: 'Options presented in-line'
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
                    name: 'Unarmored Defense',
                    description: 'While you are wearing light or no armor and not wielding a shield, your AC equal 10 + your Dexterity modifier + your Wisdom modifier.'
                },
                {
                    id: 1,
                    name: 'Ranged Arts',
                    description: "You can use Dexterity instead of Strength for the attack and damage rolIs of your ranged attacks. Also, When you use the attack action with a bow on your turn, you can make the same attack as a bonus action."
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
                    description: 'Options presented in-line'
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
    /* ---------- NEXT CLASS -------------------- ADVENTURER ---------- */
    adventurer: [
        {
            // LEVEL 1
            id: 1,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Select Feats (2)',
                    description: "Though not a standard route, you've forged a new path that has led you to cross with other trades. Learn the feat of another class. NOTE: the feat must occur below or equal to your current level (Ex. You cannot master “Nimble dodge”, a Level 10 Toppler feat at level 3) and fulfill all necessary prerequisites (Ex. You cannot take the gemcutter's “Master of Divine Stones” feat if you have not already mastered moral and power stones)."
                },
                {
                    id: 1,
                    name: 'Weapon Proficiency (2)',
                    description: "Select 1 simple weapon, 1 martial weapon and 1 ranged weapon that you will have proficiency with."
                },
                {
                    id: 1,
                    name: 'Skill Proficiency (2)',
                    description: "Select 2 skill to be proficient in."
                },
            ],
        },
        {
            // LEVEL 2
            id: 2,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: '-',
                    description: 'No features earned at this level.'
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
                    name: "Select a feat",
                    description: "Learn the feat of another class. NOTE: the feat must occur below or equal to your current level (Ex. You cannot master a Level 10 feat at level 3) and fulfill all necessary prerequisites (Ex. You cannot select a feat without first selecting its prerequisites).You can move through the space of any creature that is of a size larger than yours. If you are a halfling, you can move through any enemy space, regardless of the size of the creature."
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
                    name: "Select feats (2)",
                    description: "Learn the feat of another class. NOTE: the feat must occur below or equal to your current level (Ex. You cannot master a Level 10 feat at level 3) and fulfill all necessary prerequisites (Ex. You cannot select a feat without first selecting its prerequisites).You can move through the space of any creature that is of a size larger than yours. If you are a halfling, you can move through any enemy space, regardless of the size of the creature."
                },
                {
                    id: 1,
                    name: 'Extra Attack',
                    description: 'You can attack twice, instead of once, whenever you take the Attack action on your turn.'
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
                    name: '-',
                    description: 'No features earned at this level.'
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
                    name: "Select a feat",
                    description: "Learn the feat of another class. NOTE: the feat must occur below or equal to your current level (Ex. You cannot master a Level 10 feat at level 3) and fulfill all necessary prerequisites (Ex. You cannot select a feat without first selecting its prerequisites).You can move through the space of any creature that is of a size larger than yours. If you are a halfling, you can move through any enemy space, regardless of the size of the creature."
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
                    name: "Select a feat",
                    description: "Learn the feat of another class. NOTE: the feat must occur below or equal to your current level (Ex. You cannot master a Level 10 feat at level 3) and fulfill all necessary prerequisites (Ex. You cannot select a feat without first selecting its prerequisites).You can move through the space of any creature that is of a size larger than yours. If you are a halfling, you can move through any enemy space, regardless of the size of the creature."
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
                    name: 'Ability Score Increase',
                    description: 'Allocate 2 ability score points (1 pt to 2 ability scores or 2 pts to 1 ability score)'
                }
            ],
        },
    ],
    /* ---------- NEXT CLASS -------------------- CRAFTER ---------- */
    crafter: [
        {
            // LEVEL 1
            id: 1,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Tools of the Trade',
                    description: "You gain proficiency with Alchemist supplies and one lot of your choice (Herbalism kit, healer's kit or poisoner's kit)"
                },
                {
                    id: 1,
                    name: 'Gatherer',
                    description: "You have the ability to gather your own natural ingredients. You can use your expertise to find 1 specific ingredient / day OR 5 random ingredients (see chart). You can use 1 of these random resources to provide yourself food for the day."
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
                    name: 'Primary Domain',
                    description: 'Select a domain from the crafting table (Healing, Amplification, Meddling or Damage). You are an expert in this domain. Whenever you select this domain for future expertise, you gain 3 instead of 2 concoctions. You also have a keen sense for these ingredients. You can recognize when another creature is using a concoction you have mastered.'
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
                    name: 'SELECT AN UPGRADE',
                    description: 'New Concoction OR Expertise'
                },
                {
                    id: 1,
                    name: 'New Concoction',
                    description: 'Select a domain and 2 concoctions within that domain. You can now craft and wield these concoctions. Concoctions risk ill effects if used in combination (unless compatibility is specified).'
                },
                {
                    id: 2,
                    name: 'Expertise',
                    description: 'Select 1 already mastered concoction to improve. Improvements are made in the following way: (1) If DC, Add +2 DC, (2) If dice roll, add 1 die doll (3) If skill improvement, add +2 (4) If single instance, +1 instance (5) Else see DM.'
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
                    name: 'Adept Physician',
                    description: 'You have advantage on medicine checks.'
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
                    name: 'SELECT AN UPGRADE',
                    description: 'New Concoction OR Expertise'
                },
                {
                    id: 1,
                    name: 'New Concoction',
                    description: 'Select a domain and 2 concoctions within that domain. You can now craft and wield these concoctions. Concoctions risk ill effects if used in combination (unless compatibility is specified).'
                },
                {
                    id: 2,
                    name: 'Expertise',
                    description: 'Select 1 already mastered concoction to improve. Improvements are made in the following way: (1) If DC, Add +2 DC, (2) If dice roll, add 1 die doll (3) If skill improvement, add +2 (4) If single instance, +1 instance (5) Else see DM.'
                },
            ],
        },
        {
            // LEVEL 7
            id: 7,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: 'Gathering Improvement',
                    description: 'You can now find 2 rare resources, or 10 random ingredients per day.'
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
                    name: 'SELECT AN UPGRADE',
                    description: 'New Concoction OR Expertise'
                },
                {
                    id: 1,
                    name: 'New Concoction',
                    description: 'Select a domain and 2 concoctions within that domain. You can now craft and wield these concoctions. Concoctions risk ill effects if used in combination (unless compatibility is specified).'
                },
                {
                    id: 2,
                    name: 'Expertise',
                    description: 'Select 1 already mastered concoction to improve. Improvements are made in the following way: (1) If DC, Add +2 DC, (2) If dice roll, add 1 die doll (3) If skill improvement, add +2 (4) If single instance, +1 instance (5) Else see DM.'
                },
            ],
        },
        {
            // LEVEL 10
            id: 10,
            prof_bonus: '+4',
            features: [
                {
                    id: 0,
                    name: 'Gardener',
                    description: 'You can grow your own resources. Each resource takes 7 days to mature. You can manage a maximum of 10 resources in your garden. You must first obtain a seed of a resource before growing it.'
                }
            ],
        },
    ],
    /* ---------- NEXT CLASS -------------------- GEMCUTTER ---------- */
    gemcutter: [
        {
            // LEVEL 1
            id: 1,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Tools of the Trade',
                    description: "You are proficient with the Jeweler's kit. The kit includes a device known as a “rock trap”, which contains and stabilizes the quality of a stone even if the carrier goes against its quality. You know this device so well, you are able to build it when needed."
                },
                {
                    id: 1,
                    name: 'Licensed Lapidary',
                    description: "You are trained to acquire, cut and appraise stones and can pursue different levels of quality and types of cuts. Every time you attempt a new cut, the carat drops one level."
                },
                {
                    id: 2,
                    name: 'Expertise',
                    description: "Select three cuts from the Gemcutter's chart to master."
                },
            ],
        },
        {
            // LEVEL 2
            id: 2,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Mastery over Power Stones',
                    description: 'Your roll with advantage when crafting power stones.'
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
                    name: 'Expertise Improvement',
                    description: 'Select 1 option: (1) Select or invent 1 additional cut to craft (2) -1 DC to a currently mastered cut. (3) -5 days to cut a currently mastered cut.'
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
                    name: 'Expertise Improvement',
                    description: 'Select 1 option: (1) Select or invent 1 additional cut to craft (2) -1 DC to a currently mastered cut. (3) -5 days to cut a currently mastered cut.'
                },
                {
                    id: 1,
                    name: 'Stone Explorer',
                    description: 'You have become familiar with stones and their natural locations. Succeed on a 16 INT DC to mine for local stones.'
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
                    name: 'Ability Score Increase',
                    description: 'Allocate 2 ability score points (1 pt to 2 ability scores or 2 pts to 1 ability score)'
                },
                {
                    id: 1,
                    name: 'Mastery over Moral Stones',
                    description: 'Your roll with advantage when crafting moral stones.'
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
                    name: 'Expertise Improvement',
                    description: 'Select 1 option: (1) Select or invent 1 additional cut to craft (2) -1 DC to a currently mastered cut. (3) -5 days to cut a currently mastered cut.'
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
                },
                {
                    id: 1,
                    name: 'Restorer',
                    description: "You have fine tuned your rock trap so that it not only maintains a gem's qualities, but restores them. You can restore a gemstone's color or repair cracking from an unbound stone"
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
                    name: 'Expertise Improvement',
                    description: 'Select 1 option: (1) Select or invent 1 additional cut to craft (2) -1 DC to a currently mastered cut. (3) -5 days to cut a currently mastered cut.'
                },
                {
                    id: 1,
                    name: 'Precision',
                    description: 'You have become so skilled in your art that you can cut a gem without the carat being affected. Carat will only reduce on re-cuts (Gems that have already been cut) and critical DC failures.'
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
                    name: 'Mastery over Divine Stones',
                    description: 'Your roll with advantage when crafting divine stones.'
                }
            ],
        },
    ],
    /* ---------- NEXT CLASS -------------------- SCRIBE ---------- */
    scribe: [
        {
            // LEVEL 1
            id: 1,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Studious',
                    description: "You know how to absorb information at an accelerated rate. You can gain skill and tool proficiencies and learn languages once you have read three books related to the skill, tool, or language in question and after you have written down personal notes on each of these texts."
                },
                {
                    id: 1,
                    name: 'Speed Reader',
                    description: "You can whizz through your reading at lightning pace. Over the course of a long rest, you can read an entire book and take comprehensive notes on what you have read."
                },
                {
                    id: 2,
                    name: 'Weak',
                    description: "Your time spent behind a book cover has left you physically infirm in comparison to your fellow adventurers. Whenever you make a Strength or Constitution saving throw, you roll at disadvantage."
                },
            ]
        },
        {
            // LEVEL 2
            id: 2,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Lore',
                    description: "You can draw upon your vast knowledge of the world's lore. Your access to this ability is represented by a number of lore points. Your scribe level determines the number of lore points you have. Your scribe level determines the number of lore points you have, as shown in the Lore Points column of the Scribe table. You spend these points in order to use certain features of being a scribe. You start knowing 3 such features: Appraisal, Examination, and Spell Anticipation. Lore points replenish at the end of a long rest."
                },
                {
                    id: 1,
                    name: 'Appraisal',
                    description: "If you have read and made notes on 3 books related to magical items, you gain the ability to appraise magic items or magic imbued objects. As an action you can spend a lore point to learn the history and properties of the object and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it."
                },
                {
                    id: 2,
                    name: 'Examination',
                    description: "If you have read and made notes on 3 books related to puzzles and logic, you can spend a lore point to gain a clue to any puzzling situation in which you find yourself as an action. If this is not applicable, you can spend the lore point to automatically succeed on an Investigation check."
                },
                {
                    id: 3,
                    name: 'Spell Anticipation',
                    description: "If you have read and taken notes on three books related to magical spells, you gain an uncanny ability to foresee incoming magical damage. Whenever a spell forces you or any creature within 20ft of your position to make a saving throw, as a reaction you can spend 1 lore point to lower the DC by an amount equal to your scribe level."
                },
            ]
        },
        {
            // LEVEL 3
            id: 3,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Weak Points',
                    description: 'Having studied the type of creature within your line of sight and thereby learned of its flaws, as a bonus action, you can spend 3 lore points to learn the Armor Class and any resistances, immunities, and weaknesses of the creature.'
                },
                {
                    id: 1,
                    name: 'Foresight',
                    description: 'Your studies allow you to predict the maneuvers of the creatures when in the field. As a bonus action, you can spend 2 lore points to learn any actions or bonus actions that a single creature within your line of sight will do within the next 6 seconds (next round).'
                },
                {
                    id: 2,
                    name: 'Situational Report',
                    description: 'You can notice how much vigor a creature has left in it. You can spend 1 lore point as a bonus action to learn the remaining HP of a single creature within your line of sight.'
                },
            ]
        },
        {
            // LEVEL 4
            id: 4,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Book Throwing',
                    description: 'You gain a seemingly endless supply of miscellaneous books that can be thrown as an attack in a pinch. You can spend a lore point to throw a single book weighing 1lb. You have proficiency when throwing these books and each one counts as an improvised weapon, dealing 1d4 bludgeoning damage + proficiency bonus. They can be thrown at a range of 20/60.'
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
                },
                {
                    id: 1,
                    name: 'Invigorating History',
                    description: 'You can rouse your allies with your words, reminding them of their heroic deeds or of any other moments that the party has shared together. By spending an action and your remaining lore points, you can invigorate any allies within 20ft of your position, giving them an amount of temporary hit points equal to 1d6 + scribe level.'
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
                    name: 'Weak Points Improvement',
                    description: 'Your use of the Weak Points feature allows you to also detect the highest and lowest statistic of the creature you have targeted.'
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
                    name: 'Plead',
                    description: 'As long as you can speak, once per long rest you can use a reaction to halve any incoming melee damage to you or a single ally within 20ft of your position.'
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
            ]
        },
        {
            // LEVEL 9
            id: 9,
            prof_bonus: '+4',
            features: [
                {
                    id: 0,
                    name: 'Advanced Note-Taking',
                    description: "Your scribal abilities become second nature, allowing you to constantly note down features of any environment that you traverse. From now on, as long as you possess writing tools and parchment, you can never get lost when in enclosed environments such as dungeons or caves. You are always aware of the direction of any paths that you have traveled on and you can always find the quickest exit using these paths."
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
                    name: 'Foresight Improvement',
                    description: 'The Foresight feature now also grants you knowledge of any movement the creature will take within the next 6 seconds.'
                }
            ]
        },
    ],
    /* ---------- NEXT CLASS -------------------- FIGHTER ---------- */
    fighter: [
        {
            // LEVEL 1
            id: 1,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'SELECT A FIGHTING STYLE',
                    description: 'See the Fighting Style chart and select a style.'
                },
                {
                    id: 1,
                    name: 'Second Wind',
                    description: 'You have a limited well of stamina that you can draw on to protect Yourself from harm. On your turn, you can use a bonus action to regain hit points equal to ld10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.'
                },
            ],
            trackables: ["Superiority Dice: 0"],
        },
        {
            // LEVEL 2
            id: 2,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Action Surge',
                    description: "Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action. Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn."
                }
            ],
            trackables: ["Superiority Dice: 0"],
        },
        {
            // LEVEL 3
            id: 3,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Martial Archetype',
                    description: 'At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques. Choose Champion or Battle Master. The archetype you choose grants you features at 3rd, 7th & 10th level.'
                },
                {
                    id: 1,
                    name: 'CHAMPION: Improved Critical',
                    description: 'Your weapon attacks score a critical hit on a roll of 19 or 20.'
                },
                {
                    id: 2,
                    name: 'BATTLE MASTER: Student of War',
                    description: "you gain proficiency with one type of artisan's tools of your choice."
                },
                {
                    id: 3,
                    name: 'BATTLE MASTER: 3 Maneuvers',
                    description: "You learn three maneuvers of your choice from the fighting manuevers chart found in the 'Fighting Styles' tool. Manuevers are used by expending superiority dice."
                },
                {
                    id: 4,
                    name: 'BATTLE MASTER: 4 Superiority Dice',
                    description: "You have four superiority dice, which are d8s. A superiority die is expended when you use it. You regain all of your expended superiority dice when you finish a short or long rest."
                }
            ],
            trackables: ["Superiority Dice: 4"],
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
            trackables: ["Superiority Dice: 4"],
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
                }
            ],
            trackables: ["Superiority Dice: 4"],
        },
        {
            // LEVEL 6
            id: 6,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: 'Ability Score Increase',
                    description: 'Allocate 2 ability score points (1 pt to 2 ability scores or 2 pts to 1 ability score)'
                }
            ],
            trackables: ["Superiority Dice: 4"],
        },
        {
            // LEVEL 7
            id: 7,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: 'CHAMPION: Remarkable Athlete',
                    description: "Starting at 7th level, you can add half yotlr proficiency bonus (round up) to any Strength, Dexterity, or Constitutioo check you make that doesn't already use your proficiency bonus. In addition, when you makc a running longjump, the distance you can cover increases by a number of feet equal to yotlr Strength modifier."
                },
                {
                    id: 1,
                    name: 'BATTLE MASTER: Know Your Enemy',
                    description: "If you spend at least 1 minute observing or interacting with another creature outside combat, you can learn certain information about its capabilities compared to your own. The DM tells you if the creature is your equal, superior, or inferior in regard to two of the following characteristics ofyour choice: STR score, DEX score, CON score or AC"
                },
            ],
            trackables: ["Superiority Dice: 4"],
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
            trackables: ["Superiority Dice: 5"],
        },
        {
            // LEVEL 9
            id: 9,
            prof_bonus: '+4',
            features: [
                {
                    id: 0,
                    name: 'Indomitable',
                    description: "Beginning at 9th leveI, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest. You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level."
                }
            ],
            trackables: ["Superiority Dice: 5"],
        },
        {
            // LEVEL 10
            id: 10,
            prof_bonus: '+4',
            features: [
                {
                    id: 0,
                    name: 'CHAMPION: Secondary Fighting Style',
                    description: 'you can choose a second option from the Fighting Style chart.'
                },
                {
                    id: 1,
                    name: 'BATTLE MASTER: Improved Combat Superiority',
                    description: 'Your superiority dice turn into d10s.'
                }
            ],
            trackables: ["Superiority Dice: 5"],
        },
    ],
    /* ---------- NEXT CLASS -------------------- DRUID ---------- */
    druid: [
        {
            // LEVEL 1
            id: 1,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Nature Lore',
                    description: 'You can identify plants and can especially identify plants that are edible, poisonous or have good/ill effects. On a successful DC12 Nature check, You can find enough natural food for your group. On a failed save you only find food for yourself.'
                },
                {
                    id: 1,
                    name: 'Tree Sense',
                    description: 'You can sense the general feeling of the surrounding flora. The DM will provide you with one word to describe it.'
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
                    name: 'Animal Kinship',
                    description: "You can understand and communicate basic ideas with animals. On a successful DC12, You can improve the relationship of an animal. If they are hostile, they will become chaotic; if chaotic, indifferent; if indifferent, friendly."
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
                    name: 'Animal Companion',
                    description: 'In your travels you develop a relationship with an animal. The beast is friendly to you and your companions and obeys your commands. Choose its stat block-Beast of the Land, Beast of the Sea, or Beast of the Sky-which uses your proficiency bonus (PB) in several places. You also determine the kind of animal the beast is, choosing a kind appropriate for the stat block. In combat, the beast acts during your turn. It can move and use its reaction on its own, but the only action it takes is the Dodge action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. You can also sacrifice one of your attacks when you take the Attack action to command the beast to take the Attack action. If you are incapacitated, the beast can take any action of its choice, not just Dodge.'
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
                    name: 'Ability Score Increase',
                    description: 'Allocate 2 ability score points (1 pt to 2 ability scores or 2 pts to 1 ability score)'
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
                    name: 'Exceptional Training',
                    description: "Beginning at 7th level, on any of your turns when your beast companion doesn't attack, you can use a bonus action to command the beast to take the Dash, Disengage, or Help action on its turn. In addition, the beast's attacks now count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
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
                    name: 'Camouflage',
                    description: 'You can blend seamlessly with your surroundings, making you nearly invisible in natural settings. Add +10 to your stealth roll.'
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
                    name: 'Bestial Fury',
                    description: 'Starting at 11th level, when you command your beast companion to take the Attack action, the beast can make two attacks, or it can take the Multiattack action if it has that action.'
                }
            ],
        },
    ],
    /* ---------- NEXT CLASS -------------------- BARD ---------- */
    bard: [
        {
            // LEVEL 1
            id: 1,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Bardic Inspiration',
                    description: 'You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time. You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest. Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.'
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
                    name: 'Jack of all Trades',
                    description: "Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus."
                },
                {
                    id: 1,
                    name: 'Song of Rest',
                    description: "Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points. The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level."
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
                    name: 'Expertise',
                    description: 'At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.'
                },
                {
                    id: 1,
                    name: 'Bonus Proficiencies',
                    description: "When you join the College of Lore at 3rd level, you gain proficiency with three skills of your choice."
                },
                {
                    id: 2,
                    name: 'Cutting Words',
                    description: "Also at 3rd level, you learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others. When a creature that you can see within 60 feet of you makes an attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and subtracting the number rolled from the creature's roll. You can choose to use this feature after the creature makes its roll, but before the DM determines whether the attack roll or ability check succeeds or fails, or before the creature deals its damage. The creature is immune if it can't hear you or if it's immune to being charmed."
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
                    name: 'Font of Inspiration',
                    description: 'Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest.'
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
                    name: 'Extra Attack',
                    description: 'You can attack twice, instead of once, whenever you take the Attack action on your turn.'
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
                    name: 'Countercharm',
                    description: 'At 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects. As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit. The performance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required).'
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
            features: [],
        },
        {
            // LEVEL 10
            id: 10,
            prof_bonus: '+4',
            features: [
                {
                    id: 0,
                    name: 'Higher Expertise',
                    description: 'At 10th level, choose two more of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.'
                }
            ],
        },
    ],
    /* ---------- NEXT CLASS -------------------- AVLIMETH ---------- */
    avlimeth: [
        {
            // LEVEL 1
            id: 1,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Bardic Inspiration',
                    description: 'You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time. You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest. Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.'
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
                    name: 'Jack of all Trades',
                    description: "Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus."
                },
                {
                    id: 1,
                    name: 'Song of Rest',
                    description: "Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points. The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level."
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
                    name: 'Expertise',
                    description: 'At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.'
                },
                {
                    id: 1,
                    name: 'Bonus Proficiencies',
                    description: "When you join the College of Lore at 3rd level, you gain proficiency with three skills of your choice."
                },
                {
                    id: 2,
                    name: 'Cutting Words',
                    description: "Also at 3rd level, you learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others. When a creature that you can see within 60 feet of you makes an attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and subtracting the number rolled from the creature's roll. You can choose to use this feature after the creature makes its roll, but before the DM determines whether the attack roll or ability check succeeds or fails, or before the creature deals its damage. The creature is immune if it can't hear you or if it's immune to being charmed."
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
                    name: 'Font of Inspiration',
                    description: 'Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest.'
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
                    name: 'Extra Attack',
                    description: 'You can attack twice, instead of once, whenever you take the Attack action on your turn.'
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
                    name: 'Countercharm',
                    description: 'At 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects. As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit. The performance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required).'
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
            features: [],
        },
        {
            // LEVEL 10
            id: 10,
            prof_bonus: '+4',
            features: [
                {
                    id: 0,
                    name: 'Higher Expertise',
                    description: 'At 10th level, choose two more of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.'
                }
            ],
        },
    ],

    //NEXT CLASSES
    // AVLIMETH CLASS LEVELS
    // ELVISH CLOAKS CLASS LEVELS
    // ORDER OF THE FEATHER CLASS LEVELS
    // ACOLYTE CLASS LEVELS
}