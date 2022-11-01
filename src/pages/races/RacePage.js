import { Routes, Route } from 'react-router-dom';
import RaceR from './RaceR';
import InnerNav from '../../features/InnerNav';
import { RACES } from '../../assets/shared/RACES';
import { RaceIcon } from '../../utils/icon';

const RacePage = () => {
    return (
        <div className='py-2 px-3'>
            <InnerNav name='Races' icon={RaceIcon} array={RACES} />
            <Routes>
                <Route path='/' element={<RaceR />} />
            </Routes>
        </div>
    );
}

export default RacePage;