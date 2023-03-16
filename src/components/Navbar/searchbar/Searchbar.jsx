import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import SearchSVG from "./SearchSVG";
// import handleSearch from "../Actions";
import { useState } from "react";

function SearchBar() {
    const [query, setQuery] = useState("");
    // const {tracks}

    const handleSearch = e => {
        const {letter, value} = e.target
        console.log({letter} + " "+ value)
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

