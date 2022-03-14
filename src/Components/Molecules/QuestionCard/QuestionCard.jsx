import { useState, useEffect } from "react";
import { ApiService } from "../../../Services/APIService";
import { useParams } from "react-router-dom"; 
import { AnswerCard } from "../AnswerCard/AnswerCard";

export function QuestionCard({ question }) {
  const [answers, setAnswers] = useState([]);

  let questionId = useParams();

  useEffect(() => {
    const paramsId = questionId.id;
    console.log(paramsId);
    ApiService()
      .getAnswersByQuestionID(paramsId)
      .then((res) => setAnswers(res.data))
      .catch((error) => console.log(error.response));
  }, [questionId.id]);

  return (
    <div className="card-container">
      <div>{question.challengeQuestion}</div>

      <ul>
        {answers.map((answer, index) => (
          <li key={index}>
            <AnswerCard answer={answer} />
          </li>
        ))}
      </ul>
    </div>
  );
}
