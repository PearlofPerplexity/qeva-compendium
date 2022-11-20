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
                    <SingRaceCard array={DRACES[0]} left={DRACES[4].link} right={DRACES[1].link} />
                } />
                <Route path='/husks' element={
                    <SingRaceCard array={DRACES[1]} left={DRACES[0].link} right={DRACES[2].link} />
                } />
                <Route path='/ronin' element={
                    <SingRaceCard array={DRACES[2]} left={DRACES[1].link} right={DRACES[3].link} />
                } />
                <Route path='/jackals' element={
                    <SingRaceCard array={DRACES[3]} left={DRACES[2].link} right={DRACES[4].link} />
                } />
                <Route path='/mongrels' element={
                    <SingRaceCard array={DRACES[4]} left={DRACES[3].link} right={DRACES[0].link} />
                } />
            </Routes>
        </div>
    );
}

export default DRacePage;