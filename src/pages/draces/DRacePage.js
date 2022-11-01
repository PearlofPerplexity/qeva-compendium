import { Routes, Route } from 'react-router-dom';
import { DRaceIcon } from '../../utils/icon';
import { DRACES } from '../../assets/shared/DRACES';
import InnerNav from '../../features/InnerNav';
import InnerMenu from '../../features/InnerMenu';

const DRacePage = () => {
    return (
        <div className='py-2 px-3'>
            <InnerNav name='Dark Races' icon={DRaceIcon} array={DRACES} link='/dark-races' />
            <Routes>
                <Route path='/' >
                    
                </Route>
                <Route path='/orcs' />
            </Routes>
        </div>
    );
}

export default DRacePage;