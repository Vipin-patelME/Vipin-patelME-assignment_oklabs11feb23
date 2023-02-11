//1. import area
//1.1 import {someNamedComponents} from some "Location/Library"
import React, { Component } from "react";
//1.2 import someDefaultComponents from some "Location/Library"

//2.class Component defination area (Logic area)
class ComponentG extends Component{
    appsIcon = "https://static.thenounproject.com/png/1714217-200.png"
    gmailImage = "https://lh3.googleusercontent.com/ogw/AAEL6sjcJQa83j91S7WfCR3Ey2RVqUBW-tU20K7bsbx5=s32-c-mo"
    render(){
        //every method/function should return something
        return(
            <div className="comp-g">
                <p className="comp-g-para">Gmail</p>
                <p className="comp-g-para">Images</p>
                <img className="comp-g-app-icon-img" src = {this.appsIcon} alt = "app" />
                <img className="comp-g-gmail-icon-img" src = {this.gmailImage} alt = "gmail" />
            </div>
        )
    }
}


//3.export area
//3.1 default export
export default ComponentG;
//3.2 named export