//1. import area
//1.1 import {someNamedComponents} from some "Location/Library"
import { ComponentY } from "./ComponentY";
//1.2 import someDefaultComponents from some "Location/Library"


//2.functional Component defination area (Logic area)
const ComponentX = ()=>{
    //every function should return something
    return(
        <div className="comp-s">
                <h1 className="about-head">Please do not forget To give your feedback</h1>
                <form className="comp-s-form">
                    <h2 className="form-lable">Your Feedback</h2>
                    <ComponentY />
                </form>
            </div>
        
    )
}


//3.export area
//3.1 default export
export default ComponentX;
//3.2 named export