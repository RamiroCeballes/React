import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from './App';
import Navegacion from './nav/nav';

export default function Router() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/nav">Navegacion</Link>
      </nav>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/nav" element={<Navegacion />} />
      </Routes>
    </BrowserRouter>
  );
}