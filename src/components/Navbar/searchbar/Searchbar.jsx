import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import SearchSVG from "./SearchSVG";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../../../reduxParts/searchReducer";

function SearchBar() {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch()

    const handleSearch = () =>  {
        dispatch(search(query))
    }
    return(
        <div class="my-auto w-50">
            <InputGroup className="mb-2">
                <Button variant="light" id="button-addon1" active>
                    <SearchSVG/>
                </Button>
                <Form.Control type="text" onChange={e => setQuery(e.target.value)} placeholder="Søk etter prosjekt"/>
                <Button size="lg" variant="primary" onClick={handleSearch}>Søk</Button>
            </InputGroup>
        </div>
    );
}
export default SearchBar

