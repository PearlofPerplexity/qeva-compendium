import { Routes, Route } from 'react-router-dom';
import { GemIcon } from '../../utils/icon';
import { GEMS } from '../../assets/shared/GEMS';
import InnerNav from '../../features/InnerNav';
import DivGem from './DivGem';
import CarGem from './CarGem';
import IncGem from './IncGem';
import TxtCards from '../../features/cards/TxtCards';
import BottomSmNav from '../../features/BottomSmNav';

const OverGem = () => {
    return (
        <>
            <TxtCards array={GEMS[3]} />
            <BottomSmNav left={GEMS[2]} right={GEMS[0]} />
        </>
    )
};

const GemPage = () => {
    return (
        <div className='py-2 px-3'>
            <InnerNav name='Gemstones' icon={GemIcon} array={GEMS} />
            <Routes>
                <Route path='/divine' element={<DivGem />} />
                <Route path='/cardinal' element={<CarGem />} />
                <Route path='/incidental' element={<IncGem />} />
                <Route path='/overview' element={<OverGem />} />
            </Routes>
        </div>
    );
}

export default GemPage;