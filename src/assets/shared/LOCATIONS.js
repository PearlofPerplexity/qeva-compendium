

export const LOCATIONS = [
    {
        id: 0,
        link: `/locations/qeva`,
        name: `Qeṽa`,
        description: `Qeṽa is the planet on which all these continents lie.`
    },
    {
        id: 1,
        link: `/locations/avlim`,
        name: `Avlim`,
        description: `The central continent of Qeṽa and the concentrated existence of all sentient life.`,
        topics: [
            {
                id: 0,
                name: `Arvañon`,
                climate: `Semi-Arid`,
                description: `This is the northwestern sector of Avlim, which is home to the race of men.`,
                subtopics: [
                    {
                        id: 0,
                        name: `Athari Cliffs`,
                        race: `Athiame`,
                        cities: `Athiansali (capital)`,
                        features: `Pillar-like Cliffs`,
                        description: `Their proximity to the coast shrouds them in mist and a stable, warm climate.`,
                        image: ''
                    },
                    {
                        id: 1,
                        name: `Central Arvañon & The Mide Hills`,
                        race: `Men`,
                        cities: `Durik`,
                        features: `Lake Alehain`,
                        description: `These rolling hills lie in a semi-arid climate with four seasons.`
                    },
                    {
                        id: 2,
                        name: `The Rim`,
                        race: `Men`,
                        cities: `Durakin`,
                        features: ``,
                        description: `The Rim is a long stretch of beach along the northern shore of Arvañon.`
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
                description: `Root, whcih can be ground into a white paste that can be used as a numbing agent`,
                subtopics: [
                    {
                        id: 0,
                        name: `Fletcheren`,
                        race: `Halflings`,
                        cities: `Harbhollow, Ellowood, Adibrae, Linda, Lajas`,
                        features: ``,
                        description: `These lush greenlands are known for their vast sunshine and short winter seasons. Ellowood and places like it are underground cities, where the hobbits live amidst tree roots.`
                    },
                    {
                        id: 1,
                        name: `Farathain`,
                        race: `Gnomes`,
                        cities: `Nalri`,
                        features: `Loch Ladish, Nadia Catedral, Farathain Mist`,
                        description: `The marine coastal climate of these lush greenlands make them cloudy, foggy and damp.`
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
                    }
                ]
            },
            {
                id: 2,
                name: `Alsthiavaire`,
                climate: `Semi-Arid`,
                description: `The highlands of Alsthiavaire lie at a higher elevation, but share the semi-arid climate of Arvañon.`,
                subtopics: [
                    {
                        id: 0,
                        name: `Lumier Valley`,
                        race: `Aviame`,
                        cities: `Lumion, Tower of Afithem`,
                        features: `Lotus Lake`,
                        description: `The High mountains are the highest elevation in all of Avlim and are capped with snow throughout the year. They hold the original location of where the noble races communed with God. It continues to be the home of Asiame who prefer the low temperatures and oxygen levels.`  
                    },
                    {
                        id: 1,
                        name: `Melle (Lowlands)`,
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
                        description: `These highlands are less occupied, but beautifully colored with scorched red flora.`
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
                subtopics: [
                    {
                        id: 0,
                        name: `Navenia`,
                        race: `Wood Elves`,
                        cities: `Brielle`,
                        features: `Catedral Brielle`,
                        description: `This is the heart of civilization and the capital of Avlim` 
                    },
                    {
                        id: 1,
                        name: `Evyandil`,
                        race: `Wood Elves`,
                        cities: `Eavanyo`,
                        features: `Yarvarwe (Cathedral of Bridges)`,
                        description: `This is the central city and capital of Avlim` 
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
                        description: `Lush grasslands with streams and rivers vining throughout the land` 
                    },
                    {
                        id: 4,
                        name: `Mahelo`,
                        race: `River Elves`,
                        cities: `Helos, Arkris`,
                        features: `Anhelos`,
                        description: `An enchanted darkness lies over this woodland` 
                    }
                ]
            },
            {
                id: 4,
                name: `Nagar`,
                climate: `Arid`,
                description: `From the mountains to the canyons, nearly the whole land is cracked and dry`,
                subtopics: [
                    {
                        id: 0,
                        name: `Mhindilin`,
                        race: `Dwarves`,
                        cities: `Barenem, Barduin`,
                        features: `Indilë, The Bare Mountains`,
                        description: `Home to the most stubborn dwarves and original home of the Aeoki.`
                    },
                    {
                        id: 1,
                        name: `Nagaçim`,
                        race: `Desert Elves`,
                        cities: `Nagareth`,
                        features: `Desert, Oasis`,
                        description: `This is the dry and terrible deserts of northern Nagar; Home to the desert elves who withdrew from society  escape its hostility.`
                    },
                    {
                        id: 2,
                        name: `Nagaçe`,
                        race: `Dragons`,
                        cities: `Nagaçin`,
                        features: `Salt Flat Springs of Nagacin`,
                        description: `A place rarely visited in which the last dragon of Avlim still dwells.` 
                    },
                ]
            },
            {
                id: 5,
                name: `Agate`,
                climate: `Tropical`,
                description: `Agate is the sacred Island to the noble races. The ocean surrounding this slick surfaced crystal island are turbulent nearly all year outside of the summer and autumn equinox.`
            },
            {
                id: 6,
                name: `Arguthain`,
                climate: `Tropical`,
                description: `Arguthain is the sacred island to the dark armies
                The tourmaline islands of Arguthain share the arid climate of Nagar.`
            },
        ]
    },
    {
        id: 2,
        link: `/locations/malune`,
        name: `Malunë`,
        description: ``,
        topics: []
    },
    {
        id: 3,
        link: `/locations/orcava`,
        name: `Orcaṽa`,
        description: ``,
        topics: []
    },
    {
        id: 4,
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
        id: 5,
        link: `/locations/aguave`,
        name: `Aguavé`,
        description: ``,
        topics: []
    }
]