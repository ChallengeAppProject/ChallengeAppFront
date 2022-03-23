import { Link } from "react-router-dom";
import "./challengeCard.css";

export function ChallengeCard({ challenge }) {
  return (
    <div className="card-container">
      <Link
        to={`/challenges/${challenge.id}/questions`}
        className="challenge-container"
      >
        {challenge.name}
      </Link>
    </div>
  );
}
