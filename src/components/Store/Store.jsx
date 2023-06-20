import React, { useContext } from "react";
import { CartContext } from "../../helper/context";
import styles from "./Store.module.css";
import StoreItem from "./StoreItem";
import { RevolvingDot } from "react-loader-spinner";
import { TailSpin } from "react-loader-spinner";

const Store = (props) => {
  const { loading } = useContext(CartContext);

  const display = `${styles.wrapper} ${
    props.view ? styles["list-view"] : styles["grid-view"]
  }`;

  return (
    <div className={display}>
      {loading ? (
        props.newProducts.map((product) => (
          <StoreItem
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))
      ) : (
        <TailSpin
          height="50"
          width="50"
          color="#212121"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{
            display: "inline-block",
            padding: "10rem 22rem",
            margin: "0 0 0 12rem",
          }}
          wrapperClass=""
          visible={true}
        />
      )}
    </div>
  );
};

export default Store;

{
  /* <RevolvingDot
  height="100"
  width="100"
  radius="30"
  color="#212121"
  secondaryColor=""
  ariaLabel="revolving-dot-loading"
  wrapperStyle={{
    display: "inline-block",
    padding: "10rem 22rem",
    margin: "0 0 0 12rem",
  }}
  wrapperClass=""
  visible={true}
/> */
}
