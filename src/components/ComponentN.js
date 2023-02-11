//1. import area
import React from "react";
//1.1 import {someNamedComponents} from some "Location/Library"
//1.2 import someDefaultComponents from some "Location/Library"


//2.functional Component defination area (Logic area)
const ComponentN = props =>{
    const {iconsObj} = props
    const {LinkdIn, linkAlt, omeggle, omgAlt} = iconsObj
    //every function should return something
    return(
        <React.Fragment>
            <button className="comp-j-subComp" type = "button">
                    <img className = "comp-j-img" src = {LinkdIn} alt = {linkAlt} />
                    <p>LinkdIn</p>
            </button>
            <button className="comp-j-subComp" type = "button">
                    <img className = "comp-j-img" src = {omeggle} alt = {omgAlt} />
                    <p>Omeggle</p>
            </button>
            <button className="comp-j-subComp" type = "button">
                    <h2>+</h2>
                    <p>Add Shortcuts</p>
            </button>
        </React.Fragment>
    )
}


//3.export area
//3.1 default export
export default ComponentN;
//3.2 named export