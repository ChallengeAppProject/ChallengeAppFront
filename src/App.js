import "./App.css";
import Navbar from "./Components/Molecules/Header/Navbar.jsx";
import { ChallengeList } from "./Components/Organisms/ChallengeList/ChallengeList.jsx";
import Footer from "./Components/Molecules/Footer/Footer.jsx";


function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="wellcomeTitle">Wellcome to ChallengeApp!</h1>
      {/* <h2 className="wellcomeTitle">These are our Challenges:</h2> */}

      <ChallengeList />
      <Footer />
    </div>
  );
}

export default App;
