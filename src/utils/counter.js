import { DIVINE } from '../assets/shared/DIVINE';
import { DRACES } from '../assets/shared/DRACES';
import { GEMS } from '../assets/shared/GEMS';
import { RACES } from '../assets/shared/RACES';
import { CLASSES } from '../assets/shared/CLASSES';

// GEM COUNTER
const DivGemCount = GEMS[0].topics.length;
const CardGemCount = GEMS[1].topics.length;
const IncGemCount = GEMS[2].topics.length;
export const TotalGemCount = DivGemCount + CardGemCount + IncGemCount;

// RACE COUNTER
let NobleRaceCount = 0
for (const race of RACES) {
    if ( race.hasOwnProperty('topics') ) {
        NobleRaceCount += race.topics.length;
    } else {
        NobleRaceCount += 1;
    }
}
const DarkRaceCount = DRACES.length;
const EtherRaceCount = DIVINE[2].topics.length - 1; // minus 'the Great Demon'
export const TotalRaceCount = NobleRaceCount + DarkRaceCount + EtherRaceCount;

//CLASS COUNTER
const RcClassCount = CLASSES.length - 1; // minus 'No Affiliation
const NaClassCount = CLASSES[9].topics.length;
export const TotalClassCount = RcClassCount + NaClassCount;