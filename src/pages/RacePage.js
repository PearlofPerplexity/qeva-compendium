import { Routes, Route } from 'react-router-dom';
import { RACES } from '../assets/shared/RACES';
import { RaceIcon } from '../utils/icon';
import InnerMenu from '../features/menus/InnerMenu';
import MultiRaceCards from '../features/cards/MultiRaceCards';
import SingRaceCard from '../features/cards/SingRaceCard';
import { sortObjArray } from '../utils/dnd';

const RacePage = () => {

    const races = sortObjArray(RACES);

    return (
        <div className='py-2 px-3'>
            <Routes>
                <Route path='/' element={
                    <InnerMenu name='Races' icon={RaceIcon} array={RACES} />
                } />
                <Route path='/arbora' element={
                    <SingRaceCard array={races[0]} left={races[9]} right={races[1]} />
                } />
                <Route path='/aviame' element={
                    <MultiRaceCards array={races[1]} left={races[0]} right={races[2]} />
                } />
                <Route path='/dwarves' element={
                    <MultiRaceCards array={races[2]} left={races[1]} right={races[3]} />
                } />
                <Route path='/elves' element={
                    <MultiRaceCards array={races[3]} left={races[2]} right={races[4]} />
                } />
                <Route path='/ethereals' element={
                    <MultiRaceCards array={races[4]} left={races[3]} right={races[5]} />
                } />
                <Route path='/gnomes' element={
                    <MultiRaceCards array={races[5]} left={races[4]} right={races[6]} />
                } />
                <Route path='/halflings' element={
                    <SingRaceCard array={races[6]} left={races[5]} right={races[7]} />
                } />
                <Route path='/humans' element={
                    <MultiRaceCards array={races[7]} left={races[6]} right={races[8]} />
                } />
                <Route path='/oaki' element={
                    <SingRaceCard array={races[8]} left={races[7]} right={races[9]} />
                } />
                <Route path='/ocri' element={
                    <SingRaceCard array={races[9]} left={races[8]} right={races[0]} />
                } />
            </Routes>
        </div>
    );
}

export default RacePage;