import "./page.css"
import CCLogo from "/cci.png"
export default function Header(){
    return(
        <div id="mainbox">
            <img src={CCLogo} alt="ChefClaude Image"></img>
            <span>Chef Claude</span>
        </div>
    )
}