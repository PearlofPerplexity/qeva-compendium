import { Routes, Route } from 'react-router-dom';
import { FloraIcon } from '../../utils/icon';
import { FLORA } from '../../assets/shared/FLORA';
import InnerNav from '../../features/InnerNav';
import TxtCards from '../../features/cards/TxtCards';
import BottomSmNav from '../../features/BottomSmNav';

const PLFlora = () => {
    return (
        <>
            <TxtCards array={FLORA[0]} />
            <BottomSmNav left={FLORA[2]} right={FLORA[1]} />
        </>
    );
}

const HBFlora = () => {
    return (
        <>
            <TxtCards array={FLORA[1]} />
            <BottomSmNav left={FLORA[0]} right={FLORA[2]} />
        </>
    );
}

const CPFlora = () => {
    return (
        <>
            <TxtCards array={FLORA[2]} />
            <BottomSmNav left={FLORA[1]} right={FLORA[0]} />
        </>
    );
}

const FloraPage = () => {
    return (
        <div className='py-2 px-3'>
            <InnerNav name='Flora' icon={FloraIcon} array={FLORA} />
            <Routes>
                <Route path='/plants' element={
                    <PLFlora />
                } />
                <Route path='/herbs' element={
                    <HBFlora />
                } />
                <Route path='/crops' element={
                    <CPFlora />
                } />
            </Routes>
        </div>
    );
}

export default FloraPage;