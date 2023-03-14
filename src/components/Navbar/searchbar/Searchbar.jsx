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

{/* <div className="searchbar">
<label htmlFor="searchbar">
    <button>🔍</button>
</label>
<input class="text-light" placeholder="Search for projects" />
</div> */}

{/* </InputGroup>
        <Form>
        <Form.Group className="mb-3">
                <Form.Control type="text" placeholder={`${"Search for project"}`} />
                <Form.Text className="text-muted">
                    
                </Form.Text>
        </Form.Group>
      </Form> */}
