import "./nav.css";

export default function Navegacion(){
  return (

    <header className="navbar">
      <div className="container">
        <div className="logo">MiEmpresa</div>
        <nav className="nav-links" id="nav-links">
          <a href="#inicio">Inicio</a>
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
