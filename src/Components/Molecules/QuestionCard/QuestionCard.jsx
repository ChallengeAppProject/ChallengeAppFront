import { useState, useEffect } from "react";
import { ApiService } from "../../../Services/APIService";
import { AnswerCard } from "../AnswerCard/AnswerCard";

export function QuestionCard({ question }) {
  const [ answers, setAnswers ] = useState( [] );
  const [ userAnswer, setUserAnswer ] = useState( { questionId: 1, challengeAnswerId: 1 } );
  const [ userAnswersList, setUserAnswersList ] = useState( [] );
  
  const handleChangeAnswer = (e) => {
    console.log( e.target.value );
    console.log( e.target.name );
    setUserAnswer( { questionId: e.target.name, challengeAnswerId: e.target.value } )
    setUserAnswersList([...userAnswersList,{ questionId: e.target.name, challengeAnswerId: e.target.value }]) 
  };

  useEffect(() => {
    ApiService()
      .getAnswersByQuestionID(question.id)
      .then((res) => setAnswers(res.data))
      .catch((error) => console.log(error.response));
  }, [question]);

  function sendAnswers ()
  {
    let id = question.challengeId;
  userAnswersList.forEach(element => {
    let data = element;
   /*  ApiService().postAnswersByQuestionId( id, data ); */ 
    console.log(userAnswersList)
  });
  }

  return (
    <div>
      <div className="car-container">
        <div>{question.challengeQuestion}</div>

        <form>
          <ul>
            {answers.map((answer, index) => (
              <li key={index}>
                <div className="car-container">
                  <input
                    type="radio"
                    id={question.id}
                    onClick={handleChangeAnswer }
                    name={answer.questionId}
                    value={answer.answerId}></input>
                  {answer.textAnswer}
                </div>
              </li>
            ))}
          </ul>
        </form>
      </div>
          <button onClick={sendAnswers}>Submit Answers</button>
    </div>
  );
}
