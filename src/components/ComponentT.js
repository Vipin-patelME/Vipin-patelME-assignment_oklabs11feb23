//1. import area
import React from "react";
//1.1 import {someNamedComponents} from some "Location/Library"
import { ComponentU } from "./ComponentU";
import { ComponentW } from "./ComponentW";
//1.2 import someDefaultComponents from some "Location/Library"
import ComponentV from "./ComponentV";

//2.functional Component defination area (Logic area)
const ComponentT = ()=>{
    //every function should return something
    return(
        <React.Fragment>
            <div className="comp-t">
                <label htmlFor="name" className="form-lable">Name</label>
                <input id = "name" type ="text" />
            </div>
            <ComponentU />
            <ComponentV />
            <ComponentW />
        </React.Fragment>
    )
}


//3.export area
//3.1 default export
export default ComponentT;
//3.2 named export