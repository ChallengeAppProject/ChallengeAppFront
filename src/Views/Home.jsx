import "./Home.css";
import ChallengeLogo2 from "../Assets/ChallengeLogo2.png";


function Home() {
  return (
    <div className="App">
      <div className="homeContainer">
      <a href="/challenges">
       <img  className="logoHome" src={ChallengeLogo2} alt="" width="100%"/>
       </a>
       
      </div>
     
      
    </div>
  );
}

export default Home;