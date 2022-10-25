import './App.css';
import { Routes, Route } from 'react-router-dom';
import Aside from './components/Sidebar';
import Header from './components/Header';
// import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='App'>
      <Aside />
      <section id="wrapper">
        <Header />
        {/* <Routes> */}
          {/* <Route path='/' element={<HomePage />} /> */}
        {/* </Routes> */}
      </section>
    </div> 
  );
}

export default App;
