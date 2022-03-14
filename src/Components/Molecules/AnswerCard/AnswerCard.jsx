

export function AnswerCard({answer}) {
    return (
        <div className="card-container">
  
  <input type="radio" id={answer.id} name={answer.questionId} value=""></input> <label for={answer.id}>{answer.textAnswer}</label>
        </div>
      );
    
}