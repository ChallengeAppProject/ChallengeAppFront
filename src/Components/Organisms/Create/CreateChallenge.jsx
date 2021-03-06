import React, { useState } from "react";
import { ApiService } from "../../../Services/APIService";
import { useNavigate } from "react-router-dom";
import "./CreateChallenge.css";

const initialForm = {
  name: "",
};

function CreateChallenge() {
  const [form, setForm] = useState(initialForm);

  const [error, setError] = useState([]);

  let navigate = useNavigate();
  let api = ApiService();

  const handleChange = (e) => {
    e.persist();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setError([]);
  };

  const submitForm = (e) => {
    e.preventDefault();

    api
      .createChallenge(form)
      .then((res) => {
        alert("New challenge created");
        console.log(res);
        navigate("/challenges/" + `${res.data.id}` + "/question");
        setError([]);
      })
      .catch((error) => {
        alert(`Sorry, ${error}`);
        setError( error);
            console.log(error)
      });setForm(initialForm)
  };

  const getBack = () => {
    navigate("/adminlanding");
  };

  return (
    <div className="createChallengeContainer">
      <div className="ct-form-create"></div>
      <button className="bt-back" onClick={getBack}>
        Back
      </button>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-title">
                <h3>Create a new Challenge</h3>
                <p> Please fill the form for create a Challenge</p>
              </div>
              <div className="card-body">
                <form onSubmit={submitForm}>
                  <div className="form-group">
                    <label className="txt-label-form">Title</label>
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      value={form.name}
                      className="form-control"
                      required
                    />
                  </div>
                  <span className="error-register">{ error}</span>

                  <div className="form-group my-3">
                    <button type="submit" className="btnchll">
                      Create
                    </button>
                    <button
                      type="reset"
                      className="btnchll"
                      onClick={handleReset}>
                      Clear
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateChallenge;
