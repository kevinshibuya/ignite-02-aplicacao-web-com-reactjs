import Modal from 'react-modal';
import { Container } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <Container>
        <h2>Register transaction</h2>

        <input
         type="text"
         placeholder="Title"
        />
        <input
         type="number"
         placeholder="Value"
        />
        <input
         type="text"
         placeholder="Category"
        />
        <button type="submit">
          Register
        </button>
      </Container>
    </Modal>
  )
}