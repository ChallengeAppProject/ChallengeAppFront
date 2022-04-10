import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import CreateChallenges from "../Views/Pages/Admin/CreateChallenges";
import { QuestionList } from "./Organisms/QuestionList/QuestionList";
import { QuestionCard } from "./Molecules/QuestionCard/QuestionCard";
import CreateQuestions from "../Views/Pages/Admin/CreateQuestions";
import CreateAnswers from "../Views/Pages/Admin/CreateAnswers";
import AdminLanding from "../Views/Pages/Admin/AdminLanding";
import UserTotalScore from "./Organisms/UserTotalScore/UserTotalScore";
import Results from "../Views/Results";
import Home from "../Views/Home";
import { ChallengeList } from "./Organisms/ChallengeList/ChallengeList";

function Router() {
/*   return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/challenges" element={<ChallengeList />} />
        <Route path="/create/challenge" element={<CreateChallenges />} />
        <Route path="/challenges/:id/question" element={<CreateQuestions />} />
        <Route path="/questions/:id/answer" element={<CreateAnswers />} />
        <Route path="/challenges/:id/questions" element={<QuestionList />} />
        <Route path="/questions/:id/answers" element={<QuestionCard />} />
        <Route path="/adminlanding" element={<AdminLanding />} />
        <Route
          path="/challenges/:id/questions/totalScore"
          element={<Results />}
        />
      </Routes>
    </BrowserRouter>
  ); */
}
export default Router;
