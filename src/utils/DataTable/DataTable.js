import React, { useState } from 'react'

//import bootstrap
import { Table } from 'reactstrap'

//import css


//import components
import TableBody from './TableBody'
import TableHead from './TableHead'
import Loader from '../../Components/Loader'
import http from '../../Services/httpService'
import PaginationPlugin from '../PaginationPlugin'
import SearchTable from './SearchTable'

const DataTable = ({ totalItems, ITEMS_PER_PAGE, currentPage, setCurrentPage, searchItems, headers, body }) => {

    return (
        <div className="parent-table">
            <div className="pagination-search-box">
                <div className="pagination-section">
                    <PaginationPlugin
                        total={totalItems}
                        itemsPerPage={ITEMS_PER_PAGE}
                        currentPage={currentPage}
                        onPageChange={page => setCurrentPage(page)}
                    />

                </div>
                <div className="search-section">
                    <SearchTable searchItems={searchItems} headers={headers} />
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
