import React, { Component } from "react";

//import css
import './../css/News.css'

//import components
import UserHeader from "./UserHeader";
import Sidebar from "./Sidebar";

//import bootstrap
import { Card } from "react-bootstrap";

//import services
import { news } from "./../Services/newsService"

//import utils
import { errorMessage , successMessage} from "../utils/messages";

class News extends Component {
  state={}

  serviceNews = async() => {
    try {
      const { data, status } = await news(this.state);
       if (status === 200) {

       }
    } catch (error) {
      if (err.response && err.response.status === 400) {
      }
    }
  }


  render() {
    return (
      <React.Fragment>
        <UserHeader />
        <div className="display" style={{ display: "flex" }}>
          <Sidebar />
          <div className="container-fluid News">
            <Card id="content"></Card>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default News;
