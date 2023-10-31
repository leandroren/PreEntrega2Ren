import { Link, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import logo from '../NavBar/logo.png';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
      <Link className="navbar-brand logo img-fluid" to={"/"}><img src={logo} alt="Logo de la empresa"/></Link>
        <div className="collapse navbar-collapse botonera" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to={"/"} >Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to={"/category/remeras"} >Remeras</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/category/buzos"}>Buzos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/category/tazas"}>Tazas</NavLink>
            </li>
          </ul>
        </div>
        <div className="cart">
          <CartWidget />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

