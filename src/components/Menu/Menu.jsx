import styles from "./Menu.module.css";
import Button from "../UI/Button";
import { useContext } from "react";
import Select from "../UI/Select";
import Price from "../UI/Price";
import { CartContext } from "../../helper/context";

const Menu = (props) => {
  const { brand, handleChange } = useContext(CartContext);

  console.log(brand);

  return (
    <div className={styles.wrapper}>
      <div className={styles.products}>
        <p className={styles.title}>Brands</p>

        <ul className={styles["product-drop-list"]}>
          <li>
            <label htmlFor="all">
              <input
                type="radio"
                id="all"
                value="All Brands"
                name={brand}
                onChange={handleChange}
                defaultChecked
              />
              All Brands
            </label>
          </li>
          <li>
            <label htmlFor="premium">
              <input
                type="radio"
                id="premium"
                value="Premium"
                name={brand}
                onChange={handleChange}
              />
              Premium
            </label>
          </li>
          <li>
            <label htmlFor="asp">
              <input
                type="radio"
                id="asp"
                value="Asp. Premium"
                name={brand}
                onChange={handleChange}
              />
              Asp Premium
            </label>
          </li>
          <li>
            <label htmlFor="vfm">
              <input
                type="radio"
                id="vfm"
                value="VFM"
                name={brand}
                onChange={handleChange}
              />
              VFM
            </label>
          </li>
          <li>
            <label htmlFor="ryo">
              <input
                type="radio"
                id="ryo"
                value="RYO"
                name={brand}
                onChange={handleChange}
              />
              RYO
            </label>
          </li>
          <li>
            <label htmlFor="low">
              <input
                type="radio"
                id="low"
                value="LOW"
                name={brand}
                onChange={handleChange}
              />
              LOW
            </label>
          </li>
        </ul>
      </div>

      <div className={styles.price}>
        <p className={styles.title}>Price</p>
        <Price />
      </div>

      <div className={styles.sort}>
        <p className={styles.title}>Sort</p>
        <Select />
      </div>

      <Button type="button">CLEAR FILTERS</Button>
    </div>
  );
};

export default Menu;
