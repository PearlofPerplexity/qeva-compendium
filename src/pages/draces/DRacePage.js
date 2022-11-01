import { Routes, Route } from 'react-router-dom';
import { DRaceIcon } from '../../utils/icon';
import { DRACES } from '../../assets/shared/DRACES';
import InnerMenu from '../../features/InnerMenu';
import SingRaceCard from '../../features/cards/SingRaceCard';

const DRacePage = () => {
    return (
        <div className='py-2 px-3'>
            <Routes>
                <Route path='/' element={
                    <InnerMenu name='Dark Races' icon={DRaceIcon} array={DRACES} /> 
                } />
                <Route path='/orcs' element={
                    <SingRaceCard array={DRACES[0]} />
                } />
                <Route path='/husks' element={
                    <SingRaceCard array={DRACES[1]} />
                } />
                <Route path='/ronin' element={
                    <SingRaceCard array={DRACES[2]} />
                } />
                <Route path='/jackals' element={
                    <SingRaceCard array={DRACES[3]} />
                } />
                <Route path='/mongrels' element={
                    <SingRaceCard array={DRACES[4]} />
                } />
            </Routes>
        </div>
    );
}

export default DRacePage;