import React, { Component } from 'react';

//import css
import "./../../css/AdminPanel.css";

//import components
import HeaderAdmin from './HeaderAdmin';


export class AdminPanel extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderAdmin />
      </React.Fragment>
    );
  }
}

export default AdminPanel
