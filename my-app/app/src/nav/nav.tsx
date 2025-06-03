import "./nav.css";
import { useNavigate } from 'react-router-dom';

export default function Navegacion(){

  const navigate = useNavigate();

  const principal = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // lógica de envío...
    navigate('/'); // vuelve a inicio al enviar
  };
  return (

    <header className="navbar">
      <div className="container">
        <div className="logo">MiEmpresa</div>
        <nav className="nav-links" id="nav-links">
          <a onClick={principal}>Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
          <a href="#cta" className="btn">¡Escríbenos!</a>
        </nav>
        <div className="menu-toggle" id="menu-toggle">&#9776;</div>
      </div>
    </header>
  );
}
