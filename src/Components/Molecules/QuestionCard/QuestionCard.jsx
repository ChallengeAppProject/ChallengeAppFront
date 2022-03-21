import { useState, useEffect } from "react";
import { ApiService } from "../../../Services/APIService";
import { AnswerCard } from "../AnswerCard/AnswerCard";

export function QuestionCard({ question }) {
  const [answers, setAnswers] = useState([]);

  let id = question.id;
  let userAnswer;
  function handleChangeAnswer(){
    
       
        userAnswer = answers[0].answerId;
      
      console.log(userAnswer);
      return userAnswer;
    }
  

  useEffect(() => {
    ApiService()
      .getAnswersByQuestionID(id)
      .then((res) => setAnswers(res.data))
      .catch((error) => console.log(error.response));
  }, [question.id]);

  function sendAnswers() {
    alert(answers[0].textAnswer);
    let data = { questionId: question.id, challengeAnswerId: userAnswer };
    let id = question.challengeId;
    console.log(data, id);
    ApiService().postAnswersByQuestionId(id, data);
  }

  return (
    <div>
      <div className="car-container">
        <div>{question.challengeQuestion}</div>

        <form>
          <ul>
            {answers.map((answer, index) => (
              <li key={index}>
                <AnswerCard
                  answer={answer}
                  handleAnswer={handleChangeAnswer}
                />
              </li>
            ))}
          </ul>
          <button onClick={sendAnswers}>Submit Answers</button>
        </form>
      </div>
    </div>
  );
}
