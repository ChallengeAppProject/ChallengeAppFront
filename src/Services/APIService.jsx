import axios from "axios";
axios.defaults.baseURL="http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "*/*";

export const ApiService = () => {
  let baseUrl = "http://localhost:8080";
  let urlChallenges = "/challenges";
  let urlQuestions = "/questions";

  const get = async () => {
    const res = await axios.get(baseUrl + urlChallenges);
    return res;
  };

  const getQuestionsByChallengeID = async (id) => {
    const res = await axios.get(`${urlChallenges}/${id}/questions`);
    return res;
  };
  const getAnswersByQuestionID = async (id) => {
    const res = await axios.get(`${urlQuestions}/${id}/answers`);
    return res;
  };
  //ADMIN SERVICE
  const createChallenge = async (data) => {
    const res = await axios.post( urlChallenges, data);
    console.log(data);
    return res;
  };

  return {
    get,
    getQuestionsByChallengeID,
    getAnswersByQuestionID,
    createChallenge,
  };
};

/*export async function getAllChallenges(){
    let data;
    try{
        data = await axios.get(apiServer + "/challenges").then((res) => res.data);
   
    } catch{
        console.error("error gettingAllChallenges")
    }

    return data;
} */
