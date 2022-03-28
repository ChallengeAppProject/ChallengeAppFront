import "./QuestionList.css";
import { useState, useEffect } from "react";
import { ApiService } from "../../../Services/APIService";
import { QuestionCard } from "../../Molecules/QuestionCard/QuestionCard";
import { useParams } from "react-router-dom";
import Navbar from "../../Molecules/Header/Navbar";
import Footer from "../../Molecules/Footer/Footer";
import { useNavigate } from "react-router-dom";

export function QuestionList() {
  const [questions, setQuestions] = useState([]);
  const [challenge, setChallenge] = useState([]);

  let challengeId = useParams();

  let navigate = useNavigate();
  const routeChange = () => {
    const idParams = challengeId.id;
    let path = `/challenges/${idParams}/questions/totalScore`;
    navigate(path);
  };

  useEffect(() => {
    const paramsId = challengeId.id;
    ApiService()
      .getQuestionsByChallengeID(paramsId)
      .then((res) => setQuestions(res.data))
      .catch((error) => console.log(error.response));
    ApiService()
      .getChallengeById(paramsId)
      .then((res) => setChallenge(res.data))
      .catch((error) => console.log(error.response));
  }, [challengeId.id]);

  return (
    <div>
      <Navbar />

      <div className="challengesContent">
        <div className="card card w-75 p-3 mb-5 border shadow-none">
          <h1 className="challengeName ">Challenge: {challenge.name}</h1>
          <p className="challengeInstructions">
            Please answer the questions... but remember!!! Once your answer is
            sent, you cannot change it. Good luck!!!
          </p>
        </div>
        {questions.map((question, index) => (
          <li className="card w-75 p-3 mb-5 rounded-3 shadow-none" key={index}>
            <QuestionCard question={question} index={index} />
          </li>
        ))}

        <button className="btnScore" onClick={routeChange}>
          Get total Score
        </button>
      </div>
      <Footer />
    </div>
  );
}
