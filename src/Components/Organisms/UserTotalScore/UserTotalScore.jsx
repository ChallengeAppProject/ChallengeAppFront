import { useState, useEffect } from "react";
import { ApiService } from "../../../Services/APIService";
import { useParams } from "react-router-dom";

 
 
 export function UserTotalScore() {
    const [scores, setScores] = useState([]);
  
   let challenge = useParams();
   const challengeId = challenge.id;
   const [dataIsOk, setdataIsOk] = useState(false);

    useEffect(() => {
      ApiService()
        .getUserTotalScore( challengeId ).then( ( res ) => {
          setScores( res.data)
        setdataIsOk(true)}
         )
        .catch( error => console.log( error.response ) );
         
    },[]);

    console.log(scores)
    return (
      
      <div className="">
  {dataIsOk ? 
  <div>
         <p> Name: {scores.user.userName}</p>
        <p> Challenge: {scores.challenge.challengeName}</p>
        <p> Correct answers: {scores.correctAnswers}</p>
        <p> Incorrect answers: {scores.incorrectAnswers}</p>
      </div>
      :
      <p>"loading"</p>
      } 
      </div> 
    );
  }

  export default UserTotalScore;
  