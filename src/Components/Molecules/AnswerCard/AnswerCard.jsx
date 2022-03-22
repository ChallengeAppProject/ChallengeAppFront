
export function AnswerCard ( { answer, handleAnswer} )
{
 
  return (
    <div className="car-container">
      <input
        type="radio"
        id={answer.id}
        onClick={handleAnswer(answer.id)}
        name={answer.questionId}
        value={answer.questionId}></input>
      {answer.textAnswer}
    </div>
  );
}
