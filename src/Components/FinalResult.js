import React, { Component } from "react";

//import css
import "./../css/reset.css";
import "./../css/FinalResult.css";

//import bootstrap
import { Card } from "react-bootstrap";

class FinalResult extends Component {
    render() {
        return (
            <div className="container-fluid FinalResult">
                <Card id="content">
                    <div className="parent-content">
                        <h2 className="h2 result section-1">1 : 2</h2>
                        <div className="section-2">
                            <div className="own-logo"></div>
                            <div className="football"></div>
                            <div className="other-logo"></div>
                        </div>
                        <div className="section-3"></div>
                        <div className="live-content section-4">
                            <p className="text-live">Live :</p>
                            <div className="live"></div>
                        </div>
                    </div>

                    <div className="empty-square"></div>
                </Card>
            </div>
        )
    }
}

export default FinalResult;