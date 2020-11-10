import React, { Component } from 'react';

//import css
import "./../../css/AdminPanel.css";

//import components
import AdminHeader from './AdminHeader';


export class AdminPanel extends Component {
  render() {
    return (
      <React.Fragment>
        <AdminHeader />
      </React.Fragment>
    );
  }
}

export default AdminPanel
