import React, { useEffect, useState } from 'react'

//import css
import './../../css/SearchTable.css'

//import bootstrap
import { Form } from "react-bootstrap";

// import SearchField from 'react-search-field';

const SearchTable = ({ handleChange, value }) => {

    const [filteredData, setFilteredData] = useState([])

    // useEffect(() => {
    //     // console.log('searchInput update :', searchInput)
    //     setLoading(false)
    // }, [searchInput])


    return (
        <div className="parent-input" >
            <Form.Control
                className="search-table"
                placeholder="search news"
                type="text"
                name="query"
                value={value}
                onChange={(e) => handleChange(e.target.value)}
            >
            </Form.Control>
        </div>
    )
}


export default SearchTable;