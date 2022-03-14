import { useState, useEffect } from "react";
import { ApiService } from "../../../Services/APIService";
import { QuestionCard } from "../../Molecules/QuestionCard/QuestionCard";
import { useParams } from "react-router-dom";

export function QuestionList() {
  const [questions, setQuestions] = useState([]);

  let challengeId = useParams();

  useEffect(() => {
    const paramsId = challengeId.id;
    console.log(paramsId);
    ApiService()
      .getQuestionsByChallengeID(paramsId).then((res) => setQuestions(res.data))
      .catch(error => console.log(error.response));
  },[challengeId.id]);

  return (
      <form>
    
      {questions.map((question, index) => (
        <li key={index}>
          <QuestionCard question={question} />
        </li>
      ))}
    
    </form>
  );
}
