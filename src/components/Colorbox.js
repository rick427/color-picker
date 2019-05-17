import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './colorbox.css';

class Colorbox extends Component {
  constructor(props){
      super(props);
      this.state = {
          copied: false
      }
      this.CopyState = this.CopyState.bind(this);
  }

  CopyState(){
      this.setState({copied: true}, () => {
          setTimeout(() => {
              this.setState({copied: false})
          }, 1500);
      })
  }

  render() {
    const {background, name} = this.props;
    const {copied} = this.state;
    return (
     <CopyToClipboard text={this.props.background} onCopy={this.CopyState}>
      <div style={{background}} className="colorbox">
       <div style={{background}} className={`copy-overlay ${copied ? "show" : ''}`}/>

       <div className={`copy-message ${copied ? "show" : ''} `}>
         <h1>copied!!</h1>
         <p>{this.props.background}</p>
       </div>

        <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
            <span className="see-more">More</span>
        </div>
      </div>
      </CopyToClipboard>
    )
  }
}
export default Colorbox;