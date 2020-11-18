import React, { Component } from 'react'

//import bootstrap
import { Table } from 'reactstrap'

//import components
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import PaginationPlugin from '../../utils/PaginationPlugin'


class AllNews extends Component {
    state = {
        
    }

    render() {

        return (
            <div style={{ display: "flex" }}>
                <div className="container-fluid page-body-wrapper">
                    <AdminHeader />
                    <div className="parent-table">
                        <Table id="allNews">


                        </Table>

                        <PaginationPlugin total={} />
                    </div>


                </div>
                <AdminSidebar />

            </div>
        )
    }
}

export default AllNews
