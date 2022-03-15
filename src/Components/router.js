import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import CreateChallenge from "./Organisms/Create/CreateChallenge";
import { QuestionList } from "./Organisms/QuestionList/QuestionList";
import { QuestionCard } from "./Molecules/QuestionCard/QuestionCard";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/challenges" element={<App />} />
        <Route path="/create" element={<CreateChallenge />} />
        <Route path="/challenges/:id/questions" element={<QuestionList />} />
        <Route path="/questions/:id/answers" element={<QuestionCard />} />


      </Routes>
    </BrowserRouter>
  );
}
export default Router;
