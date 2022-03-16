import React, { useState, useEffect } from "react";
import { ApiService } from "../../../Services/APIService";
import { useNavigate, useParams } from "react-router-dom";
import back from "../../../Assets/backArrow.png";

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

  const getBack = () => {
    navigate("/createChallenge");
  };

  return (
    <div>
      <div className="ct-form-create">
        <h2 className="txt-title">{challenge.name}</h2>
        <h3 className="txt-title">Create a new Question</h3>
        <button className="bt-back" onClick={getBack}>
          <img className="ico-back" src={back} alt="back button" />
        </button>
      </div>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h5 className="txt-title-form">
                  Please fill the form for create a Question
                </h5>
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
                    />
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
                    <button type="submit" className="bt-form-send">
                      Create
                    </button>
                    <button
                      type="reset"
                      className="bt-form-reset"
                      onClick={handleReset}
                    >
                      Cancel
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

export default CreateQuestion;
