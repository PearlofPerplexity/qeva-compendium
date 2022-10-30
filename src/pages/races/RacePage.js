import { Routes, Route } from 'react-router-dom';
import RaceNav from '../../features/races/RaceNav';

const RacePage = () => {
    return (
        <div className='py-2 px-3'>
            <RaceNav />
            <Routes>
                <Route path='/elves' />
            </Routes>
        </div>
    );
}

export default RacePage;