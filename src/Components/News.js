import React, { Component } from "react";

//import css
import "./../css/News.css";

//import components
import UserHeader from "./UserHeader";
import Sidebar from "./Sidebar";

//import bootstrap
import { Card, Form } from "react-bootstrap";

//import services
import { news } from "./../Services/newsService";

//import utils
import { errorMessage, successMessage } from "../utils/messages";

class News extends Component {
  state = {};

  handleSubmitNews = (event) => {
    event.preventDefault();
    if (this.validateForm(this.state.errors)) {
      console.info("Valid Form");
      this.serviceNews();
    } else {
      console.error("Invalid Form");
    }
  };

  uploadFile = (files) => {
  
    var formData = new FormData();
  
    files.map((file, index) => {
      formData.append(`file${index}`, file);
    })
  }

  serviceNews = async () => {
    try {
      const { data, status } = await news(this.state);
      if (status === 200) {
      }
    } catch (error) {
      if (err.response && err.response.status === 400) {
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <UserHeader />
        <div className="display" style={{ display: "flex" }}>
          <Sidebar />
          <div className="container-fluid News">
            <Card id="content">
              <div className="">
                <Form onSubmit={(e)=>this.handleSubmitNews(e)}>

                </Form>
              </div>
            </Card>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default News;
