import { DIVINE } from '../assets/shared/DIVINE';
import { DRACES } from '../assets/shared/DRACES';
import { GEMS } from '../assets/shared/GEMS';
import { RACES } from '../assets/shared/RACES';
import { CLASSES } from '../assets/shared/CLASSES';

// GEM COUNTER
const DivGemCount = GEMS[0].gems.length;
const CardGemCount = GEMS[1].gems.length;
const IncGemCount = GEMS[2].gems.length;
export const TotalGemCount = DivGemCount + CardGemCount + IncGemCount;

// RACE COUNTER
let NobleRaceCount = 0
for (const race of RACES) {
    if ( race.hasOwnProperty('subraces') ) {
        NobleRaceCount += race.subraces.length;
    } else {
        NobleRaceCount += 1;
    }
}
const DarkRaceCount = DRACES.length;
const EtherRaceCount = DIVINE[2].types.length - 1; // minus 'the Great Demon'
export const TotalRaceCount = NobleRaceCount + DarkRaceCount + EtherRaceCount;

//CLASS COUNTER
export const TotalClassCount = CLASSES.length;