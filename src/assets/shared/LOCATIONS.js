import avlim from '../imgs/maps/avlim.jpg';
import baroach from '../imgs/maps/baroach.jpg';
import orcava from '../imgs/locations/orcava.jpg';
import altiavaire from '../imgs/maps/altiavaire.jpg';
import arvanon from '../imgs/maps/arvanon.jpg';
import nagar from '../imgs/maps/nagar.jpg';
import navalil from '../imgs/maps/navalil.jpg';
import ouri from '../imgs/maps/ouri.jpg';
import agate from '../imgs/maps/agate3.jpg';
import arguthain from '../imgs/maps/arguthain.jpg';
import farathain from '../imgs/locations/farathain.jpg';
import riovanye from '../imgs/locations/riovanye.jpg';
import lumiare from '../imgs/locations/lumiare.jpg';
import eCloaks from '../imgs/locations/elvish-cloaks.jpg';
import brielle from '../imgs/locations/brielle.jpg';
import barir from '../imgs/locations/barir.jpg';
import oasis from '../imgs/locations/oasis.jpg';

export const LOCATIONS = [
    {
        id: 0,
        link: `/locations/avlim`,
        name: `Avlim`,
        description: `The central continent of Qeṽa and the concentrated existence of all sentient life.`,
        image: avlim,
        imageAlt: `Qeṽa Map of Avlim`,
        topics: [
            {
                id: 0,
                name: `Arvañon`,
                climate: `Semi-Arid`,
                description: `This is the northwestern sector of Avlim, which is home to the race of men.`,
                image: arvanon,
                imageAlt: `Qeṽa Map of Arvañon`,
                subtopics: [
                    {
                        id: 0,
                        name: `Athari Cliffs`,
                        race: `Athiame`,
                        cities: `Athiansali (capital)`,
                        features: `Pillar-like Cliffs`,
                        description: `The Athari cliffs is home to the Athiame, who do not take kindly to visitors. Their dreaded guards, the "ghost blades" who watch over the borders of Athari are said to slit the throats of whoever passes without approval. Their proximity to the coast shrouds them in mist and a stable, warm climate.`, 
                    },
                    {
                        id: 1,
                        name: `Central Arvañon & The Mide Hills`,
                        race: `Men`,
                        cities: `Durik`,
                        features: `Lake Alehain`,
                        description: `The rolling mide hills lie in a semi-arid climate with four seasons. They are beauitful in the summer months and a dreadful place in the winter, but they have made the men there strong.`
                    },
                    {
                        id: 2,
                        name: `The Rim`,
                        race: `Men`,
                        cities: `Durakin`,
                        features: ``,
                        description: `The Rim is a long stretch of beach along the northern shore of Arvañon. It is a place highly regarded by all as the sand of the shores are pale and beautiful.`
                    },
                    {
                        id: 3,
                        name: `Loma Island`,
                        race: `Men`,
                        cities: `Durakin`,
                        features: ``,
                        description: `This island was a crucial factor in the void age. A pocket of warmth sends these islands into both dry and rainy seasons.`
                    }
                ]
            },
            {
                id: 1,
                name: `Ouri`,
                climate: `Marine Coastal to Humid Continental`,
                description: `Ouri is the declared home of the gnomes and halflings though men dwarves and elves all have their foothold in it. It is the largest region within Avlim and often the furthest from evil.`,
                image: ouri,
                imageAlt: `Qeṽa Map of Ouri`,
                subtopics: [
                    {
                        id: 0,
                        name: `Fletcheren`,
                        race: `Halflings`,
                        cities: `Harbhollow, Adibrae, Linda, Lajas`,
                        features: `Ellowood forest`,
                        description: `These lush greenlands are known for their vast sunshine and short winter seasons. Ellowood and places like it are underground cities, where the hobbits live amidst tree roots.`
                    },
                    {
                        id: 1,
                        name: `Farathain`,
                        race: `Gnomes`,
                        cities: `Nalri`,
                        features: `Loch Ladish, Nadia Catedral, Farathain Mist`,
                        description: `The marine coastal climate of these lush greenlands make them cloudy, foggy and damp. This ever mist has drawn many tales that gnomekind have passed on for generations.`,
                        image: farathain,
                        imageAlt: `Farathain`
                    },
                    {
                        id: 2,
                        name: `Alcedon`,
                        race: `Men, Halflings`,
                        cities: `Elmen`,
                        features: `Galdrum Sea`,
                        description: `This region is peppered with farms of many a race who have found it suitable for crops; the climate is humid continental becoming more Mediterranean as one moves west of Galdrum Sea.`
                    },
                    {
                        id: 3,
                        name: `High Mountains`,
                        race: `Asiame, Aeoki`,
                        cities: `Engaroth`,
                        features: `Mountains, Caves of Mhindileth, Egora Lakes`,
                        description: `The High mountains are the highest elevation in all of Avlim and are capped with snow throughout the year. They hold the original location of where the noble races communed with God. It continues to be the home of Asiame who prefer the low temperatures and oxygen levels.`
                    },
                    {
                        id: 4,
                        name: `Haven`,
                        race: `Blue Gnomes`,
                        cities: `Anvil`,
                        features: `Mirrored Cliffs`,
                        description: `Haven was the only 'haven' for the noble races that remained free from evil in the void age and thus became quite mixed in its population at the coming of the void.`
                    },
                    {
                        id: 5,
                        name: `Agate`,
                        race: `None`,
                        cities: `None`,
                        features: `Inner sanctum filled with all the gems of DIA`,
                        description: `Agate is the sacred Island to the noble races. The ocean surrounding this slick surfaced crystal island are turbulent nearly all year outside of the summer and autumn equinox.`,
                        image: agate,
                        imageAlt: `Qeṽa's Island of Agate`
                    }
                ]
            },
            {
                id: 2,
                name: `Alsthiavaire`,
                climate: `Semi-Arid`,
                description: `The highlands of Alsthiavaire lie at a higher elevation, but share the semi-arid climate of Arvañon.`,
                image: altiavaire,
                imageAlt: `Qeṽa Map of Alsthiavaire`,
                subtopics: [
                    {
                        id: 0,
                        name: `Lumier Valley`,
                        race: `Aviame`,
                        cities: `Lumion, Tower of Afithem`,
                        features: `Lotus Lake`,
                        description: `The High mountains are the highest elevation in all of Avlim and are capped with snow throughout the year. They hold the original location of where the noble races communed with God. It continues to be the home of Asiame who prefer the low temperatures and oxygen levels.`,
                        image: lumiare,
                        imageAlt: `Lumier Valley` 
                    },
                    {
                        id: 1,
                        name: `Mellë (Lowlands)`,
                        race: `Aviame`,
                        cities: `Theathe`,
                        features: `Thelos Catedral, Rose Lake, Black Rose Fields`,
                        description: `The High mountains are the highest elevation in all of Avlim and are capped with snow throughout the year. They hold the original location of where the noble races communed with God. It continues to be the home of Asiame who prefer the low temperatures and oxygen levels.`  
                    },
                    {
                        id: 2,
                        name: `The Horn`,
                        race: `Aviame`,
                        cities: `Thaea`,
                        features: `Elethe lakes`,
                        description: `These highlands are less occupied, but beautifully colored with scorched red flora. Prior to the war they were moreso inhabitated by the race of men, but men slowly withdrew from these lands to their own kind.`
                    },
                    {
                        id: 3,
                        name: `Thelvani Isles`,
                        race: `Aviame`,
                        cities: `Safuthele`,
                        features: `Small islands`,
                        description: `This was the stronghold that withheld the dark armies in the void age. These islands are subarctic with short summers and long, cold winters.`
                    }
                ]
            },
            {
                id: 3,
                name: `Navalil`,
                climate: `Tropical`,
                description: `Navalil is the southern wooded realms that originally belonged to men, but were garnered by elves.`,
                image: navalil,
                imageAlt: `Qeṽa Map of Navalil`,
                subtopics: [
                    {
                        id: 0,
                        name: `Navenia`,
                        race: `Wood Elves`,
                        cities: `Brielle`,
                        features: `Catedral Brielle`,
                        description: `This is the heart of civilization and the capital of Avlim. Within its borders are the lushest and most abundant plant-life in all Avlim if not all of Qeṽa`,
                        image: brielle,
                        imageAlt: `Catedral Brielle`
                    },
                    {
                        id: 1,
                        name: `Evyandil`,
                        race: `Wood Elves`,
                        cities: `Eavanyo`,
                        features: `Yarvarwe (Cathedral of Bridges)`,
                        description: `Evyandil is an elven forest in the southwestern region of Avlim and contains like-lushness to Navenia. It's borders are heavily guarded as an exclusivley elven realm.`,
                        image: eCloaks,
                        imageAlt: `Passage of the Elven Cloaks`
                    },
                    {
                        id: 2,
                        name: `Thrush Mountains`,
                        race: `Dwarves, River Elves`,
                        cities: `Anuage`,
                        features: `Passage of the Elven Cloaks, Aneaguthe (Cathedral whose waters flow from the mountain)`,
                        description: `Mountains range from patches of lush treelines to bare mountains the further east you travel` 
                    },
                    {
                        id: 3,
                        name: `Valë`,
                        race: `River Elves`,
                        cities: `Anuage, Vaiorse`,
                        features: `Sinothain Falls, Riovanye`,
                        description: `Vast tendrils of streams and rivers vine throughout this land more than others and for this the river elves love it and have settled there from the beginning.`,
                        image: riovanye,
                        imageAlt: `Catedral Riovanye`
                    },
                    {
                        id: 4,
                        name: `Mahelo`,
                        race: `River Elves`,
                        cities: `Helos, Arkris`,
                        features: `Anhelos`,
                        description: `Mahelo was once a beautiful forest, but has since become cursed upon the fleeing of Ithmaar from Avlim. It now lies a dangerous and enchanted woodland, which natives warn to stay away from.`
                    }
                ]
            },
            {
                id: 4,
                name: `Nagar`,
                climate: `Arid`,
                description: `From the mountains to the canyons, nearly the whole land is cracked and dry`,
                image: nagar,
                imageAlt: `Qeṽa Map of Nagar`,
                subtopics: [
                    {
                        id: 0,
                        name: `Mhindilin`,
                        race: `Dwarves`,
                        cities: `Barenem, Barduin`,
                        features: `Indilë, The Bare Mountains`,
                        description: `Home to the most stubborn dwarves and original home of the aeoki, Mhindilin was once a field on the eastern border of Nagar. However, upon the aeoki genocide, DIA's tears have filled it and turned it into a swampy region, which is relatively unhabited besides its mountains to the north.`,
                        image: barir,
                        imageAlt: `The Bare Mountains`
                    },
                    {
                        id: 1,
                        name: `Nagaçim`,
                        race: `Desert Elves`,
                        cities: `Nagareth`,
                        features: `Desert, Oasis`,
                        description: `This is the dry and terrible deserts of northern Nagar; Home to the desert elves who withdrew from society  escape its hostility.`,
                        image: oasis,
                        imageAlt: `Oasis of the Desert Elves`
                    },
                    {
                        id: 2,
                        name: `Nagaçe`,
                        race: `Dragons`,
                        cities: `Nagaçin`,
                        features: `Salt Flat Springs of Nagacin`,
                        description: `Nagaçe lies on the southwestern tip of nagar and is a place rarely visited as the last dragon of Avlim still dwells there. This dragon is good and therefore evil does not approach him and neither does good for their fear of the evil in this region of Avlim.` 
                    },
                    {
                        id: 3,
                        name: `Arguthain`,
                        race: `Orcs`,
                        cities: `None`,
                        features: `Tourmaline growing aggresively with tunneled caves within the island`,
                        description: `Arguthain is the sacred island to the dark armies. The tourmaline islands of Arguthain share the arid climate of Nagar.`,
                        image: arguthain,
                        imageAlt: `Qeṽa's Island of Arguthain`
                    }
                ]
            }
        ]
    },
    {
        id: 1,
        link: `/locations/malune`,
        name: `Malunë`,
        description: `Malunë is the island of the elves; their southern sanctuary from the void and evils of Avlim, hidden by celestite and known only to their kind.`,
        hTopics: [
            {
                id: 0,
                name: `History`,
                topics: [
                    {
                        id: 0,
                        name: `Breaking From Qeṽa`,
                        year: `84 D.E.`,
                        description: `At the first blood spilt of Dia special creation, the sentients, Qeṽa was split into five continents, the center of which was “Avlim.” To the south, fell the landmass that would be called Maluñe by the elves, as they were the only ones to know of its existence. Though most sentients were drawn to the center of Avlim at the darkening of the skies, there were yet elves all across Qeṽa as they were the most numerous race. Elves in the Evéndil forest witnessed the terrible split of Maluñe. For great and terrible it was to see the enormity of the earth's crust rise skyward and slap the waters into waves. Trees, Treelings and Elves alike were thrown from the ground to fall like stones to the seabed. They reported the event to their kin and some would set sail and even swim for Maluñe at the storming of Moriel's dark armies.`
                    },
                    {
                        id: 1,
                        name: `First Elves of Malunë`,
                        year: `84 D.E.`,
                        description: `Malune. There was no greater land in all of Qeṽa (outside the forest of Navenia). Maulne was a lush paradise. Treelings and Elves shared the land as a hidden paradise during the events of Avlim. These Treelings and Elves would form a bond that would not be experienced by the Treelings and Elves in Avlim. The treelings took many forms from mushrooms to moss, evergreens, grass and shrubs. The Elves were well-acquainted with Dia's heart for plants and they cared for the trees with a great love; a love that was reciprocated by all the trees of Maluñe. The two seemed to draw love not only from each other, but from the crust of the earth. For it was in fact here that the elf, Amare would bury the gift of Dia, the pure cut diamond - the stone of love. Though Amare knew of Maluñe, he never spoke of it nor sought it out. Amare's heart of love urged him to remain in Avlim and spend millenia to labor unrewarded caring for hardened hearts, blinded by hate. The same gnomes and dwarves who spit in his face, and blamed the darkening skies on the eldar elf - he bound their wounds, and gently carried their stones to the graves of Agate. Amare would be the sole eldar elf who would wait to directly oppose Moriel and his successors of darkness. It was not until the turn of the age, at the age of darkness when Amare made such a choice. Until then, He could be found moving from village to village, serving, protecting and healing the races of Avlim.`
                    },
                    {
                        id: 2,
                        name: `First Ruler of Malunë`,
                        year: `86 D.E.`,
                        description: `The Elves revered order and the wise elf, Silru was nominated to be their lord. He ruled with great wisdom over their people and remained an honorable elf. `
                    },
                    {
                        id: 3,
                        name: `Second Elves of Malunë`,
                        year: `0 V.E.`,
                        description: `The Second wave of elves entered Maluñe to seek refuge from the void of Ithmaar at the eve of the age of darkness. Many would never return to Avlim as it was a Avliment land in comparison to Maluñe. This led to a significantly smaller population of elves on the central continent.`
                    },
                    {
                        id: 4,
                        name: `Abstention of the Elves`,
                        year: `0 V.E.`,
                        description: `It was not long after this that the Elf-kind were in danger of outgrowing their forests. Their immortality meant that they would live forever, but it also meant that the forest would have to sustain more and more of their kind every year. To protect their own vitality, The Elf-lord, Silru mandated that no more elves be born unless given the proper permissions. Only at the unexpected leaving of an elf, could a married elven couple be given the opportunity to replace this life with a newborn life. Silru began a list ordering who would have the next opportunity to bear a child. Any couple without an heir would be given priority. Any elves seeking children would often travel to Avlim as few Elves ever left.`
                    },
                    {
                        id: 5,
                        name: `Falling of Celestite; Parsing of DIA's Invisibility`,
                        year: `207 V.E.`,
                        description: `At the falling celestite, one meteor drifted into the east while the other landed near the coast of Malune. It fell with a great noise and left a trail of smoke in the sky. Silru sent elves where the trail of smoke led into the water. “Quickly now!” Two elves dove into the ocean to find what had fallen from the sky. The meteor was so hot that it was glowing orange and still sending a trail of smoke upward in the water. They noticed that the parts of the meteor not glowing orange were completely invisible. They knew that they had to collect the stone before it cooled or it would be lost forever. One of the divers, Inofain, reached out and grabbed the burning hot celestite and swam for the surface. He felt it burning his hand as he went. After he reached the surface, he kneeled before Silru and offered him the celestite. But all Silru could see was an amputated arm. Where the celestite had burned him was now invisible. Inofain explained what had happened and the qualities of the stone.
                        “You shall be the Guardian of this stone,” Silru said. “And you shall also be the Guardian of Malune. Let us take this stone and enchant our borders. Let us make the island invisible to all foreign eyes. We will welcome those who we welcome and turn away those we wish to turn away.” With that, Inofain took the stone and cloaked the Island in Invisibility. He wrapped the stone in leather and kept it in a satchel on his right hip. He became the gatekeeper to any who wished passage to Malune. His hand remained invisible for the rest of his days.`
                    },
                    {
                        id: 6,
                        name: `Inofain's Stone`,
                        year: `400 V.E.`,
                        description: `As time passed, Inofain noticed that more and more of his body began to disappear the longer he remained with the stone. Eventually, he would become a being of complete invisibility, a being of the ether.`
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        link: `/locations/orcava`,
        name: `Orcaṽa`,
        description: `Orcaṽa is the land, which broke northward and quickly took on a terribly cold climate, which drew the Asiame race to it.`,
        image: orcava,
        hTopics: [
            {
                id: 0,
                name: `History`,
                topics: [
                    {
                        id: 0,
                        name: `Breaking from Qeṽa`,
                        year: `84 D.E.`,
                        description: `At the Splitting of Qeṽa no sentient life was on the continent of Orcava.`
                    },
                    {
                        id: 1,
                        name: `Ice Caves of Orcaṽa`,
                        year: `84 D.E.`,
                        description: `As Orcaṽa drifted northward, the ice and snow crept in and the lush green forests turned to white. Snow powdered the forests and the dropping temperature turned the trees to icicles. The snow was so thick atop the trees, that it formed into one large ceiling and the trees became like giant beams to a great hall. Thus the forest would be called the arctic halls of Orcaṽa. It would become a home and sacred place to the high aviame for the cold suited them and their kind would voyage there to start a new life. They would carve magnificent halls in the ice.`
                    },
                    {
                        id: 2,
                        name: `Voyage of Lost Worlds`,
                        year: `455 D.E.`,
                        description: `After the war of dragons, the ice dragon, Nagil bid his farewell to the free people of Avlim. He had heard Moriel speak of the breaking of Qeṽa and sought to look for what remained of the other continents. He had now bonded with two Aviame, and took them as companions on the journey. These aviame were Leocas and Lavendi. They would find and explore the western continents of Qeṽa until they finally settled in the Ice forest of Orcava; a climate fitting to both the Aviame and Ice dragon. The two Asi chipped at the Ice and developed great halls where many Aviame would come to live.`
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        link: `/locations/baroach`,
        name: `Baroach`,
        description: `Baroach are the lands of Nagar that broke eastward at the breaking of Qeṽa and become home to a nation of Ohri children.`,
        image: baroach,
        topics: [
            {
                id: 0,
                name: `Sarcaug (The Shattered Sea)`,
                climate: `Arid`,
                description: `The Shattered center of Baroach that eroded away into many islands`
            },
            {
                id: 1,
                name: `North of the Shattered Sea`,
                climate: `Arid`,
                description: `Lands where the Ohri children began to habitat in their separation from Avlim`,
                subtopics: [
                    {
                        id: 0,
                        name: `The Sea Caves of Uthaduhn`,
                        race: `Ohri`,
                        cities: `Uthaduhn`,
                        features: `Sea Caves`,
                        description: `The Sea Caves of Uthaduhn was the first home to the Ohri children in their separation from Avlim. After the breaking of Qeṽa, the Ohri moved inward and made their dwelling there till their exodus southward.`
                    },
                    {
                        id: 1,
                        name: `Caves of Untu`,
                        race: `Ohri`,
                        cities: `Untu`,
                        features: `Dry Caves`,
                        description: `The Caves of Untu were another home to the Ohri children, who broke away from the larger group of Ohri children. They re-established the way of the orc which they remembered from their parents.`
                    },
                    {
                        id: 2,
                        name: `Oril`,
                        race: `Orc`,
                        cities: `Ouaruk`,
                        features: `Coastal Cliffs`,
                        description: `Oril makes up the Northwestern portion of Baroach and was least inhabited of Baroach's mainland outside of the unlivable Avu Dunes.`
                    },
                    {
                        id: 3,
                        name: `Ashíchu Isles`,
                        race: `None`,
                        cities: `None`,
                        features: `Eroding Islands`,
                        description: `Called "The Unlived Isles" for never hosting any sentient cvilization. Like the shattered sea, these islands were highly erosive and acted as floating debris from the breaking of Qeṽa.`
                    }
                ]
            },
            {
                id: 3,
                name: `South of the Shattered Sea`,
                climate: `Arid`,
                description: `As one descends Baroach, they move into the lusher places of the continent.`,
                subtopics: [
                    {
                        id: 0,
                        name: `Avu Dunes`,
                        race: `-`,
                        cities: `-`,
                        features: `Desert`,
                        description: `The Avu Dunes are a lifeless desert that had to be surpassed to reach the lusher region of Brioke.`
                    },
                    {
                        id: 1,
                        name: `Bantu`,
                        race: `Orc, Red Gnomes`,
                        cities: `Brioke`,
                        features: `Woodland`,
                        description: `Bantu pertains to the lush bottom of the Baroach continent, hinged on the gap of Vagulsch. It is a sliver of Avlim that maintains the same beauty and reflection of DIA's image.`
                    },
                    {
                        id: 2,
                        name: `The Lavasunes`,
                        race: `Red Gnomes`,
                        cities: `Lavatu`,
                        features: `tropical isles`,
                        description: `The Lavasunes are a tropical paradise and perhaps the finest climate outside of Navalil itself as they are islands that have broken away from Bantu.`
                    },
                    {
                        id: 3,
                        name: `Isles of Alshqui`,
                        race: `Red Gnomes`,
                        cities: `Brioke`,
                        features: `flatlands`,
                        description: `The Alshqui isles are not quite as lush as their sister islands, but provide solitude to those who seek it for they are far removed from much of civilization both noble and evil alike.`
                    },
                    {
                        id: 4,
                        name: `Yaru`,
                        race: `Men, Husks`,
                        cities: `Caraduhl`,
                        features: `flatlands`,
                        description: `The only civilization of men to drift away to the east. It is a difficult and terrible land where one must be weary where they step.`
                    }
                ]
            },
        ],
        hTopics: [
            {
                id: 0,
                name: `History`,
                topics: [
                    {
                        id: 0,
                        name: `Breaking from Qeṽa`,
                        year: `84 D.E.`,
                        description: `When the first blood was split, not all of Moriel's creation had taken up arms and traveled west. Some women and children remained in the canyon of Akukar. Now the splitting of Qeṽa affected Baroach more than any other region as its earth was dry and brittle. When Qeṽa split, the canyon of Akukar expanded and a crack eclipsed the entire continent that departed. But not all of the bare lands were taken and the community of orcs remaining in Shaole was ripped apart. Some fell on the side of Avlim while many were sunk into the sea or trapped in the flooded caves of Akukar. But a select few of orc, hobgoblin and goblin children managed to escape on the side of Baroach.`
                    },
                    {
                        id: 1,
                        name: `The Orc Children of Baroach`,
                        year: `84 D.E.`,
                        description: `The Orc children of Baroach faced the harsh reality of survival in a desolate new world. The canyon that was once their home was flooded and their parents gone. They began crossing the northern desert in search of a new home. Beyond finding a home, they had to develop a new sense of society and values. Orc children were relatively unparented and did not have a sense of learned values. In Moriel's plan, this structure detached them from the type of love that could develop empathy. However, in this turn of events, it allowed the orc children to create a worldview and value structure outside of Moriel's plan. And so they did. The lingering love left within them drove them to seek the values of Dia. Unlike their ancestors, they created a society akin to the elves. They valued love, joy, peace, patience, kindness, goodness, faithfulness and self-control. They were not completely uninfluenced by their elders. Some of the children had much stronger memories and remembered the lives their parents lived. They rejected this new group's values and sought to carry on the tradition of their parents. It is for this reason that the genes of orcs were as they were in Baroach. A good memory was attached to the orcs, and a poor one to the ohri. For yes, that is what they became. The good orc children of Baroach became Ohri. They survived the harsh deserts and conditions of the continent together while the evil Orc children survived by independent strength. They never formed a stable community, but became dangerous outlanders.
                        `
                    },
                    {
                        id: 2,
                        name: `Raptors of Baroach`,
                        year: `84 D.E.`,
                        description: `One of the most dangerous animals for the Ohri children to come upon in Baroach was the raptor. It was about the size of a small horse and was highly intelligent. Unbeknownst to the Ohri or any for that matter, it respected the sentient people of Qeṽa and had no intention to make any of them a part of their diet. It is the reason why they drifted into the far easter lands. However, when orc and ohri came at the beasts throwing spears, they did defend themselves and often overcame raiding parties. They traveled in packs and were a dangerous beast to have as a foe in such a barren place, with few places to hide.`
                    },
                    {
                        id: 3,
                        name: `Taming of the Raptors`,
                        year: `89 D.E.`,
                        description: `Not all of the children were instilled with the wisdom of fear. One youngling, Anuli, saw them through innocent eyes. Once, when a raptor pack veered close to their  home, the ohri children all hid except for one. Anuli, stepped outside from his rock and walked calmly toward the loitering raptors. The nearest one shot into a defensive position and hissed, but Anuli continued walking forward and began to out stretch his hand. The rest of the reports looked on curiously and the nearest on showed signs of anxiety, looking to the pack for advice, but their expressions were silent. The stress flustered the beast and suddenly the child's hand touched its snout. The beast did not react harshly except for a small flinch. The Ohri in hiding slowly rose from their hiding places and slowly approached. Anuli waved them on, “go on now, fetch some meat out of your pocket. Another ohri, Dango, stepped forward digging into his bag. The raptor sprang back in half concern, but two other raptors stepped forward unconcerned. Dangu tossed a couple fish onto the clay earth and the raptors consumed them happily. Others in the pack were now starting to crowd around Dango. Anuli petting his first raptor friend, yelled back to the others, “hurry, bring more!” Ohri were now mixing into the pack feeding the raptors here and there. The bond of the ohri and the raptor was formed. The raptors were never “domesticated” as you as I understand domestication. They were separate from the ohri and were never harnessed for manual labor. They would visit Uthaduhn often and sometimes share that space at times. They worked cooperatively in hunting exploits and socialized for long stretches of time. They were like stray cats on a farm. Perfectly fit for survival on their own and yet seeking companionship and coalition with the farmer. Their  bond became close enough that the raptors allowed the ohri to ride them and direct them.`
                    },
                    {
                        id: 4,
                        name: `Sea Caves of Uthaduhn`,
                        year: `91 D.E.`,
                        description: `The Ohri children finally found a new home in the sea caves of Uthaduhn. It was northwest on the island and they had settled before exploring most of the planet. They developed structures and systems that made the sea caves habitable and a home.`
                    },
                    {
                        id: 5,
                        name: `Obri and the Lion`,
                        year: `203 V.E.`,
                        description: `As the shadow of Ithmaar spread over the earth, there was a panicked search for Dia. Not even the eldar elves had an answer. Now Obri was a man who had taken refuge in the northern isle of Alona. Though he never physically heard or seen Dia, he had formed a deep relationship with him. He was one of the few men to seek conversations with Dia over the sensational experiences of life. When the shadow was so thick and no mountain was high enough for even the oracle to commune with Dia, he thought that perhaps the bare lands of the east would hold the answer. Perhaps something about their bareness and the lack of humanity would force the darkness to dissipate there and allow for a clear sky to commune with Dia. He was no oracle, but no oracle would listen so he boldly sailed for Baroach; a land rumored about from the traveling guilds and the eldar elves. Dia directed his boat through stormy seas and he arrived at the barren lands of Baroach leagues from any sentient life. The sky was clearer here as he had surmised and yet still cloudy, but there was no reply from Dia when he spoke aloud. Despite this, he had no lack of faith and continued to commune with Dia as he had his whole life. He made a humble clay home and ate even humbler from the desert plants and animals of Baroach. Perhaps the skies would clear. Even if he could speak to Dia for one day, his journey would have all been worth it. He lived in peaceful solitude awaiting a reply from Dia. He had no expectation, mere request.`
                    },
                    {
                        id: 6,
                        name: `Falling of Celestite & Parsing of Dia's Invisibility`,
                        year: `207 V.E.`,
                        description: `His requests continued until one day when a bright flash in the sky showered two meteors of light from the sky. One fell only a few miles from his home and it shook the earth. He traveled there. To what would be called the caves of Untuu. There he found that the meteor had shattered the earth into canyons, but he followed the source of the smoke to find what had fallen. There he found a wounded lion cub. It could have been dangerous, but Obri approached it as there was something strangely familiar about this animal. He splinted one of the cub's legs and carried it back to his home. There he cared for it and fed it as it healed. He named it “Mwari” after the sound of the cub's growl of happiness. He shared many happy memories with this lion. They were inseparable companions. The lion continued to grow bigger and stronger through the years as Obri grew weaker and weaker. As an old man, he would rest in the giant lion's mane with short depleting breaths. At the end of his life, was sad that he had never spoken with Dia. He felt lonely and foolish. In his last day, The giant lion entered into his room and spoke for the first time. “It is time, Obri. Obri was nearly shocked into a heart attack at hearing his old friend speak. “Mwari… You can talk… But how? Who are you?” “Old friend.. You have known me since before the shadow. You know who I am.” At this Obri's eyes swelled with tears. He whispered, “Dia… Why did you not speak sooner?” The lion showed a small smile. “You will see in time that you have lived a mere blink of our friendship.” With this, the lion breathed onto Obri and he was lifted in a warm breath from his bed as his body became translucent and then invisible. The clay roof opened up and Obri rose upward into the sky. He watched the lion's gaze turn away and walk out of the clay house away into the desert of Baroach. Eventually the lion became a spec and the desert a continent, a continent into a planet. He shot past stars and galaxies that were cold and at the same time warm. And thus, Obri was swept by lion breath into the realm of Dia before his life ended.`
                    },
                    {
                        id: 7,
                        name: `The Missing Years of Amare`,
                        year: `207 V.E.`,
                        description: `There was a time in the history of Avlim, where no one could attest to the whereabouts of Avlim. He seemed to disappear from the first shores. Many assumed that he had sailed to the sanctuary of the elves in Malune, but the elves knew better. Elves sailed what they deemed “often” in the context of eternal life and none had seen him. And that is because he was not there. In Amare's quest to seek the lost, he had seemed it right to find the remaining lands of Baroach. He was one of the few eldar elves or of any elves to have traveled in the desert lands for few had seen the purpose in going there. But Amare saw purpose in all of Dia's creation and visited there. He even spent time with Moriel and his orcs or at least what Moriel allowed for him to see. He knew there were women and children orcs unaccounted for after the splitting of Qeṽa. As the loving husband of Mhindil, he spent a great deal of time with the Aeoki in the Arthadan fields before their onslaught. Being so close to the canyon of Akukar, they had heard rumors from the Aeoki of orcs angry and grieving over their missing women and children. After the finding of Ishka, the first ohri in Avlim, Amare felt that he had no choice but to search for the Orc children. Perhaps apart from Moriel's watchful eye, he could grow them up in goodness and love. He sailed alone accompanied only by his Aeoki companion and a necklace to remind him of his love, Mhindil. He took a small boat across the sea. At night, he would use his divination to freeze the water below his boat into an anchor. It was just the right size so that by morning, it would be a sliver that would delicately break off with a gentle hit of the paddle. One night, a storm would push him to the northward part of Baroach, for Dia did not intend for Amare to find the Ohri right away. Amare spent many years alone in the desert, looking for signs of life. He had almost given up hope when he finally found them. Walking through the bottom of a canyon a raptor leapt down from the top of the canyon.  At a guttural sound, he was followed by others scrambling down the ravine ridden by Ohri. Macaron hid in Amare's hood. The pack of riders blocked either side of the canyon with javelins drawn and though he was powerful enough to overcome them, Amare remained neutral with his hand off his weapon. The forward Ohri shouted upward and back, “we have found one alone!” 
                        
                        As the rest of the pack approached, a leader emerged from the group. He studied him carefully circling him with the raptor hissing uncomfortably close to his face. An ohri from the pack quietly remarked “He is not like the rest...” The leader questioned Amare, “what are you and what is your business here?” Amare knelt before them, bowed his head and spoke softly, I am Amare, eldar elf of Dia. I have been searching for you.” The leader dismounted. “We know nothing of what you speak.” At this, Amare lifted his gaze upon the leader and stood up slowly locking his hands behind his back. As he did, he divinely unsheathed his sword and placed its grip in the leader's hand. Softly he said, “There is much of the world that you do not know.” At this Amare gained their trust and he joined an ohri rider atop a raptor as they rode for the caves of Uthaduhn. Over a warm fire, Amare told them the story of Dia and of the beginning of the world. He told them of elves, halflings, arborums, gnomes and dwarves. He spoke carefully about their creator, Moriel and the orc history. Amare remained with them and taught them in the ways of love, selflessness and humility. The Ohri took a liking to Macaron and made attempts to learn his language, for the vocal chords of the Aeoki did not allow their race to speak common. He guided them to the southern forests of Brioke where Dia's attributes were more lush, but this would not be their home for long.`
                    },
                    {
                        id: 8,
                        name: `War with the Red Gnomes`,
                        year: `310 V.E.`,
                        description: `The ohri were not the only ones to inhabit Baroach. Soon members of the traveling guilds sailed to bring order back to this parcel of Dia. But the years of separation from the lush attributes of the first shores would twist these adventurers' hearts and what was once the enforcement of oracle rule, would become enforcement of their own. They had unintentionally followed in the footsteps of Moriel's logic of forcible peace. The men created their own rule and the gnomes followed. Gnomes who were originally shades of blue and green slowly took on a reddish color. They attributed it tp the red sands in Baroachn but it was truly caused bt something within. For they were not only distinct from other gnomes in color, but also in character. They were more irritable and unpredictable like the men they followed. Their rule originated in Caraduhl. It was not until they sailed to the lush southern forests of Brioke that they encountered the Ohri. Now the Ohri were peaceable and were willing to share their newfound paradise, but the men did not share this sentiment. They saw the Ohri as creatures of pure evil and quickly deduced that Amare had been twisted to evil desires like Moriel. They attacked the Ohri and pushed them back out of the forest. Amare was wise and told the Ohri that it was not the time to fight. Their women and children were unprotected. He guided them northward saying, “It is better to have peace in a humble house than to quarrel in prosperity.” They took the long journey back to the sea caves of Uthaduhn. On their way they were raided by both the evil men and gnomes as well as the orcs living on Baroach.`
                    },
                    {
                        id: 9,
                        name: `Arrival of Ithmaar`,
                        year: `0 M.E.`,
                        description: `When Ithmaar reached the shores of Baroach he was extremely vulnerable. His abdomen was wrapped, but bleeding profusely. He merely fell on his face and crawled on the sand when he reached the shore. He was not far inward from the shoreline when he found himself an observer of a battle. He recognized both sides and their races: orcs against men and gnomes. Assuming the orcs were on his side, he joins them in battle making quick work of the men and gnomes. As the battle ends, the lead ohri approaches Ithmaar saying, “Dia bless you, brother. By what grace are we visited by an Aviame? Ithmaar was shocked for several reasons. First, these orcs seemed civilized and dedicated to Dia. In Avlim, this meant a commitment to love and wisdom in a way the dark armies did not condone. Second, they referred to him as an Aviame. They seemed to have no knowledge about his existence or the history of the Athmari and his reign during the age of darkness. He paused and responded, “By Dia's grace, my friends.” They seemed pleased with this response and chuckled with an “Aye!” After this he asked, “What quarrel do you have with these men?” “They are evil men, friend. They seek to impress their peace by death and destruction. We are glad to have your aid…. What is your name, Aviame? “Ivar” he replied. “Well Ivar, anyone who fights beside me is a friend of mine. We would be honored if you would return to camp with us.” Intrigued, Ithmaar agreed. Upon arriving at camp he was shocked to see the eldar elf, Amare sitting at a fire, but Amare did not see him at first. The Ohri leader, Gallagher greeted Amare. “Amare, beloved. We came across Mavicks in the Avu Dunes. They were almost more than we could handle, but they have been swiftly handled” “We must not call them that, Gallagher.” Amare sighed and put his hand lovingly on the Ohri's shoulder. “But I am glad you are alright.” 
                        
                        Suddenly, Amare noticed Ithmaar's presence and was equally as shocked. “Ithmaar.” Amare hid the Aeoki behind his back. Macaron hid under his shirt, digging his claws into Amare's back. “You mean Ivar, Gallagher said. “Only you, great Amare would believe the blessings of Dia. Amidst the skirmish, this Aviame appeared and aided us against our foes. “Is this so…” Amare said slowly. We would not all have made it back without him. I have seen none better with a sword.” Amare fumed with unusual anger for it was Ithmaar who had taken sport in killing his wife, Mhindil; making public display of her death and attempting genocide of the Aeoki. In a firm tone Amare says, “Explain yourself, Ithmaar of Rathank. Before Ithmaar could speak, Amare interjected again, “And why a thousand years and a league apart from Avlim, I should stay my blade from your neck.” Though unhelpful to the situation, Ithmaar wished to retort back that he was “Ithmaar of Arkrist” and that he had ruled the first shores for an age since last they met, but he withheld. “Most beloved brother of Dia, I am no longer that man.” I have changed. I have crossed Avlim from east to west making amends and my body shows the penalty I have paid.” He pulled his hand from the blood-soaked wraps around his abdomen. “I am now Ivar of Baroach. I sought these shores to repent in exile.” He knew that kneeling would sell the lie, but he could not bring himself to do it. He couldn't even muster a wince as an excuse. Amare, swallowed his anger and full of love, forgave. “I hope that this is so.” Amare turned to the Ohri, “Do not be quick to trust, my brothers, I assure you this Aviame is capable in far more ways than combat. But we will take him at his word for none of us are noble if we cannot forgive.” With that Amare walked away. “Show him to the guest quarters. Post the guard.” Amare returned to his chamber and pondered in solitude. Ithmaar followed the Ohri and grinned.`
                    },
                    {
                        id: 10,
                        name: `Meddling of Ithmaar`,
                        year: `0 M.E.`,
                        description: `You could say that Ithmaar earned the Ohri's trust over the next couple months, but their trust was already earned at the first encounter. It was Amare whose trust grew in inches. With the Ohri's complete trust, he began to spread his philosophies among them, those handed down by Moriel whenever Amare was away. Amare had not told them about Moriel to protect them. This gave Ithmaar the opportunity to craft the story. He described him as a savior of Avlim. A child of Dia bringing peace to the first shores of Qeṽa. Eventually he convinced them that they should make peace with their enemies as peace is the object of Dia. Thus, Ithmaar led the Ohri in secret first to the encampment of the Orcs. “Awake my friends!” Ithmaar yelled. Lights flickered in their huts as armed orcs rushed toward them. In their pursuit, Ithmaar rose the earth beneath him into a platform. One orc shot an arrow at him and he swatted it away with divination. Another arrow loosed and Ithmaar caught it in his hand. 
                        “Are you not the ones who recognize Moriel? As do we!” The orcs held their fire. “Then what do we have to fight about?”
                        With this, the orcs and ohri joined together and left for the encampment of men and gnomes in the lush region of Brioke. Together, they made an army that the Mavick men and gnomes could not stand against. They strode into Brioke with confidence as their opponents watched with horror. “Aren't you tired of fighting?” It received no response. “This land is ours now. All that is left is your answer. Will you be joining us?” They did.Meanwhile, Amare was in search of the Ohri, who had disappeared from Uthaduhn. He was able to move throughout the land speedily unencumbered by companions. But he was too late. Before he could find them, he saw black smoke rising from Brioke. Ithmaar's forces had already settled in and were forging weapons and armor. When Amare arrived, the wood looked sick and the ohri like orcs.`
                    },
                    {
                        id: 11,
                        name: `Death of Amare`,
                        year: `20 M.E.`,
                        description: `“Ithmaar! show yourself!” Ithmaar walked casually into the clearing cleaning a blade with a dirty rag. “Amare. Greetings, heavenly brother.” “Gallagher, collect the others.” “But Amare, we have brought peace to Baroach. Why are you so angry?” “No, you have brought war.” Amare turned to Ithmaar. “What is your plan now, Ivar of Baroach? Will you bring “peace” to Baroach. Or will this not be enough. Will you also bring your “peace” to the first shores as well?” Amare lowered his arm to allow the Aeoki to crawl off of it and drew his sword. Ithmaar dropped his rag and divined a sword into his other hand. He twirled the two swords he was now dual-wielding. “I will not let you twist their minds, Eldar though you are, into believing that you bring peace by means of a sword.” Gallagher looked conflicted, but the battle ensued. Amare was the least trained for battle among the eldar elves, but this was not saying much. He was a fair match for Ithmaar. They interlocked blades and Amare looked deep into Ithmaar's eyes. “By my blade or another's you will pay for the death of Mhindil, for the Aeoki, for the noble men, women and children of Avlim who have suffered by your hand, for the Ohri children who have fallen under your curse!” Thei fight continued and Amare knocked Ithmaar from his feet, but the red gnomes were inspired by Ithmaar and used their inclination for magic to stun Amare with an illusory firework near his face. 
                        Ithmaar took the opportunity to kick Amare's knee and reverse the situation. Suddenly it was Amare who was on the ground with Ithmaar looming over head. Suddenly an Ohri rushed forward. "Noooo!!!!" And another “Spare him, Ithmaar! Do we not fight for peace?” A few others followed behind, but Gallagher watched with trepidation. He was frozen and torn between his old friend and newfound hero. Ithmaar looked at the army encircling the duel. “He made his choice. He does not want peace.” With that, Ithmaar lifted his blade and brought it down on Amare beheading him. The dissenting Ohri ran into the desert as a small band of men, orc and gnomes pursued them. The moment lasted forever for Gallagher; leader of the Ohri and friend of Amare. Ithmaar reached down where the head had been liberated and held up a pendant with the sentient stone swinging at its end. Before he could secure it, He watched the stone pendant pull away from his grip and into the grubby hands of the Aeoki, Macaron, who vanished instantly. The body of Amare was given no grave. It lingered helplessly as rodents and birds unceremoniously carved it to bone.`
                    },
                    {
                        id: 12,
                        name: `Ithmaar's Army leaves for Avlim`,
                        year: `44 M.E.`,
                        description: `Inspired by Ithmaar, his followers including orcs, red gnomes and husks, assembeled boats and prepared to leave the shores of Baroach to reclaim their inheritance upon Avlim.`
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        link: `/locations/aguave`,
        name: `Aguavé`,
        description: `Aguavé is the lush land westward, which interacted little if at all with the affairs of Avlim and its people.`
    }
]