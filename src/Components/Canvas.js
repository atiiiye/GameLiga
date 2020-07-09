import React, { Component } from 'react';

//import css
import './../css/canvas.css';

class Canvas extends Component {

    // state = {
    //     windowHeight: undefined,
    //     windowWidth: undefined
    //   }
    
    //   handleResize = () => this.setState({
    //     windowWidth: window.innerWidth,
    //     windowHeight: window.innerHeight
    //   });

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
        ctx.moveTo(((windowWidth)/55)+55, (windowHeigh/550)+20);
        ctx.lineTo(((windowWidth)/55)+55,(windowHeigh/550)+0);
        ctx.lineTo(((windowWidth)/55)+80, (windowHeigh/550)+0);
        ctx.lineWidth = "2";
        ctx.strokeStyle = 'rgb(54,54,59)';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(((windowWidth)/55)+115, (windowHeigh/550)+5);
        ctx.lineTo(((windowWidth)/55)+150, (windowHeigh/550)+5);
        ctx.lineWidth = "2";
        ctx.strokeStyle = "rgb(255,147,0)";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(((windowWidth)/55)+55, (windowHeigh/550)+90);
        ctx.lineTo(((windowWidth)/55)+55, (windowHeigh/550)+110);
        ctx.lineTo(((windowWidth)/55)+80, (windowHeigh/550)+110);
        ctx.lineWidth = "2";
        ctx.strokeStyle = "rgb(54,54,59)";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(((windowWidth)/65)+10, (windowHeigh/550)+120);
        ctx.lineTo(((windowWidth)/65)+30, (windowHeigh/550)+120);
        ctx.lineWidth = "2";
        ctx.strokeStyle = "rgb(54,54,59)";
        ctx.stroke();

        console.log(windowWidth/2,(windowWidth/2)+115);
        console.log(windowHeigh/2,(windowHeigh/2)+10);
        
    }
    render() {
        return (
            <div>
                <canvas className="" id="mycanvas" ref={this.canvas}
                // onResize={this.handleResize} 
                >
                </canvas>
                
            </div>
        )
    }
}

export default Canvas;