//1. import area
//1.1 import {someNamedComponents} from some "Location/Library"
//1.2 import someDefaultComponents from some "Location/Library"


//2.functional Component defination area (Logic area)
export const ComponentH = props =>{
    const {logoData} = props
    const {imageUrl, altValue} = logoData
    //every function should return something
    return(
        <img className="comp-h-image" src = {imageUrl} alt = {altValue} />
    )
}


//3.export area
//3.1 default export
//3.2 named export