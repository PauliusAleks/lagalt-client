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
                onClick={handleSetToggleTrue} 
                onChange={e => setQuery(e.target.value)} 
                onKeyPress={e => e.key === "Enter" && handleSearch()} 
                placeholder="Søk etter prosjekt"/>
                <Button size="lg" variant="primary" onClick={handleSearch}>Søk</Button>
            </InputGroup>
            {query.length > 0 && (
            <div className="bg-light rounded ml-5 position-absolute border border-1 border-dark">
               {toggle && 
                <div className="d-flex justify-content-end">
                    <CloseButton onClick={handleSetToggleFalse} /> 
                </div>
               }
                {projects.project.slice(0,10).map((value, key) => {
                    if(toggle) {
                        if (value.name.toLowerCase().includes(query.toLowerCase())) {
                            return (
                                <div className="border-bottom" key={key}>
                                    <Button variant="light" onClick={() => dispatch(search(value.name))}style={{ width: '100%' , display: 'flex', justifyContent: 'left', padding: '16px'}} >
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

