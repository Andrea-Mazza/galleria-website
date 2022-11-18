
import { Routes, Route } from 'react-router-dom';
import StoriaIT from './assets/pages/StoriaIT';
import RistoranteIT from './assets/pages/RistoranteIT';
import './App.css';
import HomeIT from './assets/pages/HomeIT';
import PizzaIT from './assets/pages/PizzaIT';
import PasticceriaIT from './assets/pages/PasticceriaIT';
import ContattiIT from './assets/pages/ContattiIT';
import NewsIT from './assets/pages/NewsIT';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useContext, createContext } from 'react';
import HomeEN from './assets/pages/HomeEN';
import StoriaEN from './assets/pages/StoriaEN';
import RistoranteEN from './assets/pages/Ristorante.EN';
import PizzaEN from './assets/pages/PizzaEN';
import PasticceriaEN from './assets/pages/PasticceriaEN';
import ContattiEN from './assets/pages/ContattiEN';
import NewsEN from './assets/pages/NewsEN';
import NavDropdown from 'react-bootstrap/NavDropdown';

const AppLang = createContext(true)


function App() {
  const [language, setLanguage] = useState(true);

  const italianChoice = () => {
    const newValue = true;
    setLanguage(newValue);
  }

  const engChoice = () => {
    const newValue = false;
    setLanguage(newValue);
  }
  return (
    <>
      <header>
        <Navbar expand='lg'>
          <Container className='justify-content-between'>
            <Navbar.Brand href="/"><img className='logo-header' alt='logo del ristorante Galleria' src={`${require('./assets/images/logo-2.jpeg')}`} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
              <Nav>
                <Nav.Link href='/'>{language ? 'HOME' : 'HOME'}</Nav.Link>
                <Nav.Link href='/storia'>{language ? 'STORIA' : 'HISTORY'}</Nav.Link>
                <Nav.Link href='/ristorante'>{language ? 'RISTORANTE' : 'RESTAURANT'}</Nav.Link>
                <Nav.Link href='/pizza'>{language ? 'PIZZA' : 'PIZZA'}</Nav.Link>
                <Nav.Link href='/pasticceria'>{language ? 'PASTICCERIA' : 'PASTRY'}</Nav.Link>
                <Nav.Link href='/contatti'>{language ? 'CONTATTI' : 'CONTACTS'}</Nav.Link>
                <Nav.Link href='/news'>NEWS</Nav.Link>
                <NavDropdown title={`${language ? 'LINGUA' : 'LANGUAGE'}`} id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={italianChoice}>ITALIANO</NavDropdown.Item>
                  <NavDropdown.Item onClick={engChoice}>ENGLISH</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <div className='images-header'>
        <Container>
          <img className='logo' alt='logo di Galleria Cafè Restaurant' src={`${require('./assets/images/ristorantegalleria_logo.png')}`} />
        </Container>
      </div>
      {language ? (

        <AppLang.Provider value={{ language, setLanguage }}>
          <Routes>
            <Route path='/' element={<HomeIT />} />
            <Route path='/storia' element={<StoriaIT />} />
            <Route path='/ristorante' element={<RistoranteIT />} />
            <Route path='/pizza' element={<PizzaIT />} />
            <Route path='/pasticceria' element={<PasticceriaIT />} />
            <Route path='/contatti' element={<ContattiIT />} />
            <Route path='/news' element={<NewsIT />} />
          </Routes>
        </AppLang.Provider>

      ) : (
        <AppLang.Provider value={{ language, setLanguage }}>
          <Routes>
            <Route path='/' element={<HomeEN />} />
            <Route path='/storia' element={<StoriaEN />} />
            <Route path='/ristorante' element={<RistoranteEN />} />
            <Route path='/pizza' element={<PizzaEN />} />
            <Route path='/pasticceria' element={<PasticceriaEN />} />
            <Route path='/contatti' element={<ContattiEN />} />
            <Route path='/news' element={<NewsEN />} />
          </Routes>
        </AppLang.Provider>
      )
      }
    </>
  );
}

export default App;
