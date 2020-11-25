import React, { useEffect, useState, useMemo } from 'react'

//import bootstrap
// import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
// import Pagination from 'react-bootstrap/Pagination'

//import css 
import "./../css/PaginationPlugin.css"

import { range } from "lodash";

const PaginationPlugin = ({ total, itemsPerPage, currentPage, onPageChange }) => {

    const pageCount = Math.ceil(total / itemsPerPage);
    if (pageCount === 1) return null;

    const pages = range(1, pageCount + 1);

    console.log("pages :", pages)

    return (
        <nav aria-label="Page navigation" className="nav-pagination">
            <ul className="pagination">
                <li
                    className={
                        currentPage !== 1
                            ? "page-item"
                            : "page-item disabled"
                    }
                >
                    <a
                        className="page-link"
                        onClick={() => onPageChange(currentPage - 1)}
                    >
                        <i class="fa fa-angle-left"></i>
                    </a>
                </li>
                {pages.map(page => (
                    <li
                        key={page}
                        className="page-item"
                    >
                        <a
                            className={`page-link ${page === currentPage ? "active" : ""}`}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </a>
                    </li>

                ))}
                {/* <Pagination.Ellipsis /> */}
                <li
                    className={
                        currentPage === pageCount
                            ? "page-item disabled"
                            : "page-item "
                    }
                >
                    <a
                        className="page-link"
                        onClick={() => onPageChange(currentPage + 1)}
                    >
                        <i class="fa fa-angle-right"></i>
                    </a>
                </li>
            </ul>
        </nav>
    )
}


export default PaginationPlugin
