import { Routes, Route } from 'react-router-dom';
import { LocIcon } from '../../utils/icon';
import { LOCATIONS } from '../../assets/shared/LOCATIONS';
import InnerExMenu from '../../features/InnerExMenu';
import LocCard from '../../features/cards/LocCard';
import HistCard from '../../features/cards/HistCard';

const LocPage = () => {
    return (
        <div className='py-2 px-3'>
            <Routes>
                <Route path='/' element={
                    <InnerExMenu name='Locations' icon={LocIcon} array={LOCATIONS} link='/' />
                } />
                <Route path='/avlim' element={
                    <LocCard array={LOCATIONS[0]} />
                } />
                <Route path='/malune' element={
                    <LocCard array={LOCATIONS[1]}/>
                } />
                <Route path='/orcava' element={
                    <LocCard array={LOCATIONS[2]}/>
                } />
                <Route path='/baroach' element={
                    <LocCard array={LOCATIONS[3]}/>
                } />
                <Route path='/aguave' element={
                    <LocCard array={LOCATIONS[4]}/>
                } />
            </Routes>
        </div>
    );
}

export default LocPage;