//1. import area
//1.1 import {someNamedComponents} from some "Location/Library"
//1.2 import someDefaultComponents from some "Location/Library"


//2.functional Component defination area (Logic area)
export const ComponentM = props=>{
    const {iconsObj} = props
    const {gmail, gmailAlt} = iconsObj
    //every functiom should return something
    return(
            <button className="comp-j-subComp" type = "button">
                    <img className = "comp-j-img" src = {gmail} alt = {gmailAlt} />
                    <p>Gmail</p>
            </button>
    )
}



//3.export area
//3.1 default export
//3.2 named export