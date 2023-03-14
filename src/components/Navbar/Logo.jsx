import React from "react";
import { NavLink } from "react-router-dom";

function Logo() {
    return(
    <div className="logo" class="d-inline">
      <img src="../public/resources/logoSample.png" Alt="Logo" />
      <NavLink to="/" style={{ textDecoration: 'none' }}><h1 class="text-decoration-none text-dark">Lagalt</h1></NavLink>
    </div>
    );
}

export default Logo