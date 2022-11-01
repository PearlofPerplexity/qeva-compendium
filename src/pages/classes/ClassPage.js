import { Routes, Route } from 'react-router-dom';
import InnerNav from '../../features/InnerNav';
import { CLASSES } from '../../assets/shared/CLASSES';
import { ClassIcon } from '../../utils/icon';
import InnerMenu from '../../features/InnerMenu';

const ClassPage = () => {
    return (
        <div className='py-2 px-3'>
            <Routes>
                <Route path='/' 
                    element={
                        <InnerMenu name='Classes' icon={ClassIcon} array={CLASSES} link='/' />
                    }
                />
                <Route path='/sentinels' 
                    element={
                        <>
                            <InnerNav name='Classes' icon={ClassIcon} array={CLASSES} link='/classes' />
                        </>
                    }
                />
            </Routes>
        </div>
    );
}

export default ClassPage;