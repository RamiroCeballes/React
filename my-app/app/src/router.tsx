import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Productos from './productos';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </BrowserRouter>
  );
}