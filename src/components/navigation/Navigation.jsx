import styles from "./Navigation.module.css";
import Form from "../UI/Form";
import cartIcon from "../../assets/cartBag.svg";
import dropDownIcon from "../../assets/dropdown2.svg";
import { Link, useLocation } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../helper/context";
import Logout from "../../pages/auth/AuthPages/Logout";
import { TailSpin } from "react-loader-spinner";

const Navigation = (props) => {
  const [btnIsHighlited, setBtnIsHighlited] = useState(false);
  const { cart, login, accountName, checkLoading, isAdmin } =
    useContext(CartContext);
  const empty = "javascript.void(0)";
  const { pathname } = useLocation();

  console.log(" in nav", login);
  console.log(" in nav", accountName);

  const { item } = cart;

  const numberOfCartItems = item.reduce((curNumber, item) => {
    return curNumber + Number(item.quantity);
  }, 0);

  const btnClasses = `${styles.cartIcon} ${btnIsHighlited ? styles.shake : ""}`;

  useEffect(() => {
    if (item.length === 0) {
      return;
    }
    setBtnIsHighlited(true);

    const timer = setTimeout(() => {
      setBtnIsHighlited(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [item]);

  if (pathname.includes("auth")) {
    return null;
  }

  return (
    <>
      <div className={styles.wrapper}>
        <Link to="/">
          <header>FakeStoreAPI</header>
        </Link>
        <nav className={styles.nav}>
          <ul className={styles["list-items"]}>
            <li className={`${styles.list} ${styles.drop}`}>
              <a href={empty}>New Arrivals</a>
              <img src={dropDownIcon} />
            </li>
            <li className={`${styles.list} ${styles.drop}`}>
              <a href={empty}>Categories</a>
              <img src={dropDownIcon} />
            </li>
            <li className={`${styles.list} ${styles.drop}`}>
              <a href={empty}>Sales</a>
              <img src={dropDownIcon} />
            </li>
            <li className={`${styles.list} ${styles.drop}`}>
              <a href={empty}>Brands</a>
              <img src={dropDownIcon} />
            </li>
            <li className={styles.list}>
              <a href={empty}>Contact</a>
            </li>
          </ul>
        </nav>
        <Form />

        <Link to="/cart" className={btnClasses}>
          <img src={cartIcon} />
          <span className={styles.cart}>{numberOfCartItems}</span>
        </Link>

        {checkLoading ? (
          <TailSpin
            height="30"
            width="30"
            color="#212121"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : (
          <>
            {login ? (
              <div className={styles.account}>
                <p>Hi, {accountName}</p>
                <Logout type="button">Logout</Logout>
              </div>
            ) : (
              <Link to="/auth/login" className={styles.login}>
                Login
              </Link>
            )}
          </>
        )}

        {isAdmin && <Link to="/dashboard">Admin</Link>}
      </div>
    </>
  );
};

export default Navigation;
