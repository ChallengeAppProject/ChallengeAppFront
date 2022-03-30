import React, {useState} from 'react'
import "./Header.css";
import { Link } from "react-router-dom";
import { useUser } from "./../../Auth/AuthProvider";

const Header = () => {
  const { user, setUser } = useUser();
  const [isMobile, setIsMobile] = useState(false);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth_token");
  };

  return (
    <nav className='navbar'>
    <div className="logo">
    <Link to="/">
      <img
        className="h-logo_img"
        src={require("./../../../Assets/LogoChallengeApp.png")}
        title="Logo ChallengeApp"
        alt="Logo ChallengeApp"
      />
    </Link>
    </div>
    <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
    onClick={() => setIsMobile(false)}
    >
        <li className="h-nav_list"> User Challenges </li>
        <li className="h-nav_list"> User Results </li>
        <p className="h-nav_separator" id="h-separator_login"> | </p>

        {user ? (
      <button onClick={logout} className="h-nav_logout" id="h-btn_logout">
        Logout
      </button>
    ) : (
        <Link to="/login" className='home'>
        <li className="h-nav_login" id="h-btn"> Login </li>
        </Link>
    
    )}
    </ul>
    <span className="mobile-menu-icon"
    onClick={() => setIsMobile(!isMobile)}
    >
    {isMobile ? (<img
        className="h-close"
        src={require("./../../../Assets/cerrar.png")}
        alt="icon close"
    />) : (<img
        className="h-open"
        src={require("./../../../Assets/burguer.png")}
        alt="icon open"
    />)}   
  </span>
</nav>
  );
};
export default Header;