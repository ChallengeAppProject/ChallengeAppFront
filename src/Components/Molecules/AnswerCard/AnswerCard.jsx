

export function AnswerCard({answer}) {
    return (
        <div className="car-container">
  
  <input type="radio" id={answer.id} name={answer.questionId} value=""></input> <label for={answer.id}>{answer.textAnswer}</label>
        </div>
      );
    
}