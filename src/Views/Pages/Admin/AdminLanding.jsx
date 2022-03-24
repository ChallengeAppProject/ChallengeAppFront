import { Link } from "react-router-dom";
import "../Admin/AdminLanding.css";
import { ChallengeList } from "./../../../Components/Organisms/ChallengeList/ChallengeList";
import Sidebar from "../../../Components/Molecules/Sidebar/Sidebar";
function AdminLanding() {
  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <div className="form-group">
          <ChallengeList />
        </div>
      </div>
    </div>
  );
}

export default AdminLanding;
