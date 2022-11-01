import { Routes, Route } from 'react-router-dom';
import { DivineIcon } from '../../utils/icon';
import { DIVINE } from '../../assets/shared/DIVINE';
import InnerNav from '../../features/InnerNav';
import DivEther from './DivEther';
import TxtCards from '../../features/TxtCards';

const DivPage = () => {
    return (
        <div className='py-2 px-3'>
            <InnerNav name='Divination' icon={DivineIcon} array={DIVINE} />
            <Routes>
                <Route path='/layers-of-heavens' element={
                    <TxtCards array={DIVINE[0]} />
                } />
                <Route path='/divination-magic' element={
                    <TxtCards array={DIVINE[1]}/>
                } />
                <Route path='/ethereals' element={
                    <TxtCards />
                } />
                <Route path='/spiritual-realities' element={
                    <TxtCards array={DIVINE[3]}/>
                } />
            </Routes>
        </div>
    );
}

export default DivPage;