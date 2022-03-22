import { useState, useEffect } from "react";
import { ApiService } from "../../../Services/APIService";
import { QuestionCard } from "../../Molecules/QuestionCard/QuestionCard";
import { useParams } from "react-router-dom";
import Navbar from "../../Molecules/Header/Navbar";
import Footer from "../../Molecules/Footer/Footer";
import { useNavigate } from "react-router-dom";

export function QuestionList() {
  const [questions, setQuestions] = useState([]);

  let challengeId = useParams();



  //ApiService()
  //.getChallengeById(challengeId)
 

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    const idParams = challengeId.id;

    let path = `/challenges/${idParams}/questions/totalScore`; 
    navigate(path);
  }

  useEffect(() => {
    const paramsId = challengeId.id;
    //console.log(paramsId);
    ApiService()
      .getQuestionsByChallengeID(paramsId).then((res) => setQuestions(res.data))
      .catch(error => console.log(error.response));
  },[challengeId.id]);

  return (
    <div>
      <Navbar/>
  
    
      {questions.map((question, index) => (
        <li key={index}>
          <QuestionCard question={question} />
        </li>
      ))}

      <button onClick={routeChange}>Get total Score</button>
    
 
    <Footer/>
    </div>
  );
}
