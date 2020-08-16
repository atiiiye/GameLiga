import React, { Component } from 'react';

//import css
import './../css/UserAccount.css';
import './../css/mediaUserAccount.css'

//import bootstrap
import { Card } from "react-bootstrap";


//import images
import Grid1 from './../images/Grid1.png';
import Grid2 from './../images/Grid2.png';
import Grid3 from './../images/Grid3.png';
import Grid4 from './../images/Grid4.png';
import Grid5 from './../images/Grid5.png';

// import packages
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

//import components
import UserHeader from './UserHeader'
import Sidebar from "./Sidebar";


class UserAccount extends Component {

    state = {
        posters: [
            {
                id: 1,
                name: Grid1,
                source: Grid1
            },
            {
                id: 2,
                name: Grid2,
                source: Grid2
            },
            {
                id: 3,
                name: Grid3,
                source: Grid3
            },
            {
                id: 4,
                name: Grid4,
                source: Grid4
            },
            {
                id: 5,
                name: Grid5,
                source: Grid5
            },
        ],
        stateDisplay: true,
    }
    displayHandler = () => {
        this.setState(stateDisplay);
    };

    render() {
        const params = {
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 20,
        }

        return (
            <React.Fragment>
                <div className="connect-components" style={{ display: 'flex' }}>
                    <Sidebar />
                    <div className="container-fluid userAccount">
                        <Card id="content">
                            <div className="row games">
                                {this.state.posters.map(item => (
                                    <div className="game d-none d-md-flex" key={item.id}>
                                        <img src={item.source} alt={item.name} className="game-image"></img>
                                        <div className="online">online</div>
                                        {/* <img src={item.source} alt={item.name} className="game-image-ref"></img> */}
                                    </div>
                                    // if(this.state.posters.lenght%4){}
                                ))}

                                <Swiper {...params} className="swiper-account">
                                    {this.state.posters.map(item => (
                                        <div className="game d-flex d-md-none" key={item.id}>
                                            <img src={item.source} alt={item.name} className="game-image"></img>
                                            <div className="online">online</div>
                                        </div>
                                    ))}
                                </Swiper>

                            </div>
                            <div className="empty-square"></div>
                        </Card>
                    </div>
                </div>

            </React.Fragment>


        )
    }
}

export default UserAccount;