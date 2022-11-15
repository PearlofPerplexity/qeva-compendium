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
                    <HistCard array={HISTORY[0]} />
                } />
                <Route path='/quintessential-era' element={
                    <HistCard array={HISTORY[1]}/>
                } />
                <Route path='/divergent-era' element={
                    <HistCard array={HISTORY[2]}/>
                } />
                <Route path='/void-era' element={
                    <HistCard array={HISTORY[3]}/>
                } />
                <Route path='/mortal-era' element={
                    <HistCard array={HISTORY[4]}/>
                } />
                <Route path='/agate-above' element={
                    <HistCard array={HISTORY[5]}/>
                } />
            </Routes>
        </div>
    );
}

export default HistPage;