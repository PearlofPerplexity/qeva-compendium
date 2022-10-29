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
            <section className="col col-lg-10 col-xl-9 mt-4">
                <div className="chart-container p-3">
                    <div style={{height: '300px'}}>
                        <canvas id="chart3" width="100%"></canvas>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default GemPage;