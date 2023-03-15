import React from "react";
import { NavLink } from "react-router-dom";
import PenLogoSVG from "./PenLogoSVG";

function Logo() {
    return(
    <div class="p-3" style={{ display: 'flex' }}>
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <h1 class="text-decoration-none text-dark"><PenLogoSVG />Lagalt</h1>
      </NavLink>
    </div>
    );
}

export default Logo