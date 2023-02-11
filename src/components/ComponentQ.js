//1. import area
//1.1 import {someNamedComponents} from some "Location/Library"
//1.2 import someDefaultComponents from some "Location/Library"


//2.functional Component defination area (Logic area)
export const ComponentQ  = props =>{
    const {history} = props
    //every function should return something
    return(
        <p className="comp-o-para">{history}</p>
    )
}



//3.export area
//3.1 default export
//3.2 named export