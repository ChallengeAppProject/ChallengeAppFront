import { Component } from "react";
import "./Sidebar.css";
import ChallengeLogo2 from "../../../Assets/LogoChallengeAppBLANCO.png";
import { FaHome } from "react-icons/fa";
import { BsFillPatchPlusFill } from "react-icons/bs";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-container">
        <div className="logo-container">
          <img
            className="ChallengeLogoNavSide"
            src={ChallengeLogo2}
            alt=""
            width="20%"
          />
        </div>

        <ul className="sidebar-navigation">
          <div className="sidebar-logo">Administrator</div>
          <li>
            <a href="/adminlanding">
              <FaHome style={{ fontSize: "20px" }} />
              &nbsp; Challenges
            </a>
          </li>
          <li>
            <a href="/create/challenge">
              <BsFillPatchPlusFill />
              &nbsp; Create Challenge
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Sidebar;
