import styles from "./MainCartItem.module.css";
import React from "react";
import delbtn from "../../assets/delete.svg";

const MainCartItem = (props) => {
  // console.log(props);
  // console.log("name", props.name);
  return (
    <>
      <div className={styles.order}>
        <img src={props.image} alt="polo" />
        <div>
          <p className={styles["order-title"]}>{props.name}</p>
          <p className={styles["order-amount"]}>${props.price}</p>
        </div>

        <span className={styles["order-quantity"]}>{props.amount}</span>

        <div className={styles["del-container"]} onClick={props.onRemove}>
          <img src={delbtn} alt="delete" />
        </div>
      </div>
    </>
  );
};

export default MainCartItem;
