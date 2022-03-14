import axios from "axios";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export const ApiService = () => {
    let baseUrl = "http://localhost:8080";
    let urlChallenges = "/challenges";
    

    const get = async () => {
        const res = await axios.get(baseUrl + urlChallenges);
        return res;
    };

    const getQuestionsByChallengeID = async (id) => {
        const res = await axios.get(`${baseUrl}${urlChallenges}/${id}/questions`);
        return res;
    };

    return{
        get,
        getQuestionsByChallengeID,
    };
}



/*export async function getAllChallenges(){
    let data;
    try{
        data = await axios.get(apiServer + "/challenges").then((res) => res.data);
   
    } catch{
        console.error("error gettingAllChallenges")
    }

    return data;
} */

