import React, { useState, useEffect, useMemo } from 'react'

//import css
import './../css/AllNews.css';

//import bootstrap
import { Table } from 'reactstrap'

//import components
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import PaginationPlugin from '../utils/PaginationPlugin'
import TableHead from '../utils/DataTable/TableHead'
import TableBody from '../utils/DataTable/TableBody'
import Loader from '../Components/Loader'
import http from '../Services/httpService';
import DataTable from '../utils/DataTable/DataTable';
import SearchTable from '../utils/DataTable/SearchTable';

const AllNews = () => {

    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(false);
    const [totalItems, setTotalItems] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const ITEMS_PER_PAGE = 10;
    const [searchInput, setSearchInput] = useState("");
    const [query, setQuery] = useState([])


    const headers = [
        { id: 0, Title: "Title", Text: "Text", Image: "Image", Auther: "Auther", Date: "Date", edit: "Edit", delete: "Delete" },
    ];

    const onDeleteNews = (item) => {
        if (window.confirm("Are you sure to delete ?")) {
            setComments(comments.filter(value => item.id !== value.id))
        }
        return comments
    }

    const onEditNews = (item) => {
        console.log(item)
    }

    const handleChange = val => {
        setSearchInput(val);
        console.log('searchInput :', searchInput)
        setLoading(true)
        filtered(searchInput)
    }

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            await http.get("https://jsonplaceholder.typicode.com/comments")
                .then(response => {
                    setLoading(false);
                    setComments(response.data)
                })
                .catch(error => console.log(error))
        }
        getData();
    }, [])

    const filtered = (val) => {
        let currentList = [];
        let newList = [];

        if (val !== "") {
            currentList = comments;

            newList = currentList.filter(value => {
                const lc = value.body.toLowerCase();
                const filter = val.toLowerCase();
                return lc.match(filter);
            });
            console.log('new list ', newList)
        } else {
            newList = comments;
        }
        setComments(newList)
        console.log('comments :', comments)
    }

    const commentsData = useMemo(() => {
        let computedComments = comments;

        setTotalItems(computedComments.length)
        setLoading(false);

        return computedComments
            .slice(
                (currentPage - 1) * ITEMS_PER_PAGE,
                (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
            );
    }, [comments, currentPage, totalItems])


    useEffect(() => {
        handleChange(searchInput)
    }, [searchInput])

    return (
        <div className="container-fluid page-body-wrapper">
            <AdminHeader />
            <div className="parent-table">
                <DataTable
                    totalItems={totalItems}
                    ITEMS_PER_PAGE={ITEMS_PER_PAGE}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    headers={headers}
                    body={commentsData}
                    value={searchInput}
                    handleChange={handleChange}
                    onDeleteNews={onDeleteNews}
                    onEditNews={onEditNews}
                />

                {console.log('commentsData :', commentsData)}
                {loading && <Loader />}

                <PaginationPlugin
                    total={totalItems}
                    itemsPerPage={ITEMS_PER_PAGE}
                    currentPage={currentPage}
                    onPageChange={page => setCurrentPage(page)}
                />
            </div>
        </div>
    )
}

export default AllNews
