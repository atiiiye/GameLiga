import React, { useState, useEffect, useMemo } from 'react'

//import css
import './../../css/AllNews.css';

//import bootstrap
import { Table ,Pagination, PaginationItem, PaginationLink } from 'reactstrap'

//import components
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import PaginationPlugin from './../../utils/PaginationPlugin'
import SearchBox from '../SearchBox'
import TableHead from '../../utils/DataTable/TableHead'
import TableBody from '../../utils/DataTable/TableBody'
import Loader from '../Loader'
import http from './../../Services/httpService';


const AllNews = () => {

    const [comments, setComments] = useState([])
    const [loader, setLoader] = useState(false);
    const [totalItems, setTotalItems] = useState(0)
    const [currentPage, setCurrentPage] = useState()
    const ITEMS_PER_PAGE = 50;

    const headers = [
        { id: 0, Title: "Title", Text: "Text", Image: "Image", Auther: "Auther", Date: "Date" },
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
        const getData = () => {
            setLoader(true);
            http.get("https://jsonplaceholder.typicode.com/comments")
                .then(response => response.json())
                .then(json => {
                    console.log(json)
                    setLoader(false);
                    setComments(json)
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
                (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
            );
    }, [comments , currentPage])

    return (
        <div style={{ display: "flex" }}>
            <div className="container-fluid page-body-wrapper">
                <AdminHeader />
                <div className="parent-table">
                    <div className="pagination-search-box row">
                        <div className="pagination-section">
                            {/* <Pagination>
                                <PaginationItem>
                                    <PaginationLink first href="#" />
                                </PaginationItem>
                            </Pagination> */}

                            <PaginationPlugin
                                total={totalItems}
                                itemsPerPage={ITEMS_PER_PAGE}
                                currentPage={currentPage}
                                onPageChange={page => setCurrentPage(page)}
                            />
                        </div>
                        <div className="search-section">
                            <SearchBox />
                        </div>
                    </div>

                    <Table id="allNews" className="mt-3" striped borderless hover>
                        <TableHead headers={headers} />
                        <TableBody body={commentsData} />
                    </Table>
                </div>
                { loader && <Loader /> }
            </div>
            <AdminSidebar />
        </div>
    )

}

export default AllNews
