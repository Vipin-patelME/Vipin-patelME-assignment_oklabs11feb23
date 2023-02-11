//1. import area
//1.1 import {someNamedComponents} from some "Location/Library"
import { Component } from "react";
//1.2 import someDefaultComponents from some "Location/Library"


//2.class Component defination area (Logic area)
class ComponentI extends Component{
    searchIcon = "https://www.nicepng.com/png/detail/19-198210_small-search-icon-png.png"
    altValue = "SearchIcon"
    render(){
        //every method/function should return something
        return(
            <div className="comp-i">
                <img className="comp-i-image" src = {this.searchIcon} alt = {this.altValue} />
                <input className="search-input-ele" type = "search" />
            </div>
        )
    }
}


//3.export area
//3.1 default export
export default ComponentI;
//3.2 named export