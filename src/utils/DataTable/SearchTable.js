import React, { useEffect, useState } from 'react'

//import css
import './../../css/SearchTable.css'

//import bootstrap
import { Form } from "react-bootstrap";

//import utils
import { errorMessage } from '../messages';

//import components
import Loader from '../../Components/Loader';
import TableBody from './TableBody';
import DataTable from './DataTable';

// import SearchField from 'react-search-field';

const SearchTable = ({ handleChange, value }) => {

    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [searchInput, setSearchInput] = useState("");

    // useEffect(() => {
    //     // console.log('searchInput update :', searchInput)
    //     setLoading(false)
    // }, [searchInput])


    return (
        <div className="parent-input" >
            <Form.Control
                className="search-table"
                placeholder="search"
                type="text"
                name="query"
                value={value}
                onChange={(e) => handleChange(e.target.value)}
            >
            </Form.Control>
            {/* {loading && <Loader />} */}
        </div>
    )
}


export default SearchTable;