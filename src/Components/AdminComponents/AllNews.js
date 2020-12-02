import React, { useState, useEffect, useMemo } from 'react'

//import css
import './../../css/AllNews.css';

//import bootstrap
import { Table } from 'reactstrap'

//import components
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import PaginationPlugin from './../../utils/PaginationPlugin'
import TableHead from '../../utils/DataTable/TableHead'
import TableBody from '../../utils/DataTable/TableBody'
import Loader from '../Loader'
import http from './../../Services/httpService';
import DataTable from '../../utils/DataTable/DataTable';
import SearchTable from '../../utils/DataTable/SearchTable';

const AllNews = () => {

    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(false);
    const [totalItems, setTotalItems] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const ITEMS_PER_PAGE = 10;

    const headers = [
        { id: 0, Title: "Title", Text: "Text", Image: "Image", Auther: "Auther", Date: "Date", edit: "Edit", delete: "Delete" },
    ];

    const body = [
        { id: 1, Title: "Title1", Text: "Text news 1", Image: "Image 1", Auther: "Auther news 1", Date: "2020/10/10" },
        { id: 2, Title: "Title2", Text: "Text news 2", Image: "Image 2", Auther: "Auther news 2", Date: "2020/11/11" },
        { id: 3, Title: "Title3", Text: "Text news 3", Image: "Image 3", Auther: "Auther news 3", Date: "2020/12/15" },
        { id: 4, Title: "Title4", Text: "Text news 4", Image: "Image 4", Auther: "Auther news 4", Date: "2020/07/17" },
        { id: 5, Title: "Title5", Text: "Text news 5", Image: "Image 5", Auther: "Auther news 5", Date: "2020/01/19" },
        { id: 6, Title: "Title6", Text: "Text news 6", Image: "Image 6", Auther: "Auther news 6", Date: "2020/02/20" },
        { id: 7, Title: "Title7", Text: "Text news 7", Image: "Image 7", Auther: "Auther news 7", Date: "2020/02/20" },
        { id: 8, Title: "Title8", Text: "Text news 8", Image: "Image 8", Auther: "Auther news 8", Date: "2020/02/20" },
        { id: 9, Title: "Title9", Text: "Text news 9", Image: "Image 9", Auther: "Auther news 9", Date: "2020/02/20" },
        { id: 10, Title: "Title10", Text: "Text news 10", Image: "Image 10", Auther: "Auther news 10", Date: "2020/02/20" },
    ]


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

    const commentsData = useMemo(() => {
        let computedComments = comments;

        setTotalItems(computedComments.length)

        return computedComments
            .slice(
                (currentPage - 1) * ITEMS_PER_PAGE,
                (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
            );
    }, [comments, currentPage, totalItems])


    return (
        <div className="container-fluid page-body-wrapper">
            <AdminHeader />
            {/* <div className="parent-table"> */}
            <DataTable
                totalItems={totalItems}
                ITEMS_PER_PAGE={ITEMS_PER_PAGE}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                loading={loading}
                searchItems={comments}
                headers={headers}
                body={commentsData}
            />
            {loading && <Loader />}

            {/* <PaginationPlugin
                total={totalItems}
                itemsPerPage={ITEMS_PER_PAGE}
                currentPage={currentPage}
                onPageChange={page => setCurrentPage(page)}
            /> */}
            {/* </div> */}
        </div>
    )
}

export default AllNews
