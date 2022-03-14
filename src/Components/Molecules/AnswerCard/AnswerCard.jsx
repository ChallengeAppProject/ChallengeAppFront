

export function AnswerCard({answer, questionId}) {
    return (
        <div className="car-container">
  
  <input type="radio" name={questionId} value={questionId}></input>{answer.textAnswer}
        </div>
      );
    
}