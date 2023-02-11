//1. import area
import React from "react"
//1.1 import {someNamedComponents} from some "Location/Library"
import { ComponentQ } from "./ComponentQ";
//1.2 import someDefaultComponents from some "Location/Library"


//2.functional Component defination area (Logic area)
const ComponentP = () =>{
    const history = "Google CEO Eric Schmidt opposed the development of an independent web browser for six years. He stated that at the time, Google was a small company, and he did not want to go through bruising browser wars. After co-founders Sergey Brin and Larry Page hired several Mozilla Firefox developers and built a demonstration of Chrome, Schmidt said that It was so good that it essentially forced me to change my mind."
    //every function should return something
    return(
        <React.Fragment>
            <h1 className="about-head">History</h1>
            <ComponentQ history = {history} />
        </React.Fragment>
    )
}


//3.export area
//3.1 default export
export default ComponentP;
//3.2 named export