import Link from '@mui/material/Link';

import * as Styles from './Footer.styles';

export function Footer() {
  return (
    <Styles.Container>
      <Styles.List>
        <Styles.FirstItem>
          <Link href="/terms/terms-of-service" color="inherit" underline="none">
            Terms of Service
          </Link>
        </Styles.FirstItem>
        <Styles.Item>
          <Link href="/terms/privacy" color="inherit" underline="none">
            Privacy Policy
          </Link>
        </Styles.Item>
      </Styles.List>
      <Styles.Copyright>Copyright ©︎ 2023 Ham</Styles.Copyright>
    </Styles.Container>
  );
}
