import { Component } from 'react';
import './Navbar.css'
import logoUser from "../../../Assets/logoUser.png"
import ChallengeLogo2 from "../../../Assets/LogoChallengeAppBLANCO.png"
import House from "../../../Assets/House.png"

class Navbar extends Component {
    render() {
        return (
            <div className="NavContainer">
                {/* <img className='logoUser' src={logoUser}></img> */}
                <img className='ChallengeLogoNav' src={ChallengeLogo2}></img>
                {/* <img className='house' src={House}></img> */}
                
            </div>
        )
    }
}
export default Navbar;
