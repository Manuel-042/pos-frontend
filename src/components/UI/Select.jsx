import { useState } from "react";
import styles from "./Select.module.css";

const Select = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("Filter");
  return (
    <select
      value={selectedFilter}
      onChange={(e) => setSelectedFilter(e.target.value)}
      className={`${styles.select} ${styles[props.className]}`}
    >
      <option value="popularity">Popularity</option>
      <option value="newToOld">New to Old</option>
      <option value="oldToNew">Old to New</option>
      <option value="newItems">New Items</option>
    </select>
  );
};

export default Select;
