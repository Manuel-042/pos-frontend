import React, { useState } from "react";
import styles from "../AuthPages/AuthPages.module.css";

const Forgot = () => {
  const [email, setEmail] = useState("");

  const handleFormChange = (event) => {
    setEmail(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost/CI/register/forgot_password",
        email,
        { withCredentials: true }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className={styles.login}>Forgot Password?</h1>

      <p className={styles.forgot}>
        Enter in your email so we can mail you a password reset link.
      </p>

      <form
        onSubmit={handleSubmit}
        name="form-forgot"
        id="form-forgot"
        className={styles.form}
      >
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleFormChange}
          value={email}
        />
        <button type="submit" className={styles.button}>
          Forgot Password
        </button>
      </form>
    </>
  );
};

export default Forgot;
