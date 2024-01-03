import { Routes, Route } from 'react-router-dom';
import { HistIcon } from '../utils/icon';
import { HISTORY } from '../assets/shared/HISTORY';
import InnerHistMenu from '../features/menus/InnerHistMenu';
import HistCard from '../features/cards/HistCard';

const HistPage = () => {
    return (
        <div className='py-2 px-3'>
            <Routes>
                <Route path='/' element={
                    <InnerHistMenu name='History' icon={HistIcon} array={HISTORY} link='/qeva-compendium' />
                } />
                <Route path='/sparkling-era' element={
                    <HistCard array={HISTORY[0]} left={HISTORY[5]} right={HISTORY[1]} />
                } />
                <Route path='/quintessential-era' element={
                    <HistCard array={HISTORY[1]} left={HISTORY[0]} right={HISTORY[2]} />
                } />
                <Route path='/divergent-era' element={
                    <HistCard array={HISTORY[2]} left={HISTORY[1]} right={HISTORY[3]} />
                } />
                <Route path='/void-era' element={
                    <HistCard array={HISTORY[3]} left={HISTORY[2]} right={HISTORY[4]} />
                } />
                <Route path='/mortal-era' element={
                    <HistCard array={HISTORY[4]} left={HISTORY[3]} right={HISTORY[5]} />
                } />
                <Route path='/agate-above' element={
                    <HistCard array={HISTORY[5]} left={HISTORY[4]} right={HISTORY[0]} />
                } />
            </Routes>
        </div>
    );
}

export default HistPage;