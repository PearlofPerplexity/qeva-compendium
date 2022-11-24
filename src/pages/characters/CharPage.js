import { Routes, Route } from 'react-router-dom';
import { CharIcon } from '../../utils/icon';
import { CHARACTERS } from '../../assets/shared/CHARACTERS';
import InnerNav from '../../features/navs/InnerNav';
import CharCard from '../../features/cards/CharCard';

const CharPage = () => {
    return (
        <div className='py-2 px-3'>
            <InnerNav name='Characters' icon={CharIcon} array={CHARACTERS} />
            <Routes>
                <Route path='/noble' element={
                    <CharCard array={CHARACTERS[0]} other={CHARACTERS[1]} />
                } />
                <Route path='/evil' element={
                    <CharCard array={CHARACTERS[1]} other={CHARACTERS[0]} />
                } />
            </Routes>
        </div>
    );
}

export default CharPage;