import React, { Component } from 'react';

//import css
import './../css/canvas.css';

class Canvas extends Component {

    constructor(props) {
        super(props);
        this.canvas = React.createRef();

        this.canvas2 = React.createRef();

    }

    componentDidMount(props, state) {
        let ctx = this.canvas.current.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(55, 20);
        ctx.lineTo(55, 0);
        ctx.lineTo(80, 0);
        ctx.strokeStyle = 'rgb(54,54,59)';
        ctx.lineWidth = "2";
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "rgb(255,147,0)";
        ctx.moveTo(115, 10);
        ctx.lineTo(150, 10);
        ctx.lineWidth = "2";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(55, 90);
        ctx.lineTo(55, 110);
        ctx.lineTo(80, 110);
        ctx.strokeStyle = "rgb(54,54,59)";
        ctx.lineWidth = "2";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(12, 120);
        ctx.lineTo(29, 120);
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