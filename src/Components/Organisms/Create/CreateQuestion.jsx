import React, { useState, useEffect } from "react";
import { ApiService } from "../../../Services/APIService";
import { useNavigate, useParams } from "react-router-dom";
import "./CreateQuestion.css";
import { QuestionCard } from "../../Molecules/QuestionCard/QuestionCard";

const initialForm = {
  challengeQuestion: "",
  imgUrl: "",
};

function CreateQuestion() {
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
          alert( "New question created" );
          navigate("/questions/" + `${res.data.id}` + "/answer");
        console.log(res);
        setError([]);
      })
      .catch(
        (error) => {
          alert(`Sorry, ${error}`);
          console.log(error.response);
          setError(error.response);
        },
        [challengeById.id]
      );setForm(initialForm)
  };

  const getBack = () => {
    navigate("/create/challenge");
  };

  return (
    <div>
      <div className="ct-form-create">
        <button className="bt-back" onClick={getBack}>
          Back
        </button>
        <h2> {challenge.name} Challenge </h2>
      </div>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-title">
                <h3 className="txt-title">Create a Question</h3>
                <p>Please fill the form for create a question</p>
              </div>

              <div className="card-body">
                <form onSubmit={submitForm}>
                  <div className="form-group">
                    <label className="txt-label-form">Question</label>
                    <input
                      type="text"
                      name="challengeQuestion"
                      onChange={handleChange}
                      value={form.challengeQuestion}
                      className="form-control"
                      required
                    />
                    <label className="txt-label-form">Image</label>
                    <input
                      type="text"
                      name="imgUrl"
                      onChange={handleChange}
                      value={form.imgUrl}
                      className="form-control"
                    />
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
                              {/* <QuestionCard/> */}
                    
                          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateQuestion;
