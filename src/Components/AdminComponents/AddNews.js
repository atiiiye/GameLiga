import React, { Component } from 'react'

//import components
import AdminHeader from './AdminHeader'

export class AddNews extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="d-flex">
                    <AdminHeader />
                    {/* <div className=" btn btn-primary">Hi</div> */}

                </div>
            </React.Fragment>
        )
    }
}

export default AddNews
