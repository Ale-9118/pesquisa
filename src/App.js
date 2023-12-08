import {
  BrowserRouter as Router, 
  Routes, 
  Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Cadastro from './components/pages/Cadastro';
import Container from './components/layouts/Container';
import NavBarra from './components/layouts/NavBarra';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <Router>
      <NavBarra />
      <Container customGeral="min-height">
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
