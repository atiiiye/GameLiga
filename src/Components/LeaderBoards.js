import React, { Component } from "react";

//import css
import "./../css/reset.css";
import "./../css/LeaderBoards.css";

//import bootstrap
import { Card } from "react-bootstrap";

class LeaderBoards extends Component {
    render() {
        return (
            <div className="container-fluid LeaderBoards">
                <Card id="content">
                    <div className="elements">
                        <div className="tabs">
                            <div className="One-av-One tab">One av One</div>
                            <div className="Tourny tab">Tourny</div>
                            <div className="Liga tab">Liga</div>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default LeaderBoards;