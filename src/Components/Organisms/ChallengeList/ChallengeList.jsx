import { useState, useEffect } from "react";
import { ApiService } from "../../../Services/APIService";
import { ChallengeCard } from "../../Molecules/ChallengeCard/ChallengeCard";
import "./ChallengeList.css";
import  testImage  from "../../../Assets/testImage.png";

export function ChallengeList() {
  const [challenges, setChallenge] = useState([]);

  useEffect(() => {
    ApiService()
      .get()
      .then((res) => setChallenge(res.data))
      .catch((error) => console.log(error.response));
  }, []);

  return (
    <div className="mainContainer">
      <h1 className="wellcomeTitle">Challenges</h1>
      <div>
      {/* <img className="testImage" src={testImage} alt="testImage" width="30%" /> */}
      
      <ul className="challengeIndexContainer">
        {challenges.map((challenge, index) => (
          <li className="cardChallenge" key={index}>
            <ChallengeCard challenge={challenge} /> 
          </li>
          
        ))}
      </ul>
      </div>
    </div>
  );
}
