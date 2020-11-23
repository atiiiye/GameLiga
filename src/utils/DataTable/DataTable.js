
//import bootstrap
import { Table } from 'reactstrap'

//import css


//import components
import { TableBody, TableHead } from '@material-ui/core'
import React, { Component } from 'react'
import Loader from '../../Components/Loader'
import SearchBox from '../../Components/SearchBox'
import http from '../../Services/httpService'
import PaginationPlugin from '../PaginationPlugin'

// const DataTable = () => {
//     return ( 
//         <div>

//         </div>
//      );
// }

// export default DataTable;


export class DataTable extends Component {

    state = {
        loading: false,
        totalItems: 0,
        currentPage: "",
        comments: []
    }

    ITEMS_PER_PAGE = 50;

    headers = [
        { id: 0, Title: "Title", Text: "Text", Image: "Image", Auther: "Auther", Date: "Date" },
    ];

    getData = () => {
        this.setState({ loading: true });
        http.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                this.setState({ loading: false });
                this.setState({ comments: response.data })
                console.log("comments : ", this.state.comments)

            })
            .catch(error => console.log(error))

    }

    componentDidMount() {
        this.getData();
    }

    commentsData = () => {
        let computedComments = this.state.comments;
        console.log("computedComments :", computedComments.length)

        this.setState({ totalItems: computedComments.length })

        return computedComments
            .slice(
                (this.state.currentPage - 1) * this.ITEMS_PER_PAGE,
                (this.state.currentPage - 1) * this.ITEMS_PER_PAGE + this.ITEMS_PER_PAGE,
            )
    }

    componentDidUpdate() {
        // this.commentsData()
    }


    render() {
        const { loading } = this.state;

        return (
            <div className="parent-table">
                <div className="pagination-search-box">
                    <div className="pagination-section">
                        <PaginationPlugin
                            total={this.state.totalItems}
                            itemsPerPage={this.ITEMS_PER_PAGE}
                            currentPage={this.state.currentPage}
                            onPageChange={page => this.setState({ currentPage: page })}
                        />
                    </div>
                    <div className="search-section">
                        <SearchBox />
                    </div>
                </div>

                <Table id="allNews" className="mt-3" striped borderless hover>
                    <TableHead headers={this.headers} />
                    <TableBody body={this.state.comments} />
                </Table>
                {loading && <Loader />}
            </div>

        )
    }
}

export default DataTable
