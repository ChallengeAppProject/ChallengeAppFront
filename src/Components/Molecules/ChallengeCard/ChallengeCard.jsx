import { Link } from "react-router-dom";

export function ChallengeCard({ challenge }){
    return (
      <div className="card-container">

            <Link to={`/challenges/${challenge.id}/questions`}>{challenge.name}</Link>
        
      </div>
    );
}
