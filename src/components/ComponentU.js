//1. import area
//1.1 import {someNamedComponents} from some "Location/Library"
//1.2 import someDefaultComponents from some "Location/Library"


//2.functional Component defination area (Logic area)
export const ComponentU = ()=>{
    
    //every function should return something
    return(
        <div className="comp-t">
            <label htmlFor="ename" className="form-lable">Email Id</label>
            <input id = "ename" type ="text" />
        </div>
    )
}


//3.export area
//3.1 default export
//3.2 named export