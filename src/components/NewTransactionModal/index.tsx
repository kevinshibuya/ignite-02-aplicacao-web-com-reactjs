import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';
import { TransactionsContext } from '../../TransactionsContext';

import { Container, RadioBox, TransactionTypeContainer } from './styles';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from'../../assets/outcome.svg';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext);
  
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('deposit');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    createTransaction({
      title,
      amount,
      category,
      type
    })
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Register transaction</h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Value"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Outcome" />
            <span>Outcome</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">
          Register
        </button>
      </Container>
    </Modal>
  )
}