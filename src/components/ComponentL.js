//1. import area
//1.1 import {someNamedComponents} from some "Location/Library"
//1.2 import someDefaultComponents from some "Location/Library"


//2.functional Component defination area (Logic area)
const ComponentL = props =>{
    const {logo, altgitvalue} = props
    //every function should return something
    return(
        <button className="comp-j-subComp" type = "button">
                <img className = "comp-j-img" src = {logo} alt = {altgitvalue} />
                <p>Github</p>
            </button>
    )
}


//3.export area
//3.1 default export
export default ComponentL;
//3.2 named export