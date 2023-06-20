import React, { useState } from "react";
import styles from "./Payment.module.css";
import OrderSummary from "./OrderSummary";
import Address from "./CheckoutPages/Address";
import Delivery from "./CheckoutPages/Delivery";
import Pay from "./CheckoutPages/Pay";
import { useContext } from "react";
import { CartContext } from "../../helper/context";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const { address, delivery } = useContext(CartContext);
  const [paymentFlow, setPaymentFlow] = useState({
    deliveryAddress: false,
    deliveryMethod: false,
    paymentMethod: false,
  });
  const [formData, setFormData] = useState([]);
  const [showPayBtn, setShowPayBtn] = useState(false);
  const { pathname } = useLocation();

  console.log("FD", formData);

  const handlePaymentChange = (event) => {
    const { name, checked } = event.target;
    setPaymentFlow((prev) => {
      return {
        ...prev,
        [name]: checked,
      };
    });
    console.log(paymentFlow);
  };

  console.log("address", address);
  console.log("DELIGERY", delivery);

  console.log("in payment", delivery);
  // if (pathname.includes("order")) {
  //   return null;
  // }

  return (
    <div className={styles.split}>
      <div className={styles["left-col"]}>
        <div className={styles.path}>
          <div>
            <input
              type="checkbox"
              id="deliveryAddress"
              name="deliveryAddress"
              checked={paymentFlow.deliveryAddress}
              onChange={handlePaymentChange}
            />
            <label htmlFor="deliveryAddress">Delivery Address</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="deliveryMethod"
              name="deliveryMethod"
              checked={paymentFlow.deliveryMethod}
              onChange={handlePaymentChange}
            />
            <label htmlFor="deliveryMethod">Delivery Method</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="paymentMethod"
              name="paymentMethod"
              checked={paymentFlow.paymentMethod}
              onChange={handlePaymentChange}
            />
            <label htmlFor="paymentMethod">Payment Method</label>
          </div>
        </div>

        <div className={styles.main}>
          {address ? (
            delivery ? (
              <Pay
                check={setPaymentFlow}
                addToForm={setFormData}
                setShow={setShowPayBtn}
              />
            ) : (
              <Delivery check={setPaymentFlow} addToForm={setFormData} />
            )
          ) : (
            <Address check={setPaymentFlow} addToForm={setFormData} />
          )}
        </div>
      </div>
      <OrderSummary show={showPayBtn} />
    </div>
  );
};

export default Payment;
