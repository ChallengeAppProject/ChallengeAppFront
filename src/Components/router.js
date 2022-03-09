import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import CreateChallenge from "./Organisms/Create/CreateChallenge";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/challenges" element={<App />} />
        <Route path="/create" element={<CreateChallenge />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
