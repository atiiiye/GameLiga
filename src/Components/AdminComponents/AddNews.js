import React, { Component } from "react";

//import components
import AdminHeader from "./AdminHeader";
import AdminPanel from "./AdminPanel";
import AdminSidebar from "./AdminSidebar";
import Loader from "./../Loader";

//import css
import "./../../css/AddNews.css";

//import bootstrap
import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";

//import utils
import "./../../utils/messages";
import { errorMessage, successMessage } from "./../../utils/messages";

export class AddNews extends Component {
  state = {
    title: "",
    description: "",
    file: "",
    loading: false,
    errors: {
      title: "",
      description: "",
      file: "",
    },
  };

  validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (
      this.validateForm(this.state.errors) &&
      this.state.title &&
      this.state.description &&
      this.state.file
    ) {
      console.info("Valid Form");
      this.resetInputs();
      successMessage("One news added");
    } else {
      console.error("Invalid Form");
      errorMessage("unexpected error , try again");
    }
  };

  handleChangeAddNews = (event) => {
    event.preventDefault();
    console.log("Hi");

    const { name, value } = event.target;

    let errors = this.state.errors;
    switch (name) {
      case "title":
        if (value.length == 0) {
          errors.title = "this field can not be empty";
          console.log("title");
        } else errors.title = "";
        break;
      case "description":
        if (value.length == 0)
          errors.description = "this field can not be empty";
        else errors.description = "";
        break;
      case "file":
        if (!value) errors.file = "this field can not be empty";
        else errors.file = "";
        break;
      default:
        return this.state;
    }

    this.setState({ errors, [name]: value });
  };

  resetInputs = () => {
    this.setState({
      title: "",
      description: "",
      file: "",
      errors: {
        title: "",
        description: "",
        file: "",
      },
    });
  };

  render() {
    const { errors, loading } = this.state;
    console.log(this.state);
    return (
      <div style={{ display: "flex" }}>
        <div className="container-fluid page-body-wrapper">
          <AdminHeader />
          <div className="all-content">
            <div className="title-page">
              <h2 className="h1">Add News</h2>
            </div>
            <Form
              className="add-news-form"
              onSubmit={(e) => this.handleSubmit(e)}
            >
              <FormGroup>
                <Label className="form-label" for="title">
                  Title :
                </Label>
                <Input
                  autoFocus
                  className="form-input"
                  type="text"
                  name="title"
                  id="title"
                  value={this.state.title}
                  onChange={(e) => this.handleChangeAddNews(e)}
                  placeholder="Enter title of news"
                />
                {errors.title.length > 0 && (
                  <span className="form-validate">{errors.title}</span>
                )}
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
                  rows="10"
                  value={this.state.description}
                  onChange={(e) => this.handleChangeAddNews(e)}
                  placeholder="Enter description of news"
                />
                {errors.description.length > 0 && (
                  <span className="form-validate">{errors.description}</span>
                )}
              </FormGroup>
              {loading && <Loader />}
              <FormGroup>
                <Label className="form-label" for="file">
                  File :
                </Label>
                <Input
                  className="form-input"
                  type="file"
                  name="file"
                  id="file"
                  value={this.state.file}
                  onChange={(e) => this.handleChangeAddNews(e)}
                />
                {errors.file.length > 0 && (
                  <span className="form-validate">{errors.flie}</span>
                )}
                <FormText color="muted" className="description-file">
                  This is some placeholder block-level help text for the above
                  input. It's a bit lighter and easily wraps to a new line.
                </FormText>
              </FormGroup>
              <Button
                className="button-add-news"
                type="submit"
              >
                Add news
              </Button>
            </Form>
          </div>
        </div>
        <AdminSidebar />
      </div>
    );
  }
}

export default AddNews;
