import React, { useState, useEffect } from "react";
import { ApiService } from "../../../Services/APIService";
import { useNavigate, useParams } from "react-router-dom";
import "./CreateAnswer.css";
const initialForm = {
  challengeQuestion: "",
  imgUrl: "",
};

function CreateAnswer() {
  const [challenge, setChallenge] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState([]);

  let challengeById = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const challengeNew = challengeById.id;
    ApiService()
      .getChallengeById(challengeNew)
      .then((res) => setChallenge(res.data))

      .catch((error) => console.log(error.response));
  }, [challengeById.id]);

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
    const challengeId = challengeById.id;

    ApiService()
      .createQuestion(form, challengeId)
      .then((res) => {
        alert(res.data);
        console.log(res);
        setError([]);
      })
      .catch(
        (error) => {
          alert(`Error ${error}. Sorry, ${error}`);
          console.log(error.response);
          setError(error.response);
        },
        [challengeById.id]
      );
  };

  const getBack = (id) => {
    navigate("/challenges/:id/question");
  };

  return (
    <div>
      <div className="ct-form-create">
        <button className="bt-back" onClick={getBack}>
          Back
        </button>
        <h2>Question {challenge.name}</h2>
      </div>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-title">
                <h3 className="txt-title">Create an answer</h3>
                <p>Please fill the form for create an answer</p>
              </div>

              <div className="card-body">
                <form onSubmit={submitForm}>
                  <div className="form-group">
                    <label className="txt-label-form">Answer</label>
                    <input
                      type="text"
                      name="challengeQuestion"
                      onChange={handleChange}
                      value={form.challengeQuestion}
                      className="form-control"
                      required
                    />
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="check"
                        id="true"
                        value="true"
                        checked
                      />
                      <label className="form-check-label" for="true">
                        True
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="check"
                        id="false"
                        value="false"
                      />
                      <label className="form-check-label" for="false">
                        False
                      </label>
                    </div>
                  </div>
                  <span className="error-register">{error}</span>

                  <div className="form-group my-3">
                    <button type="submit" className="btnchll">
                      Create
                    </button>
                    <button
                      type="reset"
                      className="btnchll"
                      onClick={handleReset}
                    >
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

export default CreateAnswer;