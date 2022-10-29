import './App.css';
import { Fragment } from 'react';
import ScrollUp from './utils/scrollUp';
import { Routes, Route } from 'react-router-dom';
import Aside from './components/Aside';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import GemRouter from './pages/gems/GemRouter';

function App() {
  return (
    <div className='App'>
      <Aside />
      <section id="wrapper">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/gems/*' element={<GemRouter />} />
        </Routes>
        <Fragment>
          <ScrollUp />
        </Fragment>
      </section>
    </div> 
  );
}

export default App;