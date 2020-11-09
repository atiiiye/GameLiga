import React, { Component } from 'react'

//import components
import HeaderAdmin from './HeaderAdmin'

export class AddNews extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="d-flex">
                    <HeaderAdmin />
                    {/* <div className=" btn btn-primary">Hi</div> */}

                </div>
            </React.Fragment>
        )
    }
}

export default AddNews
