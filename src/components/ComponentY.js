//1. import area

//1.1 import {someNamedComponents} from some "Location/Library"
import React from "react"
//1.2 import someDefaultComponents from some "Location/Library"
import ComponentZ from "./componentZ"

//2.functional Component defination area (Logic area)
export const ComponentY = ()=>{
    //every function should return something
    return(
        <React.Fragment>
            <textarea className="text-area" rows="15" cols="40">Write your feedback here:</textarea>
            <br />
            <ComponentZ />
    </React.Fragment>
    )
}


//3.export area
//3.1 default export
//3.2 named export