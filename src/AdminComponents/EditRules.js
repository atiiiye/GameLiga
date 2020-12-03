import React, { Component } from "react";

//import css
import './../css/EditRules.css';

//import components
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

//import bootstrap
import { Button } from 'reactstrap';

//import packages
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


//import services

export class EditRules extends Component {

  componentDidMount() {
    ClassicEditor
      .create(document.querySelector('#editor'))
      .then(editor => {
        window.editor = editor;
      })
      .catch(error => {
        console.error('There was a problem initializing the editor.', error);
      });
  }


  render() {
    return (
      // <div style={{ display: "flex" }}>
      <div className="container-fluid page-body-wrapper">
        <AdminHeader />
        <span className="title">
          Please enter your desired rules
          Then press the register key
            </span>

        <div id="editor" className="all-content"></div>
        <div className="button-offset">

          <Button className="register-rules">Register</Button>
        </div>
      </div>
      // {/* <AdminSidebar /> */ }
      // {/* </div> */ }
    );
  }
}

export default EditRules;
