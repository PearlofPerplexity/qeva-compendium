import { Routes, Route } from 'react-router-dom';
import { RACES } from '../../assets/shared/RACES';
import { RaceIcon } from '../../utils/icon';
import { RaceLink } from '../../utils/link';
import InnerMenu from '../../features/InnerMenu';
import MultiRaceCards from '../../features/cards/MultiRaceCards';
import SingRaceCard from '../../features/cards/SingRaceCard';

const RacePage = () => {
    return (
        <div className='py-2 px-3'>
            <Routes>
                <Route path='/' element={
                    <InnerMenu name='Races' icon={RaceIcon} array={RACES} link={RaceLink} />
                } />
                <Route path='/elves' element={
                    <MultiRaceCards array={RACES[0]} />
                } />
                <Route path='/aviame' element={
                    <MultiRaceCards array={RACES[1]} />
                } />
                <Route path='/humans' element={
                    <MultiRaceCards array={RACES[2]} />
                } />
                <Route path='/osei' element={
                    <SingRaceCard array={RACES[3]} />
                } />
                <Route path='/dwarves' element={
                    <MultiRaceCards array={RACES[4]} />
                } />
                <Route path='/gnomes' element={
                    <MultiRaceCards array={RACES[5]} />
                } />
                <Route path='/halflings' element={
                    <SingRaceCard array={RACES[6]} />
                } />
                <Route path='/aeoki' element={
                    <SingRaceCard array={RACES[7]} />
                } />
                <Route path='/arborums' element={
                    <SingRaceCard array={RACES[8]} />
                } />
            </Routes>
        </div>
    );
}

export default RacePage;