import { Routes, Route } from 'react-router-dom';
import DRaceNav from '../../features/draces/DRaceNav';

const DRacePage = () => {
    return (
        <div className='py-2 px-3'>
            <DRaceNav />
            <Routes>
                <Route path='/orcs' />
            </Routes>
        </div>
    );
}

export default DRacePage;