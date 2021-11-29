import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledPaper = styled(Paper)`
  margin: 10px;
  padding: 10px;
`;

type Props = {
  children: ReactElement;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function CustomModal({ children, open, setOpen }: Props) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledModal open={open} onClose={handleClose} aria-labelledby="rule">
      <StyledPaper>{children}</StyledPaper>
    </StyledModal>
  );
}
