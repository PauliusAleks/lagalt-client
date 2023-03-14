import React from "react";
import { Form } from "react-bootstrap";
// import "./Searchbar.css";

function SearchBar() {
    return(
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <button>🔍</button>
            <Form.Label></Form.Label>
            <Form.Control type="email" placeholder="Search for projects" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
      </Form>
           
    );
}
export default SearchBar

{/* <div className="searchbar">
<label htmlFor="searchbar">
    <button>🔍</button>
</label>
<input class="text-light" placeholder="Search for projects" />
</div> */}
