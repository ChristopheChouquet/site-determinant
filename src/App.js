import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Metier from './pages/metiers';
import Process from './pages/process';
import Domaines from './pages/domaines';
import Rd from './pages/RD';
import Devis from './pages/devis';

import './styles/output.css';
import './styles/App.css';

import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useEffect } from 'react';




function App() {
  return (
    <BrowserRouter>
      <RoutesWithTransitions />
    </BrowserRouter>
  );
}

function RoutesWithTransitions() {
  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <div>
          <Routes location={location}>
            <Route path='/' element={<Home />} />
            <Route path='/metiers' element={<Metier />} />
            <Route path='/domaines' element={<Domaines />} />
            <Route path='/rd' element={<Rd />} />
            <Route path='/process' element={<Process />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/devis' element={<Devis />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default App;
