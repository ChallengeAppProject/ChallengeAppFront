import React from "react";
import "./LoginUsers.css";
import { useUser } from "./AuthProvider";
import {login} from "../../Services/APIService";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../Assets/LogoChallengeApp.png";
import swal from "sweetalert";

const LoginUsers = () => {
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const { setUser } = useUser();
  const navigate = useNavigate();

  const submit = async (e) => {
    try {
      e.preventDefault();

      const { data } = await login({ username, password });

      setUser({
        id: data.id,
        username: data.username,
        email: data.email,
      });

      localStorage.setItem("auth_token", data.accessToken);

      navigate("/challenges", { replace: true });
    } catch (error) {
      console.log( error.message );
      swal({
        title: "User not found or password incorrect",
        text: "Try again please",
        icon: "warning",
      });
    }
  };

  return (
    <div className="login_container">
      <div className="login_card">
        <h1>Login to ChallengeApp</h1>
        <form className="form_login" onSubmit={submit}>
          <div className="form_login-name">
            <label className="label_login" htmlFor="">
              Name:{" "}
            </label>
            <input
              className="input_login"
              type="text"
              onChange={ ( e ) => setUsername( e.target.value ) }
              required
            />
          </div>

          <div className="form_login-password">
            <label className="label_login" htmlFor="">
              Password:{" "}
            </label>
            <input
              className="input_login"
              
              type="password"
              onChange={ ( e ) => setPassword( e.target.value ) }
              required
            />
          </div>
          <button to="/challenges" className="btn_form_login" type="submit">
            Login
          </button>
        </form>
        
       
        <img
          className="login_img"
          src={logo}
          alt="logo"
        />
        <Link to="/register">Not registered?</Link>
      </div>
    </div>
  );
};
export default LoginUsers;