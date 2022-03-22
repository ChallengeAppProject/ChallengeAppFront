import "./App.css";
import Navbar from "./Components/Molecules/Header/Navbar.jsx";
import { ChallengeList } from "./Components/Organisms/ChallengeList/ChallengeList.jsx";
import Footer from "./Components/Molecules/Footer/Footer.jsx";

function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <ChallengeList/>
      <Footer/>
    </div>
  );
}

export default App;
