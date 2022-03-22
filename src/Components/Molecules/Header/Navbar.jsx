import { Component } from "react";
import "./Navbar.css";
import logo from "../../../Assets/ChallengeApp.png";

class Navbar extends Component {
  render() {
    return (
      <div className="header">
        <img
          className="logo"
          src={logo}
          href="http://localhost:3000/challenges"
        ></img>
      </div>
    );
  }
}
export default Navbar;
