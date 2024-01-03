import amber from '../imgs/gems/amber.png';
import amethyst from '../imgs/gems/amethyst.png';
import aquamarine from '../imgs/gems/aquamarine.png';
import azurite from '../imgs/gems/azurite.png';
import bismuth from '../imgs/gems/bismuth.png';
import chryscocolla from '../imgs/gems/chrysocolla.png';
import citrine from '../imgs/gems/citrine.png';
import crocoite from '../imgs/gems/crocoite.png';
import diamond from '../imgs/gems/diamond.png';
import emerald from '../imgs/gems/emerald.png';
import jade from '../imgs/gems/jade.png';
import celestite from '../imgs/gems/celestite.png';
import moonstone from '../imgs/gems/moonstone.png';
import obsidian from '../imgs/gems/obsidian-1.png';
import onyx from '../imgs/gems/onyx.png';
import opal from '../imgs/gems/opal.png';
import pearl from '../imgs/gems/pearl.png';
import pyrite from '../imgs/gems/pyrite.png';
import quartz from '../imgs/gems/quartz.png';
import ruby from '../imgs/gems/ruby.png';
import rutile from '../imgs/gems/rutile.png';
import sapphire from '../imgs/gems/sapphire.png';
import jet from '../imgs/gems/jet.png';
import tanzanite from '../imgs/gems/tanzanite.png';
import tigersEye from '../imgs/gems/tigers-eye.png';
import topaz from '../imgs/gems/topaz.png';
import tourmaline from '../imgs/gems/tourmaline.png';
import turquoise from '../imgs/gems/turquoise.png';
import whitestone from '../imgs/gems/whitestone.png';
import pruskite from '../imgs/gems/pruskite.png';

/* INCLUDES:

Divine Stones
Cardinal Stones
Incidental Stones
Overview

*/

export const GEMS = [
    {
        id: 0,
        link: `/qeva-compendium/gems/divine`,
        name: `Divine`,
        topics: [
            {
                id: 0,
                name: `Tourmaline`,
                quality: `Immensity`,
                purpose: `Expand the Universe`,
                originalLocation: `The Outerworld`,
                notableLocations: `Arguthain`,
                smDescription: 
                    `Stone pulled down by Moriel from the Outerworld`,
                description:
                    `Tourmaline is the stone of immensity. At the beginning of time, DIA shattered it from his reflection, but it's quality could not be contained in Qeṽa. It flew past the planet and ever expanded and split into planets, stars and galaxies in the outstretch of space. Everyone beyond this world and its moon is crafted from Tourmaline. So then, when one elden reached out in luminance into space, it was tourmaline that fell from the sky. You are likely familiar with its presence on the far eastern island of Arguthain where the elden, Moriel divined a meteor from the sky and shaped it into a fortress. Do not seek out this substance, oracle. Yes it is powerful and the source of the Dark Armies' strength who resisted us at the ends of the east, but it cannot be bottled. It continues to multiply on Arguthain and the dark armies with it. It tempts warriors far and wide, but do not be so easily tricked. It is impossible to keep in balance with the other attributes and will only be to your destruction. It is a stone of divinity as no created sentient being can experience omnipotence nor omnipresence.`,
                image: tourmaline,
                imageAlt: `Qeṽa Tourmaline Gem`,
                lvls: [
                    {
                        id: 0, 
                        name: "Amplification",
                        description: "On a successful attack, add damage equal to the selected power level"
                    }
                ]
            },
            {
                id: 1,
                name: `Celestite`,
                quality: `Holiness`,
                purpose: `Divide the Heavenly Layers`,
                originalLocation: `The Five Heavens beyond the natural world`,
                notableLocations: `Malunë`,
                smDescription: 
                    `Stone dropped by DIA at the parsing of invisibility`,
                description:
                    `Last is celestite, the stone of holiness. It was the cinder of hope to humanity in the age of darkness at the expense of DIA Himself. As black polluted clouds covered the entire planet, it seemed that all bonds with DIA were lost. On the islands, there were no mountains high enough for the people to speak with God and no way to rise above the smoke. To remain in communion with his people, the good and gracious DIA spared a cut of his true essence of invisibility and bestowed it upon Avlim. With this parsing of His essence, DIA would be bound to a visible form for the remainder of eternity. At its parsing, a bit of celestite fell from the sky like a falling star. If it was not found at its fall, it will likely never be found for the stone itself is invisible. It is a stone of divinity as no created sentient being can experience all the layers of heavens hidden by the varieties of celestite.`,
                image: celestite,
                imageAlt: `Qeṽa Celestite Gem`,
                lvls: [
                    {
                        id: 0, 
                        name: "Unknown",
                        description: "No Description available..."
                    }
                ]
            },
            {
                id: 2,
                name: `Obsidian`,
                quality: `Solitude`,
                purpose: `Physical Manifestation of DIA's Reflection`,
                originalLocation: `Lower Mantle of Qeṽa`,
                notableLocations: `Mount Sauthur`,
                smDescription: 
                    `Stone avoided and thought to be a naturally dark stone`,
                description:
                    `When DIA made the decision to create time and space, it began with total solitude. Before any of the other attributes were formed in the translucent orb above the earth, he heated the obsidian till it was molten and shaped it into the earth. When the crust hardened is when he began shaping the other attributes. As the years continued, obsidian broke through to the surface in volcanoes in its molten form. It then hardened as volcanic glass; notably Mount Sakur in Avlim. The elden know of this for DIA has told them, but they do not share this information with others. Rather, they allow the people of Avlim to keep their superstitions. The noble people avoid the gem, because it is black like the dark stones, which oppose DIA. The elden do not enlighten them because obsidian was intended by DIA to be left alone. It is a gem of solitude and if parties venture to find it, it will lose its quality or worse, be abused as it easily is. Nonetheless, still some learn the secret and venture to Sakur. DIA nor the elden condemn them as it is a profound blessing if used correctly. However, overall, the gem is not to be sought. It is a stone of divinity as no created sentient being can experience true sole-existence.`,
                image: obsidian,
                imageAlt: `Qeṽa Obsidian Gem`,
                lvls: [
                    {
                        id: 0, 
                        name: "Restoration",
                        description: "Spend a short rest in solitude and add temporary hit points equal to the selected power level"
                    }
                ]
            },
            {
                id: 3,
                name: `Aquamarine`,
                quality: `Fellowship`,
                purpose: `Share companionship with humanity`,
                originalLocation: `The Ocean`,
                notableLocations: `Rivers of Avlim`,
                smDescription: 
                    `Sister stone of obsidian, the stone of solitude.`,
                description:
                    `Aquamarine is the sister stone of obsidian as it carries the opposite quality, yet still works hand-in-hand with obsidian. After DIA formed the earth, which was obsidian, he formed the other qualities in a translucent orb. The orb and all its attributes were held together by fluid aquamarine, which was the reason DIA created time and space. When Dia shattered the orb, it was the first to take shape as water on the earth. aquamrine, did not stabilize and harden like obsidian, because fellowship is far more fluid than solitude. It relies on the feelings and actions of others. Aquamarine, remains at the bottom of oceans and riverbeds and the deeper one swims, the stronger the aquamrine. The river elves have the strongest of bonds and were drawn to its quality in water. It turned their eyes blue and brought them together. It remains a tradition for a river elf to dive to the bottom of a river bed and retrieve the aquamarine stone. It is the only divine stone intended to be collected and shared with DIA. It does not darken as it is a reminder of DIA's ever-presence and offer of fellowship. It is a stone of divinity as no created sentient being can experience fellowship within oneself. When left out of water, the gem dries and does not show its true color.`,
                image: aquamarine,
                imageAlt: `Qeṽa Aquamarine Gem`,
                lvls: [
                    {
                        id: 0, 
                        name: "Bonds of Friendship",
                        description: "For one round, all party members including you and your allies will receive a bonus equal to the selected power level on their first roll"
                    }
                ]
            },
            {
                id: 4,
                name: `Tiger's Eye`,
                quality: `Creativity`,
                purpose: `Creating something from nothing`,
                originalLocation: `Aguavé`,
                notableLocations: `Gem Dealers`,
                smDescription: 
                    `Stone rumored to be the stone of luck or blessing.`,
                description:
                    `Tiger's eye is a golden stone with black stripes and thus rightly earns its name. Since it is the stone of creativity, it draws intrigue and creative ideas about its true properties and purposes. Those who are superstitious believe it to be the stone of luck, while those who consider themselves holy consider it the stone of blessing. It's true property, however, is creativity and naturally spurs this quality in those who seek it. Notably, it enables to practice soul flying in their REM sleep. However, without the stone of goodness, this soul-flying is often clouded by hallucinetic qualities. Thus, those who hold it, often have strange dreams or strange soul-flying experiences. It is a stone of divinity as all created sentient beings' creativity relies on a previous source, while DIA's does not.`,
                image: tigersEye,
                imageAlt: `Qeṽa Tiger's Eye Gem`,
                lvls: [
                    {
                        id: 0, 
                        name: "Compose",
                        description: "Using other gemstones, create a new creation. It cannot be made animate without moonstone and its size must fit within the square feet equal to the selected power level"
                    }
                ]
            },
            {
                id: 5,
                name: `Moonstone`,
                quality: `Life Breath`,
                purpose: `Invoke Sentience`,
                originalLocation: `Qeṽa's Three Moons`,
                notableLocations: `Amare's Necklace`,
                smDescription: 
                    `Stone given to all the eveile at the beginning of the Divergent Age.`,
                description:
                    `Moonstone or the sentience stone is that which is elemental to creating all life. No sentient creation evil or good survives without it and no elden nor oracle can create life without it. It can only be found on the moon of Qeṽa where the eveile, once walked and witnessed its silver glittering glow. Some creatures have been influenced by its nightly glow upon Qeṽa and taken to awaken during the night and sleep during the day. The elden, Amare is the only known keeper of moonstone on Qeṽa. For each elden was given a sentient stone to create, but Amare did not. It is a stone of divinity as no created sentient being can reconstruct life apart from DIA.`,
                image: moonstone,
                imageAlt: `Qeṽa Tiger's Eye Gem`,
                lvls: [
                    {
                        id: 0, 
                        name: "Heartbeat",
                        description: "Breath life into anything that is inanimate. The target's hit points will equal your selected power level"
                    }
                ]
            }
        ]
    },
    {
        id: 1,
        link: `/qeva-compendium/gems/cardinal`,
        name: `Cardinal`,
        topics: [
            {
                id: 0,
                name: `Diamond`,
                quality: `Love`,
                childStone: `Quartz (Strength)`,
                syntheticStone: `Kamikaze`,
                darkStone: `Hate`,
                smDescription: 
                    `Stone given to Amare never used to create`,
                description:
                    `First is the diamond, which is love; least understood and greatest among the cardinal stones given to the elden. It is mostly white when cut from the earth, but clear in its purest form. It binds us all together through the garnering of all stones. Without it, all attributes are meaningless and apart from the others it is indescribable. To the Eldest, Amare, was this stone entrusted. He chose to bury it in the forest of Malune and it flourished into a paradise that all shall share in at the coming of Agate above. This self-sacrificial act of Amare is prominent in the diamond.`,
                image: diamond,
                imageAlt: `Qeṽa Diamond Gem`,
                lvls: [
                    {
                        id: 0, 
                        name: "Curse Lift",
                        description: "Lift the curse placed on a person, object or 20ft. radius of land | CON Save:15"
                    },
                    {
                        id: 1, 
                        name: "Sacrifice",
                        description: "Reassign any amount of damage on another being to yourself"
                    },
                    {
                        id: 2, 
                        name: "Ethereal Armor",
                        description: "You have advantage on both ethereal & physical attacks against you for 1 minute"
                    },
                    {
                        id: 3, 
                        name: "Shield",
                        description: "Anyone within a 20 ft radius of you receives +1 to their AC"
                    },
                    {
                        id: 4, 
                        name: "Deliverance",
                        description: "Pale a sentient evil creature and make them good | CON Save:15"
                    },
                    {
                        id: 5, 
                        name: "Unity",
                        description: "You are one with the diamond stone. You no longer need a physical gem to access its powers. Stone ability rolls are automatically 20 (if not '1'). Touch is no longer required."
                    }
                ]
            },
            {
                id: 1,
                name: `Citrine`,
                quality: `Joy`,
                childStone: `Crocoite (Happiness)`,
                syntheticStone: `Indulgence`,
                darkStone: `Asceticism`,
                smDescription: 
                    `Stone given to Xaradriel to create Halflings`,
                description:
                    `Second is citrine, which is joy, given to the elden, Xaradriel to craft the halfling. Its red color is unmistakable in the earth and can be polished into a flawless orange gem. If you bind yourself to its nature, your joy will outlast any difficulty that comes before you. You will be the last to lose heart when the path darkens; an evergreen, ever-glad soul.`,
                image: citrine,
                imageAlt: `Qeṽa Citrine Gem`,
                lvls: [
                    {
                        id: 0, 
                        name: "Nostalgia",
                        description: "Recall any memory from your own past. *Memory must contain an element of joy."
                    },
                    {
                        id: 1, 
                        name: "Empathy",
                        description: "Recall any memory from someone you touch. *Memory must contain an element of joy."
                    },
                    {
                        id: 2, 
                        name: "Antiquity",
                        description: "Recall any memory from the ground. *Memory must contain an element of joy."
                    },
                    {
                        id: 3, 
                        name: "Memoir",
                        description: "Recall any positive memory from an object you touch. *Memory must contain an element of joy."
                    },
                    {
                        id: 4, 
                        name: "Echo",
                        description: "Recall any memory from any source at will. *Memory must contain an element of joy"
                    },
                    {
                        id: 5, 
                        name: "Unity",
                        description: "You are one with the citrine stone. You no longer need a physical gem to access its powers. Stone ability rolls are automatically 20 (if not '1'). Touch is no longer required."
                    }
                ]
            },
            {
                id: 2,
                name: `Amethyst`,
                quality: `Peace`,
                childStone: `Azurite (Charisma)`,
                syntheticStone: `Control`,
                darkStone: `Mayhem`,
                smDescription: 
                    `Stone given to Moriel to create ocri`,
                description:
                    `There is then Amethyst, which is peace. It is purple in color and glitters even unpolished. This stone was opened by the dark lord, Moriel, to craft the races of the dark armies, but do not make the mistake to say that the stone is cursed. It is not in Amethyst's nature to be destructive. You, oracle can restore honor to an Amethyst gem by allowing the stone to draw oneself and others to DIA rather than oneself. With Amethyst you will be the eye of the hurricane, the calm of the storm.`,
                image: amethyst,
                imageAlt: `Qeṽa Amethyst Gem`,
                lvls: [
                    {
                        id: 0, 
                        name: "Speak with Beasts",
                        description: "Use Speak with Animals on any creature you touch"
                    },
                    {
                        id: 1, 
                        name: "Tales of the Land",
                        description: "Speak with earth upon touch"
                    },
                    {
                        id: 2, 
                        name: "Disarm",
                        description: "Maximize an NPC's attitude toward you"
                    },
                    {
                        id: 3, 
                        name: "Treespeech",
                        description: "Use Speak with Animals on any vegetation you touch."
                    },
                    {
                        id: 4, 
                        name: "Celestial Tongue",
                        description: "You can comprehend the speech of ethereals"
                    },
                    {
                        id: 5, 
                        name: "Unity",
                        description: "You are one with the amethyst stone. You no longer need a physical gem to access its powers. Stone ability rolls are automatically 20 (if not '1'). Touch is no longer required."
                    }
                ]
            },
            {
                id: 3,
                name: `Pyrite`,
                quality: `Patience`,
                childStone: `Rutile (Endurance)`,
                syntheticStone: `Tolerance`,
                darkStone: `Impulse`,
                smDescription: 
                    `Stone given to Ferthrui to create Dwarves`,
                description:
                    `Pyrite glitters gold in the tunnels of the dwarves. It is patience as the dwarves are patient in their mining of fine minerals. It was given to the elden, Ferthrui to form the dwarves in the thrush mountains and is easily confused with gold. So then, there is great wisdom in carrying the lesser stone of Gold in one's possession to compare it to the far more valuable, Pyrite. It grants one the patience to see long-term goals and rewards to fruition.`,
                image: pyrite,
                imageAlt: `Qeṽa Pyrite Gem`,
                lvls: [
                    {
                        id: 0, 
                        name: "Kin's Blood",
                        description: "You can grow Rutile crystal (0.5 carat/day)"
                    },
                    {
                        id: 1, 
                        name: "Kin's Craft",
                        description: "You can pressurize rock to create pyrite (0.1 carat/day)"
                    },
                    {
                        id: 2, 
                        name: "Pickman",
                        description: "You can grow any incidental stone (0.05 carat/day)"
                    },
                    {
                        id: 3, 
                        name: "Master Jeweler",
                        description: "You can pressurize rock to create any cardinal stone (0.025 carat/day)"
                    },
                    {
                        id: 4, 
                        name: "Stoneseer",
                        description: "You can pressurize rock to create a divine stone (0.01 carat/day)"
                    },
                    {
                        id: 5, 
                        name: "Unity",
                        description: "You are one with the pyrite stone. You no longer need a physical gem to access its powers. Stone ability rolls are automatically 20 (if not '1'). Touch is no longer required."
                    }
                ]
            },
            {
                id: 4,
                name: `Sapphire`,
                quality: `Kindness`,
                childStone: `Tanzanite (Truth)`,
                syntheticStone: `Deception`,
                darkStone: `Wrath`,
                smDescription: 
                    `Stone given to Nware to create Gnomes`,
                description: `Sapphire, which is kindness, was given to the elden, Nware to craft the race of gnomes. You will recognize this stone as a clear dark blue in its raw form. You must visit the gnomes of Farathain to truly understand the selfless fashion of this attribute. Master it, and you will develop relationships with all the noble races and develop an empathy for your enemy that will lead to their demise.`,
                image: sapphire,
                imageAlt: `Qeṽa Sapphire Gem`,
                lvls: [
                    {
                        id: 0, 
                        name: "Random Act",
                        description: "Know the desires of a random being within 60 ft that you can supply"
                    },
                    {
                        id: 1, 
                        name: "Needy",
                        description: "Know another being's needs. This also adds +2 to medicine checks"
                    },
                    {
                        id: 2, 
                        name: "Intuition",
                        description: "Know another being's desires. This also adds +2 to performance checks"
                    },
                    {
                        id: 3, 
                        name: "Empath",
                        description: "Know another being's sentiments."
                    },
                    {
                        id: 4, 
                        name: "Key to the Heart",
                        description: "Know both a being's needs/desires and a way to resolve them"
                    },
                    {
                        id: 5, 
                        name: "Unity",
                        description: "You are one with the sapphire stone. You no longer need a physical gem to access its powers. Stone ability rolls are automatically 20 (if not '1'). Touch is no longer required."
                    }
                ]
            },
            {
                id: 5,
                name: `Emerald`,
                quality: `Goodness`,
                childStone: `Jade (Awareness)`,
                syntheticStone: `Unbending`,
                darkStone: `Evil`,
                smDescription: 
                    `Stone given to Arboriul to bring Trees to sentience`,
                description: `Emerald, which is goodness, is another stone of green color, but darker in hue. It was given to the elden, Arboriul to bring sentience to forest, earth and river. A heart of goodness should not be overlooked as a pure heart easily repels the distraction of passions and pursues the rightful course no matter its popularity. The qualities of Emerald in relation to the ethereals is really quite special. Looking through a cut of jade allows one to see into the etherworld. With emerald, one realizes that most ethereals are not so far away and are much closer than one realizes. Furthermore, aligning oneself to its quality allows the masters of these stones to hold communication with ethereals only fettered by language.`,
                image: emerald,
                imageAlt: `Qeṽa Emerald Gem`,
                lvls: [
                    {
                        id: 0, 
                        name: "Interstellar Sight",
                        description: "You can see through smoke, fog and any atmospheric obscurance"
                    },
                    {
                        id: 1, 
                        name: "Spy for Illusions",
                        description: "You can tell illusion from reality"
                    },
                    {
                        id: 2, 
                        name: "Heavenly Visions",
                        description: "You can see the doings of spirits and wraiths in the ethereal plane"
                    },
                    {
                        id: 3, 
                        name: "Blinding Light",
                        description: "Blind an enemy with a keyhole of light from the everworld"
                    },
                    {
                        id: 4, 
                        name: "Void Resilience",
                        description: "You have immunity to void damage"
                    },
                    {
                        id: 5, 
                        name: "Unity",
                        description: "You are one with the emerald stone. You no longer need a physical gem to access its powers. Stone ability rolls are automatically 20 (if not '1'). Touch is no longer required."
                    }
                ]
            },
            {
                id: 6,
                name: `Onyx`,
                quality: `Faithfulness`,
                childStone: `Jet (Loyalty)`,
                syntheticStone: `Certainty`,
                darkStone: `Faithless`,
                smDescription: 
                    `Stone given to Çairça to create Elves`,
                description: `Emerald, which is goodness, is another stone of green color, but darker in hue. It was given to the elden, Arboriul to bring sentience to forest, earth and river. A heart of goodness should not be overlooked as a pure heart easily repels the distraction of passions and pursues the rightful course no matter its popularity. The qualities of Emerald in relation to the ethereals is really quite special. Looking through a cut of jade allows one to see into the etherworld. With emerald, one realizes that most ethereals are not so far away and are much closer than one realizes. Furthermore, aligning oneself to its quality allows the masters of these stones to hold communication with ethereals only fettered by language.`,
                image: onyx,
                imageAlt: `Qeṽa Onyx Gem`,
                lvls: [
                    {
                        id: 0, 
                        name: "LVL 1 Lumination",
                        description: "Size: 5ft cube, Range: 15ft"
                    },
                    {
                        id: 1, 
                        name: "LVL 2 Lumination",
                        description: "Size: 10ft cube, Range: 30ft"
                    },
                    {
                        id: 2, 
                        name: "Second Path",
                        description: "Choose a secondary path of lumination"
                    },
                    {
                        id: 3, 
                        name: "LVL 3 Lumination",
                        description: "Size: 15ft cube, Range: 60ft"
                    },
                    {
                        id: 4, 
                        name: "LVL 4 Lumination",
                        description: "Size: 20ft cube, Range: 120ft"
                    },
                    {
                        id: 5, 
                        name: "Unity",
                        description: "You are one with the onyx stone. You no longer need a physical gem to access its powers. Stone ability rolls are automatically 20 (if not '1'). Touch is no longer required."
                    }
                ]
            },
            {
                id: 7,
                name: `Turquoise`,
                quality: `Gentleness`,
                childStone: `Chryscocolla (Stealth)`,
                syntheticStone: `Apathy`,
                darkStone: `Violence`,
                smDescription: 
                    `Stone given to Mhindil to bring oaki to sentience`,
                description: `Turquoise is the stone of gentleness and it will be a part of your journey no matter the stone you select. Learn to recognize it before your journey to the crystal isle of Agate. Turquoise is blue-green in color and the only stone to radiate light and glow at night. It was given to the elden, Mhindil, which she used to grant sentience to the small, intelligent oaki of the Arthadain Fields. The meekness of Turquoise cannot only lend one toward humility and softness, but also mask them in stealth. But these reasons are not why they are essential to the oracle warrior. All stones reveal with color the bond of a warrior to their stone, but none more so than Turquoise and none need surveillance of character more so than the oracles. For this reason, a turquoise edge lines ever Zanhari, the sword of the oracle.`,
                image: turquoise,
                imageAlt: `Qeṽa Turquoise Gem`,
                lvls: [
                    {
                        id: 0, 
                        name: "Healing Spirit",
                        description: "You can cast the healing spirit spell"
                    },
                    {
                        id: 1, 
                        name: "Preparation",
                        description: "You can grant up to 6 members in your party, 5 temporary hit points that will last 1 minute."
                    },
                    {
                        id: 2, 
                        name: "Mass Cure Wounds",
                        description: "You can cast the Mass Cure Wounds spell"
                    },
                    {
                        id: 3, 
                        name: "Power Word Heal",
                        description: "You can cast the Power Word Heal spell"
                    },
                    {
                        id: 4, 
                        name: "Mass Heal",
                        description: "You can cast the Mass Heal spell"
                    },
                    {
                        id: 5, 
                        name: "Unity",
                        description: "You are one with the turquoise stone. You no longer need a physical gem to access its powers. Stone ability rolls are automatically 20 (if not '1'). Touch is no longer required."
                    }
                ]
            },
            {
                id: 8,
                name: `Ruby`,
                quality: `Self-Control`,
                childStone: `Pruskite (Dexterity)`,
                syntheticStone: `Self-Focus`,
                darkStone: `Havoc`,
                smDescription: 
                    `Stone given to Thelmiel to create Aviame`,
                description: `Similar is Ruby, which is self-control. It is a deeper red than pruskite granted to the elden, Nware for crafting the elf-like Aviame. While the patience of pyrite allows one to pursue a macro event, ruby allos the luminary the self-control to navigate micro events. Is this not evident from the skills of the Aviame warriors? Who else in all of Avlim moves in combat as they do? If discipline and dexterity are your aim, oracle, prepare for the path of the Ruby.`,
                image: ruby,
                imageAlt: `Qeṽa Ruby Gem`,
                lvls: [
                    {
                        id: 0, 
                        name: "Stillness of Mind",
                        description: "As a bonus action, you can end one Effect on yourself that is causing you to be Charmed or Frightened"
                    },
                    {
                        id: 1, 
                        name: "Nimble",
                        description: "You have the evasion feat"
                    },
                    {
                        id: 2, 
                        name: "Deft Hands",
                        description: "You have the Deflect Missiles feat"
                    },
                    {
                        id: 3, 
                        name: "Dual-Wield",
                        description: "You can dual wield, making two attack strikes for up to 1 minute"
                    },
                    {
                        id: 4, 
                        name: "Master of Dexterity",
                        description: "You can dash, dodge, disengage and attack all in the same turn"
                    },
                    {
                        id: 5, 
                        name: "Unity",
                        description: "You are one with the ruby stone. You no longer need a physical gem to access its powers. Stone ability rolls are automatically 20 (if not '1'). Touch is no longer required."
                    }
                ]
            },
            {
                id: 9,
                name: `Opal`,
                quality: `Wisdom`,
                childStone: `Bismuth (Intelligence)`,
                syntheticStone: `Manipulation`,
                darkStone: `Recklessness`,
                smDescription: 
                    `Stone necessary to bring about sentience`,
                description: `Opal is the stone of Wisdom, given to the original nine eveile and essential in creating them. In fact, if one is knowledgable enough, they can use this stone again to create sentience. When properly enacted on something with lifebreath, it can bring awareness to DIA and true reality. This however, is a dangerous path, which only Moriel dared to attempt. It is what makes the noble races worthy to rule over all life in Qeṽa and capable of pursuing the face of Dia. Greater than the gift of knowledge, it allows one to discern and respond to knowledge rightly, decisively, and honorably. It is rare to find such a stone on Avlim and rarer still on any shores in Qeṽa. If you seek it, expect to find it nowhere else outside the walls of Agate.`,
                image: opal,
                imageAlt: `Qeṽa Opal Gem`,
                lvls: [
                    {
                        id: 0, 
                        name: "Angelic Decree",
                        description: "Seek ethereal counsel. The stone will pull in the direction they bid you go"
                    },
                    {
                        id: 1, 
                        name: "Wisdom Sense",
                        description: "Seek DIA's counsel on a course of action. You will receive a distinct, one-word feeling"
                    },
                    {
                        id: 2, 
                        name: "Enlighten",
                        description: "Distill insight into another sentient being no matter their distance or attitude"
                    },
                    {
                        id: 3, 
                        name: "Noticer",
                        description: "An insight or perception will reveal itself to you that will give you wisdom on the best course of action"
                    },
                    {
                        id: 4, 
                        name: "Eyes Open",
                        description: "Bring anything to sentience allowing it a deeper ability to communicate with you"
                    },
                    {
                        id: 5, 
                        name: "Unity",
                        description: "You are one with the opal stone. You no longer need a physical gem to access its powers. Stone ability rolls are automatically 20 (if not '1'). Touch is no longer required."
                    }
                ]
            },
            {
                id: 10,
                name: `Topaz`,
                quality: `Hope`,
                childStone: `Amber (Constitution)`,
                syntheticStone: `Lust`,
                darkStone: `Cynicism`,
                smDescription:
                    `Stone ungiven, but inherent to the will of all sentience`,
                description: `Topaz is the stone of hope, least recognizable amongst all stones, yet unmatched in the darkest hour. Though its natural state shares the honey yellow color of amber, it can take on many colors in the spectrum, but the one with hope will recognize it. Maintain hope and this stone will spirit you no matter the depth of difficulty or length of battle. Interestingly it has been found that anyone bonded to topaz is also bound to amber.`,
                image: topaz,
                imageAlt: `Qeṽa Topaz Gem`,
                lvls: [
                    {
                        id: 0, 
                        name: "Fate",
                        description: "You can search your future for positive possibilities"
                    },
                    {
                        id: 1, 
                        name: "Fortune",
                        description: "You can search another's future for positive possibilities"
                    },
                    {
                        id: 2, 
                        name: "Destiny",
                        description: "You can search the future of the ground where you stand"
                    },
                    {
                        id: 3, 
                        name: "Endstate",
                        description: "You can search the future of an object"
                    },
                    {
                        id: 4, 
                        name: "Crystal Ball",
                        description: "You can search the future at will"
                    },
                    {
                        id: 5, 
                        name: "Unity",
                        description: "You are one with the topaz stone. You no longer need a physical gem to access its powers. Stone ability rolls are automatically 20 (if not '1'). Touch is no longer required."
                    }
                ]
            },
            {
                id: 11,
                name: `Pearl`,
                quality: `Humility`,
                childStone: `Whitestone (Selflessness)`,
                syntheticStone: `Envy`,
                darkStone: `Pride`,
                smDescription:
                    `The penultimate stone, foundational to all other stones`,
                description: `Greatest and rarest of all cardinal stones is the pearl of humility. Consider yourself the lowliest and vilest of sentience before DIA if you wish for it not to crumble in your hand. For it is brittler than fine glass and is mere myth among the noble races. No elden was entrusted with it and no dwarf has been known to recover it from stone. It is white, circular and smooth as the surface of Qeṽa before the sprinkling of DIA's attributes. If ever you come across it, know this: the wielder of the pearl of humility is gifted with the attribute necessary to pursue and master all other attributes. However, the more one grows in the attributes, the more difficult this stone is to control, but the one who does will be among the most powerful warriors to walk Qeṽa.`,
                image: pearl,
                imageAlt: `Qeṽa Pearl`,
                lvls: [
                    {
                        id: 0, 
                        name: "Humble Beginnings",
                        description: "Your pearl is vulnerable to cracking"
                    },
                    {
                        id: 1, 
                        name: "Strong Foundation",
                        description: "Your pearl is hardened and uncrackable"
                    },
                    {
                        id: 2, 
                        name: "Less of Self",
                        description: "You have mastery over whitestone"
                    },
                    {
                        id: 3, 
                        name: "Caretaker",
                        description: "You can hold any stone without affecting its color"
                    },
                    {
                        id: 4, 
                        name: "Grandmaster",
                        description: "You have mastery over all the cardinal stones"
                    },
                    {
                        id: 5, 
                        name: "Unity",
                        description: "You are one with the pearl. You no longer need a physical gem to access its powers. Stone ability rolls are automatically 20 (if not '1'). Touch is no longer required."
                    }
                ]
            },
        ]
    },
    {
        id: 2,
        link: `/qeva-compendium/gems/incidental`,
        name: `Incidental`,
        topics: [
            {
                id: 0,
                name: `Quartz`,
                quality: `Strength`,
                parentStone: `Diamond (Love)`,
                syntheticStone: `Kamikaze`,
                darkStone: `Hate`,
                smDescription: 
                    `Stone native to Malunë, home of the Elves`,
                description:
                    `Quartz is the stone of strength, born out of diamond, the cardinal stone of love. When given the choice between love and strength, few choose love. This stone is found on the eastern rim where Malunë broke from Navalil.`,
                image: quartz,
                imageAlt: `Qeṽa Quartz Gem`,
                lvls: ["+1 STR or Attack", "+3 STR or Attack", "+5 STR or Attack", "+8 STR or Attack", "+10 STR or Attack"]
            },
            {
                id: 1,
                name: `Crocoite`,
                quality: `Happiness`,
                parentStone: `Citrine (Joy)`,
                syntheticStone: `Indulgence`,
                darkStone: `Asceticism`,
                smDescription: 
                    `Stone native to Fletcheren, home of the Halflings.`,
                description:
                    `Crocoite is the stone of happiness, which is born out of citrine, the cardinal stone of joy given to the elden, Xaradriel at the inception of the divergent age. Thus, crocoite is most abundantly found in the Fletchering Hills, the home of Xaradriel's creation, the halfling. Their kind are willing to part with it for a price. It is a mere reflection of citrine as citrine is a mere reflection of Dia. Crocoite struggles to maintain the same longevity as citrine, but rather has the temptation of short-term potency. For this reason, many abuse it as a narcotic and quickly deplete its essence without supplementing it with their own joy. If a warrior would align themselves to crocoite with their own joy, they would receive a lesser blessing of citrine.`,
                image: crocoite,
                imageAlt: `Qeṽa Crocoite Gem`,
                lvls: ["+5 Death Save", "+10 Death Save", "+5 Speed", "1 Guaranteed Death Save", "+10 Speed"]
            },
            {
                id: 2,
                name: `Azurite`,
                quality: `Charisma`,
                parentStone: `Amethyst (Peace)`,
                syntheticStone: `Control`,
                darkStone: `Mayhem`,
                smDescription: 
                    `Stone native to Shaolë home of the ocri`,
                description:
                    `Azurite is the stone of charisma, which is born out of Amethyst, the cardinal stone of peace given to the elden, Moriel. Thus, it grows abundantly in the dangerous regions of the grave mountains and Akukar canyon. The dark races are too diminished in sentience to make use of it and pay no attention to it though its power is rooted in Amethyst and can provide a persuasive and charming kind of peace. You must warn the caracadre who venture there of the peril of such a quest. Few who wander into Shaole ever return.`,
                image: azurite,
                imageAlt: `Qeṽa Azurite Gem`,
                lvls: ["+1 CHA", "+3 CHA", "+5 CHA", "+8 CHA", "+10 CHA"]
            },
            {
                id: 3,
                name: `Rutile`,
                quality: `Endurance`,
                parentStone: `Pyrite (Patience)`,
                syntheticStone: `Tolerance`,
                darkStone: `Impulse`,
                smDescription: 
                    `Stone native to the Thrush Mountains, home of the Dwarves`,
                description:
                    `Rutile is the stone of endurance, which finds life from the cardinal stone, pyrite. It is dull yellow and shoots out of stone like hardened wheat. It grows from the axe-carved tunnels of the dwarven mines in the Thrush mountains. To them it is a nuisance, but to others it promises an endurance of mind and body.`,
                image: rutile,
                imageAlt: `Qeṽa Rutile Gem`,
                lvls: ["+1 HP", "+3 HP", "+5 HP", "+8 HP", "+10 HP"]
            },
            {
                id: 4,
                name: `Tanzanite`,
                quality: `Truth`,
                parentStone: `Sapphire (Kindness)`,
                syntheticStone: `Deception`,
                darkStone: `Wrath`,
                smDescription: 
                    `Stone native to Haven, home of the Gnomes`,
                description: `The greatest kindness is truth, found in the blue stone of tanzanite. At their best, a gnome is both kind and truthful and that is the hearty welcome one often receives in Haven.`,
                image: tanzanite,
                imageAlt: `Qeṽa Tanzanite Gem`,
                lvls: ["+3 Insight", "+6 Insight", "+9 Insight", "+12 Insight", "+15 Insight"]
            },
            {
                id: 5,
                name: `Jade`,
                quality: `Awareness`,
                parentStone: `Emerald (Goodness)`,
                syntheticStone: `Unbending`,
                darkStone: `Evil`,
                smDescription:
                    `Stone native to the forests of Mahelos`,
                description: `Trees have limited movement and limited volition, but they do listen. At their best, sentient trees are highly aware and the incidental stone of jade grows from their presence. It is a opaque, light green in color.`,
                image: jade,
                imageAlt: `Qeṽa Jade Gem`,
                lvls: ["+3 Perception", "+6 Perception", "+9 Perception", "+12 Perception", "+15 Perception"]
            },
            {
                id: 6,
                name: `Jet`,
                quality: `Loyalty`,
                parentStone: `Onyx (Faithfulness)`,
                syntheticStone: `Certainty`,
                darkStone: `Faithless`,
                smDescription: 
                    `Stone native to Arvañon, home of the Elves`,
                description: `While faithfulness can be difficult to see and measure, loyalty is not. Musgravite is a dark purple, which often appears clear gray in its gem form.`,
                image: jet,
                imageAlt: `Qeṽa Jet Gem`,
                lvls: ["+2 TOP ABILITY from ally present", "+4 TOP ABILITY from ally present", "+6 TOP ABILITY from ally present", "+9 TOP ABILITY from ally present", "+11 TOP ABILITY from ally present"]
            },
            {
                id: 7,
                name: `Chryscocolla`,
                quality: `Stealth`,
                parentStone: `Turquoise (Gentleness)`,
                syntheticStone: `Apathy`,
                darkStone: `Violence`,
                smDescription: 
                    `Stone native to Mhindileth, home of the oaki`,
                description: `A gentle foot is a stealthy foot. Though Chryscocolla does not glow like turquoise, it shares its teal hue. Chryscocolla is hidden away in the tunnels of Mhindeleth and grows alongside its parent stone turquoise.`,
                image: chryscocolla,
                imageAlt: `Qeṽa Chryscocolla Gem`,
                lvls: ["+3 Stealth", "+6 Stealth", "+9 Stealth", "+12 Stealth", "+15 Stealth"]
            },
            {
                id: 8,
                name: `Pruskite`,
                quality: `Dexterity`,
                parentStone: `Ruby (Self-Control)`,
                syntheticStone: `Self-Focus`,
                darkStone: `Havoc`,
                smDescription: 
                    `Stone given to Thelmiel to create Aviame`,
                description: `pruskite is the stone of dexterity, born out of Ruby, the cardinal stone of self-control. Much like the elves, the Aviame are protective of this stone and require those who seek it to pass a set of trials. Caracadre warriors are enrolled in the legendary Aviame school of archery and combatives. Caracadre must be willing to set aside their personal possessions and affairs for the unpredictable duration of time to become a honorary Avikain. If they ever choose to leave before their training is complete, they may never return. In the same way as the elves, these trials prepare the Caracadre to align with pruskite.`,
                image: pruskite,
                imageAlt: `Qeṽa Pruskite Gem`,
                lvls: ["+1 DEX or INIT", "+3 DEX or INIT", "+5 DEX or INIT", "+8 DEX or INIT", "+10 DEX or INIT"]
            },
            {
                id: 9,
                name: `Bismuth`,
                quality: `Intelligence`,
                parentStone: `Opal (Wisdom)`,
                syntheticStone: `Manipulation`,
                darkStone: `Recklessness`,
                smDescription: 
                    `Stone native to The High Mountains, meeting place with DIA`,
                description: `Bismuth is the stone of intelligence, born out of Opal the cardinal stone of wisdom. It seems to heighten one's ability to recall information if one binds themself to it, but it does not hold the power to discern as Opal does. Guide those who seek it the high mountains, where we, the oracles convene with Dia. Warn them of the harsh temperatures and grade of the climb. It is no small feat and many have fallen into icy graves before we could reach them.`,
                image: bismuth,
                imageAlt: `Qeṽa Bismuth Gem`,
                lvls: ["+1 INT", "+3 INT", "+5 INT", "+8 INT", "+10 INT"]
            },
            {
                id: 10,
                name: `Amber`,
                quality: `Constitution`,
                parentStone: `Topaz (Hope)`,
                syntheticStone: `Lust`,
                darkStone: `Cynicism`,
                smDescription:
                    `Stone native to Navalil, the heart of Avlim`,
                description: `Amber is the stone of constitution, born out of Moonstone, the divine stone of sentience. While Moonstone is inseparable from sentient nature, amber has an effect on one';s mental and physical health and vitality. It is a honey-yellow stone that grows from the heart of all sentient life, Brielle, the land of the Elves. The Elves do not treat the substance lightly and keep it under guard at Cathedral Brielle in the Great library of stones. The Caracadre who seeks it must pass the trials of the Elves who test the character of the Caracadre. These tests are not designed to weed out unworthy candidates, but rather make one worthy to align with the stone and prepare them as a Caracadre.`,
                image: amber,
                imageAlt: `Qeṽa Amber Gem`,
                lvls: ["+1 CON or AC", "+3 CON or AC", "+5 CON or AC", "+8 CON or AC", "+10 CON or AC"]
            },
            {
                id: 11,
                name: `Whitestone`,
                quality: `Selflessness`,
                parentStone: `Pearl (Humility)`,
                syntheticStone: `Envy`,
                darkStone: `Pride`,
                smDescription:
                    `Stone native to the limestone cliffs of southwestern Avlim`,
                description: `Whitestone is a white chalky limestone, which is found as the primary rock in the southwestern cliffs (including the mirror cliffs on Haven originally apart of Avlim). It is truly the stone of selflness as it garners the least respect of all stones by far. If one follows it's quality long enough, it will solidify into pearl.`,
                image: whitestone,
                imageAlt: `Qeṽa Whitestone`,
                lvls: ["+1 ABILITY to other", "+3 ABILITY to other", "+5 ABILITY to other", "+8 ABILITY to other", "+10 ABILITY to other"]
            }
        ]
    },
    {
        id: 3,
        link: `/qeva-compendium/gems/overview`,
        name: `Gem Overview`,
        topics: [
            {
                id: 0,
                name: `What are Gemstones in Qeṽa?`,
                description: `Gemstones are living things like plants or animals and they require proper care to be kept alive. They are renowned for the abilties they grant, but they do not grant such abilities unwillingly. One must bind yourself to the property of the stone if they are to access its abilities. It is a mutual relationship of sacrifice. Only as much as one portrays the stone's qualities will it yield itself to the person. If one gives themselves wholly to a stone's attribute, they will receive power from the stone.`,
                subtopics: [
                    {
                        id: 0,
                        name: `Divine Stones`,
                        description: `The Divine stones of DIA are those that are not native to Qeṽa as their reflective nature of DIA is too vast to be understood in our world. However, by divine allowance some have found their way into our world, but are not to be sought. This being said, evil forces are drawn to them in their desire to usurp DIA.`
                    },
                    {
                        id: 1,
                        name: `Cardinal Stones`,
                        description: `The cardinal stones are those stones which shattered from the mirror of his essence, sprinkled onto Qeṽa and divined to take shape into creation. Their properties are more difficult to perceive than incidental properites and are therefore seen as less valuable than incidental stones by the common person. They are found most abundantly in Agate and are sought most prominently by oracles.`
                    },
                    {
                        id: 2,
                        name: `Incidental Stones`,
                        description: `The incidental stones arise from the presence of cardinal stones and their properties are visible outcroppings of cardinal properties. Since they are mere byproducts of DIA's attributes, they are weaker than the cardinal stones though not in the eyes of the common person. Unlike cardinal stones, incidental stones grow and can be found throughout Avlim. They are most notably sought after by the Caracadre, though nearly all value them.`
                    },
                    {
                        id: 3,
                        name: `Dark Stones`,
                        description: `If an individual neglects a stone's attribute, the stone will slowly be depleted and turn black, revealing an absence of this quality in this person's life.. Such stones are known as "dark stones". A dark stone allows a wraith to attach themselves and provoke the opposite quality ex. Mayhem in the stead of peace. Some people overcollect and hoard the gems for their power and learn quicker than most about the darkening of gems. Professional jewelers and acolytes however have learned methods to collect many gems while still maintaining their quality.`
                    },
                    {
                        id: 4,
                        name: `Synthetic Stones`,
                        description: `Those who are knowledgable know that stones can also be "opened" or altered to become "synthetic" A synthetic stone allows an individual to tinker with the stone's property and adapt it to their purposes. For example, synthetic pruskite is indulgence. It adapts the positive quality of joy to be misused for personal pleasure and indulgence. It is important to note than only cardinal stones can be synthesized. Divine stones are unopenable and incidental stones are not alterable.`
                    }
                ]
            },
            {
                id: 1,
                name: `Grades of Gemstones`,
                description: `Not all gemstones are created equal. A gem can vary by its quality in the areas of cut, color, clarity and carat (defined below). The purer a stone is in each of these areas, the greater its potential in relation to its attribute. The purest gems are found on the island of Agate, where the oracles receive their blessed stones from DIA. The purity of these stones aligned with the purity of the oracle's heart is what makes them the most powerful warriors in Avlim. Rarely do any other seekers of stones receive the chance to visit this island and therefore must settle for lesser gems and be mindful of quality when selecting their gems. The grading of gems has significant implications. It is the different grades of gems that allows for the separating of the heavenly layers. The purest celestite, veils DIA and a lesser grade veils the ethereals. Desdcending grades veil the other layers of heaven. It was by betraying his holiness that Moriel reached through the veil of the void and lifted it permitting evil into the world.`,
                subtopics: [
                    {
                        id: 0,
                        name: `Cut`,
                        description: `Cut refers to the facets, symmetry, and reflective qualities of a gem. The better the cut, the more it will be able to reflect its quality and so open itself to power and sparkle in appearance. The quality of a cut is effected by the skill of the gemcutter who cut it. It can be perfected or corrected with the skill of a gemcutter.`
                    },
                    {
                        id: 1,
                        name: `Color`,
                        description: `Color refers to the color or lack of color visible within the gem, The brighter the gem, the rarer it is in value. A gem's color is perhaps the most variable of the qualities as color is directly effected by the stone's alignment to its quality. If its seller or previous owner did not align to it, it will darken. If it lies in a region of evil, it will darken. Thankfully, this can be redeemed and a stone can be revivened to its full health again if alignment is achieved.`
                    },
                    {
                        id: 2,
                        name: `Clarity`,
                        description: `Clarity is determined by the visibility of natural inclusions and imperfections within a gem. Gems with little to no inclusions are considered particularly rare and highly valued. Unlike 'color', this cannot be altered by its carrier.`
                    },
                    {
                        id: 3,
                        name: `Carat`,
                        description: `Carat is the unit of measurement used to describe the weight of a gem. It is often the most visually apparent factor when comparing stones and like clarity cannot be altered.`
                    },
                ]
            },
            {
                id: 2,
                name: `Inception of Gemstones`,
                description: `In the beginning, DIA molded molten obsidian into the shape of the earth. Above it, HE spun into shape a mirror of HIMSELF in the form of a fluid, translucent orb. The orb reflected HIS essence in lesser yet brilliant colors. When HE saw that it was good, HE allowed the swirling orb to harden into crystal. Now DIA knew that his creation would not be able to comprehend his nature as a whole. And so he shattered the reflection of himself and the fragmented attributes sprinkled onto the earth into billions of gemstones; each one a particle of His character, an attribute of His essence. Thus began the sparkling age.`,
                subtopics: [
                    {
                        id: 0,
                        name: `The Sparkling Age`,
                        description: `For a thousand years, the whole planet glittered from the brilliance of topaz, jade, emerald, diamonds, amethyst, blue sapphire and many more precious stones embedded in the soft ground. The ground itself became the dust of gems. When the time was right, a great heavenly host was created to tend to them. The attributes mixed with one another and took shape into air, trees, animals, insects, rivers and mountains. His steadfastness was pronounced in stone and his invisibility in air. His attribute of immensity never in fact reached the ground, but rather flew past the planet. It continued to expand and grow and break apart into more and more planets, stars, moons, meteors and galaxies. The music of DIA was shattered into separate sounds. What was once a single song was broken into the sound of waves, wind and the chirping of birds. DIA was delighted to see his creation find life and joy in his essence, but his chief creations were still before him. DIA collected gemstones from throughout the earth to form the first sentients, but none more so than opal, that is wisdom and diamond, that is love. Not all gemstones took shape into another creation. Some gemstones DIA alloted to keep their original form and these are the gemstones that are discussed here.`
                    },
                    {
                        id: 1,
                        name: `DIA's Reflection`,
                        description: `The reflection DIA's image does not end at Qeṽa's cosmology. All creation can continue to align to DIA's image by aligning to their purpose. An amethyst crystal holds the purpose of peace and so must reflect peace to reflect DIA. A person who to this stone furthers its purpose. A sentient should aim to grow in all attributes, but this is no easy challenge. In fact it is said that only DIA can perfectly reflect all the qualities of the gemstones and so it is only when he takes physical form that it can be done andits brightness would be unfathomable. This of course is what happened with Alohir at the breaking of darkness and the end of the void era. The great warrior Alohir was possesed by DIA's spirit and even in this imperfect vessel, the light was so bright his fellow warriors had to look away.`
                    },
                    {
                        id: 2,
                        name: `The Allstone & the Island of Agate`,
                        description: `When all the cardinal stones are present in one stone, it is called an allstone and creates a mirror to see DIA. With it, one is capable of one great act of power or looking through it and seeing DIA at the risk of becoming blind. There are only rare tales of those who have 'seen DIA and lived'. While all cardinal stones are present at the Island of Agate, the island itself is an allstone and incredible bright within. A visitng oracle must close their eyes when selecting a gem unless they wish to see DIA and be blind. They look for the color that calls them through their eyelids.`
                    }
                ]
            },
            {
                id: 3,
                name: `Oracles & Stones`,
                description: `Oracles seek a single cardinal stone in their path to become an oracle. Through this one stone, they attempt to channel evey attribute of DIA. To decide on their stone, they ponder what attribute they cherish most and where DIA has fanned the passion within their heart. They then undergo a ceremony, which pertains traveling to the island of agate to obtain their chosen gem.`
            },
            {
                id: 4,
                name: `Caracadre & Stones`,
                description: `Caracadre seek gems like oracles, but far differently. Firstly, caracadre seek incidental gems rather than cardinal gems as their order has deemed them as more valuable. Secondly, caracadre ultimately seek to atune to multiple gems. While they atune to one at a time, their ultimate goal is to become a grand caracadre, an individual who masters at least seven incidental gems. They venture to the known locations of the gems and sometimes must undergo tests by those who protect the gems.`
            },
            {
                id: 5,
                name: `Terminology`,
                description: `Terminology for gemstones are flexible as knowledge of them varies. However, here is the most technical separation of terms.`,
                subtopics: [
                    {
                        id: 0,
                        name: `Gemstones`,
                        description: `Gemstones encompases all stones known to contain a unqiue property and maintain their original form.`
                    },
                    {
                        id: 1,
                        name: `Stones`,
                        description: `This is often used interchangeably with "gemstones" however, it can also refer simply to rock.`
                    },
                    {
                        id: 2,
                        name: `Jewels`,
                        description: `Jewels are gemstones, which have been refined and polished or attached ornately to a person.`
                    },
                    {
                        id: 3,
                        name: `Crystals`,
                        description: `In Qeṽa, crystals are synonymous with gemstones for all gemstones are pure substances. However, crystals often refer to incindental stones, which more often take crystaline structures given their growth out of the ground.`
                    }
                ]
            }
        ]
    }
];
