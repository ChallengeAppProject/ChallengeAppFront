import Navbar from "../../../Components/Molecules/Header/Navbar";
import Footer from "../../../Components/Molecules/Footer/Footer";
import { ChallengeList } from "../../../Components/Organisms/ChallengeList/ChallengeList";

function Challenges() {
  return (
    <div className="App">
      <Navbar />
        <ChallengeList/>
      <Footer />
    </div>
  );
}

export default Challenges;
