import { Routes, Route } from 'react-router-dom';
import { FaunaIcon } from '../../utils/icon';
import { FAUNA } from '../../assets/shared/FAUNA';
import InnerNav from '../../features/InnerNav';
import FaunaCard from '../../features/cards/FaunaCard';
import TxtCards from '../../features/cards/TxtCards';
import BottomSmNav from '../../features/BottomSmNav';

const OthrFauna = () => {
    return (
        <>
            <TxtCards array={FAUNA[2]} />
            <BottomSmNav left={FAUNA[1]} right={FAUNA[0]} />
        </>
    );
}

const FaunaPage = () => {
    return (
        <div className='py-2 px-3'>
            <InnerNav name='Fauna' icon={FaunaIcon} array={FAUNA} />
            <Routes>
                <Route path='/birds' element={
                    <FaunaCard array={FAUNA[0]} left={FAUNA[2]} right={FAUNA[1]} /> 
                } />
                <Route path='/owls' element={
                    <FaunaCard array={FAUNA[1]} left={FAUNA[0]} right={FAUNA[2]} />
                } />
                <Route path='/other' element={
                    <OthrFauna />
                } />
            </Routes>
        </div>
    );
}

export default FaunaPage;