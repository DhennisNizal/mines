import * as S from "./styles";

const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, message }) => {
  if (!isOpen) return null;

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.ModalTitle>{title}</S.ModalTitle>
        <S.ModalMessage>{message}</S.ModalMessage>
        <S.ButtonGroup>
          <S.CancelButton onClick={onClose}>Cancel</S.CancelButton>
          <S.ConfirmButton onClick={onConfirm}>Clear All</S.ConfirmButton>
        </S.ButtonGroup>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default ConfirmationModal;
