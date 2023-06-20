import React, { useState } from "react";
import styles from "../AuthPages/AuthPages.module.css";

const Password = () => {
  const [FormData, setFormData] = useState({
    old_password: "",
    new_password: "",
    new_password_confirm: "",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost/CI/register/change_password",
        FormData,
        { withCredentials: true }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className={styles.login}>Create a new account</h1>

      <form
        onSubmit={handleSubmit}
        name="form-password"
        id="form-password"
        className={styles.form}
      >
        <input
          type="password"
          placeholder="old Password"
          name="old_password"
          onChange={handleFormChange}
          value={FormData.old_password}
        />
        <input
          type="password"
          placeholder="new Password"
          name="new_password"
          onChange={handleFormChange}
          value={FormData.new_password}
        />
        <input
          type="password"
          placeholder="confirm new Password"
          name="new_password_confirm"
          onChange={handleFormChange}
          value={FormData.new_password_confirm}
        />
        <button type="submit" className={styles.button}>
          Change Password
        </button>
      </form>
    </>
  );
};

export default Password;
