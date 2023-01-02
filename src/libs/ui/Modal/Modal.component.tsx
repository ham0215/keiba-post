import { ReactElement, useCallback } from 'react';
import * as Styles from './Modal.styles';

type Props = {
  children: ReactElement;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export function Modal({ children, open, setOpen }: Props) {
  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <Styles.StyledModal open={open} onClose={handleClose} aria-labelledby="rule">
      <Styles.StyledPaper>{children}</Styles.StyledPaper>
    </Styles.StyledModal>
  );
}
