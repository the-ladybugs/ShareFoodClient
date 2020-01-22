import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <NavLink className="nav-link" to="#">
            New project <span className="sr-only">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">
            Logout <i className="fa fa-user"></i>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">
            User
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedInLinks;