//1. import area
import { Component } from "react";
//1.1 import {someNamedComponents} from some "Location/Library"
//1.2 import someDefaultComponents from some "Location/Library"


//2.class Component defination area (Logic area)
class ComponentV extends Component{
    render(){
        //every method/ function should return something
        return(
            <div className="comp-t">
            <label htmlFor="ename" className="form-lable">Contact No</label>
            <input id = "ename" type ="number" />
        </div>
        )
        }
}



//3.export area
//3.1 default export
export default ComponentV;
//3.2 named export