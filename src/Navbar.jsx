import React from 'react';
import { NavLink } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>

      <div className="row">
        <div className="col max-auto">


          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
              <NavLink  className="navbar-brand" to="">Shubham Joshi</NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink activeClassName="menu-active" className="nav-link"  to="./Home"  >Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="menu-active" className="nav-link " aria-current="page" to="./About">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="menu-active" className="nav-link" to="./Service">Services</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="menu-active" className="nav-link" to="./Contact">Contact</NavLink>
                  </li>
                  
                 </ul> 
      
              </div>
            </div>
            </nav>

          </div>
      </div>

    </>
  );

};

export default Navbar;