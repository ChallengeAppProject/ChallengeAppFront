import { useState, useEffect } from "react";
import { ApiService } from "../../../Services/APIService";
import "./QuestionCard.css";

export function QuestionCard({ question, index }) {
  const [answers, setAnswers] = useState([]);
  const [userAnswer, setUserAnswer] = useState({
    questionId: 1,
    challengeAnswerId: 1,
  });
  const [dataIsOk, setDataIsOk] = useState(false);
  const [isThereAnImage, setIsThereAnImage] = useState(false);

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
      .catch( ( error ) => console.log( error.response ) );
    getImage();
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

  const handleReset = (e) => {
    setUserAnswer([]);
  };

  const getImage = () => {
    if (question.imgUrl) {
      setIsThereAnImage(true);
    }
  };
 // getImage();
  return (
    <div className="question-container">
      <div>
        <div>
          <p>Question {index + 1}:</p>
        </div>
        <div> {question.challengeQuestion}</div>
        {isThereAnImage ? (
          <div className="imageContainer">
            <img
              className="imageCard"
              src={question.imgUrl}
              alt="image question"
            />
          </div>
        ) : (
          ""
        )}
        <form>
          <ul>
            {answers.map((answer, index) => (
              <li className="listItem" key={index}>
                <div className="car-container">
                  <input
                    type="radio"
                    id={question.id}
                    onClick={handleChangeAnswer}
                    name={answer.questionId}
                    value={answer.answerId}></input>{" "}
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
            <button type="reset" className="btnchll" onClick={handleReset}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
