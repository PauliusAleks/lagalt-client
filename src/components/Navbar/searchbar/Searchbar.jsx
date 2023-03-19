import React, { useEffect } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import SearchSVG from "./SearchSVG";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../../../reduxParts/searchReducer";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function SearchBar() {
    const [query, setQuery] = useState("");
    const projects = useSelector((state) => state.banners)
    const dispatch = useDispatch()

    const handleClickOutside = () => {
        //setQuery("")
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);
    

    const handleSearch = () =>  {
        dispatch(search(query))
    }
    return(
        <div class="my-auto w-50">
            <InputGroup className="mb-2">
                {/* <Button variant="light" id="button-addon1" active>
                    <SearchSVG/>
                </Button> */}
                <Form.Control type="text" onChange={e => setQuery(e.target.value)} placeholder="Søk etter prosjekt"/>
                <Button size="lg" variant="primary" onClick={handleSearch}>Søk</Button>
            </InputGroup>
            {query.length > 0 && (
            <div class="bg-light rounded ml-5 position-absolute border border-1 border-dark">
                {projects.project.slice(0,5).map((value) => {
                    if (value.name.toLowerCase().includes(query.toLowerCase())) {
                            return (
                                <div class="link-secondary">
                                    <NavLink to="/project" style={{ textDecoration: 'none'}} >
                                        <p class="p-2 rounded border-bottom link-secondary">{value.name} </p>
                                    </NavLink>
                                </div>
                                );
                            }
                        })}
            </div>
           )}
        </div>
    );
}
export default SearchBar

