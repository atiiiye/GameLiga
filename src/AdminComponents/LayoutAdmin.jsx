import React, { Component } from 'react'

//import css 
import './../css/LayoutAdmin.css'

//import routes
import PrivateRoute from './../Routes/PrivateRoute '

//import components
import AddNews from './AddNews'
import AdminSidebar from './AdminSidebar'
import AllNews from './AllNews'
import EditRules from './EditRules'
import AdminContextes from './../Contexts/AdminContextes'
import AdminPanel from './AdminPanel'
import NotFound from '../Components/NotFound'

import { Route, Switch } from 'react-router-dom'

class LayoutAdmin extends Component {
    render() {
        return (

            <Switch>
                <div className="layout-parent" style={{ display: "flex" }}>
                    <AdminContextes>

                        <Route path="/admin/panel" component={AdminPanel} />

                        <Route exact path="/admin/add-news" component={AddNews} />

                        <Route exact path="/admin/edit-rules" component={EditRules} />

                        <Route exact path="/admin/news-list" component={AllNews} />

                        <AdminSidebar />
                    </AdminContextes>
                </div>
                {/* <Route exact path="" component={NotFound} /> */}
            </Switch>
        )
    }
}

export default LayoutAdmin
