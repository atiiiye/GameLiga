import React, { useEffect, useState } from 'react'


//import css
import './../../css/SearchTable.css'

//import bootstrap
import { Form, Button } from "react-bootstrap";

//import packages
import SearchIcon from '@material-ui/icons/Search';

//import utils
import { errorMessage } from '../messages';

//import components
import Loader from '../../Components/Loader';
import TableBody from './TableBody';


const SearchTable = ({ value, onChange, searchItems }) => {

    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState('')
    const [message, setMessage] = useState('')
    const [res, setRes] = useState('')
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])



    const handleSearchChange = (event) => {
        const query = event.target.value
        // console.log("searchItems :", searchItems)
        // setQuery({ searchItems })
        setLoading(true)
        console.log("query is :", query)
        setQuery(query)


        // const filteredItems = searchItems.filter(item => {
        //     if (item.name.toLowerCase() === query.toLowerCase())
        //         return (item)

        //     else
        //     errorMessage("Search not found ...");
        // });


        let filteredItems = searchItems.filter(value => {
            // console.log("value :", value)
            if (value.body.toLowerCase().match(query.toLowerCase())) {
                console.log('object')
                return (
                    // value.toLowerCase().includes(query.toLowerCase()) ||
                    value.body.toLowerCase().includes(query.toLowerCase())
                );
            } else if (value.id.toString().toLowerCase().match(query.toLowerCase())) {
                console.log('object else')
                return (
                    value.id.toString().toLowerCase().includes(query.toLowerCase())
                )
            }
        });

        setQuery(filteredItems);
        setLoading(false)
        setRes(filteredItems);

        console.log("filteredItems is :", filteredItems)
    }

    // const fetchSearchResults = () => {
    //     let filteredData = searchItems.filter(value => {
    //         return (
    //             value.toLowerCase().includes(query.toLowerCase()) ||
    //             value.status.toLowerCase().includes(query.toLowerCase()) ||
    //             value.visits
    //                 .toString()
    //                 .toLowerCase()
    //                 .includes(query.toLowerCase())
    //         );
    //     });

    //     var searchString = query;
    //     var responseData = res
    //     if (searchString.length > 0) {
    //         responseData = responseData.filter(l => {
    //             console.log(l.name.toLowerCase().match(searchString));
    //         })
    //     }
    // }

    return (
        <div className="parent-input" >
            {console.log("res :", res)}
            <Form.Control
                className="search-table"
                placeholder="search"
                type="text"
                name="query"
                value={query || ""}
                onChange={(e) => handleSearchChange(e, value)}
            >
            </Form.Control>
            {loading && <Loader />}
            {
                res ? < TableBody body={setRes} /> : errorMessage("Search not found ...")
            }

            {/* <Button className="search-btn " varient="primary" type="button"><SearchIcon /></Button> */}
        </div>
    )
}


export default SearchTable;