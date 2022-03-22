import { useState, useEffect } from "react";
import { ApiService } from "../../../Services/APIService";
import { ChallengeCard } from "../../Molecules/ChallengeCard/ChallengeCard";
import "./ChallengeList.css";

export function ChallengeList() {
  const [challenges, setChallenge] = useState([]);

  useEffect(() => {
    ApiService()
      .get()
      .then((res) => setChallenge(res.data))
      .catch((error) => console.log(error.response));
  }, []);

  return (
    <div>
      <h1 className="welcomeTitle">Welcome to ChallengeApp</h1>
      <ul className="challengeIndexContainer">
        {challenges.map((challenge, index) => (
          <li className="card w-25" key={index}>
            <ChallengeCard challenge={challenge} />
          </li>
        ))}
      </ul>
    </div>
  );
}
