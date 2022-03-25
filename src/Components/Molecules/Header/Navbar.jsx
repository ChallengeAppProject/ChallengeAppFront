import { Component } from "react";
import "./Navbar.css";
import ChallengeLogo2 from "../../../Assets/LogoChallengeAppBLANCO.png";


class Navbar extends Component {
  render() {
    return (
      <div className="NavContainer">
       <a href="/challenges">
       <img  className="ChallengeLogoNav" src={ChallengeLogo2} alt=""/>
       </a>
      </div>
    );
  }
}
export default Navbar;
