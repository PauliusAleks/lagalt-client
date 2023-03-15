import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import SearchSVG from "./SearchSVG";
import handleSearch from "../Actions";

function SearchBar() {
    return(
        <div class="my-auto w-50">

            <InputGroup className="mb-2">
                <Button variant="light" id="button-addon1" active>
                    <SearchSVG/>
                </Button>
                <Form.Control placeholder="Søk etter prosjekt"/>
                <Button size="lg" variant="primary" onClick={handleSearch}>Søk</Button>
            </InputGroup>
        </div>
           
    );
}
export default SearchBar

