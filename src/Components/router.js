import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import CreateChallenge from "./Organisms/Create/CreateChallenge";
import { QuestionList } from "./Organisms/QuestionList/QuestionList";
import { QuestionCard } from "./Molecules/QuestionCard/QuestionCard";
import CreateQuestion from "./Organisms/Create/CreateQuestion";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/challenges" element={<App />} />
        <Route path="/createChallenge" element={<CreateChallenge />} />
        <Route path="/challenges/:id/question" element={<CreateQuestion />} />
        <Route path="/challenges/:id/questions" element={<QuestionList />} />
        <Route path="/questions/:id/answers" element={<QuestionCard />} />


      </Routes>
    </BrowserRouter>
  );
}
export default Router;
