import React from 'react'


//import css
import './../../css/SearchTable.css'

//import bootstrap
import { Form, Button } from "react-bootstrap";

//import packages
import SearchIcon from '@material-ui/icons/Search';

export default function SearchTable(value, onChange) {

    // onChange = () => {

    // }

    return (
        <div className="parent-input" style={{ display: "flex" }}>
            <Form.Control
                className="search-table"
                placeholder="search"
                type="text"
                name="query"
            // value={value}
            // onChange={(e) => onChange(e)}
            >
            </Form.Control>
            <Button className="search-btn " varient="primary" type="button"><SearchIcon /></Button>
        </div>
    )
}
