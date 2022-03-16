import { useState, useEffect } from "react";
import { ApiService } from "../../../Services/APIService";
import { ChallengeCard } from "../../Molecules/ChallengeCard/ChallengeCard";
import "./ChallengeList.css";
import { useParams } from "react-router-dom";
import ChallengeLogo2 from "../../../Assets/ChallengeLogo2.png"

export function ChallengeList() {
  const [challenges, setChallenge] = useState([]);


  useEffect(() => {
  
    ApiService().get().then((res) => setChallenge(res.data))
    .catch(error => console.log(error.response));
  },[]);

  return (
    <ul>
      {challenges.map((challenge, index) => (
        <li className='challengeIndex' key={index}>
          <ChallengeCard challenge={challenge} />
        </li>
      ))}
      <img className='challengeLogoWelcome' src={ChallengeLogo2}></img>
    </ul>
  );
}
