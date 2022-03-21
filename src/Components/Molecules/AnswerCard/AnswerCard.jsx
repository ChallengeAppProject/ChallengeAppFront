export function AnswerCard({ answer }) {
  let userAnswer;
  const handleChangeAnswer = () => {
    userAnswer = answer.id;
    console.log(userAnswer);
  };
  return (
    <div className="car-container">
      <input
        type="radio"
        id={answer.id}
        onSelect={handleChangeAnswer}
        name={answer.questionId}
        value={answer.questionId}></input>
      {answer.textAnswer}
    </div>
  );
}

export let userAnswer;
