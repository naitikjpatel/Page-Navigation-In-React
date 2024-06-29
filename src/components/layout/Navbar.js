import React from "react";
import { NavLink,Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar_start">
      <nav className="navbar navbar-expand-lg  p-4">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">

            <img width="45" height="45" viewBox="0 0 75 83" fill="none" src="https://tse4.mm.bing.net/th?id=OIP.b4pur2ow5auf7iD4GHouXAHaG1&pid=Api&P=0&h=180" alt="logo"/>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" exact to="/about">
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" exact to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <Link className="btn btn-outline-primary" to="/user/add">
            Add User
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
