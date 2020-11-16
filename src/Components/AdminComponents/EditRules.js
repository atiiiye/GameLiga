import React, { Component } from "react";

//import css
import './../../css/EditRules.css';

//import components
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

//import packages
import { Editor, EditorState } from 'draft-js';

//import services

export class EditRules extends Component {

  state = { editorState: EditorState.createEmpty() }

  setEditor = (editor) => {
    this.editor = editor;
  };

  onChange = (editorState) => this.setState({ editorState });

  focusEditor = () => {
    if (this.editor) {
      this.editor.focus();
    }
  };

  componentDidMount() {
    this.focusEditor();
  }

  // styles = {
  //   editor: 
  // };

  render() {
    return (
      <div>
        <div className="container-fluid page-body-wrapper">
          <AdminHeader />
          <div
            className="all-content"
            style={{
              border: '1px solid gray',
              minHeight: '50%',
              color: "#ffffff",
            }}
            onClick={this.focusEditor}>
            <Editor
              ref={this.setEditor}
              editorState={this.state.editorState}
              onChange={this.onChange}
            />
          </div>
        </div>
        <AdminSidebar />
      </div>
    );
  }
}

export default EditRules;
