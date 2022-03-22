import { useState, useEffect } from "react";
import { ApiService } from "../../../Services/APIService";
import { ChallengeCard } from "../../Molecules/ChallengeCard/ChallengeCard";
import "./ChallengeList.css";
import background from "../../../Assets/ChallengeAppLogo.png";

export function ChallengeList() {
  const [challenges, setChallenge] = useState([]);

  useEffect(() => {
    ApiService()
      .get()
      .then((res) => setChallenge(res.data))
      .catch((error) => console.log(error.response));
  }, []);

  return (
    <div className="background-challenges">
      <div
        className="presentation"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="welcome-title">
          {/*  <h1>Welcome to Challenge App</h1>
        </div>
        <div className="welcome-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            ab, iure facere sunt, doloribus asperiores ipsam quibusdam, quaerat
            quasi eius perferendis officiis alias omnis provident! Officia
            aspernatur ipsam minima cum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Tempora perspiciatis iusto, delectus nobis aliquid
            quam aliquam repellat pariatur vel provident rerum aspernatur
            inventore ullam laboriosam nam ducimus voluptates eum ad!
          </p> */}
        </div>
      </div>
      <ul className="challengeIndexContainer">
        {challenges.map((challenge, index) => (
          <li className="card w-50" key={index}>
            <ChallengeCard challenge={challenge} />
          </li>
        ))}
      </ul>
    </div>
  );
}
