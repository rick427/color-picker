import React, { Component } from 'react'
import Colorbox from './Colorbox';
import Navbar from './Navbar';
import './palette.css';

class Palette extends Component {
  constructor(props){
    super(props);
    this.state = {
      level: 500,
      format: "hex"
    };
    this.changeLevel=this.changeLevel.bind(this);
    this.changeFormat=this.changeFormat.bind(this);
  }

  changeLevel(level){
    this.setState({level});
  }

  changeFormat(val){
    this.setState({format: val})
  }

  render() {
    const {colors} = this.props.palette;
    const {level, format} = this.state;
    const colorboxes = colors[level].map(color => (
        <Colorbox background={color[format]} name={color.name} />
    ))
    return (
      <div className="palette">
        <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} />
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
