import avikin from '../imgs/logos/avikin-white.png';
import caracadre from '../imgs/logos/caracadre-white.png';
import elvishcloaks from '../imgs/logos/ecloaks-white.png';
import ghostblade from '../imgs/logos/ghostblade-white.png';
import oracle from '../imgs/sentinel-logo-white.png';
import uncorrupted from '../imgs/logos/uncorrupted-white.png';
import toppler from '../imgs/logos/topplers-white.png';
import avlimeth from '../imgs/logos/helmsman-white.png';
import feather from '../imgs/logos/feather.png';
import genograve from '../imgs/genograve.png';
import initiate from '../imgs/classes/initiate-white.png';
import _caracadre from '../imgs/classes/_caracadre-white.png';
import cadre from '../imgs/classes/cadre-white.png';
import kikadre from '../imgs/classes/kikadre-white.png';
import krykadre from '../imgs/classes/krykadre-white.png';
import masqadre from '../imgs/classes/masqadre-white.png';
import maulQadre from '../imgs/classes/maulQadre-white.png';
import grandCaracadre from '../imgs/classes/grandCaracadre.png';
import { DNDLEVELS } from './DNDLEVELS';

/* CLASSES: 

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

export const CLASSES = [
    {
        id: 0,
        link: `/classes/oracles`,
        quality: `Supreme Guardians of Avlim`,
        goal: `Guide the Nations to Reflect DIA's Image`,
        name: `Oracles`,
        race: ['Elf', 'Aviame', 'Human', 'Dwarf', 'Gnome', 'Halfling'],
        primaryWeapon: `Zanhari`,
        sacredText: `Sa Siavana`,
        worldKnowledge: `High`,
        image: oracle,
        imageAlt: `Oracle Logo`,
        hitDie: 'd12',
        equipment: ["Zanhari Sword", "Olive Leaves"],
        weapon_prof: ["Zanhari Sword"],
        saving_throw_prof: ["Dexterity", "Wisdom"],
        skill_prof: ["Dexterity", "Wisdom", "Religion"],
        lvls: DNDLEVELS.oracles,
        topics: [
            {
                id: 0,
                name: `Overview`,
                description: `Oracles are the guardians of Qeṽa and are viewed as authoritative figures in all of Avlim. To maintain this, they are the only beings formally trained by the Eldar in the arts of divination - what is commonly known as magic. Given their prestige and weight of responsibility, A novitiate cannot volunteer, but can only be selected. Before accepting this role, one should know that oracles have a strict moral code and life of discipline; To follow this path is to accept a difficult and restricted life, but no less rewarding. However, only races endowed with the capacity for divination are fit to serve in such a role. To initiate themselves as oracles, a novitiate must walk to the sacred island of agate and attune themselves with one of the cardinal stones that lies there. They also select a cut of opal, which is crucial to the forging of the iconic blade of an oracle.`
            },
            {
                id: 1,
                name: `The 9 Blessed Attributes`,
                description: `Among the attributes that rained down onto Qeṽa, nine were blessed. Blessed they were because they were chosen among the cardinal stones to be given to the nine eveile, the first sentience to walk the shores of Avlim. You must ground yourself in each and learn to have command over them as your first step as oracle. As you master each, you will slowly earn each piece of your oracle set of armor. During the learning of the blessed attributes, you will take a vow of silence that will not be lifted until the process is complete. Here they are in the order that you must master them.`,
                subtopics: [
                            {
                                id: 0,
                                name: `Peace`,
                                description: `Peace is the attribute given to Moriel in the form of amethyst. It fascinated me, a lowly eveile, that DIA would allow this attribute of them all to be corrupted by Moriel. For true peace shines brightest in the darkest hour. True peace does not result from positive circumstances, but endures despite negativity. Peace then is an attribute to strive toward rather than a state to hope for. As an oracle you are born for the crucible. Wherever there is fire, there you will be thrown. Prepare yourself with this attribute to endure.`
                            },
                            {
                                id: 1,
                                name: `Patience`,
                                description: `Patience is the attribute given to the eveile, Ferthrui. DIA gave it the physical form of pyrite, which shares a similar appearance with gold. Patience is the principal attribute of the dwarves and there is no better example of patience in all the first shores than in their mines and forges. They toil under the mountain day after day and not every day bears fruit. In fact it is most days that they chip away at earth and stone with mere specs of gold and dust of gems to show for it. Despite this seemingly meager return on their toil, they are the wealthiest peoples in all of Avlim. Their patience in trading present difficulty for future reward is evident in their wealth. Likewise, you oracle must be cognizant of the greater goal. Do not become so lost in present battles that you lose sight of the war.`
                            },
                            {
                                id: 2,
                                name: `Self-Control`,
                                description: `Self-Control was given to Thelmiel, an attribute embodied in ruby. The red color of the raw stone represents the blood and sweat of discipline and the polished stone represents the beauty it brings. It is a popular and beautiful stone that draws the eyes of many and yet few are willing to undergo the discipline it takes to furnish it in their lives. It is an active practice of regimen and repetition that requires incredible focus and determination. One must be willing to sacrifice everything for their goal. For a ruby does not become brilliantly polished without the pain of discipline. Be the ruby, oracle as you pursue your goal. Give everything if you are to succeed.`
                            },
                            {
                                id: 3,
                                name: 'Joy',
                                description: `Joy is the attribute given to the eldar, Xaradriel in the form of citrine. A rough red stone, that is less pronounced than the other stones when polished. Joy is best described in contrast to happiness. Happiness is a short lived rush of personal pleasure. It may last a minute or an hour a day or a month, but inevitably it drops into a valley. Its peaks are high and its valleys low and the only way to experience another peak is to indulge twice as much as the last time. It has a hunger that is never satisfied and the seeker of happiness is doomed to . Contrarily is joy, which does not offer the same rush of pleasure that happiness does. Its peaks are hills to the mountainous peaks of happiness, but it lasts much longer. It can survive the harsh winters of life and the droughts of happiness.`
                            },
                            {
                                id: 4,
                                name: `Goodness`,
                                description: `Goodness is the attribute found in green emerald, which gave life to the arborum. It was given to the eldar, Arboriul at the divergence. Like the races it formed, it is difficult to grasp. It is a purity of heart that seeks DIA's attributes of all else. As goodness develops in a person, they detach themselves from divisive passions and misplaced emotions and seek only the attributes set in stone. Pursue goodness to alleviate the burden of selfishness that you may be kinder and more loving to all`
                            },
                            {
                                id: 5,
                                name: `Faithfulness`,
                                description: `Faithfulness is the attribute  given to the eveile, Nware, whose life was taken earliest among us. Before Agate above, he was given onyx, the stone of faithfulness. It is a loyalty that should not be quickly overlooked, for it is truly a great quality to be gifted. Faithfulness leads one to trust in something or someone outside of themselves, which leads to community, perseverance and most significantly the heart of all attributes, humility. Our purest form of faithfulness is faithfulness to Dia. Be faithful to Him, oracle and He will be faithful to you.`
                            },
                            {
                                id: 6,
                                name: `Gentleness`,
                                description: `Gentleness was the prominent stone when Mhindil gave sentience to the Aeoki. It is embodied in the glowing gem of turquoise which lights the halls of Agate and the Zanhari of the oracle. Much akin to kindness, gentleness is soft and tenderhearted in nature. It is a vulnerable disposition and empathy that finds its strength from within. Where others develop hard outer shells to protect a sensitive soul within, the gentle one is soft on the outside and hardy within. They open themselves open to attack, but are built to withstand it. The honing of this attribute will be painful, but worth the peace that will last a lifetime.`
                            },
                            {
                                id: 7,
                                name: `Kindness`,
                                description: `Kindness is the attribute given to Çairça to craft the gnomes and is found in sapphire. The soft blue color of the stone reflects the soft and tender hearted nature of this attribute. The one who is kind, is not focused on themselves, but focused on others. They cater to the needs and desires of others that they may feel loved and cared for. Few in the world deserve kindness, but to deal it out justly would be to misunderstand the attribute. Kindness is meant to be given out thoughtless of who deserves it. Remember, oracle, that you are the shepherd and the noble people are your sheep. Care for them as you would your own and learn to forget your needs in lieu of theirs.`
                            },
                            {
                                id: 8,
                                name: `Love`,
                                description: `First of all attributes was love, given to the eldest of the eveile, Amare. It takes the shape in diamond, which is white and opaque in the earth, but clear and sparkling when cut and polished for love reveals the beauty of all stones. You see then my dear oracle that love is not a feeling as many misunderstand it. It is an act; an act of patience, kindness or faithfulness among any form of goodness. It will be the last attribute you master for it marries self-control and faithfulness to the remaining blessed attributes. So then, pursue it as such. Do not seek to control your emotions, but rather your actions. Focus on holistically joining the cardinal attributes into a cohesive code that you will live by as an oracle of Qeṽa. Only then will you master the attribute of love.`
                            }
                        ]
            },
            {
                id: 2,
                name: `The 6 Disciplines`,
                description: `There are six disciplines that mark the life of the oracle. Practice and exercise them regularly to uphold your oath and remain focused on the blessed attributes. You are to master these disciplines not only for your own benefit, but also for the respect of the noble races and for the mentorship of future caracadre and oracle.`,
                subtopics: [
                    {
                        id: 0,
                        name: `Humility`,
                        description: `Humility is the core principle that underlies all nine blessed attributes. The one who is humble will find joy itself and be kind, good and gentle with others who are no worthier than they. They are patient with others for they know they require patience. They are peaceful and content because they have no expectations of deserving something greater. The humble one sees their life as so lowly that its only value is in faithful, self-controlled service to Dia. Remain humble and you will remain in the blessed attributes that will hone the oracle disciples sharper than volcanic glass.`
                    },
                    {
                        id: 1,
                        name: `Divination`,
                        description: `Divination is what separates the oracle from all else and should not be viewed. lightly. It is the noble races' one connection with DIA and the only way to commune with Him after the darkening of Qeṽa. When the people refuse to acknowledge the words of Dia, it allows you authoritative power to oppose insurrection. Practice these arts daily and grow in your knowledge and skill, remembering that you are not the only beings in Qeṽa to hold them. The dark mages of Moriel are influenced by evil heavenly beings who will challenge your abilities and defeat you if you do not sharpen them.`
                    },
                    {
                        id: 2,
                        name: `Reflex`,
                        description: `As arbiters of Dia, you are not only entrusted with supernatural abilities, but natural ones as well. You are gifted with the training of reflex and weaponry that must not end after you have taken an oath. Training must continue that you may be a skilled warrior who is worthy of the Zanhari blade; one able to defend the noble peoples and lead their military efforts in the time of need.`
                    },
                    {
                        id: 3,
                        name: `Presence`,
                        description: `Presence will allow you to be aware to DIA's guidance and the need of your shepherding across the lands. You must first and foremost be present in meditation and prayer with Dia.  Be close to His thoughts that you may be His hand on the earth. Seek quietness in your life that you may be aware to his call and aware to the needs of those entrusted to you. Roam the lands and be well-acquainted with the names, faces and struggles across the races. You must know them as a parent knows their children to be a trustworthy figure of wisdom. Be aware of your surroundings at all times that you may be ready to adjust to any event.`
                    },
                    {
                        id: 4,
                        name: `Arbitration`,
                        description: `As an oracle, you must have the highest sense of wisdom in all the first shores. As you know that all peoples and races are granted sight, smell, hearing, touch, taste and wisdom, you must master the last in order to intercede for God and arbitrate for people. You will be the counsel of kings and many will seek you out for guidance. Develop your wisdom sense above all else that you may lead them rightly and resolve disputes with honor.`
                    },
                    {
                        id: 5,
                        name: `Service`,
                        description: `Care for your blade and care for others. In alignment with the blessed attributes of kindness, goodness and gentleness, lender to your abilities to all in service to them.Leaders ought to be servants and you are their model of leadership. Do not see any task as to miniscule for you to take up. Help the hafling push his cart into town and the Aeoki find his lost stone. Not only will this develop trust, but it will be a sign of your humility, which must be ever-present in your life. Serve and care for your blade as an extension of yourself. Sharpen it, clean it, protect it. Serve it well and it will serve you well.`
                    }
                ]
            },
            {
                id: 3,
                name: `The Five Sacred Duties`,
                description: `As an oracle, you are tasked with three sacred duties to guard and protect the noble people of Avlim. Your training in the blessed attributes and mastery of the disciplines will prepare you for these tasks.`,
                subtopics: [
                    {
                        id: 0,
                        name: `Intercession`,
                        description: `Greatest among your duties is to commune with DIA on behalf of the noble races. It is for this sole reason that you were appointed. Take your place in the High mountains and discern by far speech His purposes that they may be shared with those below the cloud.`
                    },
                    {
                        id: 1,
                        name: `Arbitration`,
                        description: `The people of Avlim have distanced themselves from the attributes of Dia. They are quarrelsome with many disputes among them. It will be your role to resolve such problems as a parent does for their children. Watch out for the weak and seek out opportunities to bring justice and blessing where it has been lost.`
                    },
                    {
                        id: 2,
                        name: `Combat`,
                        description: `There are times when people are too stubborn or evil too strong-willed to submit to your authority. When all else fails, there will be times when force or even the Zanhari will be needed. Use this sparingly and as a last resort. Remember that divination is what sets you apart.`
                    },
                    {
                        id: 3,
                        name: `Mentorship`,
                        description: `Your role as oracle is incomplete if you do not train others to take up your place. Listen to the whispers and tremors of wisdom to find the one selected by Dia. Do not worry for he will guide your path. Your oracle novitiate will be as clear to you as a lamp in a dim room. You are also tasked to mentor caracadre, which will be numbered by the olive leaves plucked from the branch that stoked the fires of your oath.`
                    },
                    {
                        id: 4,
                        name: `Archiving`,
                        description: `The wealth of information granted to the oracles requires great responsibility. As an oracle, you are in charge of maintain this information and archiving it for future generations. Scribe the Sa-Siavana, Collect all nine cardinal stone and maintain cathedral repairs.`
                    },
                ]
            },
            {
                id: 4,
                name: `Beliefs about Stones`,
                description: `In the beginning, DIA shattered the mirror of his essence into gemstones; each one a particle of His character, an attribute of His essence. One of the sacred most steps to becoming an oracle is the selection of one of these stones, attributes of DIA in their original form. A single cardinal stone you will select to guide your path as an oracle. Ponder what attribute you cherish most and where DIA has fanned the passion within your heart. Here you will be most in tune with your stone. There are many stones that mark Qeṽa, but your stone, oracle must be a cardinal stone from the crystal island of Agate. Understand these stones and their place amongst the divine and incidental stones if you are to become a master oracle.`,
                subtopics: [
                    {
                        id: 0,
                        name: `Selecting a Cardinal Stones`,
                        description: `Remember oh oracle, that such stones do not grant power unwillingly. You must bind yourself to the ideal of the stone if you are to access their abilities. It is a mutual relationship of sacrifice. Only as much as you portray the stone’s qualities will it yield itself to you. Neglect their attribute and they will turn dark as night. Give yourself wholly to their attribute and your power will be beyond measure. All Cardinal stones are the gateway to divination, but only you, oracle, are gifted with knowledge of this path.Know yourself to know the stone that you ought to bond to. You must be clear of this when you make the journey, for all the stones in Agate will brighten in the presence of an oracle. It may happen that the stone you seek will not make itself known in Agate. This is certain for any who seek the pearl of humility. If your stone is unsearchable, take a rock from the ground and treat it as you would a gemstone. This is no easy path and far lonelier than that of a cut gem. Stray but a little and the rock will forever and always be nothing but a rock. However, if you are true to your attribute and bind yourself to it unswervingly, such a strong attribute will overcome the core of your rock and become that which you pursue. You may notice a light glow of the rock at night or sparkling specs on the surface. You may notice nothing. Only time will tell and the time needed cannot be known.`
                    },
                    {
                        id: 1,
                        name: `Divine Stones`,
                        description: `the Divine stones of DIA are those that are not native to Qeṽa as their reflective nature of DIA is too vast to be understood in our world. However, by divine allowance three have found their way into our world, but are not to be sought.`
                    },
                    {
                        id: 2,
                        name: `Cardinal Stones`,
                        description: `Then there are the cardinal stones of DIA from which were shattered from the mirror of his essence, sprinkled onto Qeṽa and divined to take shape into creation. You must choose one of these to initiate your divination training as an oracle. Selecting one does not stone does not mean that you fixate on one attribute. Rather, the meditation on one stone should lead you to fulfill all the cardinal stones.`
                    },
                    {
                        id: 3,
                        name: `Incidental Stones`,
                        description: `Also known as “common stones” or “power stones” among the noble races, The incidental stones arise from the presence of the cardinal stones. They are mere byproducts of DIA's attributes and are far weaker than the Cardinal stones.  Many will deny this, but know it to be true. The incidentals are more abundant and can be found throughout Avlim drawing from the power of cardinal and divine stones. Know oracle that these stones are not of primary importance to you, but to the Caracadre who seek a more readied path to align themselves with the attributes of Dia. We will teach you their properties and locations that you may be a source of knowledge for those seeking the reflection of Dia.`
                    },
                    {
                        id: 4,
                        name: `Synthetic Stones`,
                        description: `Synthetic stones are those that are unnatural and in opposition to DIA's attributes. They have been crafted by evil hands and not by DIA's hands. They are created and used by mages who have aligned themselves with evil spirits. Remove yourself from the presence of these stones at all cost, as they are alluring, but wholly destructive. They offer you new sensations that lead to addiction and inevitably death from within. Do not listen to their smooth speech which says such titillation can be controlled. For in the end, you either destroy the stone or it will destroy you.`
                    },
                    {
                        id: 5,
                        name: `Dark Stones`,
                        description: `Dark stones are those synthetic stones that have been so manipulated that they are unrecognizable from their originating attribute. Unlike other synthetic stones, their very presence will repel you and you will repel them. If not by feeling, you will recognize the depth of their dark color; so void of light that they are pitch black at their core. They are often carried by the commanders of the dark armies or evil mages. A mage can create them alone, but a commander requires the direct intervention of evil spirits.`
                    }
                ]
            },
            {
                id: 5,
                name: `Baptism into the Oracle Role at Agate`,
                description: `The initiation into the oracle role is unparalleled in difficulty and sanctity. Once you have meditated on the stone you will pursue, you must take passage to the sacred crystal isle of Agate on the Western shores of Avlim. Here you will obtain your Cardinal stone. While you are graced to take this journey at any time, a caracadre may only travel here when the waters are at peace during the summer and autumn equinox.`,
                subtopics: [
                    {
                        id: 0,
                        name: `Preparation`,
                        description: `Before your journey, you must make the proper preparations to Your preparation must begin by emulating the attribute of the stone. You will want to be ready to receive the stone and connect with it before your venture. With such a mind, the stone will call for you from afar and it will glow in the depths of Agate at your presence.Then gather an olive branch from the garden of Engorath and press it into this page of the book of Xaradriel. A dry leaf will signify that you are ready to embark.`
                    },
                    {
                        id: 1,
                        name: `Passage`,
                        description: `Make for Amaga beach with a tin and waterskin filled with pure water from the lakes of Egora. Keep the Fletcheren hills to your left and the High Mountains to your right and do not stop until you have reached the western edge. Do not eat, drink sleep nor rest. Once you have reached the coast, make a small fire and crush the olive branch leaf into a tin of boiling water. You must pray over this tea and drink it before you face the tempest of the west. Immediately after you finish, cast the tin aside and begin to walk on the original planks of our forefathers. They will rise to meet your feet and the ocean will calm around you if only you trust in DIA's providence.`
                    },
                    {
                        id: 2,
                        name: `Selection`,
                        description: `If you reach the island of Agate, you know that you have DIA's blessing and may walk with your oracle guardian down the crystal staircase at the center of the island. At your coming, all stones will be glowing, so you must close your eyes and search for the color of the stones you seek through your eyelids. Two you must seek above the reset: opal and the stone to which you are bonded. You will need a small cut of each: one as your cardinal stone and the opal for the crafting of your Zanhari. With your reward received, you may now rest in the depths of Agate. The potency of the attributes in the island will grant you the deepest, most unusual, warm rest you have ever experienced in your life or ever will experience again till Agate above. Your need for rest will diminish from henceforth.`
                    },
                    {
                        id: 3,
                        name: `Return`,
                        description: `In order to leave the island, you will need to divine the stepping planks yourself. Here your faith in DIA is tested in a different way. Therefore, meditate and bond with your newly secured cardinal stone and dedicate it to Dia. When you step out to meet the steps to Agate, imagine their shape below the waves. Bond with them and understand them. The stronger your conception of them, the stronger your will will be over them. Physically lift your arms and tense your hands to pull them upward. Above all else pray to DIA and call on him for help for he will not leave you there alone.  The crossing of the steps back to the shores of Amaga beach completes your journey. You are now ready to begin your training in Divination`
                    }
                ]
            },
            {
                id: 6,
                name: `Relation to Divination`,
                description: `Remember oracle of Qeṽa, that you are to be a master of all forms of divination. It is for this reason that no man nor orc will ever obtain the role as oracle. Be earnest in your study that you may earn the respect of the noble people of Avlim and beyond. Do not seek to understand the limits of divination, but rather the possibilities as they are not all shown here - only their roots. Do not be persuaded to use magic, the dark divination of Moriel's hosts. If you pull from their will, you may not turn from it when the time comes.`
            },
            {
                id: 7,
                name: `Crafting of the Zanhari`,
                description: `The weapon of the oracle is known as the Zanhari. It is a sword feared by the noble peoples of Avlim and their enemies. Its distinction must be preserved by upholding the tradition of its forging and disciplined exercise of its training. Above all, do not forget to pray as DIA's blessing is crucial to the formation of the blade. Here are the steps you must take:`,
                subtopics: [
                    {
                        id: 0,
                        name: `Training`,
                        description: `Granted the notoriety of the blade, you will want to be well-trained in weapons combat before the true hilt reaches your fingers. Take a training staff and begin to practice the forms in chapter three. Train each position until it becomes reflex in your mind. Envision the different strikes of your enemies and the position that matches it. Teach your body to be decisive in each defense. Each position should be sure and stout, but not heavy in motion. Learn to be light, invisible and swift. You are the wind that cuts across their face, but is impossible to hit. When your training is complete do not forget to return your staff for the next novitiate.`
                    },
                    {
                        id: 1,
                        name: `Zacha`,
                        description: `You must first visit the dwarves of the Bare mountains, where great miners and forgers will aid you in preparing iron ore. They have worked with the oracle order for a thousand years and know that our swords require their purest ore, iron sand - forged through a three day process that reacts the ore with the carbon of the charcoal without becoming fully molten. Select five pounds of the best steel from what is forged and take your leave. Bless the dwarves and leave the remaining raw steel for their purposes. If they resist in any way say, “You are oathed to aid the oracle in crafting the Zanhari” and they will not deny you.`
                    },
                    {
                        id: 2,
                        name: `Zukru`,
                        description: `You must then visit the dwarves of the Thrush mountains, the first dwarves to roam the first shores. Humble yourself under their instruction and learn their craft. They are the great swordsmiths of Avlim and will help you shape the raw steel into a weapon. Do not forget that the opal you collected from Agate is to be fused to the backside of the blade. Fast and pray to DIA before Zukru, as the melting of opal is an act of DIA that bends its nature. Do not eat nor cease in prayer till the opal returns to its natural state or it will turn bronze and release a green flame becoming worthless. Think also on where your Carinal stone will be kept - whether hung around your neck or fused to the hilt of your blade. If you choose to secure it to your blade, now is the time. If they resist in any way say, “You are oathed to aid the oracle in crafting the Zanhari” and they will not deny you.`
                    },
                    {
                        id: 3,
                        name: `Zenry`,
                        description: `Last of all, visit Anduin Mountains where the Aviame craftsman will polish your blade and give the Zanhari its final shape. They will stamp the symbol of the oracle into the forte of your blade. When all is complete, bless them and return to Engaroath. If they resist in any way say, “You are oathed to aid the oracle in crafting the Zanhari” and they will not deny you. You are now ready to take your oath.`
                    },
                    {
                        id: 10,
                        name: `The Finished Blade`,
                        description: `While the staff was a tool, the Zanhari must be an extension of yourself. It should never leave your side. Sleep with it, eat with it, converse with it. Any place that does not permit it, does not permit the oracle. Discover its nuance like a good friend. Understand how the blade moves; its natural flow. Allow the Zanhari to become as acquainted with the forms as you are and learn its power in conjunction with divination. Tend to the blade daily. Sharpen and polish it; never sheath a stained blade. If you care for it in the lulls it will care for you in the heat of battle.`
                    }
                ]
            },
            {
                id: 8,
                name: `Oath of the Oracle`,
                description: `The Oath of the oracle is no small charge and must be met with a solemn attitude. Before you promise your faculties be sure of the purity of your heart and the aim of your life. When you have cleared your mind of obstruction to the task, take the oath as taken by all oracles before you.`,
                subtopics: [
                    {
                        id: 0,
                        name: `Requirements`,
                        description: `Before an oracle may begin their oath, they will need to have grounded themselves in the 9 blessed attributes, shown dedication to the 6 disciplines, mastered the oracle fighting forms, selected a stone from Agate and crafted their zanhari. If one can say before DIA with an honest heart that these criteria have met, they may be initiated in the presence of all past oracles.`
                    },
                    {
                        id: 1,
                        name: `Prepare The Olive Branch`,
                        description: `First, burn the branch of an olive tree after plucking its leaves. Allow your Zanhari to heat from the coals and burn the oracle symbol on the inner wrist of the arm that will hold your weapon. Cover the visible parts of your body in the ash of the fire and face the High mountains of Avlim.`
                    },
                    {
                        id: 2,
                        name: `The Oath`,
                        description: `Follow the steps and recitations below to take the Oracle Oath.`
                    },
                    {
                        id: 3,
                        name: `Step forward & Recite:`,
                        description: `“Lifelong I render my feet to you, Dia, for your worship and purposes. May they find their footing on the narrow path and carry righteousness to all the lands of Qeṽa. I ask for your blessing upon them.”`
                    },
                    {
                        id: 4,
                        name: `Unloop your sword from your waist and kneel on both knees.`,
                        description: `“I render my legs to you, Dia, for your worship and purposes. May they be swift in battle and strong when called on for service to others.”`
                    },
                    {
                        id: 5,
                        name: `Unsheath your sword only so much so that the blade can be seen.`,
                        description: `“I render my sword to you, Dia, for your worship and purposes. May its strike be true and moved by you. I ask for your blessing upon my weapon.”`
                    },
                    {
                        id: 6,
                        name: `Lay the sword before you. Take your stone from where it lay, if not on your weapon and present it before Dia.`,
                        description: `“I align myself to your quality of __, for your worship and purposes. May it mark my life and transform every part of me. I ask for your blessing upon this stone.”`
                    },
                    {
                        id: 7,
                        name: `Lay your stone by the sword. Open your hands.`,
                        description: `“I render my hands to you, Dia, for your worship and purposes. May they callous and harden into instruments of justice, but be soft and forgiving to the righteous. I ask for your blessing upon them.”`
                    },
                    {
                        id: 8,
                        name: `Hold your abdomen with both hands.`,
                        description: `“I render my appetite to you, Dia, for your worship and purposes. May I crave the hardy and detest the unhealthy. I ask for your blessing upon it.”`
                    },
                    {
                        id: 9,
                        name: `Bow your torso and place your head on the ground with your hands folded on your abdomen.`,
                        description: `“I render my mind to you, Dia, for your worship and purposes. May my thoughts and divinations be immersed in your way and the foolish being within me destroyed. I ask for your blessing upon my mind.”`
                    },
                    {
                        id: 10,
                        name: `Move your hands to your heart.`,
                        description: `“I render my heart to you, Dia, for your worship and purposes. May my desire ever align with your qualities and any of the self subdued. I ask for your blessing upon my heart.”`
                    },
                    {
                        id: 11,
                        name: `Take a deep breath in and breathe out.`,
                        description: `“I render my soul to you, Dia, for your worship and purposes. May every breath be given in service to you. By your grace accept one last request. In my final breath, free me from this age and carry me swiftly to Agate above. I ask for your blessing upon my life.”`
                    },
                    {
                        id: 12,
                        name: `Take your Leave`,
                        description: `Collect your stone and sword. Only lift your head and depart when your stone is secured and belt fastened. Wash yourself; your clothes and your body and polish your weapon and supplies.`
                    },
                    {
                        id: 13,
                        name: `The Unburnt Olive Leaves`,
                        description: `The unburned leaves plucked from the olive branch number the Caracadre you are to train. No more, no less. Collect the leaves and dry them. When a Caracadre is ready, offer them a leaf to be drinken as olive tea and share this drink with them.`
                    },
                    {
                        id: 14,
                        name: ``,
                        description: `You have taken the solemn vow of the oracle and are forever bound to it. More you will be blessed, but more of you will be asked for more you have promised, so more must last.`
                    }
                ]
            },
            {
                id: 9,
                name: `Symbol of the Oracle`,
                description: `Inherit to the oath of the oracle is its symbol shown above. By carrying this symbol, you recognize that you are bound to the oath of the oracle and do not associate yourself with this symbol until you are bound.`,
                subtopics: [
                    {
                        id: 0,
                        name: `Significance`,
                        description: `The Circle represents Qeṽa, the world to which you have been entrusted to shephard. You are responsible for the whole of it and all within it. The four prongs that stretch upwards and one downward represent the hand of DIA over the world. He is always watching over us and nothing happens without His permission. The three spires in the center represent the high mountains where the oracle intercedes with Dia.  We are granted a noble task and should never take it for granted.`
                    }
                ]
            },
            {
                id: 10,
                name: `Secrets to Keep`,
                description: `While the life of the oracle should not be one of withholding, there are certain truths that are unwise to be entrusted to the noble peoples.`,
                subtopics: [
                    {
                        id: 0,
                        name: `Sacred Places`,
                        description: `Do not reveal the sacred places of Dia. None should know the place of intercession upon the peaks of the high mountains, nor the way to Engorath or Agate. These places are not for common eyes and should be known only among your order. The way to Agate may only be granted to worthy Caracadre on the equinox with whom you have granted an olive leaf. The others who follow them or learn of this passage are clean of your hands.`
                    },
                    {
                        id: 1,
                        name: `Divine Stones`,
                        description: `Do not teach the noble peoples where they can find the divine stones of DIA nor about their abilities. These stones were never intended for them. For the moonstone was brought to be depleted by the eldar, tourmaline was meant to be left in the atmosphere and achroite was a grace befallen that is rightly hidden in Malunë. Look to Amare who wore the moonstone around his neck, but did not reveal its secrets. Whenever asked of it, he simply said, “It is not for you to know.”`
                    },
                    {
                        id: 2,
                        name: `The Sa Siavanna`,
                        description: `This book and all the words in it are intended for your eyes only and the eyes of your novitiates. Guard it with your life and let no other eyes look upon it unless they are of your order. There is information that you will find wise to share and are commanded to share with the Caracadre. However, consider it a curse for any without the sacred title to view the actual pages.`
                    },
                    {
                        id: 3,
                        name: `Passage to Malunë`,
                        description: `There are some of you who will learn of the way to Malunë, the elven paradise in the south hidden by achroite, the stone of invisibility held by Inofain. The location is so valuable that we cannot risk even writing them in this sacred text. If the secrets of Malunë or Agate above became known, the world would turn to violence and chaos. Preserve this information along with everything else entrusted to you.
                        `
                    }
                ]
            }
        ]
    },
    {
        id: 1,
        link: `/classes/caracadre`,
        quality: `Rangers`,
        goal: `Bring Peace & Justice for the Common Man`,
        name: `Caracadre`,
        race: ['Any'],
        primaryWeapon: `Any`,
        sacredText: `SenSavye (From the Oracles)`,
        worldKnowledge: `Medium`,
        image: caracadre,
        imageAlt: `Caracadre Logo`,
        hitDie: 'd10',
        equipment: ["scale mail or leather armor", "2 shortswords or simple melee weapons", "longbow and a quiver of 20 arrows", "1 dungeoneer's pack or explorer's pack"],
        armor_prof: ["light", "medium"],
        weapon_prof: ["Zanhari Sword", "Shields", "Simple","Martial"],
        tool_prof: ["gemstones"],
        saving_throw_prof: ["Strength", "Constitution"],
        skill_prof: ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"],
        skill_prof_selection: 2,
        lvls: DNDLEVELS.caracadre,
        topics: [
            {
                id: 0,
                name: `Overview`,
                description: `Where oracles are selected, Caracadre volunteer. They are the rangers of Avlim who take it upon themselves to ensure peace and justice is given to all. They often sentry the wild and rural lands where an oracle presence is unfelt. Though often traveling alone or in small factions, they are all tied together by the Caracadre code, legends and songs. Like the oracles, they believe gems promise unnatural and superior abilities and make it their goal to pursue the possession and mastery of these gems. However, unlike the oracles, Caracadre tend to value common stones over spiritual stones as they offer more tangible benefits such as strength, dexterity and intelligence. One who possess and masters all seven common stones is known as a grand caracadre though it is difficult to obtain and attune to even one stone.`,
            },
            {
                id: 1,
                name: `History`,
                description: `The Caracadre arose from the ashes of the beginning of wars in 2229 Q.Y. as a brotherhood that would defend against the dark armies of Moriel. They followed the formation of the oracle order commissioned by DIA in 2084 Q.Y. and the elvish cloaks begun in 2199 Q.Y. Unlike the former orders, the caracadre comprised of volunteers for oracles were selected by DIA and elves were merely born into their “cloaked” communities. The order was began by Mayveo, Lachlan and Haemon.`
            },
            {
                id: 2,
                name: `Ontology`,
                description: `Caracadre are among the most dedicated warriors in Avlim, the first shores of all sentient beings in Qeṽa. They sacrificed their bodies to intense training and spent most of their life away from any sense of home. They gave their minds to find and carry the jewels and gems of Avlim, which legend said would extend their abilities. Among the varieties of precious stones in Qeṽa, Caracadre traditionally focused on the common stones (or “incidental stones” as referred to by the oracles) as they were more widely available. The stones of Dia or “cardinal stones” could only be sought after in deep stone or at the crystal isle of agate during the summer or autumn equinox. The seas were much too treacherous to venture there otherwise.`
            },
            {
                id: 3,
                name: `Tenets`,
                description: `There are 3 Tenets a caracadre lives their life by:`,
                subtopics: [
                    {
                        id: 0,
                        name: `1. Protect the noble people and lands within and without the oracle's gaze`,
                        description: ``
                    },
                    {
                        id: 1,
                        name: `2. Atune, not abuse the Gems`,
                        description: ``
                    },
                    {
                        id: 2,
                        name: `3. Sacrifice thy life as the least`,
                        description: ``
                    }
                ]
            },
            {
                id: 4,
                name: `Ranks`,
                description: ``,
                subtopics: [
                    {
                        id: 0,
                        name: 'Initiate',
                        description: `This Caracadre has pledged themself to the creed, but has not yet bonded to a stone.`,
                        image: initiate,
                        imageAlt: `caracadre initiate rank`
                    },
                    {
                        id: 1,
                        name: 'Caracadre',
                        description: `Mastery of one stone. (Though the term, “Caracadre” applies to any of this order.)`,
                        image: _caracadre,
                        imageAlt: `caracadre rank`
                    },
                    {
                        id: 2,
                        name: 'Cadre',
                        description: `Mastery of two stones`,
                        image: cadre,
                        imageAlt: `cadre (caracadre) rank`
                    },
                    {
                        id: 3,
                        name: 'Kikadre',
                        description: `Mastery of three stones`,
                        image: kikadre,
                        imageAlt: `kikadre (caracadre) rank`
                    },
                    {
                        id: 4,
                        name: 'Krykadre',
                        description: `Mastery of four stones`,
                        image: krykadre,
                        imageAlt: `krykadre (caracadre) rank`
                    },
                    {
                        id: 5,
                        name: 'Masqadre',
                        description: `Mastery of five stones`,
                        image: masqadre,
                        imageAlt: `masqadre (caracadre) rank`
                    },
                    {
                        id: 6,
                        name: 'Maul Qadre',
                        description: `Mastery of six stones`,
                        image: maulQadre,
                        imageAlt: `maul qadre (caracadre) rank`
                    },
                    {
                        id: 7,
                        name: 'Grand Qaraqadre',
                        description: `Mastery of all seven stones`,
                        image: grandCaracadre,
                        imageAlt: `grand caracadre rank`
                    },
                ]
            },
            {
                id: 5,
                name: `Factions`,
                description: `The order of the caracadre is so large that it splits and takes many forms. It is possible for a caracadre to abide by one, many or none of the features below:`,
                subtopics: [
                    {
                        id: 0,
                        name: `Caracadre`,
                        description: `The majority of Caracadre do not identify with a specific sect within the order, but simply the order itself. They simply adhere to the ranks, tenets and texts of the caracadre. They tend to pursue the incidental stones, which prove to offer greater potency in power.`
                    },
                    {
                        id: 1,
                        name: `Cardinal Caracadre`,
                        description: `Cardinal Caracadre are those who have restricted themselves to pursue only the cardinal stones in accordance with the oracle's advice. They are often wiser, yet less powerful than the average caracadre.`
                    },
                    {
                        id: 2,
                        name: `The Sisterhood`,
                        description: `Females are less common in the sojourning vigilante world of the caracadre so when a female caracadre finds another, it is a unique bond. Born out of this bond, is the sisterhood, which is a collective of women caracadre. Some travel together, while others alone greeting each other only by bird and crossing paths.`
                    },
                    {
                        id: 3,
                        name: `Dark Caracadre`,
                        description: `Unfortunately, Dark caracadre there came to be also. Instead of mastering the stones, they learned to open and synthesize stones and bend them to their will.`
                    },
                ]
            },
            {
                id: 6,
                name: `Mastery of Stones`,
                description: `Few caracadre ever mastered more than one stone which was a feat in itself. To master one stone was to be worthy of it, bond with it, master its qualities and maintain the bond. Those who tried to cheat the stone would watch the stone slowly dim to darkness. It is for these reasons that the Caracadre were careful in their selection of stone. A chosen stone was kept close - either set into a weapon, in a ring or hung around the neck.`
            },
            {
                id: 7,
                name: `The Grand Caracadre`,
                description: `To become a Grand Caracadre was the goal of most, for a Grand Caracadre was one who mastered all seven incidental stones. Such a master of stones was rarer than even the oracles whose greatness they rivaled, despite no affinity to divination. They were quicker and lighter than the wind wielded by the oracles and stronger than the crystals they carried. A grand caracadre was given equal status of an oracle and welcomed within their ranks and sacred spaces.`
            },
            {
                id: 8,
                name: `The Crested Caracara`,
                description: `The name “Caracadre is derived from the two words “caracara” and “cadre”. A cadre is one specially trained for a profession. In suit, the caracadre's unique set of skills make them specially equipped for a singular task: to protect the marginalized in the far reaches of society. The Crested “Caracara” is a bird of prey; the only bird brave enough to fly over the black shores of Avlim (besides the wretched vulture). The caracadre see themselves as keeping a watchful eye over the noble races and preying on those who do evil - even in places where it is darkest. The caracadre do not look solely to the crested caracara for their name, but also for their aid. Over the years, the caracadre have trained the caracara to strike down small prey and carry written messages in their talons. One must but offer the birds a token of friendship and then set auditory markers: a marker for themselves and a marker for those they wish to find. It is an amicable relationship between the two beyond the puncture wounds the bird leaves in the cadre's arm. This being said there is healthy mutual respect as they both seem to understand each other as fierce hunters.`
            },
            {
                id: 9,
                name: `Song of the Caracadre`,
                description: `The song of the caracadre is a song often sung by homesick caracadre traveling through the harsher lands of Qeṽa.`,
                subtopics: [
                    {
                        id: 0,
                        name: ``,
                        description: `I remember when I was a little boy. Running around in a world so bright. I remember when the scariest thing was walking around the house at night.`
                    },
                    {
                        id: 1,
                        name: ``,
                        description: ``
                    },
                    {
                        id: 2,
                        name: `Take me back to where the waters flow`,
                        description: ``
                    },
                    {
                        id: 3,
                        name: `Take me back to where the flowers grow`,
                        description: ``
                    },
                    {
                        id: 4,
                        name: `Take me back somewhere familiar`,
                        description: ``
                    },
                    {
                        id: 5,
                        name: `Take me back`,
                        description: ``
                    },
                    {
                        id: 6,
                        name: ``,
                        description: `I remember the warmth of my mother's arms. I remember the joy of my little heart. I remember when I saw the world through younger eyes - Innocent and full of life.`
                    },
                    {
                        id: 7,
                        name: `Chorus`,
                        description: ``
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        link: `/classes/avlimeth`,
        quality: `Paladins`,
        goal: `Bring Peace & Justice for the Common Man`,
        name: `Avlimeth`,
        race: ['Any'],
        primaryWeapon: `Longsword`,
        sacredText: `SenSavye (From the Oracles)`,
        worldKnowledge: `Medium`,
        image: avlimeth,
        imageAlt: `Avlimeth Logo`,
        hitDie: 'd8',
        equipment: ["a shortsword or any simple weapond", "a dungeoneer's pack or an explorer's pack", "10 darts"],
        armor_prof: ["light", "medium"],
        weapon_prof: ["Simple", "shortswords"],
        tool_prof: ["Choose one type of artisan's tools"],
        saving_throw_prof: ["Strength", "Dexterity"],
        skill_prof: ["Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth"],
        skill_prof_selection: 2,
        lvls: DNDLEVELS.avlimeth,
        topics: [
            {
                id: 0,
                name: `Overview`,
                description: `The Avlimeth or "Haven of Avlim" more commonly known as 'watchers' are warriors much like the caracadre for they once were part of there order. However, they broke away from the caracadre over differences  in their beliefs about gems. After reading the SenSavye, the Avlimeth disagreed with the caracadre's focus on the incidental stones for it ignored the value the oracles placed on the Cardinal stones. However, they did not feel it was right either to ignore the power of the incidental stones nor abandon them for they too were created by DIA. So they decided the gems should be pursued vertically by their shared element rather than horizontally by their class (divine, cardinal, incidental). For example, they recognize that amber, the incidental stone of constitution amd topaz, the cardinal stone of hope share the same elemental quality and effect. A person with hope will have constitution and a person with constitution will have hope. With this, avlimeth only pursue stones of a shared element.`
            },
            {
                id: 1,
                name: `The Genogravé`,
                description: `There are many methods for a watcher to select a stone. They may visit an acolyte or they may read the stone descriptions in the texts of the SenSavye. They may even decide based on instinct. However, the method recommended by the oracles is to consult the Genogravé. The Genogravé is a painting, which can be found in every eldar cathedral in Avlim and the outer isles. Though they depict the same scene, each Genogravé depicts it differently. The oracles say a caracadre ought to sit before the painting and ask themselves, “What resonates with you in the painting?” Within the painting are powerful notes of every stone and these notes draw out the emotions of the viewer. Some argue and most avlimeth affirm that it is the emotional piece of art ever created and likely so because it is inspired by DIA HIMSELF. The attribute the viewer is drawn to is the attribute they ought to pursue. An initiate may do this to select their first stone or a caracadre may do it to identify their next stone.`,
                image: genograve,
                imageAlt: `Genograve painting`
            },
            {
                id: 2,
                name: `Pathways`,
                description: ``,
                subtopics: [
                    {
                        id: 0,
                        name: `Tour of the Guard`,
                        description: `All Avlimeth, no matter their calling must take a tour of the guard, to cement their position as an avlimeth. This tour of the guard is one year spent in Avlim devoting themselves to justice in Avlim. Most take multiple tour of duties, but only one is required. Any tour of the guard must be followed by a month of rest, which they call a "breath".`
                    },
                    {
                        id: 1,
                        name: `Watchmen`,
                        description: `A watchmen takes watch over a cathedral. They are different than then thenyls, which are the priamry guardians of cathedrals; haelas or spirits, which have surrendered their invisibility to take eternal guard over a cathedral. Avlimeth dedicated as watchmen join them in tending to the cathedrals and follow thenyl commands.`
                    },
                    {
                        id: 3,
                        name: `Lone Oathed Avlimeth`,
                        description: `An oathed avlimeth is one who wishes to take an oath before DIA and a devote themselves further to HIM beyond the stones themselves. To accomplish this, such avlimeth would travel to Agate during the summer or autumn equinox - the only days the waters were calm enough to attempt the journey. On the slick surface of Agate, they would recite the oracle oath and bind themselves to DIA. The nature of their oath makes them unlikely companions as they are so bent on their oath they will not hesitate to abandon their kin when it calls.`
                    },
                    {
                        id: 4,
                        name: `Eduël`,
                        description: `The Eduël believe that life requires balace. Without darkness there is no light. An eduël who masters a moral stone seeks another who has mastered its dark counterpart. They then travel together and never leave each other's side. They believe such a bond is necessary to keep balance in the world.`   
                    },
                    {
                        id: 5,
                        name: `Dark Avlimeth`,
                        description: `Unfortunately, Dark avlimeth there are also. Instead of mastering the stones, they delve into their darkness, believing more could be accomplished through evil than good. In some cases, an avlimeth is so convinced they see evil when they look upon the Genogravé that they believe they are destine to pursue it.`
                    },
                ]
            }
        ]
    },
    {
        id: 3,
        link: `/classes/elvish-cloaks`,
        quality: `Wood Elven Warriors`,
        goal: `Keep Watch over the Elvish Realms`,
        name: `Elvish Cloaks`,
        race: ['Elf', 'Ave'],
        primaryWeapon: `Longbow`,
        sacredText: `Histories of Avlim`,
        worldKnowledge: `Medium-High`,
        image: elvishcloaks,
        imageAlt: `Elvish Cloaks Logo`,
        hitDie: 'd8',
        equipment: ["leather armor", "2 shortswords or simple melee weapons", "longbow and a quiver of 20 arrows", "dungeoneer's pack or explorer's pack"],
        armor_prof: ["Light", "medium"],
        weapon_prof: ["Simple", "Ranged"],
        saving_throw_prof: ["Dexterity"],
        skill_prof: ["Animal Handling", "Acrobatics", "Nature", "Perception", "History"],
        skill_prof_selection: 2,
        topics: [
            {
                id: 0,
                name: `Overview`,
                description: `Prior to the void age, The Elvish domain of Navalil was the first line of defense against the dark armies in the east. Because of this, an order of elves was established to protect and keep watch over their borders. This was especially true of the forest of Ethel, which was considered impassible outside of elven permission. The only road to enter this great forest was the “Passage of the Elvish cloaks” a bridge between Ethel and Navenia that crossed the Thrush Mountains iconic for the towering elven statues on either side. They were the only order established by oracles and are rumored to have been graced with a small degree of knowledge in divination.`,
            }
        ]
    },
    {
        id: 4,
        link: `/classes/avikin`,
        quality: `Mountain Archers`,
        goal: `Defend Altiavaire and Avlim at large from Evil`,
        name: `Avikin`,
        race: ['Aviame', 'Any'],
        primaryWeapon: `Longbow`,
        sacredText: `Thesáthsia`,
        worldKnowledge: `Medium-High`,
        image: avikin,
        imageAlt: `Avikin Logo`,
        hitDie: 'd8',
        equipment: ["scale mail", "2 shortswords or simple melee weapons", "longbow and a quiver of 20 arrows", "dungeoneer's pack or explorer's pack"],
        armor_prof: ["Light", "medium"],
        weapon_prof: ["Simple", "Ranged"],
        saving_throw_prof: ["Dexterity"],
        skill_prof: ["Acrobatics", "Perception"],
        lvls: DNDLEVELS.avikin,
        topics: [
            {
                id: 0,
                name: `Overview`,
                description: `In the ever-autumn mountains of the Anduir valley, the Aviame have devised their own order, known as the “Avikith.” This faction represents some of the most highly trained warriors in all of Avlim, notorious for their proficiency in archery and acrobatics. Though only a true Aviame can achieve the rank of master avikith, honorary training is open to all races. However, one must understand that such training is no small venture. To train is to set aside one's possessions and life for the foreseeable future and to promise never return if they leave before their training is complete.`,
            }
        ]
    },
    {
        id: 5,
        link: `/classes/ghost-blades`,
        quality: `Rogues`,
        goal: `Defend their home and people`,
        name: `Ghost Blades`,
        race: ['Athiame', 'Ave'],
        primaryWeapon: `Two Daggers`,
        sacredText: `None`,
        worldKnowledge: `Low`,
        image: ghostblade,
        imageAlt: `Ghostblade Logo`,
        hitDie: 'd8',
        equipment: ["leather armor", "rapier or shortsword", "shortbow and a quiver of 20 arrows or a shortsword", "2 daggers", "thieves' tools", "burglar's pack, dungeoneer's pack or explorer's pack"],
        armor_prof: ["Light", "Medium"],
        weapon_prof: ["Simple", "Hand crossbows", "Longswords", "Rapiers", "Shortswords"],
        tool_prof: ["Thieve's tools"],
        saving_throw_prof: ["Dexterity", "Intelligence"],
        skill_prof: ["Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight of Hand", "Stealth"],
        skill_prof_selection: 4,
        lvls: DNDLEVELS.ghostBlades,
        topics: [
            {
                id: 0,
                name: `Overview`,
                description: `Perhaps the most feared among the factions are the Athiame Ghost Blades. Though they are skilled warriors, public fear is due more to history than skill. One of the most lethal sorcerers to live was the dark lord Ithmaar of Athiame descent. Not only was he responsible for the cursing of the Mahelo wood and Rose Fields of Altiavaire, but he initiated the Aeoki genocide and was a ruthless oppressor during the Void age. His actions scarred the reputation of athiame became known as the “Athmari.” Being welcomed less and less elsewhere, The Athiame holed themselves up in the Athiare cliffs. Their borders were secured by the “ghost blades” who had such stealth that men would say a trespasser's neck would be slit before they even felt the blade. The recent actions of the Athiame, Theathe has somewhat redeemed the Athiame name, but there is still great skepticism and fear around the renowned Athmari ghost blades (though they prefer “Athiame ghost blades”).`,
            }
        ]
    },
    {
        id: 6,
        link: `/classes/uncorrupted`,
        quality: `Legionnaires`,
        goal: `Eradicate Evil Anywhere`,
        name: `The Uncorrupted`,
        race: ['Ocrim'],
        primaryWeapon: `Pike`,
        sacredText: `None`,
        worldKnowledge: `Medium`,
        image: uncorrupted,
        imageAlt: `Uncorrupted Logo`,
        hitDie: 'd12',
        equipment: ["greataxe or any martial melee weapon", "2 handaxes or any simple weapon", "4 javelins", "explorer's pack"],
        armor_prof: ["Light", "Medium"],
        weapon_prof: ["Shields", "Simple & martial weapons","Ranged weapons"],
        saving_throw_prof: ["Dexterity"],
        skill_prof: ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"],
        skill_prof_selection: 2,
        lvls: DNDLEVELS.uncorrupted,
        topics: [
            {
                id: 0,
                name: `Overview`,
                description: `The uncorrupted is the nickname given to a legion of disciplined Ohri soldiers with an unmatched reputation. They comprised the front lines in the retaking of Avlim and comprised the majority of the force in the war of all. Despite their reputation, there is very little known about them. They did not appear in Avlim until the end of the void age and it is a bit of a mystery of where they came from. Some speculate that they were a byproduct of Ithmaar's void magic or divined by the Eldar while others believe them to be underdwellers who burrowed up from the ground or voyagers from another land. Few dare to ask, as the uncorrupted are of a battle-hardened, stoic breed. They have perfect chemistry with each other, but struggle forming bonds with others.`
            }
        ]
    },
    {
        id: 7,
        link: `/classes/topplers`,
        quality: `Halfling Rabble Fighters`,
        goal: `Aid where there is none`,
        name: `Topplers`,
        race: ['Halfling', 'Human'],
        primaryWeapon: `Slingshot`,
        sacredText: `None`,
        worldKnowledge: `Low`,
        image: toppler,
        imageAlt: `Toppler Logo`,
        hitDie: 'd10',
        equipment: ["chain mail or leather armor", "martial weapon or a simple weapon and a shield", "light crossbow and 20 bolts", "dungeoneer's pack or an explorer's pack"],
        armor_prof: ["Light", "Medium"],
        weapon_prof: ["Simple weapons","Ranged weapons"],
        saving_throw_prof: ["Dexterity"],
        skill_prof: ["Nature", "Stealth", "Medicine", "History", "Investigation"],
        skill_prof_selection: 2,
        lvls: DNDLEVELS.topplers,
        topics: [
            {
                id: 0,
                name: `Overview`,
                description: `In response to the war of the weak, the Halflings became trained in combat by the man, Tyrns, a grand caracadre. This formed the first significant bond between men and halflings and their “order" became known as the “Topplers.” Before the void, they saw little action, but gave a small measure of pride and security to their people in the Fletcheren hills. Now in a different world, they call upon their distant training to aid in the restoration of Avlim. However, their lighthearted disposition, small stature and lack of experience in real battle has led them to be seen as  joke in the realm of warfare.`,
            }
        ]
    },
    {
        id: 8,
        link: `/classes/order-of-the-feather`,
        quality: `Explorers, Sea Farrers & Cartographers`,
        goal: `Explore Qeṽa`,
        name: `Order of the Feather`,
        race: ['Any'],
        primaryWeapon: `None`,
        sacredText: `None`,
        worldKnowledge: `Medium`,
        image: feather,
        imageAlt: `Order of the Feather Logo`,
        hitDie: 'd8',
        equipment: ["chain mail or leather armor", "martial weapon and a shield or two martial weapons", "light crossbow and 20 bolts or a shortbow and 20 arrows", "explorer's pack"],
        armor_prof: ["Light", "Medium"],
        weapon_prof: ["Simple","Ranged", "Martial"],
        saving_throw_prof: ["Strength", "Constitution"],
        skill_prof: ["Animal Handling", "Athletics", "Investigation", "Perception"],
        skill_prof_selection: 2,
        topics: [
            {
                id: 0,
                name: `Overview`,
                description: `This group of primarily gnomes has little care for rebuilding the infrastructure of Avlim, though they will help where they can - or more likely, where is convenient. They are driven by an obsession with exploration and travel around Qeṽa to see and experience the world. During the void age and the years before it, gnomes were the farthest from harm and the least involved with great wars and world events. This simple, lackluster legacy motivated their kind to form the order of the feather, to explore not only Avlim, but all continents of Qeṽa. Their order also includes cartographers who who seek to map out not only Avlim, but all the lands of Qeṽa. They share their maps and findings freely within the guild to grow the knowledge and intrigue of Avlim. They can be recognized by a feather, which tends to find itself somewhere on their person from their hat to their boot.`,
            }
        ]
    },
    {
        id: 9,
        link: `/classes/no-affiliation`,
        name: `No Affiliation`,
        description: `Not all who adventure or make their way through the world adhere to an order. View other common trades and lifestyles below.`,
        topics: [
            {
                id: 0,
                name: `Adventurer`,
                quality: 'Lone Wolf',
                race: ['Any'],
                expertise: `Varies`,
                description: `Unrestricted by any affiliation is the adventurer. Each one as their own reasons for venturing into the still orc-riddled lands of Avlim.`,
                hitDie: 'd8',
                equipment: ["chain mail or leather armor", "1 simple weapon", "dungeoneer's pack or an explorer's pack"],
                armor_prof: ["Choose 1"],
                weapon_prof: ["Choose 1 Simple","1 martial", "1 ranged"],
                saving_throw_prof: ["Choose 1"],
                skill_prof: ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"],
                skill_prof_selection: 2,
                topics: [],
                lvls: DNDLEVELS.adventurer,
            },
            {
                id: 1,
                name: `Acolyte`,
                quality: 'Diviner',
                race: ['Any'],
                expertise: `Arcana`,
                description: `The acolyte is well-versed in the spiritual realities of Qeṽa. They have discovered the true meaning of gems and the hidden realities of the ethereal realm. By pouring over old texts or pestering oracles, elves or cathedral keepers, they have uncovered secrets held only by a few and they use this knowledge to pursue the art of divination. Though most believe in an unseen realm, they tend to trust physical crafts and their own experience dismissing acolytes as dreamers and fairy tale storytellers.`,
                hitDie: 'd6',
                equipment: ["light crossbow and 20 bolts or any simple weapon", "component pouch or arcane focus", "dungeoneer's pack or an explorer's pack", "cut of emerald"],
                weapon_prof: ["Daggers", "darts", "slings", "quarterstaffs", "light crossbows"],
                saving_throw_prof: ["Constitution", "Charisma"],
                skill_prof: ["Arcana", "Deception", "Insight", "Intimidation", "Persuasion", "Religion"],
                skill_prof_selection: 2,
                topics: [],
                lvls: DNDLEVELS.acolyte
            },
            {
                id: 2,
                name: `Bard`,
                quality: 'Performer',
                race: ['Any'],
                expertise: `Town Talk`,
                description: `Whether they are versed in battle or not, the bard travels the adulterated lands of Avlim with instrument in hand to inspire their own songs, or write about the heroic ventures of others.`,
                hitDie: 'd8',
                equipment: ["leather armor","rapier, longsword or any simple weapon", "dagger", "diplomat's pack or an entertainer's pack", "lute or musical instrument"],
                armor_prof: ["Light"],
                weapon_prof: ["Simple weapons", "Hand crossbows", "Longswords", "Rapiers", "Shortswords"],
                tool_prof: ["3 Musical instruments of your choice"],
                saving_throw_prof: ["Dexterity", "Charisma"],
                skill_prof: ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"],
                skill_prof_selection: 3,
                topics: [],
                lvls: DNDLEVELS.bard
            },
            {
                id: 3,
                name: `Crafter`,
                quality: 'Potion Master',
                race: ['Any'],
                expertise: `Herbs & Elixirs`,
                description: `Whether by magical means or herbal knowledge, the crafter is skilled in healing and natural crafting. They take company with others to heal their fellow warriors or heal the ones they find. However, this skill with herbs can also prove dangerous as they possess the knowledge to create potions of great detriment as well. When working with gems, crafters can work beyond simple elixirs. Crafters can use combinations of gem ingredients to create things as DIA did. For example, half an emerald combined with half a topaz gem might make a kind of tree.`,
                hitDie: 'd8',
                equipment: ["light crossbow and 20 bolts or any simple weapon", "15 empty viles", "5 potions of your choice", "dungeoneer's pack or an explorer's pack", "herbalism kit", "alchemist supplies or poisoner's kit"],
                armor_prof: ["Light", "medium"],
                weapon_prof: ["Shields", "Simple weapons"],
                tool_prof: ["Herbalism kit"],
                saving_throw_prof: ["Wisdom", "Charisma"],
                skill_prof: ["History", "Insight", "Medicine", "Persuasion", "Religion"],
                skill_prof_selection: 2,
                topics: [],
                lvls: DNDLEVELS.crafter,
            },
            {
                id: 4,
                name: `Druid`,
                quality: 'Naturalist',
                race: ['Any'],
                expertise: `Nature`,
                description: `They have answered the call to free Avlim of danger, but their true love is for nature. They wish to see the world of Avlim to witness and interact with the various flora and fauna, and especially its birds.`,
                hitDie: 'd8',
                equipment: ["leather armor","wooden shield or any simple weapon", "scimitar or any simple melee weapon", "explorer's pack", "druidic focus", "bird-caller"],
                armor_prof: ["Light", "medium"],
                weapon_prof: ["Shields","Clubs","Daggers", "Darts", "Javelins", "Maces", "Quarterstaffs", "Scimitars", "Sickles", "Slings", "Spears"],
                tool_prof: ["Herbalism kit"],
                saving_throw_prof: ["Intelligence", "Wisdom"],
                skill_prof: ["Arcana", "Animal Handling", "Insight", "Medicine", "Nature", "Perception", "Religion, Survival"],
                skill_prof_selection: 2,
                topics: [],
                lvls: DNDLEVELS.druid
            },
            {
                id: 5,
                name: `Fighter`,
                quality: 'Combatant',
                race: ['Any'],
                expertise: `Combat`,
                description: `Whether they are a new recruit or a veteran soldier hardened by past wars, the fighter has donned their armor and picked up their weapon to answer the king's call.`,
                hitDie: 'd10',
                equipment: ["chain mail or leather armor", "longbow and 20 arrows", "martial weapon and a shield or two martial weapons", "light crossbow and 20 bolts or two handaxes","dungeoneer's pack or an explorer's pack"],
                armor_prof: ["All"],
                weapon_prof: ["Shields", "Simple weapons", "Martial weapons"],
                saving_throw_prof: ["Strength", "Constitution"],
                skill_prof: ["Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation", "Perception", "Survival"],
                skill_prof_selection: 2,
                topics: [],
                lvls: DNDLEVELS.fighter,
            },
            {
                id: 6,
                name: `Gemcutter`,
                quality: 'Jeweler',
                race: ['Any'],
                expertise: `Gemstones`,
                description: `Gems hold renowned in Qeṽa whether for their beauty and mystic. For this, many wish for a stone to be cut into a shape that accentuates its beauty. However, such things must be handled with great care. The stonecutter knows how to cut a stone without opening it and open it when the clients are so inclined. However, given their value, an honest stonecutter is hard to find. Some are crafty and keep shards of stones or even steal stones. Others maintain a blameless reputation and charge a fine price. It takes a bit of wisdom to tell the difference. If fair, the gemcutter can evaluate a gem based on four characteristics: cut (the skill of the gemcutter), clarity (the gem's freedom from incusions), color (the gem's alignment to its attribute) and carat (the size and weight of the gem). The gemcutter knows the cut and color can be corrected, while the clarity and carat cannot.`,
                hitDie: 'd8',
                equipment: ["Shortsword or any simple weapon", "Gem-balancer", "dungeoneer's pack or an explorer's pack", "jewler's tools", "Smith's tools"],
                armor_prof: ["Light"],
                weapon_prof: ["Simple weapons"],
                saving_throw_prof: ["Intelligence", "Constitution"],
                skill_prof: ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"],
                skill_prof_selection: 3,
                topics: [],
                lvls: DNDLEVELS.gemcutter,
            },
            {
                id: 7,
                name: `Scribe`,
                quality: 'Historian',
                race: ['Any'],
                expertise: `History`,
                description: `Like the Bard the scribe wishes to record history, but in books rather than song. Perhaps they want to get the most honest account of the state of the different regions after the void, or perhaps they wish to sell their tale fact or fiction when they return.`,
                hitDie: 'd8',
                equipment: ["light crossbow and 20 bolts or any simple weapon", "regional map of your choice", "scholar's pack or a diplomat's pack", "cartographer's tools or forgery kit"],
                armor_prof: ["Light"],
                weapon_prof: ["Simple"],
                tool_prof: ["Calligrapher's tools"],
                saving_throw_prof: ["Intelligence", "Wisdom"],
                skill_prof: ["History", "Medicine", "Nature", "Performance", "Persuasion", "Religion"],
                skill_prof_selection: 2,
                topics: [],
                lvls: DNDLEVELS.scribe,
            }
        ]
    }
];