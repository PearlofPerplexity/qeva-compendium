import { Routes, Route } from 'react-router-dom';
import { DivineIcon } from '../../utils/icon';
import { DIVINE } from '../../assets/shared/DIVINE';
import InnerNav from '../../features/navs/InnerNav';
import DivEther from './DivEther';
import Intro from '../../features/intro';
import TxtCards from '../../features/cards/TxtCards';
import BottomSmNav from '../../features/navs/BottomSmNav';

const DivLayers = () => {
    return (
        <>
            <Intro name={DIVINE[0].name} description={DIVINE[0].description} />
            <TxtCards array={DIVINE[0]} />
            <BottomSmNav left={DIVINE[3]} right={DIVINE[1]} />
        </>
    );
}

const DivMagic = () => {
    return (
        <>
            <Intro name={DIVINE[1].name} description={DIVINE[1].description} />
            <TxtCards array={DIVINE[1]} />
            <BottomSmNav left={DIVINE[0]} right={DIVINE[2]} />
        </>
    );
}

const DivSpirit = () => {
    return (
        <>
            <TxtCards array={DIVINE[3]} />
            <BottomSmNav left={DIVINE[2]} right={DIVINE[0]} />
        </>
    );
}

const DivPage = () => {
    return (
        <div className='py-2 px-3'>
            <InnerNav name='Luminance' icon={DivineIcon} array={DIVINE} />
            <Routes>
                <Route path='/layers-of-heavens' element={
                    <DivLayers />
                } />
                <Route path='/luminance' element={
                    <DivMagic />
                } />
                <Route path='/ethereals' element={
                    <DivEther />
                } />
                <Route path='/spiritual-realities' element={
                    <DivSpirit />
                } />
            </Routes>
        </div>
    );
}

export default DivPage;