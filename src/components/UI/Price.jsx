import styles from "./Price.module.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../helper/context";
//import Slider from "@mui/material/Slider";

const Price = () => {
  const { newProducts, price, filterPrice } = useContext(CartContext);

  let MaxPrice = 0;
  let MinPrice = 0;

  const uniquePriceArr = [];

  newProducts.map((product) => {
    if (!uniquePriceArr.includes(product.price)) {
      uniquePriceArr.push(product.price);
    }
  });

  MaxPrice = Math.max(...uniquePriceArr);
  MinPrice = Math.min(...uniquePriceArr);
  console.log(MinPrice, MaxPrice);

  return (
    <div className={styles["price-range"]}>
      <div className={styles.price}>price: ${price}</div>
      <input
        type="range"
        min={MinPrice}
        max={MaxPrice}
        value={price}
        onChange={filterPrice}
      />
    </div>
  );
};

export default Price;

{
  /* <div className={styles["price-input"]}>
  <div className={styles.field}>
    <span>min</span>
    <input type="number" className={styles["input-min"]} value="2500" />
  </div>
  <div className={styles.seperator}>-</div>
  <div className={styles.field}>
    <span>max</span>
    <input type="number" className={styles["input-max"]} value="7500" />
  </div>
</div>; */
}
