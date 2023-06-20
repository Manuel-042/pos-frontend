import Market from "../../components/Market/Market";
import Menu from "../../components/Menu/Menu";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.layout}>
      <Menu />
      <Market />
    </div>
  );
}
