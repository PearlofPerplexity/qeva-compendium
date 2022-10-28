import './App.css';
import { Routes, Route } from 'react-router-dom';
import Aside from './components/Aside';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import GemPage from './pages/GemPage';

function App() {
  return (
    <div className='App'>
      <Aside />
      <section id="wrapper">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/gems/*' element={<GemPage />} />
        </Routes>
      </section>
    </div> 
  );
}

export default App;