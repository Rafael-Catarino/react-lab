import { Button } from "../Button";
import { IconCurrency } from "../icons";
import { TransactionsItem } from "../TransactionsItem";
import styles from "./transactions.module.css";

export const Transactions = () => {
  const itens = [
    {
      description: "iFood",
      value: -20,
      date: "2024-10-01T00:00:00-03:00",
    },
    {
      description: "Papelaria Mila",
      value: -80,
      date: "2024-10-03T00:00:00-03:00",
    },
    {
      description: "Freela (2ª parte)",
      value: 1000,
      date: "2024-10-03T00:00:00-03:00",
    },
    {
      description: "Magazine Luiza",
      value: -300,
      date: "2024-10-05T00:00:00-03:00",
    },
  ];

  return (
    <>
      <ul className={styles.list}>
        {itens.map((transactionItem, index) => {
          return (
            <li key={index}>
              <TransactionsItem item={transactionItem} />
            </li>
          );
        })}
      </ul>
      <div className={styles.actions}>
        <Button>
          <IconCurrency />
          Adicionar transação
        </Button>
      </div>
    </>
  );
};
