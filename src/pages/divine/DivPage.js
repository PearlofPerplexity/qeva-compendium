import { Routes, Route } from 'react-router-dom';
import { DivineIcon } from '../../utils/icon';
import { DIVINE } from '../../assets/shared/DIVINE';
import InnerNav from '../../features/InnerNav';
import DivLayers from './DivLayers';
import DivMagic from './DivMagic';
import DivEther from './DivEther';
import DivSR from './DivSR';

const DivPage = () => {
    return (
        <div className='py-2 px-3'>
            <InnerNav name='Divination' icon={DivineIcon} array={DIVINE} />
            <Routes>
                <Route path='/layers-of-heavens' element={<DivLayers />} />
                <Route path='/divination-magic' element={<DivMagic />} />
                <Route path='/ethereals' element={<DivEther />} />
                <Route path='/spiritual-realities' element={<DivSR />} />
            </Routes>
        </div>
    );
}

export default DivPage;