import React from "react";
import "./Home.css";
import ChallengeLogo2 from "../Assets/ChallengeLogo2.png";
import BlogPostBro from  "../Assets/BlogPostBro.png";
import homeText from "./../Assets/homeText.png"
import { Link } from "react-router-dom";
import Header from "../Components/Molecules/Header/Header";
function Home() {
  return (
    <div className="App">
      
        <div className="homeContainer" href="/challenges">
          <div>
            <a href="/challenges">
            <img className="logoHome" src={ChallengeLogo2} alt="" width="100%"/>
            </a>
            </div>
            <div >
            <a href="/login">
              <button className="buttonHome">START</button>
            </a>
        </div>
        <div className="cta">
                  <Link className="btn-cta-m" to="/register">
                    Register
                  </Link>
                </div>
            <div>
              <img className="hometext" src={homeText} alt=""  />
            </div>
            <div>
            <h1 className="infoContainer"></h1>
            </div>
            <div>
            <img  className="blogPostBro" src={BlogPostBro} alt="" />
            </div>
        </div>  
    </div>
  );
}

export default Home;