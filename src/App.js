import './App.css';
import { Fragment } from 'react';
import ScrollUp from './utils/scrollUp';
import { Routes, Route } from 'react-router-dom';
import Aside from './components/Aside';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import BasicPage from './pages/BasicPage';
import GemPage from './pages/gems/GemPage';

function App() {
  return (
    <div className='App'>
      <Aside />
      <section id="wrapper">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<BasicPage />} />
          <Route path='/gems/*' element={<GemPage />} />
        </Routes>
        <Fragment>
          <ScrollUp />
        </Fragment>
      </section>
    </div> 
  );
}

export default App;