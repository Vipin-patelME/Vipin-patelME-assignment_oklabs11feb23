//1. import area
import { Component } from "react";
//1.1 import {someNamedComponents} from some "Location/Library"
//1.2 import someDefaultComponents from some "Location/Library"
import ComponentP from "./ComponentP";

//2.class Component defination area (Logic area)
export class ComponentO extends Component{
    detail = "Google Chrome simply known as Chrome is a cross-platform web browser developed and created by Google. It was first released in 2008 for the Microsoft Windows operating system built with free software components from Apple's WebKit and Mozilla's Firefox.[14] Versions were later released for Linux, macOS, iOS (formerly IphoneOS), and Android, where it is the default web browser.[15] The browser is also the main component of ChromeOS (stylized as chromeOS), where it serves as the platform for web applications."
    render(){
        //every method/function should return something
        return(
            <div className="comp-o">
                <h1 className="about-head">About Google Chrome</h1>
                <p className="comp-o-para">{this.detail}</p>
                <ComponentP />
            </div>
        )
    }
}


//3.export area
//3.1 default export
//3.2 named export