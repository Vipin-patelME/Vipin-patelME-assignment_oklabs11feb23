//1. import area
//1.1 import {someNamedComponents} from some "Location/Library"
import React, { Component } from "react";
//1.2 import someDefaultComponents from some "Location/Library"


//2.class Component defination area (Logic area)
export class ComponentK extends Component{
    ytIcon = "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
    altvalue = "YT"
    render(){
        //every method/function should return something
        return(
            <button className="comp-j-subComp" type = "button">
                <img className = "comp-j-img" src = {this.ytIcon} alt = {this.altvalue} />
                <p>YouTube</p>
            </button>
        )
    }
}


//3.export area
//3.1 default export
//3.2 named export