import { AccountItem } from "../AccountItem";
import { Button } from "../Button";
import { IconWallet } from "../icons";
import styles from "./myacconts.module.css";

export const MyAccounts = () => {
  const arrAccounts = [
    {
      description: "Anybank",
      value: 1200,
    },
    {
      description: "Bytebank",
      value: 800,
    },
    {
      description: "Switch Bank",
      value: 1800,
    },
  ];

  return (
    <>
      <ul className={styles.ul}>
        {arrAccounts.map((item) => {
          return (
            <li className={styles.li}>
              <AccountItem item={item}></AccountItem>
            </li>
          );
        })}
      </ul>
      <div>
        <Button>
          <IconWallet />
          Adicionar transação
        </Button>
      </div>
    </>
  );
};
