import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

export const ModalTitle = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
`;

export const ModalMessage = styled.p`
  margin: 0 0 1.5rem 0;
  color: #6b7280;
  line-height: 1.5;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
`;

export const Button = styled.button`
  padding: 0.625rem 1.25rem;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
`;

export const CancelButton = styled(Button)`
  background: #f3f4f6;
  color: #374151;

  &:hover {
    background: #e5e7eb;
  }
`;

export const ConfirmButton = styled(Button)`
  background: #dc2626;
  color: white;

  &:hover {
    background: #b91c1c;
  }
`;
