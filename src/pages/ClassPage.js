import { Routes, Route } from 'react-router-dom';
import { CLASSES } from '../assets/shared/CLASSES';
import { ClassIcon } from '../utils/icon';
import InnerMenu from '../features/menus/InnerMenu';
import ClassCard from '../features/cards/ClassCard';
import NoAffCard from '../features/cards/NoAffCard';
import { sortObjArray } from '../utils/dnd';

const ClassPage = () => {

    const classes = sortObjArray(CLASSES);
    console.log(classes);

    return (
        <div className='py-2 px-3'>
            <Routes>
                <Route path='/' element={
                    <InnerMenu name='Classes' icon={ClassIcon} array={CLASSES} link='/qeva-compendium' />
                } />
                <Route path='/avikin' element={
                    <ClassCard array={classes[0]} left={classes[9]} right={classes[1]} />
                } />
                <Route path='/avlimeth' element={
                    <ClassCard array={classes[1]} left={classes[0]} right={classes[2]} />
                } />
                <Route path='/caracadre' element={
                    <ClassCard array={classes[2]} left={classes[1]} right={classes[3]} />
                } />
                <Route path='/elvish-cloaks' element={
                    <ClassCard array={classes[3]} left={classes[2]} right={classes[4]} />
                } />
                <Route path='/ghost-blades' element={
                    <ClassCard array={classes[4]} left={classes[3]} right={classes[5]} />
                } />
                <Route path='/no-affiliation' element={
                    <NoAffCard array={classes[5]} left={classes[4]} right={classes[6]} />
                } />
                <Route path='/oracles' element={
                    <ClassCard array={classes[6]} left={classes[5]} right={classes[7]} />
                } />
                <Route path='/order-of-the-feather' element={
                    <ClassCard array={classes[7]} left={classes[6]} right={classes[8]} />
                } />
                <Route path='/uncorrupted' element={
                    <ClassCard array={classes[8]} left={classes[7]} right={classes[9]} />
                } />
                <Route path='/topplers' element={
                    <ClassCard array={classes[9]} left={classes[8]} right={classes[0]} />
                } />
            </Routes>
        </div>
    );
}

export default ClassPage;