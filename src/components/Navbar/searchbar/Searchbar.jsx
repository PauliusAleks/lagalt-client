import React, { useEffect } from "react";
import { Form, InputGroup, Button, CloseButton } from "react-bootstrap";
import SearchSVG from "./SearchSVG";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../../../reduxParts/searchReducer";
import { useSelector } from "react-redux";

function SearchBar() {
    const [query, setQuery] = useState("");
    const [optQuery, setOptQuery] = useState("")
    const [toggle, setToggle] = useState(true);
    const projects = useSelector((state) => state.banners)
    const dispatch = useDispatch()

    const handleSetToggleFalse = () => {
        setToggle(false)
    };
    const handleSetToggleTrue = () => {
        setToggle(true)
    }
    const handleSearch = () =>  {
        dispatch(search(query))
    }
    const handleOptionSearch = () => {
        dispatch(search(optQuery))
    }
    return(
        <div className="my-auto w-50">
            <InputGroup className="mb-2">
                {/* <Button variant="white" style={{ backgroundColor: 'white'}}>
                    <SearchSVG/>
                </Button> */}
                <Form.Control type="text"
                style ={{fontFamily: 'Arial, sans-serif'}} 
                onClick={handleSetToggleTrue} 
                onChange={e => setQuery(e.target.value)} 
                onKeyPress={e => e.key === "Enter" && handleSearch()} 
                placeholder="Søk etter prosjekt"/>
                <Button size="lg"  onClick={handleSearch} id="searchButton" style={{fontFamily: 'Arial, sans-serif', backgroundColor:'#393E46', border:'none'}}>Søk</Button>
            </InputGroup>
            {query.length > 0 && (
            <div id="results" className="bg-light w-50 rounded ml-5 position-absolute border border-1 border-dark" 
            style={{overflowY: 'auto', maxHeight: '500px', zIndex:'10'}}>
               {toggle && 
                <div className="d-flex justify-content-end">
                    <CloseButton onClick={handleSetToggleFalse} /> 
                </div>
               }
                {projects.project.map((value, key) => {
                    if(toggle) {
                        if (value.name.toLowerCase().includes(query.toLowerCase())) {
                            return (
                                <div className="border-bottom" key={key}>
                                    <Button variant="light" onClick={() => dispatch(search(value.name))}
                                    style={{ width: '100%' , display: 'flex', justifyContent: 'left', padding: '16px'}} >
                                        {value.name}
                                    </Button>
                                </div>
                                ); 
                            }
                        } 
                    return <></>
                })
            }     
            </div>
           )}
        </div>
    );
    
}
export default SearchBar

