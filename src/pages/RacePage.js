import { Routes, Route } from 'react-router-dom';
import { RACES } from '../assets/shared/RACES';
import { RaceIcon } from '../utils/icon';
import InnerMenu from '../features/menus/InnerMenu';
import MultiRaceCards from '../features/cards/MultiRaceCards';
import SingRaceCard from '../features/cards/SingRaceCard';

const RacePage = () => {
    return (
        <div className='py-2 px-3'>
            <Routes>
                <Route path='/' element={
                    <InnerMenu name='Races' icon={RaceIcon} array={RACES} />
                } />
                <Route path='/elves' element={
                    <MultiRaceCards array={RACES[0]} left={RACES[8]} right={RACES[1]} />
                } />
                <Route path='/aviame' element={
                    <MultiRaceCards array={RACES[1]} left={RACES[0]} right={RACES[2]} />
                } />
                <Route path='/humans' element={
                    <MultiRaceCards array={RACES[2]} left={RACES[1]} right={RACES[3]} />
                } />
                <Route path='/osei' element={
                    <SingRaceCard array={RACES[3]} left={RACES[2]} right={RACES[4]} />
                } />
                <Route path='/dwarves' element={
                    <MultiRaceCards array={RACES[4]} left={RACES[3]} right={RACES[5]} />
                } />
                <Route path='/gnomes' element={
                    <MultiRaceCards array={RACES[5]} left={RACES[4]} right={RACES[6]} />
                } />
                <Route path='/halflings' element={
                    <SingRaceCard array={RACES[6]} left={RACES[5]} right={RACES[7]} />
                } />
                <Route path='/aeoki' element={
                    <SingRaceCard array={RACES[7]} left={RACES[6]} right={RACES[8]} />
                } />
                <Route path='/arborums' element={
                    <SingRaceCard array={RACES[8]} left={RACES[7]} right={RACES[0]} />
                } />
            </Routes>
        </div>
    );
}

export default RacePage;