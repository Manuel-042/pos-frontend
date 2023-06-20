import React, { useState } from "react";
import styles from "../AuthPages/AuthPages.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const navigate = useNavigate();

  const [FormData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirm: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost/CI/register/create",
        FormData,
        { withCredentials: true }
      );
      console.log(response);
      response && navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className={styles.login}>Create a new account</h1>

      <form
        name="form-create"
        id="form-create"
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <input
          type="text"
          placeholder="firstname"
          name="first_name"
          onChange={handleInputChange}
          value={FormData.first_name}
        />
        <input
          type="text"
          placeholder="lastname"
          name="last_name"
          onChange={handleInputChange}
          value={FormData.last_name}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleInputChange}
          value={FormData.email}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleInputChange}
          value={FormData.password}
        />
        <input
          type="password"
          placeholder="confirm password"
          name="password_confirm"
          onChange={handleInputChange}
          value={FormData.password_confirm}
        />
        <button type="submit" className={styles.button}>
          Create account
        </button>
      </form>

      <p className={styles.txt}>Sign in with:</p>
      <div className={styles.actions}>
        <div className={styles.sign}>
          <button className={styles.google}>Google</button>
        </div>
        <div className={`${styles.sign} ${styles.pdiv}`}>
          <button className={styles.prime}>Prime</button>
        </div>
      </div>
    </>
  );
};

export default Create;
