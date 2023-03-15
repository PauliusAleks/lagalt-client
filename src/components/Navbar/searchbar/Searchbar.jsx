import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import SearchSVG from "./SearchSVG";

function SearchBar() {
    return(
        <div class="p-3">
        <InputGroup size="lg" className="mb-2">
            <Button variant="light" id="button-addon1">
                <SearchSVG/>
            </Button>
            <Form.Control placeholder="Search for project"/>
        </InputGroup>
        </div>
           
    );
}
export default SearchBar

