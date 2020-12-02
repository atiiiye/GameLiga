import React, { useEffect, useState, useRef } from 'react'

//import bootstrap
import { Table } from 'reactstrap'

//import css


//import components
import TableBody from './TableBody'
import TableHead from './TableHead'
import PaginationPlugin from '../PaginationPlugin'
import SearchTable from './SearchTable'

const DataTable = ({ totalItems, ITEMS_PER_PAGE, currentPage, setCurrentPage, searchItems, headers, body }) => {
    const [loading, setLoading] = useState(false)
    const [searchInput, setSearchInput] = useState("");
    const [query, setQuery] = useState([])
    const [bodyState, setBodyState] = useState([body])
    const [totalItemsState, setTotalItems] = useState(searchItems.length)


    const handleChange = val => {
        setSearchInput(val);
        setLoading(true)
        filtered(val)
    }

    const filtered = (val) => {

        let currentList = [];
        let newList = [];

        if (val !== "") {
            currentList = searchItems;

            newList = currentList.filter(value => {
                const lc = value.body.toLowerCase();
                const filter = val.toLowerCase();
                return lc.match(filter);
            });

            console.log('new list ', newList)
        } else {
            newList = searchItems;
        }
        setQuery(newList)
    }

    // useEffect(() => {
    //     setBodyState(body)
    //     setTotalItems(totalItems.length)
    //     console.log('bodyState mount:', bodyState)
    //     console.log('totalItemsState mount:', totalItemsState)
    // }, [])

    useEffect(() => {
        console.log('bodyState update:', bodyState)
        console.log('totalItemsState update:', totalItemsState)
        setBodyState(query)
        setTotalItems(query.length)

        body = query;
        totalItems = query.length

        console.log('body:', body)
        console.log('totalItems:', totalItems)

    }, [query, bodyState, totalItemsState])


    return (

        <div className="parent-table">
            <div className="pagination-search-box">
                <div className="pagination-section">
                    {console.log('totalItems:', totalItems)}
                    {console.log('body:', body)}
                    <PaginationPlugin
                        total={totalItems}
                        itemsPerPage={ITEMS_PER_PAGE}
                        currentPage={currentPage}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </div>

                <div className="search-section">
                    <SearchTable value={searchInput} onChange={(e) => handleChange(e.target.value)} />
                </div>
            </div>

            <Table id="allNews" className="mt-3" striped borderless hover>
                <TableHead headers={headers} />
                <TableBody body={body} />
            </Table>
        </div>
    );
}

export default DataTable;
