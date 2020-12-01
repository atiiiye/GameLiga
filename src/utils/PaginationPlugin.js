import React from 'react'

//import bootstrap
// import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
// import Pagination from 'react-bootstrap/Pagination'

//import css 
import "./../css/PaginationPlugin.css"

import { range } from "lodash";
import { NavLink } from 'react-router-dom';

const PaginationPlugin = ({ total, itemsPerPage, currentPage, onPageChange }) => {

    const pageCount = Math.ceil(total / itemsPerPage);
    if (currentPage < 1) currentPage = 1
    if (currentPage > pageCount) currentPage = pageCount
    if (pageCount === 1) return null;

    // const pages = range(1, pageCount + 1);

    // console.log("page count :", pageCount)

    return (
        <nav className="nav-pagination">
            <ul className="pagination">
                <li className={`page-item ${currentPage !== 1 ? "" : "disabled"}`} >
                    <NavLink
                        to="#"
                        className="page-link"
                        onClick={() => onPageChange(currentPage - 1)}
                    >
                        <i className="fa fa-angle-left"></i>
                    </NavLink>
                </li>
                {/* {pages.map(page => ( */}
                <li className="page-item">
                    {/* <a
                        className={`page-link ${pageCount === currentPage ? "active" : ""}`}
                        onClick={() => onPageChange(pageCount)}
                        href="#"
                    >
                        {total, "/", currentPage}
                    </a> */}
                    <pre className="page-number">{currentPage}  /  {pageCount} </pre>
                </li>
                {/* ))} */}
                <li className={`page-item ${currentPage === pageCount ? "disabled" : ""}`}>
                    <NavLink
                        to="#"
                        className="page-link"
                        onClick={() => onPageChange(currentPage + 1)}
                    >
                        <i className="fa fa-angle-right"></i>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}


export default PaginationPlugin
