import styles from "./ProductDetails.module.css";
import { CartContext } from "../../helper/context";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
import { useEffect } from "react";

const ProductDetails = () => {
  const [input, setInput] = useState("");
  const { products, cart } = useContext(CartContext);
  const { productId } = useParams();

  function isCherries(product) {
    return product.id == productId;
  }

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const item = products.find(isCherries);
  //console.log("in product details", item);
  const { price, name, image, description, category } = item || undefined;

  //console.log("in product details", products);
  const addToCart = async (amount) => {
    if (amount > 0) {
      cart.addItem({
        id: productId,
        name: name,
        quantity: amount,
        price: price,
        image: image,
      });

      const data = {
        quantity: amount,
        product_id: productId,
      };

      console.log("data =", data);

      try {
        const response = await axios.post(
          "http://localhost/CI/register/cart",
          data,
          {
            withCredentials: true,
          }
        );
        if (response) {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log("omo", error.response.data);
      }
    }
  };

  const increaseBtnHandler = () => {
    let currentValue = +input;
    let newValue = currentValue + 1;
    setInput(newValue);
  };

  const decreaseBtnHandler = () => {
    if (input > 0) {
      let currentValue = +input;
      let newValue = currentValue - 1;
      setInput(newValue);
    }
  };

  const disabled = input === "" || (input === 0 && true);
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles["image-wrapper"]}>
          <img src={image} className={styles.image} />
        </div>
        <div className={styles["product-details"]}>
          <p className={styles.category}>{category}</p>
          <p className={styles.title}>{name}</p>
          <p className={styles.price}>${price}</p>
          <p className={styles.description}>{description}</p>

          <div className={styles.rapper}>
            <button
              className={styles["rapper-btn"]}
              onClick={decreaseBtnHandler}
            >
              <img src={minus} alt="decrease quantity" />
            </button>

            <div className={styles.quantity}>
              <input
                type="number"
                value={input}
                onChange={handleInput}
                className={styles.amount}
              />
            </div>

            <button
              className={`${styles["rapper-btn"]} ${styles.plus}`}
              onClick={increaseBtnHandler}
            >
              <img src={plus} alt="increase quantity" />
            </button>
          </div>

          <div className={styles.action}>
            <button
              className={`${styles.cart} ${styles.button}`}
              onClick={() => addToCart(input)}
              disabled={disabled}
            >
              Add to Cart
            </button>
            <Link to="/" className={`${styles.shop} ${styles.button}`}>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
