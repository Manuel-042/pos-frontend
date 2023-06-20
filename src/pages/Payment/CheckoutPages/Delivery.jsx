import React from "react";
import styles from "../Payment.module.css";
import { useContext } from "react";
import { CartContext } from "../../../helper/context";
import { useState } from "react";

const Delivery = (props) => {
  const [deliveryData, setDeliveryData] = useState({
    deliveryMethod: "",
  });
  const { setDelivery } = useContext(CartContext);
  console.log(deliveryData);

  const deliveryMethodHandler = (event) => {
    const { value, name } = event.target;
    setDeliveryData({
      [name]: value,
    });
  };

  const handleDelivery = (event) => {
    event.preventDefault();
    console.log("i ran");
    props.check((prev) => {
      return { ...prev, deliveryMethod: true };
    });
    props.addToForm((prev) => {
      return { ...prev, ...deliveryData };
    });
    setTimeout(() => {
      setDelivery(true);
    }, 500);
    console.log("delivered");
  };

  const disabled = deliveryData.deliveryMethod === "" && true;

  return (
    <form name="form" id="form" onSubmit={handleDelivery}>
      <div className={styles.pick}>
        <input
          type="radio"
          name="deliveryMethod"
          id="pick"
          value="pickup_delivery"
          checked={deliveryData.deliveryMethod === "pickup_delivery"}
          onChange={deliveryMethodHandler}
        />
        <label htmlFor="pick">Pickup at Station</label>
        <div className={styles["desc"]}>
          <p>Pick up time starts at 8:00am and ends by 3pm.</p>
        </div>
      </div>
      <div className={styles.home}>
        <input
          type="radio"
          name="deliveryMethod"
          id="home"
          value="home_delivery"
          checked={deliveryData.deliveryMethod === "home_delivery"}
          onChange={deliveryMethodHandler}
        />
        <label htmlFor="home">Home Delivery</label>
        <div className={styles["desc"]}>
          <p>Extra Charges included</p>
        </div>
      </div>
      <button
        type="submit"
        className={`${styles.addressBtn} ${styles.delivery}`}
        disabled={disabled}
      >
        select
      </button>
    </form>
  );
};

export default Delivery;
