import React, { useEffect, useState, useMemo } from 'react'

//import bootstrap
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


const PaginationPlugin = ({ total = 0, itemsPerPage = 10, currentPage = 1, onPageChange }) => {

    const [totalPages, setTotalPages] = useState(0);

    const paginationItems = useMemo(() => {
        const pages = []
        for (let i = 1; i < total; i++) {
            pages.push(<PaginationItem
                active={i === currentPage}
                onClick={() => onPageChange(i)}
                key={i}>
                <PaginationLink href="#">
                    {i}
                </PaginationLink>
            </PaginationItem>)
        }

        return pages;
    }, [totalPages, currentPage])

    useEffect(() => {

        if (total > 0 && itemsPerPage > 0)
            setTotalPages(Math.ceil(total / itemsPerPage))

    }, [total, itemsPerPage])

    if (totalPages == 0) return null;

    return (
        <div>
            <Pagination>
                <PaginationItem onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                    <PaginationLink previous href="#" />
                </PaginationItem>
                {paginationItems}
                <PaginationItem onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    <PaginationLink next href="#" />
                </PaginationItem>
            </Pagination>

        </div>
    )
}


export default PaginationPlugin
