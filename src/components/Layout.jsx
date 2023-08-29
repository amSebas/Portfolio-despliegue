import { Outlet, NavLink } from "react-router-dom";
import '../styles/Layout.css'

export default function() {
    return (
        <div className="body-grid">
          <nav className="navigation">
            <NavLink to="/"> 
              <div className="div-box">
                <i className="fa-solid fa-house"></i>
                <p> Home </p>
              </div>
            </NavLink>
            <NavLink to="/AboutMe" >
              <div className="div-box">
                <i className="fa-sharp fa-solid fa-file"></i>
                <p> About Me </p>
              </div>
            </NavLink>
            <NavLink to="/Services" >
              <div className="div-box"> 
                <i className="fa-solid fa-laptop"></i>
                <p> Services </p>
              </div>
            </NavLink>
            <NavLink to="/Portfolio" >
              <div className="div-box">
                <i className="fa-solid fa-book"></i>
                <p> Portfolio </p>
              </div>
            </NavLink>
            <NavLink to="/Contact" >
              <div className="div-box">
                <i className="fa-solid fa-comment-dots"></i>
                <p> Contact </p>
              </div>
            </NavLink>
          </nav>
          <Outlet /> {/* Aquí se mostrará el contenido de las rutas anidadas */}
        </div>
      );
};