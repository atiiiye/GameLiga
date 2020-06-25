import React, { Component } from 'react';
import './../css/canvas.css';
import Sidebar from './Sidebar';

class Canvas extends Component {

    constructor(props) {
        super(props);
        this.canvas = React.createRef();

        this.canvas2 = React.createRef();

    }

    componentDidMount(props, state) {
        let ctx = this.canvas.current.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(40, 40);
        ctx.lineTo(40, 20);
        ctx.lineTo(130, 20);
        ctx.strokeStyle = 'rgb(54,54,59)';
        ctx.lineWidth = "1";
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "rgb(255,147,0)";
        ctx.moveTo(160, 30);
        ctx.lineTo(220, 30);
        ctx.lineWidth = "2";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(40, 130);
        ctx.lineTo(40, 150);
        ctx.lineTo(130, 150);
        ctx.strokeStyle = "rgb(54,54,59)";
        ctx.lineWidth = "1";
        ctx.stroke();

        // let ctx2 = this.canvas2.current.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(10, 150);
        ctx.lineTo(35, 150);
        ctx.lineWidth = "1";
        ctx.strokeStyle = "rgb(54,54,59)";
        ctx.stroke();
    }

    render() {
        return (
            <>
                <canvas className="col-lg-3" id="mycanvas" ref={this.canvas}></canvas>
               
            </>
        )
    }
}

export default Canvas;