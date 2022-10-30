import { Routes, Route } from 'react-router-dom';
import GemNav from "../../features/gems/GemNav";
import DivGem from './DivGem';
import CarGem from './CarGem';
import IncGem from './IncGem';
import GemOvr from './GemOvr';

const GemPage = () => {
    return (
        <div className='py-2 px-3'>
            <GemNav />
            <Routes>
                <Route path='/divine' element={<DivGem />} />
                <Route path='/cardinal' element={<CarGem />} />
                <Route path='/incidental' element={<IncGem />} />
                <Route path='/overview' element={<GemOvr />} />
            </Routes>
        </div>
    );
}

export default GemPage;