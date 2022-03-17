import Navbar from "../../../Components/Molecules/Header/Navbar";
import Footer from "../../../Components/Molecules/Footer/Footer";
import CreateQuestion from "../../../Components/Organisms/Create/CreateQuestion";

function CreateQuestions() {
  return (
    <div className="App">
      <Navbar />
      <CreateQuestion />
      <Footer />
    </div>
  );
}

export default CreateQuestions;
