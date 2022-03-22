import { useState, useEffect } from "react";
import { ApiService } from "../../../Services/APIService";
import { useParams } from "react-router-dom";

 
 
 export function UserTotalScore() {
    const [scores, setScores] = useState([]);
  
   let challenge = useParams();
   const challengeId = challenge.id;

    useEffect(() => {
      ApiService()
        .getUserTotalScore( challengeId ).then( ( res ) => setScores( res.data) )
        .catch( error => console.log( error.response ) );
         
    },[challengeId]);

    console.log(scores)
    return (
      <div className="">

        {/* <p> Name: {scores.user.userName}</p>
        <p> Challenge: {scores.challenge.challengeName}</p>
        <p> Correct answers: {scores.correctAnswers}</p>
        <p> Incorrect answers: {scores.incorrectAnswers}</p>
      */}
      </div>
    );
  }

  export default UserTotalScore;
  