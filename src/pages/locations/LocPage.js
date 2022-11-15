import { Routes, Route } from 'react-router-dom';
import { LocIcon } from '../../utils/icon';
import { LOCATIONS } from '../../assets/shared/LOCATIONS';
import InnerNav from '../../features/InnerNav';
import LocCard from '../../features/cards/LocCard';

const LocPage = () => {
    return (
        <div className='py-2 px-3'>
            <InnerNav name='Locations' icon={LocIcon} array={LOCATIONS} />
            <Routes>
                <Route path='/qeva' element={
                    <LocCard array={LOCATIONS[0]} />
                } />
                <Route path='/avlim' element={
                    <LocCard array={LOCATIONS[1]}/>
                } />
            </Routes>
        </div>
    );
}

export default LocPage;