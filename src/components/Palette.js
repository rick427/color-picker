import React, { Component } from 'react'
import Colorbox from './Colorbox';
import Navbar from './Navbar';
import './palette.css';

class Palette extends Component {
  constructor(props){
    super(props);
    this.state = {
      level: 500
    };
    this.changeLevel=this.changeLevel.bind(this);
  }

  changeLevel(level){
    this.setState({level});
  }

  render() {
    const {colors} = this.props.palette;
    const {level} = this.state;
    const colorboxes = colors[level].map(color => (
        <Colorbox background={color.hex} name={color.name} />
    ))
    return (
      <div className="palette">
        <Navbar level={level} changeLevel={this.changeLevel} />
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
