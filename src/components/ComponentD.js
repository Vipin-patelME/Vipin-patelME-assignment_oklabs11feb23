//1. import area
import { Component } from "react";
//1.1 import {someNamedComponents} from some "Location/Library"
//1.2 import someDefaultComponents from some "Location/Library"


//2.class Component defination area (Logic area)
export class ComponentD extends Component{
    render(){
        return(
            <div className="comp-d">
                <input className="search-input" type="search" />
            </div>
        )
    }
}



//3.export area
//3.1 default export
//3.2 named export