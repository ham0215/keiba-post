import { ReactNode } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const CustomTypography = styled(Typography)`
  white-space: pre-wrap;
`;

export default function PreWrapTypography ({ children }: { children: ReactNode }) {
  return (
    <CustomTypography>
      {children}
    </CustomTypography>
  );
}
