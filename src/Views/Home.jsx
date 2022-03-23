import "./Home.css";
import ChallengeLogo2 from "../Assets/ChallengeLogo2.png";
import BlogPostBro from  "../Assets/BlogPostBro.png";

function Home() {
  return (
    <div className="App">
      <div className="homeContainer">
      <a href="/challenges">
       <img  className="logoHome" src={ChallengeLogo2} alt="" width="100%"/>
       <img  className="blogPostBro" src={BlogPostBro} alt="" width="100%"/>
       </a>
       
      </div>
     
      
    </div>
  );
}

export default Home;