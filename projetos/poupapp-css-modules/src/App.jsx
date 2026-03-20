import { Aside } from "./components/Aside";
import { Container } from "./components/Container";
import { Main } from "./components/Main";
import { ShearchInput } from "./components/ShearchInput";
import { Typography } from "./components/Typography";

import Card from "./components/Card";
import { DailyBudget } from "./components/DailyBudget";
import { SavingsStatus } from "./components/SavingsStatus";

import styles from "./app.module.css";
import { Transactions } from "./components/Transactions";
import { MyAccounts } from "./components/MyAccounts";

function App() {
  return (
    <Container>
      <Aside />
      <Main>
        <div className={styles.container}>
          <ShearchInput />
          <div>
            <Typography variant="h1">Olá Rafael!</Typography>
            <Typography variant="p">
              Veja como estão suas finanças hoje.
            </Typography>
          </div>
          <section className={styles.grid}>
            <Card>
              <Card.Header>Orçamento diário disponível</Card.Header>
              <Card.Body>
                <DailyBudget value={200} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Progresso da meta financeira</Card.Header>
              <Card.Body>
                <SavingsStatus percent={40} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Movimentação financeira</Card.Header>
              <Card.Body>
                <Transactions />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Minhas Contas</Card.Header>
              <Card.Body>
                <MyAccounts />
              </Card.Body>
            </Card>
          </section>
        </div>
      </Main>
    </Container>
  );
}

export default App;
