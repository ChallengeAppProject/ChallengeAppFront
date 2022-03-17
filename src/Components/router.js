import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import CreateChallenges from "../Views/Pages/Admin/CreateChallenges";
import { QuestionList } from "./Organisms/QuestionList/QuestionList";
import { QuestionCard } from "./Molecules/QuestionCard/QuestionCard";
import CreateQuestions from "../Views/Pages/Admin/CreateQuestions";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/challenges" element={<App />} />
        <Route path="/createChallenge" element={<CreateChallenges />} />
        <Route path="/challenges/:id/question" element={<CreateQuestions />} />
        <Route path="/challenges/:id/questions" element={<QuestionList />} />
        <Route path="/questions/:id/answers" element={<QuestionCard />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
