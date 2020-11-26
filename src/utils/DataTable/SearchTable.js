import React, { useState } from 'react'


//import css
import './../../css/SearchTable.css'

//import bootstrap
import { Form, Button } from "react-bootstrap";

//import packages
import SearchIcon from '@material-ui/icons/Search';


const SearchTable = ({ value, onChange, searchItems }) => {

    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState('')
    const [message, setMessage] = useState('')
    const [res, setRes] = useState('')

    console.log("searchItems :", searchItems)

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setQuery({ searchItems })
        setLoading(true)
        setMessage('')

        if (!query) {
            setRes({});
            setQuery({ query })
            setMessage('')

        } else {
            setMessage('')
            setLoading(true)
            setQuery({ query })
            fetchSearchResults(1, query);
        }
    }

    const fetchSearchResults = () => {

    }

    return (
        <div className="parent-input" style={{ display: "flex" }}>
            <Form.Control
                className="search-table"
                placeholder="search"
                type="text"
                name="query"
                value={query}
                onChange={(e) => handleSearchChange(e, value)}
            >
            </Form.Control>
            {/* <Button className="search-btn " varient="primary" type="button"><SearchIcon /></Button> */}
        </div>
    )
}


export default SearchTable;