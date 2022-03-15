import React, { useState } from "react";
import { ApiService } from "../../../Services/APIService";
import { useNavigate, useParams } from "react-router-dom";
import back from "../../../Assets/backArrow.png";

const initialForm = {
  challengeQuestion: "",
  imgUrl: "",
};

function CreateQuestion() {
  let challengeId = useParams();

  const [form, setForm] = useState(initialForm);
  /* const [error, setError] = useState([]); */

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
    /* setError([]); */
  };

  const submitForm = (e) => {
    e.preventDefault();
    const paramsId = challengeId.id;
    console.log(paramsId);
    api
      .createQuestion(form, paramsId)
      .then((res) => {
        alert(res.data);
        console.log(res);
        /* setError([]); */
        navigate("/challenges");
      })
      .catch((error) => {
        alert(
          `Error ${error.response.status}. Sorry, ${error.response.statusText}`
        );
        /* setError( error.response.data.msg );
                console.log(error, error.name) */
      },[paramsId]);
  };

  const getBack = () => {
    navigate("/challenges");
  };

  return (
    <div>
      <div className="ct-form-create">
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
                  {/* <span className="error-register">{ error.name }</span> */}

                  <div className="form-group my-3">
                    <button type="submit" className="bt-form-send">
                      Create
                    </button>
                    <button
                      type="reset"
                      className="bt-form-reset"
                      onClick={handleReset}>
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
