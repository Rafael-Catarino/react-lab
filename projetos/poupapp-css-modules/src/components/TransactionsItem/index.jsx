import styles from "./transactionsitem.module.css";

const formater = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const TransactionsItem = ({ item }) => {
  const detailAddicionalClassName =
    item.value >= 0 ? styles.income : styles.expense;

  return (
    <div className={styles.transactions}>
      <div className={[styles.details, detailAddicionalClassName].join(" ")}>
        <p>{item.description}</p>
        <p>{formater.format(item.value)}</p>
      </div>
      <div className={styles.date}>
        {new Date(item.date).toLocaleDateString("pt-BR")}
      </div>
    </div>
  );
};
