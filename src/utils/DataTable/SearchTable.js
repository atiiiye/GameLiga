import React, { useEffect, useState } from 'react'


//import css
import './../../css/SearchTable.css'

//import bootstrap
import { Form } from "react-bootstrap";
import { Table } from 'reactstrap'

//import utils
import { errorMessage } from '../messages';

//import components
import Loader from '../../Components/Loader';
import TableBody from './TableBody';
import TableHead from './TableHead';

// import SearchField from 'react-search-field';

const SearchTable = ({ value, onChange, searchItems, searchDefault }) => {

    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState()
    // const [input, setInput] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [searchInput, setSearchInput] = useState("");


    // const handleChange = (event) => {
    //     let data = event.target.value
    //     setQuery(data)
    //     setLoading(true)
    //     // filtered()
    //     console.log("query is :", query)      
    // }


    const handleChange = val => {
        setSearchInput(val);
        console.log('val :', val)
        console.log('searchInput not mount :', searchInput)
        setLoading(true)
        filtered()
    }

    useEffect(() => {
        console.log('searchInput mount:', searchInput)
        let filteredItems = searchItems.filter(value => {

            if (searchInput !== "" && value.body.toLowerCase().match(searchInput.toLocaleLowerCase())) {
                console.log('body is match :)')
                console.log(value);
                // return value.body.toLowerCase().match(searchInput.toLowerCase())
                  return < TableBody body = { value } />
                    
            } else if (searchInput !== "" && value.id.toString().toLowerCase().match(searchInput.toString().toLowerCase())) {
                console.log('id is match :)')
                console.log(value)
                return <TableBody body={value} />

                // return value.id.toString().toLowerCase().match(searchInput.toString().toLowerCase())
            }
            else {
                console.log('query is not match :(')
                errorMessage("No news found !")
            }

        });
        setLoading(false)
    }, [searchInput])

    const filtered = () => {
        // let filteredItems = searchItems.filter(value => {
        //     // console.log('value.body :', value.body.toLowerCase())
        //     if (searchInput !== "" && value.body.toLowerCase().match(searchInput.toLocaleLowerCase())) {
        //         console.log('body is match :)')
        //         // return value.body.toLowerCase().includes(searchInput.toLowerCase())
        //         return <TableBody body={value} />
        //     } else if (value.id.toString().toLowerCase().match(searchInput.toLowerCase())) {
        //         console.log('id is match :)')
        //         return value.id.toString().toLowerCase().includes(searchInput.toLowerCase())
        //     }
        //     else {
        //         console.log('query is not match :(')
        //         return []
        //     }


        // });
        // setInput(filteredItems);
        // console.log("input :", input)
        // setQuery(filteredItems);

        // setLoading(false)
        // setRes(filteredItems);
        // console.log("filteredItems is :", filteredItems)
        {/* {console.log("res :", res)} */ }
    }


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