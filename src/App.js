import "./App.css";
import Navbar from "./Components/Molecules/Header/Navbar";
import { ChallengeList } from "./Components/Organisms/ChallengeList/ChallengeList";
import Footer from "./Components/Molecules/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>Welcom to ChallengeApp</h1>
      <ChallengeList/>
      <Footer/>
    </div>
  );
}

export default App;
