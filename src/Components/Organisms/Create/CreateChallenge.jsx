import React, { useState } from "react";
import { ApiService } from "../../../Services/APIService";
import { useNavigate } from "react-router-dom";
import burguer from "../../../Assets/burguer.png"

const initialForm = {
    name: ''
    
};

function CreateChallenge() {

    const [form, setForm] = useState(initialForm);
    /* const [error, setError] = useState([]); */

    let navigate = useNavigate();
    let api = ApiService();

    const handleChange = (e) => {
        e.persist();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };


    const handleReset = (e) => {
        setForm(initialForm);
        /* setError([]); */
    };

    const submitForm = (e) => {
        e.preventDefault();
        


        api.createChallenge(form).then((res) => {
            alert( res.data );
            console.log( res );
            /* setError([]); */
            navigate('/challenges');
        }).catch((error) => {
            alert(`Error ${error.response.status}. Sorry, ${error.response.statusText}`)
            /* setError( error.response.data.msg );
            console.log(error, error.name) */
        })            
    };

    const getBack = () => {
        navigate('/challenges');
    };
    
    return (
        <div>
            <div className="ct-form-create">
                <h3 className='txt-title'>Create a new Challenge</h3>
                <button className="bt-back" onClick={getBack}><img className="ico-back" src={burguer} alt="back button" /></button>
            </div>
            <div className='container py-5'>
                <div className='row justify-content-center'>
                    <div className='col-lg-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h5 className='txt-title-form'>Please fill the form for create a Challenge</h5>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={submitForm}>
                                    <div className='form-group'>
                                        <label className='txt-label-form'>Title</label>
                                        <input type="text" name='name' onChange={handleChange} value={form.name} className='form-control' />
                                    </div>
                                    {/* <span className="error-register">{ error.name }</span> */}

                                    <div className='form-group my-3'>
                                        <button type='submit' className='bt-form-send'>Create</button>
                                        <button type="reset" className='bt-form-reset' onClick={handleReset}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateChallenge;