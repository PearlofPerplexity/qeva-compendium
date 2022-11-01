import { Routes, Route } from 'react-router-dom';
import InnerNav from '../../features/InnerNav';
import { CLASSES } from '../../assets/shared/CLASSES';
import { ClassIcon } from '../../utils/icon';

const ClassPage = () => {
    return (
        <div className='py-2 px-3'>
            <InnerNav name='Classes' icon={ClassIcon} array={CLASSES} />
            <Routes>
                <Route path='/' />
            </Routes>
        </div>
    );
}

export default ClassPage;