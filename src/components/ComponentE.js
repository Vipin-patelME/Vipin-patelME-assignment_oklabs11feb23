//1. import area
import React from "react";
//1.1 import {someNamedComponents} from some "Location/Library"
//1.2 import someDefaultComponents from some "Location/Library"


//2.functional Component defination area (Logic area)
const ComponentE = props=>{
    const {iconsLink} = props
    const {camera, threeDots, gmailImg } = iconsLink
    //every function should return something
    return(
        <React.Fragment>
            <button className="comp-e-btn" type= "button"><img className="com-e-img" src = {camera} alt = "camera" /></button>
            <button className="comp-e-btn" type= "button"><img className="com-e-img" src = {gmailImg} alt = "gmail" /></button>
            <button className="comp-e-btn" type= "button"><img className="com-e-img" src = {threeDots} alt = "three dots" /></button>
        </React.Fragment>
    )
}


//3.export area
//3.1 default export
export default ComponentE;
//3.2 named export