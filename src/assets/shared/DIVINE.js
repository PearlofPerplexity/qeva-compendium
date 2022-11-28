import demon from '../imgs/ethereal/demon.png';
import reaper from '../imgs/ethereal/reaper.png';
import seraph from '../imgs/ethereal/seraph.png';
import shadowReaper from '../imgs/ethereal/shadow-reaper.png';
import spectre from '../imgs/ethereal/spectre.png';
import spirit from '../imgs/ethereal/spirit.png';
import wraith from '../imgs/ethereal/wraith.png';

/* INCLUDES:

Layers of Heavens
Magic & Divination
Ethereals
Spiritual Realities

*/

export const DIVINE = [
    {
        id: 0,
        link: `/divine/layers-of-heavens`,
        name: `Layers of Heavens`,
        description: `There are six planes of existence or 'layers of heaven' within the world of Qeṽa.`,
        topics: [
            {
                id: 0,
                name: `Natural World`,
                description: `The natural world is everything physical and visible; everything tangible to the five senses. The blue sky one sees, is the first level of heaven, that of the natural world.`
            },
            {
                id: 1,
                name: `Outerworld`,
                description: `The outerworld is the level of heaven that becomes visible at night. It contains the planets and galaxies and every star in the space beyond the sky.`
            },
            {
                id: 2,
                name: `Etterworld`,
                description: `The etterworld is the layer of heaven DIA granted as a canvas to HIS sentient creation. It is a layer of communication between the natural world and the ether. In this layer, illusions may be divined by gnomes and those who are gifted without affecting the real world. Similarly, ethereals can cast their own illusions, voices and projections within it to communicate with those in the physical world. If an ethereal is too involved in the etterworld however, it risks becoming visible for abandoning the quality of its gem.`
            },
            {
                id: 3,
                name: `Etherworld`,
                description: `The etherworld or ether is the home of the ethereals. It is the layer of heaven in which all ethereals live and disembodied souls are pulled. It will be abolished at the coming of agate above, when DIA removes celestite from Qeṽa.`
            },
            {
                id: 4,
                name: `Everworld`,
                description: `The everworld is the ever-existing layer and heavenly home of DIA. He fills it entirely and has since the beginning of time and space.`
            },
            {
                id: 5,
                name: `The Void`,
                description: `The void is the absence of anything. A black hole is a rip between the heavens that gives a window into the immensity of this layer's appetite. Dark sorcerers access this dangerous layer through a dark magic known as void magic, which voids a target of whatever the diviner chooses or is powerful enough to bring about.`
            },
        ]
    },
    {
        id: 1,
        link: `/divine/divination-magic`,
        name: `Magic & Divination`,
        description: `The world of Qeṽa is one of magic. This magic is unique in that it sources its power from the combination of gemstones and ethereals. Gemstones are the source of divination and yet, ethereals are needed to draw this power out. Not only must gemstones and ethereals be present, but an individual must align themselves to both the qualities of the stone and the qualities of the ethereal in order for divination to occur. Learn about the range of abilities this diviniation and magic can offer.`,
        topics: [
            {
                id: 0,
                name: `True Divination`,
                description: `Also known as True touch, true divination gives one unnatural power over non-sentient creation and it takes many forms. A diviner may be able to manipulate the elements by moving water, earth and air or by removing it from existence and pulling it into the void layer of heaven by a deep and dark divination known as void magic. It may interact with the ethereals through revelation or the body through healing. Its only limit that is known is its restriction from sentient beings. A sentient creation is untouchable by any type of divination. All forms can be developed and exploited as a diviner learns more about the extent of their power and imagines its possibilities. The Aeoki are the only natural wielders of True Divination and the oracles are the only beings classically trained in it.`
            },
            {
                id: 1,
                name: `Illusory Divination`,
                description: `Also known as illusions, charms or mimics, illusory divination is a magic of the imagination. An illusory diviner is not able to change or affect anything in the natural world, but rather create the illusion of change or affect. They paint upon the etterworld, another layer of heaven where DIA allows sentients to paint their own pictures for a time. For example, illusory divination allows one to create the illusion of everything from a small stone in their hand to a volcano erupting. Their ability is limited only to their imagination. Gnomes are the only natural wielders of illusory divination.`
            },
            {
                id: 2,
                name: `Magic (Dark Divination)`,
                description: `The people of Avlim are naive to the art of divination and will often refer to divination as Magic. However, Magic is something far different and the only type of divination that must be rejected. It pulls from something in the netherland, attributes conceived apart from God. Rather than submitting themselves to the attributable stones of Dia, Mages craft synthetic gems that mimic the appearance of known gems, but not their attributes. Rather, their attributes are wrath, pride, lust and sloth. We will teach you to identify these synthetic stones, but you will feel the evil of their attributes long before you must identify them. They incite a feeling within that will be foreign to you in your seclusive purity. These feelings titillating in new ways and exciting, but do not give in to them. They are toxic and lead to addiction and ultimately death from within. For this reason keep your distance from magic and synthetic stones. Do not listen to the silver tongue of the mage.`
            },
            {
                id: 3,
                name: `Divination & Ethereals`,
                description: `Though Divination is the channeling of Dia's Essence, it can be enhanced by the influence of ethereals. In fact, ethereals are most effective in exacting change in this way. It takes far greater energy for ethereals to enter the physical world through sight or speech than to work from within the ether. And if they should enter, they cannot channel DIA's essence through divination in the physical form. Thus, an ethereal can influence a physical being by either empowering them with further essence from DIA or warding against wraiths.`
            }
        ]
    },
    {
        id: 2,
        link: `/divine/ethereals`,
        name: `Ethereals`,
        description: `Ethereals are the non-physical beings who dwell in the ether world and are tasked by DIA with the sole mission to shepherd HIS creation. They are ever-present in the workings of the world, sometimes taking physical form to do so. However, not ethereals have retained their purity and there are fowl ethereals who made the decision to oppose to DIA. Learn about their various forms of good and evil below.`,
        topics: [
            {
                id: 0,
                name: `Spirit`,
                alignment: `Good`,
                form: `Ethereal`,
                influence: `Medium`,
                description: `Spirits (or Haelas in the celestial tongue) are the original and intended form of all ethereals. They dwell and act from the ether as immortal beings and are perfectly aligned with DIA meaning they have never committed evil. However, this does not mean that they do the greatest good. Some are free of evil and still lazy, unfocused or simply untapped of their full potential.`,
                image: spirit,
                imageAlt: `Qeṽa Spirit`,
            },
            {
                id: 1,
                name: `Seraph`,
                alignment: `Good`,
                form: `Ethereal`,
                influence: `High`,
                description: `Seraphs or “Gran Haelas” are granted the highest respect among all spirits and are endowed with special gifts and responsibilities. You will recognize them at once if you ever see them. Wings hide their face and their feet and spread from their torso. They are so powerful they bring light to the physical world wherever they step. They are only matched by Gran Haellians in ethereal combat.`,
                image: seraph,
                imageAlt: `Qeṽa Seraph`,
            },
            {
                id: 2,
                name: `Spectre`,
                alignment: `Good`,
                form: `Physical`,
                influence: `Low`,
                description: `Spectres or Estrayas commonly branded fallen stars are spirits which have lost or given up their celestite to take a physical form and yet have remained faithful to their alignment to DIA and HIS goodness. This choice however has made them mortal. They would look identical to humans if not for their luminescence. They are rare in Qeṽa and are generally seen as untrustworthy. At one time, specters told their stories until rumors spread that they were ripped out of the ether on account of a fall from grace.`,
                image: spectre,
                imageAlt: `Qeṽa Spectre`,
            },
            {
                id: 3,
                name: `Wraith`,
                alignment: `Evil`,
                form: `Ethereal`,
                influence: `Medium`,
                description: `Wraiths or Haellians maintain their immortal, spiritual existence and grip on celestite and yet have turned away from the pursuit of goodness and alignment with DIA. They work from the ether to oppose DIA and attack the physical beings who represent HIM. Their power derives from the void.`,
                image: wraith,
                imageAlt: `Qeṽa Wraith`,
            },
            {
                id: 4,
                name: `Shadow Reaper`,
                alignment: `Evil`,
                form: `Ethereal`,
                influence: `High`,
                description: `There are some wraiths so powerful that they manifest a physical shadow when they are near. These are known as the shadow reapers or “Gran Haellians” and are high servants of the great demon. They are the greatest tests of the will beyond the great demon himself.`,
                image: shadowReaper,
                imageAlt: `Qeṽa Shadow Reaper`,
            },
            {
                id: 5,
                name: `Reaper`,
                alignment: `Evil`,
                form: `Physical`,
                influence: `Low`,
                description: `Like wraiths, Reapers (Muerarayas) oppose goodness and DIA, but unlike wraiths they take a physical form. They often take this form out of impatience to ravage DIA's creation in the ether and so are wild and savage when met, though some are able to subdue their bloodlust long enough to deceive. This being said, they prefer to take terrible shapes and even interbreed with orcs to create even more terrible creatures.`,
                image: reaper,
                imageAlt: `Qeṽa Reaper`,
            },
            {
                id: 6,
                name: `The Great Demon`,
                alignment: `Evil`,
                form: `Ethereal & Physical`,
                influence: `Very High`,
                description: `Wraiths are not witless nor haphazard in their response to the ethereal's divine council. They are led by an evil one so great, he is not flippantly named or taunted. His tendrils you see, but rarely his face. The great demon he is called on the earth below and “Mentroso” in the ether above. They say he will turn your heart as cold as the void when you are near. You will lose any will to oppose him the second you fall under his shadow. Legend says he was once the greatest and most gifted spirit to reign the haelas and the whole ether and outerworld, but when he had pushed all the expanses of space, it was still not enough for him. He desired more; the rulership of Qeṽa and so he would find a way to achieve physical form alongside his ethereal form and have it for a short time.`,
                image: demon,
                imageAlt: `The Great Demon of Qeṽa`,
            }
        ]
    },
    {
        id: 3,
        link: `/divine/spiritual-realities`,
        name: `Spiritual Realities`,
        topics: [
            {
                id: 0,
                name: `DIA`,
                description: `DIA is the god and creator of Qeṽa and has always existed. All who revere HIM write HIS name and pronouns (HE, HIM, HIS, HIMSELF) in uppercase letters.`
            },
            {
                id: 1,
                name: `Souls`,
                description: `Souls are the immaterial existence of all sentient beings. They are immortal and therefore cannot be destroyed. They anatomically reside beside one's heart in what is called the soul chamber.`,
                subtopics: [
                    {
                        id: 0,
                        name: `Soul Lifting`,
                        description: `When a physical being dies, the soul divorces the body and continues to live. Unfettered by the physical body, the soul lifts upward into the ether, where the ethereals live and remain there until agate above. This does not mean they become ethereals, not in the slightest. They do not have the same mobility and agency as ethereals and can only watch the inner workings of the world peacefully from above. Some who are wise, describe the existence of souls in the ether as clouds among birds. Ethereals are like birds who can fly throughout the ether and fly down to the earth below and do as they wish, while disembodied souls drift where the wind takes them, where DIA wishes them to see.`
                    },
                    {
                        id: 1,
                        name: `Soul Crystallization`,
                        description: `The fate of the physical body is perhaps even more interesting than that of the soul. Throughout a physical person's life, they are slowly undergoing the process of soul crystallization. What is this? Sitting in one's chest beside the heart is an anatomical gem known as the soul chamber. It is the house of the soul. At the beginning of one's life, the soul chamber is nought but celestite and so is ethereal and invisible. However, as one goes through life and actions reveals their character, the celestite sheds away and new, physical crystal structures harden in its place. If one does acts of kindness, emerald will grow in its place. If one commits acts of violence, bloodstone will grow. Rarely if ever does one's soul chamber crystallize into one singular gem. Rather it is a spectrum of color from every deed done in life. In most cases, every gem will be present. Some may ask if they do not all look alike, but they do not. While it is a composite of a myriad of gems, they all fall into one recognizable gem structure. If a person's life is most marked by patience, it will take the shape and structure of pyrite. If their defining quality is peace, it will form like amethyst. The longer a person lives, the harder it is for them to change and it is the same for ethereals.`
                    }
                ]
            },
            {
                id: 2,
                name: `Celestite`,
                description: `celestite is the stone of invisibility and divides the planes of existence. It is found in the air around us and the ethereals who dwell within it and every soul of every sentient ever created. It makes up DIA himself and HIS manifestation within the world. Active celestite travels freely through space if not wrapped in the hands of a sentient, most often times an ethereal. However, if an ethereal abandons the quality of the celestite and loiters too long in the etterworld, the heart of the gem will diminish and no longer travel freely. It will be bound by physics and be visible from the corner of one's eye.`,
                subtopics: [
                    {
                        id: 0,
                        name: `The Parsing of Invisibility`,
                        description: `This stone was the cinder of hope to humanity in the age of darkness at the expense of DIA Himself. As black polluted clouds covered the entire planet, it seemed that all bonds with DIA were lost. On the islands, there were no mountains high enough for the people to speak with HIM and no way to rise above the smoke. To remain in communion with HIS people, the good and gracious DIA spared a cut of his true essence of invisibility and bestowed it upon Avlim. To the noble races, it appeared as a star falling from the sky in the form of pure celestite, the stone of invisibility. After the celestite passed through the atmosphere and cleared the smoke that plagued the sky, the falling star split into two: one being the forever-after visibility of DIA within the world and the second being an excess cut of celestite not spent clearing the sky. If any would come across the excess celestite, they would have the opportunity to mask their visibility. Stories of this are told in the records of Malune. With this event, the air that polluted the sky was cleansed. The atmosphere became clear across all of Qeṽa and the smoke of Moriel was contained to the hearts of his great forges.`
                    },
                    {
                        id: 1,
                        name: `Celestite and the End of the World`,
                        description: `As mentioned above, celestite's property of transmutation allows it to pass through time and space unbound. This makes it near impossible for an ethereal to recover once they have chosen physical form. However, it has an even greater impact on the world. As ethereals release celestite by taking physical form and sentients likewise release the celestite of their soul chambers throughout their life, gravity pulls these crystals toward the center of the world and the world grows increasingly invisible until the whole world ultimately becomes engulfed by it. Ironically, the witnessing of this growing invisibility in the very end quickens bloodshed and expedites the flow of celestite into the world. Only then is the veil be pulled back and all planes of existence united in the endworld at agate above. Conversely, while celestite grows stronger in the world, the physical gems grow weaker. This waning of gems allows the wraiths and other evils to enter into Avlim that used to be contained in outer continents.`
                    },
                    {
                        id: 2,
                        name: `The Perifiworld`,
                        description: `At agate above, the celestite causes the continents to float and the planet to warp. Ultimately, DIA reorients and rebuilds the world. He draws all stones, gems and crystals to Avlim, which becomes the heart of the world. However, not all come. The gems that do return are enlivened and create a lush, eternal paradise in the center of the world. The gems that do not return are repelled to the outer continents, which remain in eternal, climatic extremes of distress. These outer islands are called the perifiworld. Since the soul is immortal and cannot be destroyed, they also are either repelled or drawn to DIA. A soul in unity with DIA and HIS gems will be enlivened, while a sou in disunity with DIA and HIS gems is repelled to the outer islands. Those in disunity are at the same time drawn and repelled by DIA, which causes eternal pain.`
                    }
                ]
            },
            {
                id: 3,
                name: `Ethereals`,
                description: `Ethereals live in Qeṽa like any other race, but they are born of the stone of invisibility by DIA himself and therefore cannot be seen. At least not by any ordinary means. They live in the etherworld, an invisible layer in the heavens above Qeṽa. They are not only immortal like Elves, but invincible in their ethereal form. They can suffer great wounds, mystical to the physical realm, but will always regain their strength.`,
                subtopics: [
                    {
                        id: 0,
                        name: `Creation of Ethereals`,
                        description: `When DIA created the elves, HE created the ethereals also in secret for the purpose of shepharding HIS creation. HE bore them out of the gem, celestite, which is the gem of invisibility and in so doing placed them in the etherworld, an invisible layer in the heavens of Qeṽa. They were beautiful like the elves and their skin glowed like the everstar. This layer of reality could only be witnessed by pure goodness and without it the ethereals' existence was beyond the curtain of fleshly eyes. The ethereals had free reign of the heavens and when they awoke, DIA sent them out to explore the universe and its many galaxies and planets. They did so with sweet songs and joy in their hearts. When the elves awoke, they were perfect and full of goodness and so when they looked into the sky, they saw the ethereals and confused them for stars flying wildly like fireflies deep in the night sky. To this day, there are some in Qeṽa who will look up into the night sky to test their heart of goodness and search for moving stars. What some call shooting stars as truly glimpses of the ethereals and the traces of deep goodness in one's own heart.`
                    },
                    {
                        id: 1,
                        name: `The Divine Counsel`,
                        description: `Spirits are not without organization. Below DIA is the Divine Counsel, which is the spiritual equivalent to the oracles. Its individual members are known as Seraphs and they command the spiritual armies who march in DIA's name.`
                    }
                ]
            },
            {
                id: 4,
                name: `Interaction Between Ethereals & Souls`,
                description: `There are many ways that a person might interact with an ethereal or the ethereal realm.`,
                subtopics: [
                    {
                        id: 0,
                        name: `Signs of Ethereals`,
                        description: `One does not have to see an ethereal to know that they are near. Curiously enough, the insect world is drawn toward them. Butterflies flutter around a strong presence of spirits, while gnats, locusts and centipedes swarm around reapers and wraiths. Though the secret of this connection is locked in the mind of DIA, reason would suggest that these butterflies expect something sweet to drink, while the latter expect some dead and rotten to scavenge. Insects, while many times deemed a nuisance, are the only physical creatures who are known to have a scent for the spiritual realm. The only exception to this is the hummingbird, which will smell the strong presence of a spirit. Even moreso, great ethereals like seraphs and shadow reapers somehow effect natural light from the ether. Seraphs are surrounded by physical light as the great demon and his shadow reapers are surrounded by shadow.`
                    },
                    {
                        id: 1,
                        name: `Looking through Emerald`,
                        description: `The qualities of emerald in relation to the ethereals is really quite special. Looking through a cut of emerald allows one to see into the etherworld. With emerald, one realizes that most ethereals are not so far away and are much closer than one realizes. Furthermore, aligning oneself to its quality allows the masters of these stones to hold communication with ethereals only fettered by language.`
                    },
                    {
                        id: 2,
                        name: `Physical Manifestation`,
                        description: `Though goodness is the only way to see ethereals in their natural state, this is not the only bridge between the ether and the material. It is possible for ethereals to find their way momentarily or permanently into the eyes of the physical realm. The easiest way is for them to release the celestite from their hand, however, this poses a significant risk. Once the celestite is released, it is rarely ever found again, for it is unique among the gems in that it travels freely through space. If an ethereal choses this path, they will nearly always remain physical and bound by the physical laws for the duration of a mortal life. This being said, ethereals cannot channel the divine from the physical world. An ethereal who dies in physical form is sentenced by DIA to the ether of the outerworld until agate above. Spirits, at their best, are passionate beings. From either guardianship or affection for the goodness in a physical being, they will abandon the ether and take physical form as a last ditch effort to protect them. Wraiths on the other hand take many physical forms. Some maintain their original ethereal humanoid form and some distort their anatomy to take great evil shapes. The ladder are referred to as monstrous reapers`
                    },
                    {
                        id: 3,
                        name: `Dreams`,
                        description: `It is commonly said in the lands of Qeṽa that “dreams are the language of spirits.” This is one of the few adages among the superstitious that rings true. While the true language of ethereals is celestial, dreams are the most common way they attempt to speak to their physical counterparts due to their effectiveness for the soul is most awake and accessible. However, it is important to note that the dream language of spirits is far different from that of wraiths. Spirits can speak through dreams in three ways. They can share something: (1) True that has happened, (2) True that is happening (3) That ought to happen. Wraiths on the other hand share either (1) A distortion of something that has happened (2) A lie about something that is happening, (3) A temptation to do something evil. The manipulation of the wraith is obvious. They are so consumed by evil that they cannot abandon it. So then, the difficulty is not telling the difference between the two's voices, but choosing to listen to the spirit. Sentient hearts are drawn far more to distortion, lying and temptation making the language of wraiths much stronger. Note also that all dream speech requires a certain manipulation of memories and viewed experiences. Ethereals cannot show the mind anything it has not already seen. Furthermore, the older or stronger a memory in one's mind, the more difficult it is to manipulate. This does not mean that ethereals can read the mind or at least not easily. They can only check the mind's library as humans do when trying to remember something.`
                    },
                    {
                        id: 4,
                        name: `Soul-Flying`,
                        description: `Dreams are not the only way that souls can interact with the ether. With tiger's eye, the stone of creativity and practice, one can also learn soul-flying. Though all souls fly into the ether at death, meditation and disciplined sleep can allow a sentient to leave their physical body and travel into the ether. This is a difficult practice and rarely stable. Soul-flight is quickly tempered by stimuli during meditation and the struggle for control with the mind in sleep. It only takes a blow of wind or a single thought to draw the soul back. It cares too much for its corporal-self. Theoretically however, soul-flying can allow an individual to go anywhere in the universe with enough patience and a proper environment. The small tether of the soul to the body is like a kite string to a kite. If the body is destroyed, the soul will untether from it and fly where the wind takes it rather than where it wishes to go.`
                    },
                    {
                        id: 5,
                        name: `Divination`,
                        description: `As written earlier, divination is the most common and practical way for an ethereal to interact with an embodied soul. They can lift their heart or tear them down, focus their mind or feed them temptation. However, it is important to note that the burden of successful divination does not lie solely on the ethereal nor primarily. Rather, a being can only experience the full potential of divination in as much as they are aligned with DIA's qualities. Like gemstones, a being must be aligned with DIA to channel HIS essence. The stronger this alignment, the stronger their divination. Straying from this alignment also inhibits an ability of a spirit to attach themselves to the being as evil attracts the attachment of wraiths. Goodness in the life of the physical being also has the potential to feed and strengthen the spirit as evil and hatred strengthens the wraith.`
                    },
                    {
                        id: 6,
                        name: `Blessings & Curses`,
                        description: `Blessings and curses are probably not what one would expect. In Qeṽa, one who is blessed is one who has been assigned a guardian spirit and one who is cursed is one who is haunted by a wraith. One who is blessed is one who is pure of heart and allows for a spirit's strong attachment. One who is cursed is one who has maintained a twisted mind and allowed a wraith to latch onto them like a parasite and harvest them for their evil and hatred. A cursed person may be capable of powerful deeds, but at the cost of their heart. The ethereals say that those who are blessed are unbound and those who are cursed are enslaved.`
                    },
                    {
                        id: 7,
                        name: `Death`,
                        description: `When a physical being dies, the whole person is not annihilated. The soul divorces the body and continues to live. Unfettered by the physical body, the soul lifts upward into the ether, where the ethereals live and remain there until agate above. This does not mean they become ethereals, not in the slightest. They do not have the same mobility and agency as ethereals and can only watch the inner workings of the world peacefully from above. Some who are wise, describe their existence in the ether as clouds among birds. Ethereals are like birds who can fly throughout the ether and fly down to the earth below and do as they wish, while disembodied souls drift where the wind takes them, where DIA wishes them to see.`
                    }
                ]
            }
        ]
    }
];
