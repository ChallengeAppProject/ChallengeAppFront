import { useState, useEffect } from "react";
import { ApiService } from "../../../Services/APIService";
import { useParams } from "react-router-dom";

 
 
 export default function UserTotalScore() {
    const [scores, setScores] = useState([]);
  
    let challengeId = useParams();


    useEffect(() => {
        const IDchallenge = challengeId.id;
      ApiService()
        
        .getUserTotalScore(IDchallenge).then((res) => setScores(res.data))
        
        .catch(error => console.log(error.response));

        
    },[]);
  
    return (
        <div className="">
     
      </div>
    );
  }
  