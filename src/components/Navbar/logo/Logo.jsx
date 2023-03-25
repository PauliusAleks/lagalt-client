import React from "react";
import { NavLink } from "react-router-dom";
import PenLogoSVG from "./PenLogoSVG";
import { useDispatch } from "react-redux";
import { search } from "../../../reduxParts/searchReducer";
import { resetCategory } from "../../../reduxParts/categoryReducer";
import './Logo.css'


const Logo = () => {
  const dispatch = useDispatch()

  const handleSearchReset = () => {
    dispatch(search(""))
    dispatch(resetCategory())
  }

  

    return(
      <div>
        <svg id="stroke" xmlns="http://www.w3.org/2000/svg" width="0" height="0">
    <defs>
      <path id="line" d="M2 2c49.7 2.6 100 3.1 150 1.7-46.5 2-93 4.4-139.2 7.3 45.2-1.5 90.6-1.8 135.8-.6" fill="none" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"/>
    </defs>
  </svg>
      <div className="p-3 d-flex " style={{ display: 'flex', top:'-5px'}}>
  
        <NavLink className="logo" to="/" onClick={handleSearchReset} style={{ textDecoration: 'none' }}>
          <h1 className="text-decoration-none text-dark" style={{display:'flex', color:'#393E46'}} >Lagalt  
          <svg className="button-stroke" viewBox="0 0 154 13">
			<use href="#line"></use>
		</svg>
		<svg className="button-stroke" viewBox="0 0 154 13">
			<use href="#line"></use>
		</svg>
          <PenLogoSVG className="pen" style={{ padding:'10px', marginTop:'-20px', width:'50px', height:'50px', color:'#393E46'}}/></h1>
      
    </NavLink>
    
      </div>
    </div>
    );

    
}

export default Logo