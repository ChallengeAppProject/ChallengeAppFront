import React, { useState, useEffect, useCallback } from "react";
import { ApiService } from "../../../Services/APIService";
import { useNavigate, useParams } from "react-router-dom";
import "./CreateAnswer.css";
const initialForm = {
  textAnswer: "",
  correctAnswer: "",
};

function CreateAnswer() {
  const [question, setQuestion] = useState([]);
  const [challenge, setChallenge] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState([]);

  const challengeName = question.challengeId;

  let questionById = useParams();
  let navigate = useNavigate();

  const getChallengeById = useCallback(() => {
    ApiService()
      .getChallengeById(challengeName)
      .then((res) => setChallenge(res.data))
      .catch((error) => console.log(error.response));
  }, [challengeName]);

  useEffect(() => {
    const questionNew = questionById.id;

    ApiService()
      .getQuestionById(questionNew)
      .then((res) => setQuestion(res.data))
      .catch((error) => console.log(error.response));
    getChallengeById();
  }, [questionById.id, getChallengeById]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeBoolean = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.id,
    });
  };

  const handleReset = (e) => {
    setForm([]);
    setError([]);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const questionId = questionById.id;

    ApiService()
      .createAnswer(form, questionId)
      .then((res) => {
        console.log(res);
        alert("New answer created");
        setError([]);
        setForm(initialForm);
      })
      .catch(
        (error) => {
          alert(` Sorry, ${error}`);
          setError(error.response);
        },
        [questionById.id]
      );

    // navigate( "/questions/" + `${ question.id }` + "/answer" ); No va :P
  };
  console.log(form);

  const getBack = (id) => {
    navigate("/challenges/" + `${question.challengeId}` + "/question");
  };

  return (
    <div>
      <div className="ct-form-create">
        <button className="bt-back-new" onClick={getBack}>
          Create a new question
        </button>
        <h2>Challenge: {challenge.name}</h2>
        <h2>Question: {question.challengeQuestion}</h2>
      </div>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-title">
                <h3 className="txt-title">Create an answer</h3>
                <p>Please fill the form to create an answer</p>
              </div>

              <div className="card-body">
                <form onSubmit={submitForm}>
                  <div className="form-group">
                    <label className="txt-label-form">Answer</label>
                    <input
                      type="text"
                      name="textAnswer"
                      placeholder="Write answer here"
                      onChange={handleChange}
                      value={form.textAnswer}
                      className="form-control"
                      required
                    />
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="correctAnswer"
                        onClick={handleChangeBoolean}
                        id="true"
                        value="1"
                      />
                      <label className="form-check-label">
                        Select this to create a TRUE answer
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="correctAnswer"
                        onClick={handleChangeBoolean}
                        id="false"
                        value="0"
                      />
                      <label className="form-check-label">
                        Select this to create a FALSE answer
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
