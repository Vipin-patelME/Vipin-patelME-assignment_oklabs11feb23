//1. import area
//1.1 import {someNamedComponents} from some "Location/Library"
import { Component } from "react";
//1.2 import someDefaultComponents from some "Location/Library"
import ComponentT from "./ComponentT";


//2.class Component defination area (Logic area)
class ComponentS extends Component{
    heading = "Registration Form"
    render(){
        //every method/function should return something

        return(
            <div className="comp-s">
                <h1 className="about-head">{this.heading}</h1>
                <form className="comp-s-form">
                    <h4 className="form-heading">Please Register For more information</h4>
                    <ComponentT />
                </form>
            </div>
        )
    }
}


//3.export area
//3.1 default export
export default ComponentS;
//3.2 named export