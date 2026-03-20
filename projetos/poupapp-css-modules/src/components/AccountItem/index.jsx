import { IconBank } from "../icons";
import styles from "./accountItem.module.css";

export const AccountItem = ({ item }) => {
  const formater = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className={styles.containerFinancial}>
      <div className={styles.financialInstitution}>
        <IconBank />
        <p>{item.description}</p>
      </div>
      <div className={styles.accountBalance}>
        <p>Saldo</p>
        <p>{formater.format(item.value)}</p>
      </div>
    </div>
  );
};
