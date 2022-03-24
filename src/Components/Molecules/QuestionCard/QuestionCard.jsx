import { useState, useEffect } from "react";
import { ApiService } from "../../../Services/APIService";
import "./QuestionCard.css";

export function QuestionCard({ question }) {
  const [answers, setAnswers] = useState([]);
  const [userAnswer, setUserAnswer] = useState({
    questionId: 1,
    challengeAnswerId: 1,
  });
  const [dataIsOk, setDataIsOk] = useState(false);

  const handleChangeAnswer = (e) => {
    setUserAnswer({
      questionId: e.target.name,
      challengeAnswerId: e.target.value,
    });
  };

  useEffect(() => {
    ApiService()
      .getAnswersByQuestionID(question.id)
      .then((res) => setAnswers(res.data))
      .catch((error) => console.log(error.response));
  }, [question]);

  function sendAnswer(event) {
    let id = question.challengeId;
    let data = userAnswer;
    ApiService().postAnswersByQuestionId(id, data);
    setDataIsOk(true);
    event.preventDefault();
  }

  function preventDefault(event) {
    event.preventDefault();
  }

  return (
    <div>
      <div className="car-container">
        <div>{question.challengeQuestion}</div>
        <div className="imageContainer">
          {" "}
          <img src={question.imgUrl} alt="image question" />
        </div>
        <form>
          <ul>
            {answers.map((answer, index) => (
              <li key={index}>
                <div className="car-container">
                  <input
                    type="radio"
                    id={question.id}
                    onClick={handleChangeAnswer}
                    name={answer.questionId}
                    value={answer.answerId}
                  ></input>
                  {answer.textAnswer}
                </div>
              </li>
            ))}
          </ul>
          <div>
            {dataIsOk ? (
              <button className="btnchll-no" onClick={preventDefault}>
                Answer Submited
              </button>
            ) : (
              <button className="bt-back-new" onClick={sendAnswer}>
                Submit Answer
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
