import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import ServiceCard from './components/ServiceCard';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'
import Error from './components/Error';

function App() {

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<section className="sections"> <Home /> </section>}/>
            <Route path="AboutMe" element={<section className="sections"><AboutMe /></section>}/>
            <Route path="Services" element={<section className="sections"> <ServiceCard /></section>}/>
            <Route path="Portfolio" element={<section className="sections"> <Portfolio /> </section>}/>
            <Route path="Contact" element={<section className="sections"> <Contact /> </section>}/>
            <Route path='*' element={<section className="sections"> <Error /> </section>}/>
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;