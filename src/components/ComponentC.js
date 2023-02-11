//1. import area

//1.1 import {someNamedComponents} from some "Location/Library"
import { ComponentD } from "./ComponentD";
//1.2 import someDefaultComponents from some "Location/Library"
import ComponentE from "./ComponentE";


//2.Component defination area (Logic area)
const ComponentC = props=>{
    const {leftIcon, rightIcon, reloadIcon} = props
    const iconsObj = {
        camera: "https://spng.pngfind.com/pngs/s/56-560122_file-antu-folder-camera-svg-instagram-camera-icon.png",
        threeDots:"https://cdn.iconscout.com/icon/premium/png-256-thumb/dots-vertical-2872172-2388327.png",
        gmailImg:"https://lh3.googleusercontent.com/ogw/AAEL6sjcJQa83j91S7WfCR3Ey2RVqUBW-tU20K7bsbx5=s32-c-mo"
    }
    //every function should return something
    return(
        <div className="comp-c">
            <div className="comp-c-icon-cont">
                <button className="icon-btn" type="button"><img className="icon-image" src = {leftIcon} alt = "icon" /></button>
                <button className="icon-btn" type="button"><img className="icon-image" src = {rightIcon} alt = "icon"/></button>
                <button className="icon-btn" type="button"><img className="icon-image" src = {reloadIcon} alt = "icon"/></button>
            </div>
            <ComponentD />
            <div className="comp-e-cont">
                <ComponentE iconsLink = {iconsObj} />
            </div>
        </div>
    )
}


//3.export area
//3.1 default export
export default ComponentC;
//3.2 named export