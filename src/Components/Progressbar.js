import React, { Component } from "react";

class Progressbar extends Component {
  state = {
      percent: 0,
      style:''
    };
    
    handleStyle = () => {
        // this.setState(
        //     {
        //         style :{
        //             opacity: 1,
        //             width: `${completed}`,
        //             background: `${bgColor}`,
        //         }
        //     }
        // );
    }

    render() {
      const { completed , bgColor}= this.props
    return (
      <React.Fragment>
        <div className="progress">
          <div
            className="progress-done"
            style={this.handleStyle}
          >
            {completed}%
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Progressbar;
