
export function AnswerCard ( { answer, handleAnswer} )
{
 
  return (
    <div className="car-container">
      <input
        type="radio"
        id={answer.id}
        onClick={handleAnswer}
        name={answer.questionId}
        value={answer.questionId}></input>
      {answer.textAnswer}
    </div>
  );
}

export let userAnswer;