import Navbar from "../../../Components/Molecules/Header/Navbar";
import Footer from "../../../Components/Molecules/Footer/Footer";
import CreateChallenge from "../../../Components/Organisms/Create/CreateChallenge";

function CreateChallenges() {
  return (
    <div className="App">
      <Navbar />
      <CreateChallenge />
      <Footer />
    </div>
  );
}

export default CreateChallenges;
