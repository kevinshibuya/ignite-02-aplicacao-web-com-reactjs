import { useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';

import incomeImg from'../../assets/income.svg';
import outcomeImg from'../../assets/outcome.svg';
import totalImg from'../../assets/total.svg';

import { Container } from "./styles";

export function Summary() {
  const transactions = useContext(TransactionsContext);

  console.log(transactions)

  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="" />
        </header>
        <strong>R$1000</strong>
      </div>
      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt="" />
        </header>
        <strong>-R$500</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="" />
        </header>
        <strong>R$500</strong>
      </div>
    </Container>
  )
}