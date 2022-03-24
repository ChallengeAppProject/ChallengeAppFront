import CreateQuestion from "../../../Components/Organisms/Create/CreateQuestion";
import Sidebar from "../../../Components/Molecules/Sidebar/Sidebar";

function CreateQuestions() {
  return (
    <div className="App">
      <Sidebar />
      <CreateQuestion />
    </div>
  );
}

export default CreateQuestions;
