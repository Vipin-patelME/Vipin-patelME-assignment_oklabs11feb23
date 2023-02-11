//1. import area
import './index.css'
//1.1 import {someNamedComponents} from some "Location/Library"
//1.2 import someDefaultComponents from some "Location/Library"


//2.functional Component defination area (Logic area)
const ComponentA = (props)=> {
                        const {page} = props
                        return(<button 
                            className = "header-btn" 
                            type = "button">
                                {page} 
                            <span className = "bt-span">x</span> 
                        </button>)
}
    //every function should return something
    
        




//3.export area
//3.1 default export
export default ComponentA;
//3.2 named export