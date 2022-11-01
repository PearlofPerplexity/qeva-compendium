import { Routes, Route } from 'react-router-dom';
import { RACES } from '../../assets/shared/RACES';
import { RaceIcon } from '../../utils/icon';
import InnerNav from '../../features/InnerNav';
import InnerMenu from '../../features/InnerMenu';

const RacePage = () => {
    return (
        <div className='py-2 px-3'>
            <Routes>
                <Route path='/' 
                    element={
                        <>
                            <InnerMenu name='Races' icon={RaceIcon} array={RACES} link='/races' />
                        </>
                    }
                />
                <Route path='/elves' 
                    element={
                        <>
                            <InnerNav name='Races' icon={RaceIcon} array={RACES} link='/races' />
                        </>
                    }
                />
            </Routes>
        </div>
    );
}

export default RacePage;