import "./App.css";
import Navbar from "./Components/Molecules/Header/Navbar.jsx";
import { ChallengeList } from "./Components/Organisms/ChallengeList/ChallengeList.jsx";
import Footer from "./Components/Molecules/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1 className="welcomeTitle">Wellcome to ChallengeApp</h1>
      <ChallengeList/>
      <Footer/>
    </div>
  );
}

export default App;
