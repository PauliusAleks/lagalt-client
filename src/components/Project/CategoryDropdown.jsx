import React from "react";
import { Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux"
import { setWebdev, setGamedev, setMusic, setFilm, setAll } from "../../reduxParts/categoryReducer";


const CategoryDropdown = () => {
    const category = useSelector((state) => state.category)
    const dispatch = useDispatch()

    return(
        <Dropdown >
            <Dropdown.Toggle variant="white" id="dropdown-basic">{category}</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item as="button" onClick={() => dispatch(setMusic())}>Musikk</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => dispatch(setFilm())}>Film</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => dispatch(setGamedev())}>Spillutvikling</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => dispatch(setWebdev())}>Nettutvikling</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as="button" onClick={() => dispatch(setAll())}> Vis alle</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default CategoryDropdown