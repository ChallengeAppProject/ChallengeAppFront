import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Molecules/Header/Navbar.jsx";
import { ChallengeList } from "./Components/Organisms/ChallengeList/ChallengeList.jsx";
import Footer from "./Components/Molecules/Footer/Footer.jsx";
import Header from "./Components/Molecules/Header/Header";
import Home from "./Views/Home";
import AuthProvider from "./Components/Auth/AuthProvider";
import useAutoLogin from "./Components/Auth/useAutoLogin";
import CreateChallenges from "./Views/Pages/Admin/CreateChallenges";
import CreateQuestions from "./Views/Pages/Admin/CreateQuestions";
import CreateAnswers from "./Views/Pages/Admin/CreateAnswers";
import { QuestionList } from "./Components/Organisms/QuestionList/QuestionList";
import { QuestionCard } from "./Components/Molecules/QuestionCard/QuestionCard";
import AdminLanding from "./Views/Pages/Admin/AdminLanding";
import Results from "./Views/Results";
import RegisterForm from "./Components/Auth/RegisterForm";
import Login from "./Views/Pages/User/Login";
import Challenges from "./Views/Pages/User/challenges";
import Layout from "./Components/Layout";

const AutoLogin = () => {
  useAutoLogin();
  return null;
};

function App() {
  return (
    <div>
      <AuthProvider>
        <AutoLogin />
        <Routes>
        <Route path="/" element={<Layout />}/>
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/create/challenge" element={<CreateChallenges />} />
          <Route
            path="/challenges/:id/question"
            element={<CreateQuestions />}
          />
          <Route path="/questions/:id/answer" element={<CreateAnswers />} />
          <Route path="/challenges/:id/questions" element={<QuestionList />} />
          <Route path="/questions/:id/answers" element={<QuestionCard />} />
          <Route path="/adminlanding" element={<AdminLanding />} />
          <Route
            path="/challenges/:id/questions/totalScore"
            element={<Results />}
          />
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
