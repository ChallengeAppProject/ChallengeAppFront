import { useState, useEffect } from "react";
import { ApiService } from "../../../Services/APIService";
import { ChallengeCard } from "../../Molecules/ChallengeCard/ChallengeCard";
import "./ChallengeList.css";
import testImage from "../../../Assets/testImage.png";

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
      <div className="imgContainer">
        <img
          className="testImage"
          src={testImage}
          alt="testImage"
          width="30%"
        />
      </div>
      <h2 className="challengesTitle">These are our available Challenges:</h2>
      <div>
        <ul className="challengeIndexContainer">
          {challenges.map((challenge, index) => (
            <div className="cardChallenge" key={index}>
              <ChallengeCard challenge={challenge} />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
