import { Routes, Route } from 'react-router-dom';
import { RACES } from '../../assets/shared/RACES';
import { RaceIcon } from '../../utils/icon';
import InnerMenu from '../../features/InnerMenu';
import MultiRaceCards from '../../features/cards/MultiRaceCards';
import SingRaceCard from '../../features/cards/SingRaceCard';

const RacePage = () => {
    return (
        <div className='py-2 px-3'>
            <Routes>
                <Route path='/' element={
                    <InnerMenu name='Races' icon={RaceIcon} array={RACES} />
                } />
                <Route path='/elves' element={
                    <MultiRaceCards array={RACES[0]} left={RACES[9].link} right={RACES[1].link} />
                } />
                <Route path='/aviame' element={
                    <MultiRaceCards array={RACES[1]} left={RACES[0].link} right={RACES[2].link} />
                } />
                <Route path='/humans' element={
                    <MultiRaceCards array={RACES[2]} left={RACES[1].link} right={RACES[3].link} />
                } />
                <Route path='/osei' element={
                    <SingRaceCard array={RACES[3]} left={RACES[2].link} right={RACES[4].link} />
                } />
                <Route path='/dwarves' element={
                    <MultiRaceCards array={RACES[4]} left={RACES[3].link} right={RACES[5].link} />
                } />
                <Route path='/gnomes' element={
                    <MultiRaceCards array={RACES[5]} left={RACES[4].link} right={RACES[6].link} />
                } />
                <Route path='/halflings' element={
                    <SingRaceCard array={RACES[6]} left={RACES[5].link} right={RACES[7].link} />
                } />
                <Route path='/aeoki' element={
                    <SingRaceCard array={RACES[7]} left={RACES[6].link} right={RACES[8].link} />
                } />
                <Route path='/arborums' element={
                    <SingRaceCard array={RACES[8]} left={RACES[7].link} right={RACES[9].link} />
                } />
                <Route path='/dragons' element={
                    <SingRaceCard array={RACES[9]} left={RACES[8].link} right={RACES[0].link} />
                } />
            </Routes>
        </div>
    );
}

export default RacePage;