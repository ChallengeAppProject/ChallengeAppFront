import React, { useState } from "react";
import { signup } from "../../Services/APIService";
import {login} from "../../Services/APIService";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "./RegisterForm.css";
import { useUser } from "./AuthProvider";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { setUser } = useUser();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      await signup({
        username,
        email,
        password,
      });

      const { data } = await login({ username, password });

      setUser({
        id: data.id,
        username: data.username,
        email: data.email,
      });

      localStorage.setItem("auth_token", data.accessToken);

      navigate("/", { replace: true });
      swal({
        title: "Register complete",
        text: "click 'ok' to start in ChallengeApp",
        icon: "success",
      });
    } catch (error) {
      swal({
        title: "Password not allowed",
        text: "MUST contain at least 8 characters (12+ recommended)",
        icon: "warning",
      });
    }
  };


  return (
    <div className="form_main_register">
      <div className="form_container_register">
        <div className="title_register">
          <p className="rf-titleform">REGISTER</p>
        </div>
        <div className="form_register_info">
          <form className="form_register_information" onSubmit={submit}>
            <label className="form_label_register" htmlFor="username">
              Name
            </label>
            <input
              className="inputRegisterForm"
              id="name"
              type="text"
              placeholder="Choose your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label className="form_label_register" htmlFor="email">
              Email
            </label>
            <input
              className="inputRegisterForm"
              type="email"
              placeholder="What is your email?"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="form_label_register" htmlFor="password">
              Password
            </label>
            <input
              className="inputRegisterForm"
              type="password"
              placeholder="Choose a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="btn_form_register" type="submit">
              Register
            </button>
            <p className="rf-link">
              <Link to="/login" className="rf-link-a" href="#">
                ¿Are you already registered?
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default RegisterForm;