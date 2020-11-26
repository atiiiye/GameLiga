import React, { useState } from 'react'

//import bootstrap
import { Table } from 'reactstrap'

//import css


//import components
import { TableBody, TableHead } from '@material-ui/core'
import Loader from '../../Components/Loader'
import http from '../../Services/httpService'
import PaginationPlugin from '../PaginationPlugin'
import SearchTable from './SearchTable'

const DataTable = ({ totalItems, ITEMS_PER_PAGE, currentPage, setCurrentPage, searchItems }) => {

    // const [loading, setLoading] = useState(false);

    return (
        // <div className="parent-table">
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
                <SearchTable searchItems={searchItems} />
            </div>
        </div>


        // </div>
    );
}

export default DataTable;


// class DataTable extends Component {

//     state = {
//         loading: false,
//         totalItems: 0,
//         currentPage: "",
//         comments: []
//     }

//     ITEMS_PER_PAGE = 10;

//     headers = [
//         { id: 0, Title: "Title", Text: "Text", Image: "Image", Auther: "Auther", Date: "Date" },
//     ];

//     getData = () => {
//         this.setState({ loading: true });
//         http.get("https://jsonplaceholder.typicode.com/posts")
//             .then(response => {
//                 this.setState({ loading: false });
//                 this.setState({ comments: response.data })
//                 console.log("comments : ", this.state.comments)

//             })
//             .catch(error => console.log(error))

//     }

//     componentDidMount() {
//         this.getData();
//     }

//     commentsData = () => {
//         let computedComments = this.state.comments;
//         console.log("computedComments :", computedComments.length)

//         this.setState({ totalItems: computedComments.length })

//         return computedComments
//             .slice(
//                 (this.state.currentPage - 1) * this.ITEMS_PER_PAGE,
//                 (this.state.currentPage - 1) * this.ITEMS_PER_PAGE + this.ITEMS_PER_PAGE,
//             )
//     }


//     render() {
//         const { loading } = this.state;

//         return (
//             <div className="parent-table">
//             <div className="pagination-search-box">
//                 <div className="pagination-section">
//                     <PaginationPlugin
//                         total={totalItems}
//                         itemsPerPage={ITEMS_PER_PAGE}
//                         currentPage={currentPage}
//                         onPageChange={page => setCurrentPage(page)}
//                     />

//                 </div>
//                 <div className="search-section">
//                     <SearchTable />
//                 </div>
//             </div>

//             <Table id="allNews" className="mt-3" striped borderless hover>
//                 <TableHead headers={headers} />
//                 <TableBody body={commentsData} />
//             </Table>
//             {loading && <Loader />}
//             <PaginationPlugin
//                 total={totalItems}
//                 itemsPerPage={ITEMS_PER_PAGE}
//                 currentPage={currentPage}
//                 onPageChange={page => setCurrentPage(page)}
//             />
//         </div>

//         )
//     }
// }

// export default DataTable
