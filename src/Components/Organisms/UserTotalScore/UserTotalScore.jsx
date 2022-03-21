import { useState, useEffect, useCallback } from "react";
import { ApiService } from "../../../Services/APIService";
import { useParams } from "react-router-dom";

 
 
 export default function UserTotalScore() {
    const [scores, setScores] = useState([]);
  
   let challenge = useParams();
   const challengeId = challenge.id;
   
   const getUserScore = useCallback(()=>{ApiService()
    .getUserTotalScore( challengeId ).then( ( res ) => setScores( res.data) )
     .catch( error => console.log( error.response ) );
     
},[challengeId]);


    useEffect(() => {
      getUserScore(); 
     
    },[challenge.id, getUserScore]);
    console.log( scores );
    return (
      <div className="">
       <p> Name: {scores.user.userName}</p>
       <p> Challenge: {scores.challenge.challengeName}</p>
       <p> Correct answers: {scores.correctAnswers}</p>
       <p> Incorrect answers: {scores.incorrectAnswers}</p>
     
      </div>
    );
  }
  