import { Routes, Route } from 'react-router-dom';
import { DRACES } from '../../assets/shared/DRACES';
import { DRaceIcon } from '../../utils/icon';
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
                    <SingRaceCard array={DRACES[0]} left={DRACES[4]} right={DRACES[1]} />
                } />
                <Route path='/husks' element={
                    <SingRaceCard array={DRACES[1]} left={DRACES[0]} right={DRACES[2]} />
                } />
                <Route path='/ronin' element={
                    <SingRaceCard array={DRACES[2]} left={DRACES[1]} right={DRACES[3]} />
                } />
                <Route path='/jackals' element={
                    <SingRaceCard array={DRACES[3]} left={DRACES[2]} right={DRACES[4]} />
                } />
                <Route path='/mongrels' element={
                    <SingRaceCard array={DRACES[4]} left={DRACES[3]} right={DRACES[0]} />
                } />
            </Routes>
        </div>
    );
}

export default DRacePage;