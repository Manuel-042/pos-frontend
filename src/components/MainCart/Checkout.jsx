import styles from "./Checkout.module.css";
import { CartContext } from "../../helper/context";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const tax = 0;
  const subtotal = cart.totalAmount;
  const hasItems = cart.item.length > 0;

  // const handleCoupon = (event) => {
  //   setCoupon(event.target.value);
  // };

  // const addDiscount = (e) => {
  //   e.preventDefault();
  //   if (coupon === "XAMPP") {
  //     setDiscount(50);
  //   }
  // };

  const checkUserStatus = () => {
    axios
      .get("http://localhost/CI/register/isLoggedIn", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then(function (response) {
        console.log("ress in checkout", response);
        if (response.data.loggedIn) {
          navigate("/payment");
        } else {
          navigate("/auth/login");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <section className={styles.checkout}>
      <div className={styles.summary}>
        <h3>Cart Summary</h3>
      </div>
      {/* <form className={styles.form} onSubmit={addDiscount}>
        <input
          type="text"
          value={coupon}
          name="coupon"
          onChange={handleCoupon}
          placeholder="Add Coupon Code"
          className={styles.input}
        />
        <button className={styles.addBtn}>Add</button>
      </form> */}
      <div className={styles.amount}>
        <p>
          Subtotal <span>${subtotal.toFixed(2)}</span>
        </p>
        <p className={styles.total}>
          Total <span>{subtotal.toFixed(2)}</span>
        </p>
        {hasItems && (
          <button className={styles.button} onClick={checkUserStatus}>
            Checkout
          </button>
        )}
        <Link to="/" className={styles.shop}>
          Continue Shopping
        </Link>
      </div>
    </section>
  );
};

export default Checkout;
