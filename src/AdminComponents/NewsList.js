import React, { useState, useEffect, useMemo } from 'react'

//import css
import './../css/NewsList.css';

//import bootstrap
import { Table } from 'reactstrap'

//import components
import AdminHeader from './AdminHeader'
import PaginationPlugin from '../utils/PaginationPlugin'
import Loader from '../Components/Loader'
import http from '../Services/httpService';
import DataTable from '../utils/DataTable/DataTable';
import PageTitle from '../Components/PageTitle';
import { errorMessage } from '../utils/messages';

const NewsList = () => {

    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(false);
    const [totalItems, setTotalItems] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const ITEMS_PER_PAGE = 10;
    const [searchInput, setSearchInput] = useState("");
    const [query, setQuery] = useState([])
    const [sortedField, setSortedField] = React.useState(null);

    const [currentSort, setCurrentSort] = useState('default')

    const sortTypes = {
        up: {
            class: 'sort-up',
            fn: (a, b) => a - b
        },
        down: {
            class: 'sort-down',
            fn: (a, b) => b - a
        },
        default: {
            class: 'sort',
            fn: (a, b) => a
        }
    };


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
        // console.log('searchInput :', searchInput)
        setLoading(true)
        filtered(val)
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
        sortBy('Title')
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
            newList = commentsData;
        }
        setComments(newList)
        // console.log('comments :', comments)
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


    // useEffect(() => {
    //     filtered(searchInput)
    //     handleChange(searchInput)
    // }, [searchInput])

    const compareBy = () => {
        console.log('compareBy')
        return function (a, b) {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        };
    }


    const sortBy = (key) => {
        console.log(key)
        console.log(comments)
        switch (key) {
            case 'Title':
                let name = [comments.map(comment => comment.name)]
                name.sort(compareBy());
                {console.log(name)}
                return name;

            default:
                return comments;
        }
        // commentsData({ arrayCopy });
    }

    return (
        <div className="container-fluid page-body-wrapper">
            <AdminHeader />
            <PageTitle title="News List" />
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
                    sortBy={sortBy}
                />

                {/* {console.log('commentsData :', commentsData)} */}
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

export default NewsList
