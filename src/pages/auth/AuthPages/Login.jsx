import React, { useState, useContext, useEffect } from "react";
import styles from "../AuthPages/AuthPages.module.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../helper/context";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [FormData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleFormChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const { setForgotPassword, setLogin, login, setAccountName, setIsAdmin } =
    useContext(CartContext);

  const handleForgotPassword = () => {
    setForgotPassword(true);
  };

  const handleLogin = () => {
    console.log("i ran");
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios
        .post("http://localhost/CI/register/login", FormData, {
          withCredentials: true,
        })
        .then((response) => {
          console.log(response);
          console.log(response.data);
          if (response) {
            setLogin(true);
            setAccountName(response.data.userId.first_name);
            navigate("/");
          }
          if (response.data.admin) {
            setIsAdmin(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
      console.log("something happened");
    }
  };

  return (
    <>
      <h1 className={styles.login}>Login into your account</h1>

      <form
        onSubmit={handleSubmit}
        name="form-login"
        id="form-login"
        className={styles.form}
      >
        <input
          type="email"
          placeholder="enter your email"
          name="email"
          onChange={handleFormChange}
          value={FormData.email}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleFormChange}
          value={FormData.password}
        />
        <button
          type="button"
          onClick={handleForgotPassword}
          className={styles.link}
        >
          forgot password?
        </button>
        <div>
          <input
            type="checkbox"
            name="remember"
            id="remember"
            onChange={handleFormChange}
            value={FormData.checkbox}
          />
          <label htmlFor="remember">remember me?</label>
        </div>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>

      <p className={styles.txt}>Don't have an account? </p>
      <div className={styles.actions}>
        <div className={styles.sign}>
          <button className={styles.prime} onClick={handleLogin}>
            Sign up
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
