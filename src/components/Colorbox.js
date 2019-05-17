import React, { Component } from 'react';
import './colorbox.css';

class Colorbox extends Component {
  render() {
    const {background, name} = this.props;
    return (
      <div style={{background}} className="colorbox">
       <div className="copy-container">
         <div className="box-content">
           <span>{name}</span>
         </div>
         <button className="copy-button">Copy</button>
         <span className="see-more">More</span>
       </div>
      </div>
    )
  }
}
export default Colorbox;
