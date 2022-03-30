import "./App.css";
import Navbar from "./Components/Molecules/Header/Navbar.jsx";
import { ChallengeList } from "./Components/Organisms/ChallengeList/ChallengeList.jsx";
import Footer from "./Components/Molecules/Footer/Footer.jsx";
import Header from "./Components/Molecules/Header/Header";


function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="wellcomeTitle">Wellcome to ChallengeApp!</h1>
      {/* <h2 className="wellcomeTitle">These are our Challenges:</h2> */}

      <ChallengeList />
      <Footer />
    </div>
  );
}

export default App;
