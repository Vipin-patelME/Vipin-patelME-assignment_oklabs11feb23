//1. import area

//1.1 import {someNamedComponents} from some "Location/Library"
//1.2 import someDefaultComponents from some "Location/Library"


//2.class Component defination area (Logic area)
export const  ComponentF  = props =>{
            const{pinTab} = props
            const {gmail,uTube, map, linkdIn } = pinTab

        //every method should return something
        return(
            <div className="comp-f">
                <button className="comp-f-btn" type="button">
                    <img className="comp-f-img" src = {gmail} alt ="gmail" />
                    <span className="comp-f-span">Gmail</span>
                </button>
                <button className="comp-f-btn" type="button">
                    <img className="comp-f-img" src = {uTube} alt ="gmail" />
                    <span className="comp-f-span">YTube</span>
                </button>
                <button className="comp-f-btn" type="button">
                    <img className="comp-f-img" src = {map} alt ="gmail" />
                    <span className="comp-f-span">Maps</span>
                </button>
                <button className="comp-f-btn" type="button">
                    <img className="comp-f-img" src = {linkdIn} alt ="gmail" />
                    <span className="comp-f-span">Linkdin</span>
                </button>
            </div>
        )
    }



//3.export area
//3.1 default export
//3.2 named export