import styled from 'styled-components';
import Backdrop from '@mui/material/Backdrop';

const CustomBackdrop = styled(Backdrop)`
  z-index: ${(props) => props.theme.zIndex.drawer + 1};
`;

export default function CB({ open }: { open: boolean }) {
  return <CustomBackdrop open={open} />;
}
