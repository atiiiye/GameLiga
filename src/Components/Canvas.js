import React, { Component } from 'react';

//import css
import './../css/canvas.css';

class Canvas extends Component {

    state = {
        windowHeight: undefined,
        windowWidth: undefined
      }
    
      handleResize = () => this.setState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight

      });

    constructor(props) {
        super(props);
        this.canvas = React.createRef();
    }

    componentDidMount(props, state) {

        this.handleResize();
        window.addEventListener('resize', this.handleResize);

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
        ctx.moveTo(this.state.windowWidth+115, this.state.windowHeight+10);
        ctx.lineTo(this.state.windowWidth+150, this.state.windowHeight+10);
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
            <div>
                <canvas className="" id="mycanvas" ref={this.canvas}
                // onResize={} 
                >
                {this.state.windowWidth} x {this.state.windowHeight}
                </canvas>
            </div>
        )
    }
}

export default Canvas;