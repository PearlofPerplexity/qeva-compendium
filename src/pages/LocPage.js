import { Routes, Route } from 'react-router-dom';
import { LocIcon } from '../utils/icon';
import { LOCATIONS } from '../assets/shared/LOCATIONS';
import InnerExMenu from '../features/menus/InnerExMenu';
import LocCard from '../features/cards/LocCard';

const LocPage = () => {
    return (
        <div className='py-2 px-3'>
            <Routes>
                <Route path='/' element={
                    <InnerExMenu name='Locations' icon={LocIcon} array={LOCATIONS} link='/' />
                } />
                <Route path='/avlim' element={
                    <LocCard array={LOCATIONS[0]} left={LOCATIONS[4]} right={LOCATIONS[1]} />
                } />
                <Route path='/malune' element={
                    <LocCard array={LOCATIONS[1]} left={LOCATIONS[0]} right={LOCATIONS[2]} />
                } />
                <Route path='/orcava' element={
                    <LocCard array={LOCATIONS[2]} left={LOCATIONS[1]} right={LOCATIONS[3]} />
                } />
                <Route path='/baroach' element={
                    <LocCard array={LOCATIONS[3]} left={LOCATIONS[2]} right={LOCATIONS[4]} />
                } />
                <Route path='/aguave' element={
                    <LocCard array={LOCATIONS[4]} left={LOCATIONS[3]} right={LOCATIONS[0]} />
                } />
            </Routes>
        </div>
    );
}

export default LocPage;