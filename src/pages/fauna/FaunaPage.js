import { Routes, Route } from 'react-router-dom';
import { FaunaIcon } from '../../utils/icon';
import { FAUNA } from '../../assets/shared/FAUNA';
import InnerNav from '../../features/InnerNav';
import FaunaCard from '../../features/cards/FaunaCard';
import TxtCards from '../../features/cards/TxtCards';

const FaunaPage = () => {
    return (
        <div className='py-2 px-3'>
            <InnerNav name='Fauna' icon={FaunaIcon} array={FAUNA} />
            <Routes>
                <Route path='/birds' element={
                    <FaunaCard array={FAUNA[0]} />
                } />
                <Route path='/owls' element={
                    <FaunaCard array={FAUNA[1]}/>
                } />
                <Route path='/other' element={
                    <TxtCards array={FAUNA[2]}/>
                } />
            </Routes>
        </div>
    );
}

export default FaunaPage;