import cloudBig from "../assets/img/cloud-big.png"
import sun from "../assets/img/sun.png"

import "./style.css"

const Cloud =()=>{
    return(
        <div className="parent" style={{position: "relative"}}>
            <img className="sun" src = {sun}/>
            <img className="cloud" style={{position: "absolute"}} src ={cloudBig}/>
        </div>
    ) 
}

export default Cloud