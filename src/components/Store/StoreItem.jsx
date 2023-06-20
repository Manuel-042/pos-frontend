import styles from "./StoreItem.module.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const StoreItem = (props) => {
  return (
    <>
      <Link to={`/products/${props.id}`}>
        <div className={styles.item}>
          <div className={styles["image-div"]}>
            <img src={props.image} className={styles.image} loading="lazy" />
          </div>
          <div className={styles.description}>
            <p className={styles.title}>{props.name}</p>
            <p className={styles.amount}>
              $<span>{props.price}</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default StoreItem;
