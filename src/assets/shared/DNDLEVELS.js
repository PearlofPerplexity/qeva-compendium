/* Lays out levels for classes 

    Each class has an array of objects which represent each level for that class

    oracles
    caracadre
    avlimeth
    elven cloaks
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
                    description: 'Size: 5ft cube, Range: 15ft (Acolyte: Requires level 1 divination slot).'
                },
                {
                    id: 1, 
                    name: "Endless Blessing",
                    description: "You live in a constant state of blessing, guarded by ethereals.You cannot be cursed as long as you are faithful. You can add proficiency to any roll."
                },
                {
                    id: 1, 
                    name: "Unrestricted Access",
                    description: "You have no limit on uses of diviniation and can divine all types of elements."
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
                    description: 'Size: 10ft cube, Range: 30ft (Acolyte: Requires level 2 divination slot).'
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
                    description: 'Size: 15ft cube, Range: 60ft (Acolyte: Requires level 3 divination slot).'
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
            trackables: ["DIV: 0", "UM: +0"],
        },
        {
            // LEVEL 2
            id: 2,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'DIV',
                    description: 'Your training allows you to harness a divine energy (Div). Your access to this energy is represented by a number of div points. Your level determines the number of points you have, as shown in the Div points column of the table, You can spend these points to fuel various Div features.'
                },
                {
                    id: 1,
                    name: 'Step of the Wind',
                    description: 'You can spend 1 div point to take the Disengage, Dodge or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn.'
                },
                {
                    id: 2,
                    name: 'Unarmored Movement (UM)',
                    description: 'Your speed increases by 10 ft while you are light or no armor.'
                }
            ],
            trackables: ["DIV: 2", "UM: +10"],
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
                    description: "You can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier +your leveI. If you reduce the damage to O,you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free, If you catch a missile in this way, you can spend 1 div point to make a ranged attack with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack."
                }
            ],
            trackables: ["DIV: 3", "UM: +10"],
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
            trackables: ["DIV: 4", "UM: +10"],
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
                    description: 'When you hit another creature with a melee weapon attack. you can spend 1 div point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn.'
                },
            ],
            trackables: ["DIV: 5", "UM: +10"],
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
            trackables: ["DIV: 6", "UM: +15"],
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
            trackables: ["DIV: 7", "UM: +15"],
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
            trackables: ["DIV: 8", "UM: +15"],
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
            trackables: ["DIV: 9", "UM: +15"],
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
            trackables: ["DIV: 10", "UM: +20"],
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
                    name: 'GRENADIER UPGRADE',
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
                    name: 'GRENADIER UPGRADE',
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
                    name: 'GRENADIER UPGRADE',
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
                    name: 'SELECT FEATS (2)',
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
                    name: "SELECT A FEAT",
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
                    name: "SELECT FEATS (2)",
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
                    name: "SELECT A FEAT",
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
                    name: "SELECT A FEAT",
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
                    name: 'Primary Craft Domain',
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
                    name: 'CRAFT UPGRADE',
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
                    name: 'CRAFT UPGRADE',
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
                    name: 'CRAFT UPGRADE',
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
                    name: 'Cut Expertise',
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
                    name: 'Cut Expertise Improvement',
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
                    name: 'Cut Expertise Improvement',
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
                    name: 'Cut Expertise Improvement',
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
                    name: 'Cut Expertise Improvement',
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
                    name: 'Divine Sense',
                    description: 'The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any ethereal within 60 feet of you. Within the same radius, you also detect the presence of any place or object that has been blessed or cursed. You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.'
                },
                {
                    id: 1,
                    name: 'Temple Guardian',
                    description: 'You may visit cathedrals to receive free lodging and information.'
                }
            ],
            trackables: ["D1: 0"],
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
                },
                {
                    id: 1,
                    name: 'Lay on Hands',
                    description: "Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x5. As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool. Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one. You cannot remove a curse."
                },
                {
                    id: 2,
                    name: 'Divine Smite',
                    description: "Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapons damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend, to a maximum of 6d8."
                }
            ],
            trackables: ["D1: 2"],
        },
        {
            // LEVEL 3
            id: 3,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: "Sacred Oath",
                    description: "When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Now you choose the Oath of Devotion"
                },
                {
                    id: 1,
                    name: "Channel Divinity",
                    description: "Your oath allows you to channel divine energy to fuel magical effects. Each Channel Divinity option provided by your oath explains how to use it. When you use your Channel Divinity, you choose which option to use. You must then finish a short or long rest to use your Channel Divinity again. Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your paladin spell save DC."
                },
                {
                    id: 2,
                    name: "Sacred Weapon",
                    description: "As an action, you can imbue one weapon that you are holding with positive energy, using your Channel Divinity. For 1 minute, you add your Charisma modifier to attack rolls made with that weapon (with a minimum bonus of +1)."
                }
            ],
            trackables: ["D1: 3"],
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
            trackables: ["D1: 4"],
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
                    name: 'Divine Disruption',
                    description: 'You do not have the ability to control the elements as oracles do, but you can disrupt them. You can cause water to splash, or burst out of a glass, rocks to crack and break, air to burst.'
                }
            ],
            trackables: ["D1: 4", "D1: 1"],
        },
        {
            // LEVEL 6
            id: 6,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: 'Aura of Protection',
                    description: 'Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus.'
                }
            ],
            trackables: ["D1: 4", "D2: 2"],
        },
        {
            // LEVEL 7
            id: 7,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: "Aura of Devotion",
                    description: "Starting at 7th level, you and friendly creatures within 10 feet of you can't be charmed while you are conscious."
                }
            ],
            trackables: ["D1: 4", "D2: 3"],
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
            trackables: ["D1: 4", "D2: 3"],
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
            trackables: ["D1: 4", "D2: 3", "D3: 1"],
        },
        {
            // LEVEL 10
            id: 10,
            prof_bonus: '+4',
            features: [
                {
                    id: 0,
                    name: 'Aura of Courage',
                    description: "Starting at 10th level, you and friendly creatures within 10 feet of you can't be frightened while you are conscious."
                }
            ],
            trackables: ["D1: 4", "D2: 3", "D3: 2"],
        },
    ],
    /* ---------- NEXT CLASS -------------------- ACOLYTE ---------- */
    acolyte: [
        {
            // LEVEL 1
            id: 1,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Holy Gemstone',
                    description: "You must pledge yourself to a moral gemstone (neither dark nor unbound). An Acolyte must have this gemstone in their possession undarkened in order to cast divination."
                },
                {
                    id: 1,
                    name: 'Onyx Boost',
                    description: "If an acolyte choses 'Onyx' (Faithfulness) as one of their stones, the gem divination and class divination can boost each other. For example, if a character uses lvl 2 divination with their gem, they can upgrade this to lvl 3 by expending an acolyte lvl 1 divination slot. Keep in mind, dem divination is limited by path."
                },
                {
                    id: 2,
                    name: 'Knowledge of Stones',
                    description: "By deep study, you know the true meaning of all gemstones."
                }
            ],
            trackables: ["D1: 0"],
        },
        {
            // LEVEL 2
            id: 2,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Divine Disruption',
                    description: 'You do not have the ability to control the elements as oracles do, but you can disrupt them. You can cause water to splash, or burst out of a glass, rocks to crack and break, air to burst (Requires level 1 divination slot).'
                },
                {
                    id: 1,
                    name: "Minor Illusion",
                    description: "You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again. Every one foot of illusion requires +1 dice roll (ex. a 15 sq ft. illusion requires an intelligence roll of 15+)."
                }
            ],
            trackables: ["D1: 2"],
        },
        {
            // LEVEL 3
            id: 3,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'LVL 1 Divination',
                    description: 'Size: 5ft cube, Range: 15ft (Acolyte: Requires level 1 divination slot).'
                },
                {
                    id: 1,
                    name: 'Divine Smite',
                    description: "Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapons damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend, to a maximum of 6d8."
                }
            ],
            trackables: ["D1: 3"],
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
                    name: 'Meditation',
                    description: 'For every hour you meditate, you regain 1 divination slot.'
                },
            ],
            trackables: ["D1: 4"],
        },
        {
            // LEVEL 5
            id: 5,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: 'LVL 2 Divination',
                    description: 'Size: 10ft cube, Range: 30ft (Acolyte: Requires level 2 divination slot).'
                },

            ],
            trackables: ["D1: 4", "D1: 1"],
        },
        {
            // LEVEL 6
            id: 6,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: 'Earth Tremor',
                    description: 'You cause a tremor in the ground in a 10-foot radius. Each creature other than you in that area must make a Dexterity saving throw. On a failed save, a creature takes 1d6 bludgeoning damage and is knocked prone. If the ground in that area is loose earth or stone, it becomes difficult terrain until cleared.'
                },
                {
                    id: 1,
                    name: "Thunderwave",
                    description: "A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed. In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell's effect, and the spell emits a thunderous boom audible out to 300 feet."
                }
            ],
            trackables: ["D1: 4", "D2: 2"],
        },
        {
            // LEVEL 7
            id: 7,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: "Plant Growth",
                    description: "This spell channels vitality into plants within a specific area. There are two possible uses for the spell, granting either immediate or long-term benefits. If you cast this spell using 1 action, choose a point within range. All normal plants in a 100-foot radius centered on that point become thick and overgrown. A creature moving through the area must spend 4 feet of movement for every 1 foot it moves. You can exclude one or more areas of any size within the spell's area from being affected. If you cast this spell over 8 hours, you enrich the land. All plants in a half-mile radius centered on a point within range become enriched for 1 year. The plants yield twice the normal amount of food when harvested."
                }
            ],
            trackables: ["D1: 4", "D2: 3"],
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
            trackables: ["D1: 4", "D2: 3"],
        },
        {
            // LEVEL 9
            id: 9,
            prof_bonus: '+4',
            features: [
                {
                    id: 0,
                    name: 'Gust of Arrows',
                    description: 'You can use your control of wind to guide an arrow to its target. Add +10 to any long-range attack for 1 minute.'
                },
                {
                    id: 1,
                    name: 'Feather Fall',
                    description: "Choose up to five falling creatures within range. A falling creature’s rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature."
                }
            ],
            trackables: ["D1: 4", "D2: 3", "D3: 1"],
        },
        {
            // LEVEL 10
            id: 10,
            prof_bonus: '+4',
            features: [
                {
                    id: 0,
                    name: 'Shatter Steel',
                    description: "Starting at 10th level, you can destroy an enemy's weapon. If you succeed on a DC12 Wisdom check, the enemy's weapon shatters."
                },
                {
                    id: 0,
                    name: 'Ethereal Service',
                    description: "You can call on the ethereal realm for help. On a successful DC12, an ethereal will take physical form and help you in your fight or quest as long as it is worthy."
                }
            ],
            trackables: ["D1: 4", "D2: 3", "D3: 2"],
        },
    ],
    /* ---------- NEXT CLASS -------------------- ELVEN CLOAKS ---------- */
    elvenCloaks: [
        {
            // LEVEL 1
            id: 1,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Elven Precision',
                    description: "Your elven heritage grants you unparalleled precision. Once per short rest, you can reroll a missed attack roll."
                },
            ],
            trackables: ["DIV: 0", "UM: +0"],
        },
        {
            // LEVEL 2
            id: 2,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'DIV',
                    description: 'Your training allows you to harness a divine energy (Div). Your access to this energy is represented by a number of div points. Your level determines the number of points you have, as shown in the Div points column of the table, You can spend these points to fuel various Div features.'
                },
                {
                    id: 1,
                    name: 'Shadowstep',
                    description: 'Embracing the shadows and your ethereal guardians, you gain the ability to teleport up to 30 feet to an unoccupied space you can see in dim light or darkness as a bonus action.'
                },
                {
                    id: 2,
                    name: 'Unarmored Movement (UM)',
                    description: 'Your speed increases by 10 ft while you are light or no armor.'
                }
            ],
            trackables: ["DIV: 2", "UM: +10"],
        },
        {
            // LEVEL 3
            id: 3,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: 'Ethereal Archer',
                    description: "By means of a long relationship between elves and ethereals, you can elicit their help to phase your arrows into the ethereal plane in flight. You can spend one divinity point to cast Etherealness on an arrow. You can pass from full cover."
                }
            ],
            trackables: ["DIV: 3", "UM: +10"],
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
            trackables: ["DIV: 4", "UM: +10"],
        },
        {
            // LEVEL 5
            id: 5,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: 'Sylvan Shot',
                    description: "You've mastered the art of the bow. Your ranged attacks now ignore half cover, and you can make an additional attack when taking the Attack action"
                },
                {
                    id: 1,
                    name: 'Doubleshot',
                    description: "You have more than one move up your sleeve. You can expend a DIV point to fire two arrows at once; arrows must fire at the same target."
                }
            ],
            trackables: ["DIV: 5", "UM: +10"],
        },
        {
            // LEVEL 6
            id: 6,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: 'Elven Reflexes',
                    description: "Your reflexes are unmatched. You gain proficiency in Dexterity saving throws."
                }
            ],
            trackables: ["DIV: 6", "UM: +15"],
        },
        {
            // LEVEL 7
            id: 7,
            prof_bonus: '+3',
            features: [
                {
                    id: 0,
                    name: "Evasive Maneuver",
                    description: "Your agility reaches new heights. You can use your reaction to impose disadvantage on an attack against you."
                }
            ],
            trackables: ["DIV: 7", "UM: +15"],
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
            trackables: ["DIV: 8", "UM: +15"],
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
            trackables: ["DIV: 9", "UM: +15"],
        },
        {
            // LEVEL 10
            id: 10,
            prof_bonus: '+4',
            features: [
                {
                    id: 0,
                    name: 'Ethereal Archer',
                    description: "By means of a long relationship between elves and ethereals, you can elicit their help to phase your arrows into the ethereal plane in flight. Once per short rest, you can cast Etherealness on an arrow. You can pass from full cover."
                }
            ],
            trackables: ["DIV: 10", "UM: +20"],
        },
    ],
    /* ---------- NEXT CLASS -------------------- ORDER OF THE FEATHER ---------- */
    orderOfTheFeather: [
        {
            // LEVEL 1
            id: 1,
            prof_bonus: '+2',
            features: [
                {
                    id: 0,
                    name: "Pathfinder's Insight",
                    description: "Your keen eye for detail allows you to find hidden paths and clues easily. You gain advantage on Wisdom (Perception) checks to detect traps and secret doors."
                },
                {
                    id: 1,
                    name: 'Cartographer',
                    description: 'You are familiar with the geography of Avlim and one other continent. You have access to maps and resources to guide through various regions and are knowledgable about culture and geography to navigate them with wisdom.'
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
                    name: "Survivalist's Resilience",
                    description: "Your time in the wild has toughened you. You gain proficiency in the Survival skill, and you can endure harsh climates without suffering exhaustion."
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
                    name: 'Master of Terrain',
                    description: "Your mastery over different terrains allows you and your party to ignore difficult terrain during overland travel."
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
                    name: "Eagle Eye",
                    description: "Your vision is unmatched. You can see clearly up to a mile away with no difficulty, able to discern even fine details."
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
                    name: 'Adaptive Skills',
                    description: "You can quickly pick up new skills. Once per long rest, you can gain proficiency in any one skill for one hour."
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
                    name: "Trailblazer's Instinct",
                    description: "Your intuition guides you unerringly. Once per long rest, you can ask the DM to provide a hint or clue about the best course of action in a specific situation."
                }
            ],
        },
    ],   
}