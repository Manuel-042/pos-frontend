import styles from "./AuthPages.module.css";
import React, { useContext } from "react";
import axios from "axios";
import { CartContext } from "../../../helper/context";

const Logout = (props) => {
  const { setLogin, setIsAdmin } = useContext(CartContext);

  let handleLogout = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get("http://localhost/CI/register/logout", {
        withCredentials: true,
      });
      console.log(response.data);
      if (response) {
        setLogin(false);
        setIsAdmin(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={handleLogout} type={props.type} className={styles.logout}>
      {props.children}
    </button>
  );
};

export default Logout;
