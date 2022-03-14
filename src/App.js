import "./App.css";
import Navbar from "./Components/Molecules/Header/Navbar";
import { ChallengeList } from "./Components/Organisms/ChallengeList/ChallengeList";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>ChallengeApp</h1>
      <ChallengeList/>
    </div>
  );
}

export default App;
