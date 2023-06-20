import styles from "./MainCart.module.css";
import MainCartItem from "./MainCartitem";
import Checkout from "./Checkout";
import { CartContext } from "../../helper/context";
import React, { useContext } from "react";
export default function MainCart() {
  const { cart } = useContext(CartContext);

  const removeItemFromCart = (id) => {
    cart.removeItem(id);
  };

  return (
    <div className={styles.layout}>
      <h3 className={styles.title}>
        You have <span>{cart.item.length}</span> items in your Cart
      </h3>
      <div className={styles.cart}>
        <div className={styles["order-list"]}>
          {cart.item.map((cartItem) => (
            <MainCartItem
              key={cartItem.id}
              id={cartItem.id}
              image={cartItem.image}
              name={cartItem.name}
              price={cartItem.price}
              amount={cartItem.quantity}
              onRemove={removeItemFromCart.bind(null, cartItem.id)}
            />
          ))}
        </div>
        <Checkout />
      </div>
    </div>
  );
}
