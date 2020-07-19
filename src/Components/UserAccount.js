import React, { Component } from 'react';

//import css
import './../css/UserAccount.css';
import './../css/mediaUserAccount.css'

//import bootstrap
import { Card } from "react-bootstrap";

// import MainCard from "./MainCard";


//import images
import Grid1 from './../images/Grid1.png';
import Grid2 from './../images/Grid2.png';
import Grid3 from './../images/Grid3.png';
import Grid4 from './../images/Grid4.png';
import Grid5 from './../images/Grid5.png';


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
        ]
    }

    render() {
        return (
            <div className="container-fluid userAccount">
                <Card id="content">
                    {

                        // console.log(this.state.posters.length)
                    }
                    <div className="row games">
                        {this.state.posters.map(item => (
                            <div className="game" key={item.id}>
                                <img src={item.source} alt={item.name} className="game-image"></img>
                                <div className="online">online</div>
                                {/* <img src={item.source} alt={item.name} className="game-image-ref"></img> */}
                            </div>
                            // if(this.state.posters.lenght%4){

                            // }
                        ))}
                    </div>
                    <div className="empty-square"></div>
                </Card>
            </div>

        )
    }
}

export default UserAccount;