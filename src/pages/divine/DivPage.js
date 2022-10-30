import { Routes, Route } from 'react-router-dom';
import DivNav from "../../features/divine/DivNav";
import DivLayers from './DivLayers';
import DivMagic from './DivMagic';
import DivSR from './DivSR';

const DivPage = () => {
    return (
        <div className='py-2 px-3'>
            <DivNav />
            <Routes>
                <Route path='/layers-of-heavens' element={<DivLayers />} />
                <Route path='/divination-magic' element={<DivMagic />} />
                <Route path='/spiritual-realities' element={<DivSR />} />
            </Routes>
        </div>
    );
}

export default DivPage;