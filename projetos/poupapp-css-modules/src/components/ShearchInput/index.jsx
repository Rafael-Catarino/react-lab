import { IconSearch } from "../icons";
import styles from "./shearchinput.module.css";

export const ShearchInput = (props) => {
  return (
    <div className={styles.container}>
      <IconSearch />
      <input className={styles.input} {...props} type="text" />
    </div>
  );
};
