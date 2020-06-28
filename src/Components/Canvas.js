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
        ctx.moveTo(55, 40);
        ctx.lineTo(55, 20);
        ctx.lineTo(80, 20);
        ctx.strokeStyle = 'rgb(54,54,59)';
        ctx.lineWidth = "2";
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "rgb(255,147,0)";
        ctx.moveTo(115, 30);
        ctx.lineTo(150, 30);
        ctx.lineWidth = "2";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(55, 110);
        ctx.lineTo(55, 130);
        ctx.lineTo(80, 130);
        ctx.strokeStyle = "rgb(54,54,59)";
        ctx.lineWidth = "2";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(5, 120);
        ctx.lineTo(35, 120);
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