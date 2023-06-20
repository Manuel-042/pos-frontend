import React, { useContext } from "react";
import styles from "./OrderSummary.module.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../helper/context";
import Delivery from "./CheckoutPages/Delivery";

const OrderSummary = (props) => {
  const { cart } = useContext(CartContext);
  const classes = `${styles.pay} ${props.show ? styles.show : ""}`;
  const subtotal = cart.totalAmount;
  const deliveryPrice = 0;
  const voucherPrice = 0;
  const total = subtotal + deliveryPrice - voucherPrice;
  return (
    <section className={styles.order}>
      <div className={styles.summary}>
        <h3>Order Summary</h3>
      </div>
      <div className={styles["cart-display"]}>
        {cart.item.map((cartItem) => (
          <div className={styles["order-items"]}>
            <div>{cartItem.name}</div>
            <div>{cartItem.quantity} items</div>
          </div>
        ))}
      </div>
      <form className={styles.form}>
        <input
          type="text"
          name="voucher"
          placeholder="Add Voucher"
          className={styles.input}
        />
        <button className={styles.addBtn}>Apply</button>
      </form>
      <div className={styles.amount}>
        <p>
          Subtotal <span>${subtotal}</span>
        </p>
        <p>
          Delivery <span>$0</span>
        </p>
        <p className={styles.total}>
          Total <span>${total}</span>
        </p>

        <button className={styles.button}>
          <Link to="/" className={classes}>
            Pay
          </Link>
        </button>
      </div>
    </section>
  );
};

export default OrderSummary;
