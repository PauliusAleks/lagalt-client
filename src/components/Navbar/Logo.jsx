import React from "react";
import { NavLink } from "react-router-dom";
import PenLogoSVG from "./PenLogoSVG";

function Logo() {
    return(
    <div class="p-3" style={{ display: 'flex' }}>
      <PenLogoSVG />
      <NavLink to="/" style={{ textDecoration: 'none' }}><h1 class="text-decoration-none text-dark">Lagalt</h1></NavLink>
    </div>
    );
}

export default Logo