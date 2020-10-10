import React, { Component } from "react";

//import css
import "./../css/News.css";
import "./../css/mediaNews.css";

//import image
import logo5 from "./../images/logo5.png";
import mainPoster from "./../images/main-poster.png";
import Poster1 from "./../images/news-1.png";

//import components
import UserHeader from "./UserHeader";
import Sidebar from "./Sidebar";

//import bootstrap
import { Card, Form , Image} from "react-bootstrap";

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
    const formData = new FormData();

    files.map((file, index) => {
      formData.append(`file${index}`, file);
    });
  };

  serviceNews = async () => {
    try {
      const { data, status } = await news(this.state);
      if (status === 200) {
      }
    } catch (err) {
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
              <div className="elements">
                <div className="title">
                  <h2 className="h1">News</h2>
                </div>
                <div className="main-content-news">
                  <div className="parent-news">
                    <div className="main-card-news">
                      <img
                        className="main-poster-news"
                        src={mainPoster}
                        alt=""
                      />
                      <svg
                        className="main-news"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.0"
                        viewBox="0 0 160.000000 385.000000"
                        preserveAspectRatio="xMidYMid meet"
                        stroke="#959aa2"
                        stroke-width="2"
                      >
                        <g
                          transform="translate(0.000000,385.000000) scale(0.100000,-0.100000)"
                          fill="#F03C8D"
                          stroke="none"
                        >
                          <path d="M1313 3722 c-199 -235 -1313 -1620 -1313 -1633 0 -3 298 -38 663 -78 364 -40 663 -74 665 -75 2 -2 -1029 -1820 -1080 -1903 l-20 -33 99 0 99 0 66 118 c36 64 242 434 458 822 216 388 449 805 517 928 69 123 122 226 119 229 -3 3 -298 32 -656 63 -358 32 -654 60 -657 63 -2 3 125 180 284 394 568 762 882 1197 883 1221 0 28 -25 5 -127 -116z" />
                        </g>
                      </svg>
                    </div>
                    <div className="all-cards">
                      <div className="card-news">
                        <img className="news" src={Poster1} alt="" />

                        <svg
                          className="single-news"
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.0"
                          viewBox="0 0 160 190"
                          preserveAspectRatio="xMidYMid meet"
                          stroke="#959aa2"
                          stroke-width="2"
                        >
                          <g
                            transform="translate(0.000000,385.000000) scale(0.100000,-0.100000)"
                            fill="#FC8928"
                            stroke="none"
                          >
                            <path d="M1313 3722 c-199 -235 -1313 -1620 -1313 -1633 0 -3 298 -38 663 -78 364 -40 663 -74 665 -75 2 -2 -1029 -1820 -1080 -1903 l-20 -33 99 0 99 0 66 118 c36 64 242 434 458 822 216 388 449 805 517 928 69 123 122 226 119 229 -3 3 -298 32 -656 63 -358 32 -654 60 -657 63 -2 3 125 180 284 394 568 762 882 1197 883 1221 0 28 -25 5 -127 -116z" />
                          </g>
                        </svg>
                      </div>
                      <div className="card-news">
                        <img className="news" src={Poster1} alt="" />
                        <svg
                          className="single-news"
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.0"
                          viewBox="0 0 160 190"
                          preserveAspectRatio="xMidYMid meet"
                          stroke="#959aa2"
                          stroke-width="2"
                        >
                          <g
                            transform="translate(0.000000,385.000000) scale(0.100000,-0.100000)"
                            fill="#FC8928"
                            stroke="none"
                          >
                            <path d="M1313 3722 c-199 -235 -1313 -1620 -1313 -1633 0 -3 298 -38 663 -78 364 -40 663 -74 665 -75 2 -2 -1029 -1820 -1080 -1903 l-20 -33 99 0 99 0 66 118 c36 64 242 434 458 822 216 388 449 805 517 928 69 123 122 226 119 229 -3 3 -298 32 -656 63 -358 32 -654 60 -657 63 -2 3 125 180 284 394 568 762 882 1197 883 1221 0 28 -25 5 -127 -116z" />
                          </g>
                        </svg>
                      </div>
                      <div className="card-news">
                        <svg
                          className="single-news"
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.0"
                          viewBox="0 0 160 190"
                          preserveAspectRatio="xMidYMid meet"
                          stroke="#959aa2"
                          stroke-width="2"
                        >
                          <g
                            transform="translate(0.000000,385.000000) scale(0.100000,-0.100000)"
                            fill="#FC8928"
                            stroke="none"
                          >
                            <path d="M1313 3722 c-199 -235 -1313 -1620 -1313 -1633 0 -3 298 -38 663 -78 364 -40 663 -74 665 -75 2 -2 -1029 -1820 -1080 -1903 l-20 -33 99 0 99 0 66 118 c36 64 242 434 458 822 216 388 449 805 517 928 69 123 122 226 119 229 -3 3 -298 32 -656 63 -358 32 -654 60 -657 63 -2 3 125 180 284 394 568 762 882 1197 883 1221 0 28 -25 5 -127 -116z" />
                          </g>
                        </svg>
                      </div>
                      <div className="card-news">
                        <svg
                          className="single-news"
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.0"
                          viewBox="0 0 160 190"
                          preserveAspectRatio="xMidYMid meet"
                          stroke="#959aa2"
                          stroke-width="2"
                        >
                          <g
                            transform="translate(0.000000,385.000000) scale(0.100000,-0.100000)"
                            fill="#FC8928"
                            stroke="none"
                          >
                            <path d="M1313 3722 c-199 -235 -1313 -1620 -1313 -1633 0 -3 298 -38 663 -78 364 -40 663 -74 665 -75 2 -2 -1029 -1820 -1080 -1903 l-20 -33 99 0 99 0 66 118 c36 64 242 434 458 822 216 388 449 805 517 928 69 123 122 226 119 229 -3 3 -298 32 -656 63 -358 32 -654 60 -657 63 -2 3 125 180 284 394 568 762 882 1197 883 1221 0 28 -25 5 -127 -116z" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-title">
                    <img className="logo" src={logo5} alt="" />
                    <h1 className="h1 title-angel">
                      UFO<span className="game">Game</span>
                    </h1>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default News;
