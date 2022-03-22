import Navbar from "../Components/Molecules/Header/Navbar";
import Footer from "../Components/Molecules/Footer/Footer";
import UserTotalScore from "../Components/Organisms/UserTotalScore/UserTotalScore";


function Results() {
  return (
    <div className="App">
      <Navbar />
      <UserTotalScore/>
      <Footer />
    </div>
  );
}

export default Results;
