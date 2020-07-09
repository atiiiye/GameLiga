import React, { Component } from 'react';


//import css
import './../css/CanvasSidebar.css';

class CanvasSidebar extends Component {


    constructor(props) {
        super(props);
        this.canvas = React.createRef();
    }

    componentDidMount(props, state) {

        let windowWidth = window.innerWidth;
        let windowHeigh = window.innerHeight;
        // this.handleResize();

        let ctx = this.canvas.current.getContext("2d");


        ctx.beginPath();
        ctx.moveTo(((windowWidth)/50)+70, (windowHeigh/550)+120);
        ctx.lineTo(((windowWidth)/50)+170, (windowHeigh/550)+120);
        ctx.lineWidth = "2";
        ctx.strokeStyle = "rgb(54,54,59)";
        ctx.stroke();

        console.log(windowWidth/2,(windowWidth/2)+115);
        console.log(windowHeigh/2,(windowHeigh/2)+10);
        
    }
    render() {
        return (
                <canvas
                 className="" id="mycanvasSidebar" 
                ref={this.canvas}
                // onResize={this.handleResize} 
                >
                </canvas>
                
        )
    }
}

export default CanvasSidebar;