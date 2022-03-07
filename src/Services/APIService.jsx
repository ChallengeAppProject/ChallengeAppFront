import axios from "axios";
import apiServer from "./Endpoint";

export async function getAllChallenges(){
    let data;
    try{
        data = await axios.get(apiServer + "/challenges").then((res) => res.data);
    } catch{
        console.error("error gettingAllChallenges")
    }

    return data;
}

export default getAllChallenges;