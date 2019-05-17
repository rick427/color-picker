import React, { Component } from 'react'
import Colorbox from './Colorbox';
import 'rc-slider/assets/index.css';
import './palette.css';
import Slider from 'rc-slider';


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
        <div className="slider">
         <Slider 
            defaultValue={level} 
            min={100} 
            step={100} 
            max={900} 
            onAfterChange={this.changeLevel}
          />
        </div>
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
