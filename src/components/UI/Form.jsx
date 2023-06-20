import styles from "./Form.module.css";
import searchIcon from "../../assets/vector.svg";
import { CartContext } from "../../helper/context";
import React, { useContext } from "react";

const Form = () => {
  const { search, handleSearch } = useContext(CartContext);
  console.log(search);

  return (
    <form onSubmit={handleSearch} className={styles.form}>
      <input
        type="text"
        placeholder="search"
        name={search}
        value={search}
        onChange={handleSearch}
        className={styles.input}
      />
      <button type="submit">
        <img className={styles.icon} src={searchIcon} />
      </button>
    </form>
  );
};

export default Form;
