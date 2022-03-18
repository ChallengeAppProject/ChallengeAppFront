import { useState, useEffect } from "react";
import { ApiService } from "../../../Services/APIService";
import "./ChallengeList.css";
import { useParams } from "react-router-dom";
import LogoChallengeApp from "../../../Assets/LogoChallengeApp.png"
import { Link } from "react-router-dom";

export function ChallengeList() {
  const [challenges, setChallenge] = useState([]);


  useEffect(() => {
  
    ApiService().get().then((res) => setChallenge(res.data))
    .catch(error => console.log(error.response));
  },[]);

  return (
    
    <div>
      <h1 className='welcomeTitle'>Welcome to ChallengeApp</h1>
    <ul className='challengeIndexContainer'>
      {challenges.map((challenge, index) => (
        <li className='challengeIndex' key={index}>
          <Link to={`/challenges/${challenge.id}/questions`} className="challenge-container">{challenge.name}</Link>
        </li>
        
      ))}
      <img className='challengeLogoWelcome' src={LogoChallengeApp}></img>
      
    </ul>
    </div>
  );
}
