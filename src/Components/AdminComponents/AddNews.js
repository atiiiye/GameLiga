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
import { errorMessage, successMessage } from "./../../utils/messages";

//import services
import { addNews } from "../../Services/newsService";

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
      this.newsAdd();
      successMessage("One news added");
    } else {
      console.error("Invalid Form");
      errorMessage("unexpected error , try again");
    }
  };

  handleChangeAddNews = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    // this.state.file = event.target.files[0];

    let errors = this.state.errors;

    switch (name) {
      case "title":
        errors.title =
          value.length == 0
            ? "this field can not be empty"
            : value.length < 10
            ? "title must be 10 character at least"
            : "";
        break;
      case "description":
        errors.description =
          value.length == 0
            ? "this field can not be empty"
            : value.length < 20
            ? "title must be 20 character at least"
            : "";
        break;
      case "file":
        errors.file = !value ? "this field can not be empty" : "";
        break;
      default:
        return this.state;
    }

    this.setState({
      errors,
      [name]: value,
      // file: event.target.files[0],
    });
  };

  newsAdd = async () => {
    this.setState({ loading: true });
    try {
      const { data, status } = await addNews(this.state);
      console.log(status)
      // if (status === 200) {
      //   console.log("Succesfully :)");
      // }
      // this.setState({ loading: false });
      // this.resetInputs();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        this.setState({ loading: false });
      } else if (error.response && error.response.status === 404) {
        this.setState({ loading: false });
        errorMessage("not found error , try again");
      }
      // this.resetInputs();
    }
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
              noValidate
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
                  noValidate
                />
                {errors.title.length > 0 && (
                  <span className="form-validate">{errors.title}</span>
                )}
              </FormGroup>

              <FormGroup>
                <Label className="form-label" for="description">
                  Description :
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
                  noValidate
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
                  noValidate
                />
                {errors.file.length > 0 && (
                  <span className="form-validate">{errors.file}</span>
                )}
                <FormText color="muted" className="description-file">
                  This is some placeholder block-level help text for the above
                  input. It's a bit lighter and easily wraps to a new line.
                </FormText>
              </FormGroup>
              <Button className="button-add-news" type="submit">
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
