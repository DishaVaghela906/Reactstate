import React, { Component } from 'react'
import download from "./download.png"
import Bellb from "./Bellb.png"

export class NewComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Welcome to React",
         sub: "Subscribe",
         imageURL: download
      };
    }

    styles={
    fontstyle: "italic",
    color: "purple"
  }

   Buttonchange = () => {
    this.setState({
        message: "hit the Bell Icon",
        sub: "Subscribed"
    });
   }

   ImageChange = () =>{
    this.setState({
        imageURL: Bellb,
        message: "Thank you for Subscribing"
    });
   }
  render() {
    return (
      <div>
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.Buttonchange}>{this.state.sub}</button> 
        <br/>
        <img style = {{width: "50px" , height: "50px"}} 
        src = {this.state.imageURL} 
        onClick = {this.ImageChange} alt=""/>
      </div>
    )
  }
}

export default NewComp