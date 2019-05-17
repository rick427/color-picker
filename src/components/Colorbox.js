import React, { Component } from 'react';
import './colorbox.css';

class Colorbox extends Component {
  render() {
    return (
      <div style={{background: this.props.background}} className="colorbox">
        <span>{this.props.name}</span>
      </div>
    )
  }
}
export default Colorbox;
