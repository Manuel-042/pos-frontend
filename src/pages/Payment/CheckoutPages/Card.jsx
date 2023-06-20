import React from "react";
import styles from "../Payment.module.css";
import { useState } from "react";

const Card = () => {
  const [cardData, setCardData] = useState({
    card_number: "",
    card_holder: "",
    expiry: "",
    cvv: "",
    is_default: false,
  });
  const [isOpen, setIsOpen] = useState(false);

  const newCardHandler = (event) => {
    const { name, type, checked, value } = event.target;
    setCardData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleNewCard = () => {
    console.log(cardData);
  };

  const toggleCard = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles["card-dropdown"]}>
      <div className={styles.db}>Cart stored in db will show here</div>
      {!isOpen && (
        <div className={styles.newCardBtn} onClick={toggleCard}>
          + Add new Card
        </div>
      )}

      {isOpen && (
        <form onSubmit={handleNewCard} name="card-form" id="card-form">
          <div className={styles.cardnumber}>
            <label htmlFor="card_number">Card Number</label>
            <input
              type="number"
              id="card_number"
              placeholder="1111-2222-3333-4444"
              name="card_number"
              value={cardData.card_number}
              onChange={newCardHandler}
            ></input>
          </div>
          <div className={styles.holder}>
            <label htmlFor="card_holder">Card Holder</label>
            <input
              type="text"
              id="card_holder"
              placeholder="John Doe"
              name="card_holder"
              value={cardData.card_holder}
              onChange={newCardHandler}
            ></input>
          </div>
          <div className={styles.extra}>
            <div className={styles.expiry}>
              <label htmlFor="expiry">Expiry Date</label>
              <input
                type="number"
                id="expiry"
                placeholder="12/24"
                name="expiry"
                value={cardData.expiry}
                onChange={newCardHandler}
              ></input>
            </div>
            <div className={styles.cvv}>
              <label htmlFor="cvv">CVV</label>
              <input
                type="number"
                id="cvv"
                placeholder="559"
                name="cvv"
              ></input>
            </div>
          </div>
          <div>
            <input
              type="checkbox"
              id="is_default"
              name="is_default"
              className={styles["input-default"]}
              checked={cardData.is_default}
              onChange={newCardHandler}
            ></input>
            <label htmlFor="is_default" className={styles.labelS}>
              Default Card?
            </label>
          </div>
          <button type="submit" disabled={!cardData ? true : false}>
            Add Card
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            disabled={!cardData ? true : false}
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default Card;
