import { Component } from "react";
import "./Navbar.css";
import logoUser from "../../../Assets/logoUser.png";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <img className="logoUser" src={logoUser}></img>
      </div>
    );
  }
}
export default Navbar;
