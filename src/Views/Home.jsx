import "./Home.css";
import ChallengeLogo2 from "../Assets/ChallengeLogo2.png";
import BlogPostBro from  "../Assets/BlogPostBro.png";
import homeText from "./../Assets/homeText.png"

function Home() {
  return (
    <div className="App">
        <div className="homeContainer" href="/challenges">
          <div>
            <img className="logoHome" src={ChallengeLogo2} alt="" width="100%"/>
            </div>
            <div>
            <button className="buttonHome" onClick={'/challenges'}>GO</button>
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