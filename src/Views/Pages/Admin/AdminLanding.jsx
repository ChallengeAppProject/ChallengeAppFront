import Navbar from "../../../Components/Molecules/Header/Navbar";
import Footer from "../../../Components/Molecules/Footer/Footer";
import { Link } from "react-router-dom";
import "../Admin/AdminLanding.css";
import { ChallengeList } from "./../../../Components/Organisms/ChallengeList/ChallengeList";
function AdminLanding() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="form-group my-3">
          <Link to="/create/challenge" className="btnchll">
            Create Challenge
          </Link>
          <ChallengeList />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminLanding;
