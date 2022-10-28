import { Routes, Route } from 'react-router-dom';
import GemNav from "../features/gems/GemNav";
import { 
    GLinkDiv,
    GLinkCard,
    GLinkInc,
    GLinkOvr
} from '../utils/link';
import SubHeader from '../components/SubHeader';

const GemPage = () => {
    return (
        <>
            <GemNav />
            <Routes>
                <Route path={GLinkDiv} />
                <Route path={GLinkCard} />
                <Route path={GLinkInc} />
                <Route path={GLinkOvr} element={<GemPage />} />
            </Routes>
        </>
    );
}

export default GemPage;