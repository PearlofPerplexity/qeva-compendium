import { Routes, Route } from 'react-router-dom';
import { FloraIcon } from '../../utils/icon';
import { FLORA } from '../../assets/shared/FLORA';
import InnerNav from '../../features/InnerNav';
import TxtCards from '../../features/cards/TxtCards';

const FloraPage = () => {
    return (
        <div className='py-2 px-3'>
            <InnerNav name='Flora' icon={FloraIcon} array={FLORA} />
            <Routes>
                <Route path='/plants' element={
                    <TxtCards array={FLORA[0]} />
                } />
                <Route path='/herbs' element={
                    <TxtCards array={FLORA[1]}/>
                } />
                <Route path='/crops' element={
                    <TxtCards array={FLORA[2]}/>
                } />
            </Routes>
        </div>
    );
}

export default FloraPage;