import { useState, useEffect } from "react";
import { ApiService } from "../../../Services/APIService";
import { AnswerCard } from "../AnswerCard/AnswerCard";

export function QuestionCard({ question }) {
  const [answers, setAnswers] = useState([]);

  let id = question.id;


  useEffect(() => {
    ApiService()
      .getAnswersByQuestionID(id)
      .then((res) => setAnswers(res.data))
      .catch((error) => console.log(error.response));
  },[question.id]);

  function sendAnswers(){
    alert( answers[ 0 ].textAnswer );
    let data={questionId: 1, challengeAnswerId:1};
    let id =1;
    ApiService()
      .postAnswersByQuestionId( id, data )
    
  }

  return (
    <div>
      <div className="car-container">
        <div>{question.challengeQuestion}</div>

        <form>
          <ul>
            {answers.map((answer, index) => (
              <li key={index}>
                <AnswerCard answer={answer} />
              </li>
            ))}
          </ul>
          <button onClick={sendAnswers}>Submit Answers</button>
        </form>
      </div>
    </div>
  );
}
