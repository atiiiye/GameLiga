import React, { Component } from "react";

//import components
import AdminHeader from "./AdminHeader";
import AdminPanel from "./AdminPanel";
import AdminSidebar from "./AdminSidebar";

//import css
import "./../../css/AddNews.css";

//import bootstrap
import { Form, FormGroup, Label, Input, FormText , Button} from "reactstrap";

export class AddNews extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid page-body-wrapper">
          <AdminHeader />
          <div className="all-content">
            <div className="title-page">
              <h2 className="h1">Add News</h2>
            </div>
            <Form className="add-news-form">
              <FormGroup>
                <Label className="form-label" for="title">
                  Title :
                </Label>
                <Input
                  className="form-input"
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Enter title of news"
                />
              </FormGroup>
              <FormGroup>
                <Label className="form-label" for="description">
                  News text :
                </Label>
                <Input
                  className="form-input"
                  type="textarea"
                  name="description"
                  id="description"
                  placeholder="Enter description of news"
                />
              </FormGroup>
              <FormGroup>
                <Label className="form-label" for="file">
                  File :
                </Label>
                <Input
                  className="form-input"
                  type="file"
                  name="file"
                  id="file"
                />
                <FormText color="muted" className="description-file">
                  This is some placeholder block-level help text for the above
                  input. It's a bit lighter and easily wraps to a new line.
                </FormText>
              </FormGroup>
              <Button className="button-add-news" type="submit" >Add news</Button>
            </Form>
          </div>
        </div>
        <AdminSidebar />
      </React.Fragment>
    );
  }
}

export default AddNews;
