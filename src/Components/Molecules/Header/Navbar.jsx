import { Component } from 'react';
import './Navbar.css'
import logoUser from "../../../Assets/logoUser.png"
import burguer from "../../../Assets/burguer.png"
import ChallengeLogo2 from "../../../Assets/ChallengeLogo2.png"

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <img className='logoUser' src={logoUser}></img>
                <img className='ChallengeLogoNav' src={ChallengeLogo2}></img>
                <img className='burguer' src={burguer}></img>
                
            </div>
        )
    }
}
export default Navbar;