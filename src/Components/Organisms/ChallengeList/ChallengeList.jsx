import { useState, useEffect } from "react";
import { ApiService } from "../../../Services/APIService";
import { ChallengeCard } from "../../Molecules/ChallengeCard/ChallengeCard";
import "./ChallengeList.css";
import { useParams } from "react-router-dom";

export function ChallengeList() {
  const [challenges, setChallenge] = useState([]);


  useEffect(() => {
  
    ApiService().get().then((res) => setChallenge(res.data))
    .catch(error => console.log(error.response));
  });

  return (
    <ul>
      {challenges.map((challenge, index) => (
        <li key={index}>
          <ChallengeCard challenge={challenge} />
        </li>
      ))}
    </ul>
  );
}