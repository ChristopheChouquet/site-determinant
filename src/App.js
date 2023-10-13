import { BrowserRouter ,Routes , Route, useLocation } from 'react-router-dom';
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

  console.log('App');
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
            <Route path='/site-determinant' element={<Home />} />
            <Route path='/site-determinant/metiers' element={<Metier />} />
            <Route path='/site-determinant/domaines' element={<Domaines />} />
            <Route path='/site-determinant/rd' element={<Rd />} />
            <Route path='/site-determinant/process' element={<Process />} />
            <Route path='/site-determinant/contact' element={<Contact />} />
            <Route path='/site-determinant/devis' element={<Devis />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default App;
