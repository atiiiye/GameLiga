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
        ctx.moveTo(45, 40);
        ctx.lineTo(45, 20);
        ctx.lineTo(80, 20);
        ctx.strokeStyle = 'rgb(54,54,59)';
        ctx.lineWidth = "2";
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "rgb(255,147,0)";
        ctx.moveTo(120, 30);
        ctx.lineTo(170, 30);
        ctx.lineWidth = "2";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(45, 130);
        ctx.lineTo(45, 150);
        ctx.lineTo(80, 150);
        ctx.strokeStyle = "rgb(54,54,59)";
        ctx.lineWidth = "2";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, 140);
        ctx.lineTo(27, 140);
        ctx.lineWidth = "2";
        ctx.strokeStyle = "rgb(54,54,59)";
        
        ctx.stroke();
    }

    render() {
        return (
            <>
                <canvas className="" id="mycanvas" ref={this.canvas}></canvas>
            </>
        )
    }
}

export default Canvas;