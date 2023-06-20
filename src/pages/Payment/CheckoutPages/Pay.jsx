import React, { useEffect } from "react";
import styles from "../Payment.module.css";
import { useState } from "react";
import Card from "./card";

const Pay = (props) => {
  const [paymentMethod, setPaymentMethod] = useState({
    method: "",
  });
  const [isdropdown, setIsDropDown] = useState(false);

  const handlePaymentMethod = (event) => {
    event.preventDefault();
    props.check((prev) => {
      return {
        ...prev,
        paymentMethod: true,
      };
    });
    props.addToForm((prev) => {
      return { ...prev, ...paymentMethod };
    });
    props.setShow(true);
  };

  const PaymentMethodHandler = (event) => {
    const { value, name } = event.target;
    setPaymentMethod({
      [name]: value,
    });
  };

  const dropForm = () => {
    setIsDropDown((prev) => !prev);
  };

  const disabled = paymentMethod.method === "" && true;

  return (
    <form
      name="form"
      id="form"
      onSubmit={handlePaymentMethod}
      className={styles["pay-form"]}
    >
      <div className={styles["bank"]}>
        <input
          type="radio"
          id="bank"
          name="method"
          value="bank_transfer"
          checked={paymentMethod.method === "bank_transfer"}
          onChange={PaymentMethodHandler}
        />
        <label htmlFor="bank">Bank Transfer</label>
      </div>
      <div className={styles["cash"]}>
        <input
          type="radio"
          id="cash"
          name="method"
          value="cash_payment"
          checked={paymentMethod.method === "cash_payment"}
          onChange={PaymentMethodHandler}
        />
        <label htmlFor="cash">Cash on Delivery</label>
      </div>
      <div className={styles["card"]}>
        <input
          type="radio"
          id="card"
          name="method"
          value="card_payment"
          checked={paymentMethod.method === "card_payment"}
          onChange={PaymentMethodHandler}
          onClick={dropForm}
        />
        <label htmlFor="card">Card</label>

        {isdropdown && <Card />}
      </div>
      <div className={styles["credit"]}>
        <input
          type="radio"
          id="credit"
          name="method"
          value="credit_payment"
          checked={paymentMethod.method === "credit_payment"}
          onChange={PaymentMethodHandler}
        />
        <label htmlFor="credit">Credit</label>
      </div>

      <button type="submit" className={styles.addressBtn} disabled={disabled}>
        Submit
      </button>
    </form>
  );
};

export default Pay;
