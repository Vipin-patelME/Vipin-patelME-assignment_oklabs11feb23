//1. import area
import React, {Component} from 'react'
//1.1 import {someNamedComponents} from some "Location/Library"
//1.2 import someDefaultComponents from some "Location/Library"


//2.Class Component defination area (Logic area)
export class ComponentB extends Component{
     minimise = "-"
     maximise = "+"
     close = "x"
    render(){
        //every function/method should return something
    return(
        <React.Fragment>
            <div className='comp-b-btn-cont'>
                <button className='comp-b-btn' type = "buttton">{this.minimise}</button>
                <button className='comp-b-btn' type = "buttton">{this.maximise}</button>
                <button className='comp-b-btn' type = "buttton">{this.close}</button>
            </div>
        </React.Fragment>
    )
    }
    
    
}


//3.export area
//3.1 default export
//3.2 named export