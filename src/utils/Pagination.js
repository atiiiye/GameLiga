import React, { useEffect, useState, useMemo } from 'react'


import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PaginationPlugin = ({ total, prePage, currentPage, onPageChange }) => {

    const [totalPages, setTotalPages] = useState(0);
    
    const paginationItems = useMemo(() => {
        const pages = []
        for (let i = 1; i < total; i++) {
            pages.push(<PaginationItem active={i === currentPage} onClick={() => onPageChange(i)}>
                <PaginationLink href="#" key={i}>
                    {i}
                </PaginationLink>
            </PaginationItem>)
        }

        return pages;
    }, [totalPages, currentPage])

    useEffect(() => {

        if (total > 0 && prePage > 0)
            setTotalPages(Math.ceil(total / prePage))

    }, [total, prePage])

    if( totalPages ===0) return null

    return (
        <div>
            <Pagination>
                <PaginationItem onClick={() => onPageChange( currentPage -1)} disabled={currentPage===1}>
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
