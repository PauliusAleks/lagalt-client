import React from "react";
import { NavLink } from "react-router-dom";
import PenLogoSVG from "./PenLogoSVG";
import { useDispatch } from "react-redux";
import { search } from "../../../reduxParts/searchReducer";
import { resetCategory } from "../../../reduxParts/categoryReducer";

const Logo = () => {
  const dispatch = useDispatch()

  const handleSearchReset = () => {
    dispatch(search(""))
    dispatch(resetCategory())
  }

    return(
    <div className="p-3" style={{ display: 'flex' }}>
      <NavLink to="/" onClick={handleSearchReset} style={{ textDecoration: 'none' }}>
        <h1 className="text-decoration-none text-dark" ><PenLogoSVG />Lagalt</h1>
      </NavLink>
    </div>
    );
}

export default Logo