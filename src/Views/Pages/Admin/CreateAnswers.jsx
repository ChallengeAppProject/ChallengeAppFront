import Navbar from "../../../Components/Molecules/Header/Navbar";
import Footer from "../../../Components/Molecules/Footer/Footer";
import CreateAnswer from "../../../Components/Organisms/Create/CreateAnswer";

function CreateAnswers() {
  return (
    <div className="App">
      <Navbar />
      <CreateAnswer />
      <Footer />
    </div>
  );
}

export default CreateAnswers;
