import React, { useState, useEffect } from "react";
import { ApiService } from "../../../Services/APIService";
import { useNavigate, useParams } from "react-router-dom";
import "./CreateAnswer.css";
const initialForm = {
  textAnswer: "",
  correctAnswer: "false",
};

function CreateAnswer() {
  const [ question, setQuestion ] = useState( [] );
  
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState([]);

  let questionById = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const questionNew = questionById.id;
    ApiService()
      .getQuestionById(questionNew)
      .then((res) => setQuestion(res.data))

      .catch((error) => console.log(error.response));
  }, [questionById.id]);

  const handleChange = (e) => {
    e.persist();
    console.log( e );
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleChangeBoolean = (e) => {
    e.persist();
    console.log( e );
    setForm({
      ...form,
      [e.target.name]: e.target.id
    });
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setError([]);
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(e)
    const questionId = questionById.id;

    ApiService()
      .createAnswer(form, questionId)
      .then((res) => {
        alert("New answer created");
        console.log(res);
        setError([]);
      })
      .catch(
        (error) => {
          alert(` Sorry, ${error}`);
          console.log(error.response);
          setError(error.response);
        },
        [questionById.id]
    ); setForm( initialForm );
  };



  const getBack = (id) => {
    navigate( "/challenges/" +`${question.id}`+"/question");
  };

  return (
    <div>
      <div className="ct-form-create">
        <button className="bt-back" onClick={getBack}>
          Back
        </button>
        <h2>Question: {question.challengeQuestion}</h2>
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
                      name="textAnswer"
                      onChange={handleChange}
                      value={form.answerText}
                      className="form-control"
                      required
                    />
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="correctAnswer"
                        onChange={handleChangeBoolean}
                        id="true"
                        value="1"
                  
                      />
                      <label className="form-check-label">
                        True
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="correctAnswer"
                        id="false"
                        value="0"
                      
                      />
                      <label className="form-check-label">
                        False
                      </label>
                    </div>
                  </div>
                  {/* <span className="error-register">{error}</span> */}

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
