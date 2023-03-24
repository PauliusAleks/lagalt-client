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
    <div className="p-3 d-flex " style={{ display: 'flex' }}>
      <NavLink to="/" onClick={handleSearchReset} style={{ textDecoration: 'none' }}>
        <h1 className="text-decoration-none text-dark" style={{display:'flex', color:'#393E46'}} >Lagalt<PenLogoSVG style={{ padding:'10px', marginTop:'-20px', width:'50px', height:'50px', color:'#393E46'}}/></h1>
      </NavLink>
    </div>
    );
}

export default Logo