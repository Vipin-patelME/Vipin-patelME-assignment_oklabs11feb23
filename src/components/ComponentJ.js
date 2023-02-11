//1. import area
//1.1 import {someNamedComponents} from some "Location/Library"
import { ComponentK } from "./ComponentK"
import { ComponentM } from "./ComponentM"
//1.2 import someDefaultComponents from some "Location/Library"
import ComponentL from "./ComponentL"
import ComponentN from "./ComponentN"

//2.functional Component defination area (Logic area)
export const ComponentJ = ()=>{
    const reactIcon = "https://www.pngfind.com/pngs/m/685-6854994_react-logo-no-background-hd-png-download.png"
    const altvalue = "React"
    const gitIcon = "https://pngimg.com/uploads/github/github_PNG40.png"
    const altvaluegit = "git"
    const iconsObj = {
        gmail:"https://static.vecteezy.com/system/resources/previews/016/716/465/non_2x/gmail-icon-free-png.png",
        gmailAlt:"Gmail",
        LinkdIn:"https://www.freepnglogos.com/uploads/official-linkedin-logo----17.png",
        linkAlt:"linkdIn",
        omeggle:"https://static.wikia.nocookie.net/logopedia/images/2/25/Omegle_Icon.png/revision/latest?cb=20220326125144",
        omgAlt:"omgle",

    }
    //every function should return something
    return(
        <div className="comp-j">
            <button className="comp-j-subComp" type = "button">
                <img className = "comp-j-img" src = {reactIcon} alt = {altvalue} />
                <p>localhost</p>
            </button>
            <ComponentK  />
            <ComponentL logo = {gitIcon} altgitvalue = {altvaluegit}/>
            <ComponentM iconsObj = {iconsObj}/>
            <ComponentN iconsObj = {iconsObj}/>
        </div>
    )
}


//3.export area
//3.1 default export
//3.2 named export