import React, { useEffect, useState, useRef } from 'react'

//import bootstrap
import { Table } from 'reactstrap'

//import css


//import components
import TableBody from './TableBody'
import TableHead from './TableHead'
import PaginationPlugin from '../PaginationPlugin'
import SearchTable from './SearchTable'

const DataTable = ({ totalItems, ITEMS_PER_PAGE, currentPage, setCurrentPage, headers, body, onDeleteNews, onEditNews, handleChange, value, sortBy}) => {


    // { console.log('body DataTable :', body) }
    return (
        <React.Fragment>
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
                    <SearchTable value={value} handleChange={handleChange} />
                </div>
            </div>

            <Table id="allNews" className="mt-3" striped borderless hover>
                <TableHead
                    headers={headers}
                    sortBy={sortBy}
                    body={body}
                    />
                <TableBody
                    body={body}
                    onDeleteNews={onDeleteNews}
                    onEditNews={onEditNews}
                />
            </Table>
        </React.Fragment>
    );
}

export default DataTable;
