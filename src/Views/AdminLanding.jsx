import Navbar from "../Components/Molecules/Header/Navbar";
import Footer from "../Components/Molecules/Footer/Footer";
import { Link } from "react-router-dom";

function AdminLanding ()
{
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Link to="/createChallenge" className="challenge-container">
            CREATE CHALLENGE
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  export default AdminLanding;