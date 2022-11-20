import { Routes, Route } from 'react-router-dom';
import { HistIcon } from '../../utils/icon';
import { HISTORY } from '../../assets/shared/HISTORY';
import InnerHistMenu from '../../features/InnerHistMenu';
import HistCard from '../../features/cards/HistCard';

const HistPage = () => {
    return (
        <div className='py-2 px-3'>
            <Routes>
                <Route path='/' element={
                    <InnerHistMenu name='History' icon={HistIcon} array={HISTORY} link='/' />
                } />
                <Route path='/sparkling-era' element={
                    <HistCard array={HISTORY[0]} left={HISTORY[5].link} right={HISTORY[1].link} />
                } />
                <Route path='/quintessential-era' element={
                    <HistCard array={HISTORY[1]} left={HISTORY[0].link} right={HISTORY[2].link} />
                } />
                <Route path='/divergent-era' element={
                    <HistCard array={HISTORY[2]} left={HISTORY[1].link} right={HISTORY[3].link} />
                } />
                <Route path='/void-era' element={
                    <HistCard array={HISTORY[3]} left={HISTORY[2].link} right={HISTORY[4].link} />
                } />
                <Route path='/mortal-era' element={
                    <HistCard array={HISTORY[4]} left={HISTORY[3].link} right={HISTORY[5].link} />
                } />
                <Route path='/agate-above' element={
                    <HistCard array={HISTORY[5]} left={HISTORY[4].link} right={HISTORY[0].link} />
                } />
            </Routes>
        </div>
    );
}

export default HistPage;