import { ApiService } from "../Services/APIService";
import React, { useState, useEffect } from 'react';

export default function Prueba(){

const [challenge, setChallenge] = useState([]);

let api = ApiService();

useEffect(() => {
    api.get().then(res => {
        console.log(res.data);
    })
});

return(
    <div>

    </div>
    );  
}