

export function AnswerCard({answer}) {
    return (
        <div className="car-container">
  
  <input type="radio" id={answer.id} name={answer.questionId} value={answer.questionId}></input>{answer.textAnswer}
        </div>
      );
    
}