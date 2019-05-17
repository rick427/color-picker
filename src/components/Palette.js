import React, { Component } from 'react'
import Colorbox from './Colorbox';
import './palette.css';

class Palette extends Component {
  render() {
    const colorboxes = this.props.colors.map(color => (
        <Colorbox background={color.color} name={color.name} />
    ))
    return (
      <div className="palette">
        {/*Navbar foes here*/}
        <div className="palette-colors">
          {colorboxes}
        </div>
        {/*footer*/}
      </div>
    )
  }
}
export default Palette;
