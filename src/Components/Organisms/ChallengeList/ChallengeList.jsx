import { useState, useEffect } from "react";
import { ApiService } from "../../../Services/APIService";
import { ChallengeCard } from "../../Molecules/ChallengeCard/ChallengeCard";
import "./ChallengeList.css";
import { useParams } from "react-router-dom";
import LogoChallengeApp from "../../../Assets/LogoChallengeApp.png"
import "../../Molecules/ChallengeCard/challengeCard.css";

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
          <ChallengeCard challenge={challenge} />
        </li>
      ))}
      <img className='challengeLogoWelcome' src={LogoChallengeApp}></img>
    </ul>
    </div>
  );
}
