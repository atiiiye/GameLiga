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

// import SearchField from 'react-search-field';

const SearchTable = ({ value, onChange, searchItems, searchDefault, headers }) => {

    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState()
    // const [input, setInput] = useState('')
    const [filteredData, setFilteredData] = useState(false)
    const [searchInput, setSearchInput] = useState("");


    const handleChange = val => {
        setSearchInput(val);
        console.log('val :', val)
        console.log('searchInput mount :', searchInput)
        setLoading(true)
        filtered()

    }

    const filtered = () => {

        searchItems.filter(value => {
            if (searchInput !== "" && value.body.toLowerCase().match(searchInput.toLocaleLowerCase())) {
                console.log('body is match :)')
                console.log(value);
                // setFilteredData(true)
                // return 'kkkk'
                return <TableBody body={value} />

                // return value.body.toLowerCase().match(searchInput.toLowerCase())

            } else if (searchInput !== "" && value.id.toString().toLowerCase().match(searchInput.toString().toLowerCase())) {
                console.log('id is match :)')
                console.log(value)
                // setFilteredData(true)
                return <TableBody body={value} />
                // return value.id.toString().toLowerCase().match(searchInput.toString().toLowerCase())

            }
            else if (
                searchInput !== "" && value.body.toLocaleLowerCase() !== searchInput.toString().toLowerCase()
                // searchInput !== "" && value.name.toLocaleLowerCase() !== searchInput.toString().toLowerCase() ||
                // searchInput !== "" && value.id.toString().toLowerCase() !== searchInput.toString().toLowerCase()
            ) {
                console.log('query is not match :(')
                errorMessage("No news found !")
                // return searchInput.toString().toLowerCase()
            }

        });
    }

    useEffect(() => {
        console.log('searchInput update :', searchInput)
        filtered()
        setLoading(false)
    }, [searchInput])


    return (
        <div className="parent-input" >
            <Form.Control
                className="search-table"
                placeholder="search"
                type="text"
                name="query"
                value={searchInput}
                onChange={(e) => handleChange(e.target.value)}
            >
            </Form.Control>
            {loading && <Loader />}

        </div>
    )
}


export default SearchTable;