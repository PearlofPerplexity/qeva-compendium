import { Routes, Route } from 'react-router-dom';
import { CLASSES } from '../../assets/shared/CLASSES';
import { ClassIcon } from '../../utils/icon';
import InnerMenu from '../../features/InnerMenu';
import ClassCard from '../../features/cards/ClassCard';
import NoAffCard from '../../features/cards/NoAffCard';

const ClassPage = () => {
    return (
        <div className='py-2 px-3'>
            <Routes>
                <Route path='/' element={
                    <InnerMenu name='Classes' icon={ClassIcon} array={CLASSES} link='/' />
                } />
                <Route path='/sentinels' element={
                    <ClassCard array={CLASSES[0]} />
                } />
                <Route path='/caracadre' element={
                    <ClassCard array={CLASSES[1]} />
                } />
                <Route path='/avlimeth' element={
                    <ClassCard array={CLASSES[2]} />
                } />
                <Route path='/elvish-cloaks' element={
                    <ClassCard array={CLASSES[3]} />
                } />
                <Route path='/avikin' element={
                    <ClassCard array={CLASSES[4]} />
                } />
                <Route path='/ghost-blades' element={
                    <ClassCard array={CLASSES[5]} />
                } />
                <Route path='/uncorrupted' element={
                    <ClassCard array={CLASSES[6]} />
                } />
                <Route path='/topplers' element={
                    <ClassCard array={CLASSES[7]} />
                } />
                <Route path='/order-of-the-feather' element={
                    <ClassCard array={CLASSES[8]} />
                } />
                <Route path='/no-affiliation' element={
                    <NoAffCard array={CLASSES[9]} />
                } />
            </Routes>
        </div>
    );
}

export default ClassPage;