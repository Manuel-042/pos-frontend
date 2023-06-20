import styles from "./Auth.module.css";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../../helper/context";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import pic1 from "../../assets/pic1.jpg";
import Login from "./AuthPages/Login";
import Create from "./AuthPages/Create";
import Forgot from "./AuthPages/Forgot";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";
import pic4 from "../../assets/pic4.jpg";
import pic5 from "../../assets/pic5.jpg";

// const handleDragStart = (e) => e.preventDefault();

// const items = [
//   <img src={pic1} onDragStart={handleDragStart} role="presentation" />,
//   <img src={pic2} onDragStart={handleDragStart} role="presentation" />,
//   <img src={pic3} onDragStart={handleDragStart} role="presentation" />,
//   <img src={pic4} onDragStart={handleDragStart} role="presentation" />,
//   <img src={pic5} onDragStart={handleDragStart} role="presentation" />,
// ];

const Auth = () => {
  const { forgotPassword, login } = useContext(CartContext);

  return (
    <>
      <div className={styles.auth}>
        <div className={styles.image}>
          <div className={styles.wrapper}>
            <h1 className={styles.quote}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
              dolorum obcaecati, illo dolores.
            </h1>

            <div className={styles.slider}>
              <span></span>
              <span className={styles.active}></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <img
            src={pic3}
            alt="image 1"
            loading="lazy"
            className={styles.images}
          />
        </div>
        <div className={styles.content}>
          {login ? <Create /> : forgotPassword ? <Forgot /> : <Login />}
        </div>
      </div>
    </>
  );
};

export default Auth;
