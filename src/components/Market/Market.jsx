import React, { useContext, useState } from "react";
import styles from "./Market.module.css";
import listView from "../../assets/list.svg";
import gridView from "../../assets/grid.svg";
import Select from "../UI/Select";
import Store from "../Store/Store";
import { CartContext } from "../../helper/context";

const Market = () => {
  const { newProducts } = useContext(CartContext);
  const [view, setView] = useState(false);

  const handleGridView = () => {
    setView(false);
  };

  const handleListView = () => {
    setView(true);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.action}>
        <p className={styles.head}>
          <span>{newProducts.length}</span> Products
        </p>
        <Select className="move" />
        <div className={styles.view}>
          <img src={listView} alt="list view" onClick={handleListView} />
          <img src={gridView} alt="grid view" onClick={handleGridView} />
        </div>
      </div>
      <Store newProducts={newProducts} view={view} />
    </div>
  );
};

export default Market;
