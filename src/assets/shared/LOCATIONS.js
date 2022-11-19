import avlim from '../imgs/maps/avlim.jpg';
import baroach from '../imgs/maps/baroach.jpg';
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
        topics: [
            {
                id: 0,
                name: `Arvañon`,
                climate: `Semi-Arid`,
                description: `This is the northwestern sector of Avlim, which is home to the race of men.`,
                image: arvanon,
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
                        image: farathain
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
                        image: agate
                    }
                ]
            },
            {
                id: 2,
                name: `Alsthiavaire`,
                climate: `Semi-Arid`,
                description: `The highlands of Alsthiavaire lie at a higher elevation, but share the semi-arid climate of Arvañon.`,
                image: altiavaire,
                subtopics: [
                    {
                        id: 0,
                        name: `Lumier Valley`,
                        race: `Aviame`,
                        cities: `Lumion, Tower of Afithem`,
                        features: `Lotus Lake`,
                        description: `The High mountains are the highest elevation in all of Avlim and are capped with snow throughout the year. They hold the original location of where the noble races communed with God. It continues to be the home of Asiame who prefer the low temperatures and oxygen levels.`,
                        image: lumiare 
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
                subtopics: [
                    {
                        id: 0,
                        name: `Navenia`,
                        race: `Wood Elves`,
                        cities: `Brielle`,
                        features: `Catedral Brielle`,
                        description: `This is the heart of civilization and the capital of Avlim. Within its borders are the lushest and most abundant plant-life in all Avlim if not all of Qeva`,
                        image: brielle
                    },
                    {
                        id: 1,
                        name: `Evyandil`,
                        race: `Wood Elves`,
                        cities: `Eavanyo`,
                        features: `Yarvarwe (Cathedral of Bridges)`,
                        description: `Evyandil is an elven forest in the southwestern region of Avlim and contains like-lushness to Navenia. It's borders are heavily guarded as an exclusivley elven realm.`,
                        image: eCloaks
                    },
                    {
                        id: 2,
                        name: `Thrush Mountains`,
                        race: `Dwarves, River Elves`,
                        cities: `Anuage`,
                        features: `Passage of the Elvish Cloaks, Aneaguthe (Cathedral whose waters flow from the mountain)`,
                        description: `Mountains range from patches of lush treelines to bare mountains the further east you travel` 
                    },
                    {
                        id: 3,
                        name: `Valë`,
                        race: `River Elves`,
                        cities: `Anuage, Vaiorse`,
                        features: `Sinothain Falls, Riovanye`,
                        description: `Vast tendrils of streams and rivers vine throughout this land more than others and for this the river elves love it and have settled there from the beginning.`,
                        image: riovanye
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
                subtopics: [
                    {
                        id: 0,
                        name: `Mhindilin`,
                        race: `Dwarves`,
                        cities: `Barenem, Barduin`,
                        features: `Indilë, The Bare Mountains`,
                        description: `Home to the most stubborn dwarves and original home of the aeoki, Mhindilin was once a field on the eastern border of Nagar. However, upon the aeoki genocide, DIA's tears have filled it and turned it into a swampy region, which is relatively unhabited besides its mountains to the north.`,
                        image: barir
                    },
                    {
                        id: 1,
                        name: `Nagaçim`,
                        race: `Desert Elves`,
                        cities: `Nagareth`,
                        features: `Desert, Oasis`,
                        description: `This is the dry and terrible deserts of northern Nagar; Home to the desert elves who withdrew from society  escape its hostility.`,
                        image: oasis
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
                        image: arguthain
                    }
                ]
            }
        ]
    },
    {
        id: 1,
        link: `/locations/malune`,
        name: `Malunë`,
        description: ``,
        topics: []
    },
    {
        id: 2,
        link: `/locations/orcava`,
        name: `Orcaṽa`,
        description: ``,
        topics: []
    },
    {
        id: 3,
        link: `/locations/baroach`,
        name: `Baroach`,
        description: ``,
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
                        description: `Home to the Ohri children in their separation from Avlim`
                    },
                    {
                        id: 1,
                        name: `Caves of Untu`,
                        race: `Ohri`,
                        cities: `Untu`,
                        features: `Dry Caves`,
                        description: `Another home to the Ohri children in their separation from Avlim`
                    },
                    {
                        id: 2,
                        name: `Oril`,
                        race: `Orc`,
                        cities: `Ouaruk`,
                        features: `Coastal Cliffs`,
                        description: `Northwestern portion of Baroach`
                    },
                    {
                        id: 3,
                        name: `Ashíchu Isles`,
                        race: `None`,
                        cities: `None`,
                        features: `Eroding Islands`,
                        description: `Called "The Unlived Isles" for never hosting any sentient cvilization.`
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
                        description: `Lush bottom of the Baroach continent, hinged on the gap of Vagulsch.`
                    },
                    {
                        id: 2,
                        name: `The Lavasunes`,
                        race: `Red Gnomes`,
                        cities: `Lavatu`,
                        features: `tropical isles`,
                        description: `Perhaps the finest climate outside of Navalil itself.`
                    },
                    {
                        id: 3,
                        name: `Isles of Alshqui`,
                        race: `Red Gnomes`,
                        cities: `Brioke`,
                        features: `flatlands`,
                        description: `Lush bottom of the Baroach continent.`
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
        ]
    },
    {
        id: 4,
        link: `/locations/aguave`,
        name: `Aguavé`,
        description: ``,
        topics: []
    }
]