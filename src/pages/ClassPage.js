import { Routes, Route } from 'react-router-dom';
import { CLASSES } from '../assets/shared/CLASSES';
import { ClassIcon } from '../utils/icon';
import InnerMenu from '../features/menus/InnerMenu';
import ClassCard from '../features/cards/ClassCard';
import NoAffCard from '../features/cards/NoAffCard';

const ClassPage = () => {
    return (
        <div className='py-2 px-3'>
            <Routes>
                <Route path='/' element={
                    <InnerMenu name='Classes' icon={ClassIcon} array={CLASSES} link='/' />
                } />
                <Route path='/oracles' element={
                    <ClassCard array={CLASSES[0]} left={CLASSES[9]} right={CLASSES[1]} />
                } />
                <Route path='/caracadre' element={
                    <ClassCard array={CLASSES[1]} left={CLASSES[0]} right={CLASSES[2]} />
                } />
                <Route path='/avlimeth' element={
                    <ClassCard array={CLASSES[2]} left={CLASSES[1]} right={CLASSES[3]} />
                } />
                <Route path='/elvish-cloaks' element={
                    <ClassCard array={CLASSES[3]} left={CLASSES[2]} right={CLASSES[4]} />
                } />
                <Route path='/avikin' element={
                    <ClassCard array={CLASSES[4]} left={CLASSES[3]} right={CLASSES[5]} />
                } />
                <Route path='/ghost-blades' element={
                    <ClassCard array={CLASSES[5]} left={CLASSES[4]} right={CLASSES[6]} />
                } />
                <Route path='/uncorrupted' element={
                    <ClassCard array={CLASSES[6]} left={CLASSES[5]} right={CLASSES[7]} />
                } />
                <Route path='/topplers' element={
                    <ClassCard array={CLASSES[7]} left={CLASSES[6]} right={CLASSES[8]} />
                } />
                <Route path='/order-of-the-feather' element={
                    <ClassCard array={CLASSES[8]} left={CLASSES[7]} right={CLASSES[9]} />
                } />
                <Route path='/no-affiliation' element={
                    <NoAffCard array={CLASSES[9]} left={CLASSES[8]} right={CLASSES[0]} />
                } />
            </Routes>
        </div>
    );
}

export default ClassPage;