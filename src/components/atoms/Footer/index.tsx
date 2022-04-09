import styled from '@emotion/styled';
import Link from '@mui/material/Link';

const Footer = styled.footer`
  padding: 10px 0;
  background-color: green;
  color: #fff;
  font-size: 0.8rem;
`;

const Copyright = styled.p`
  letter-spacing: 1px;
  text-align: center;
`;

const FooterList = styled.ul`
  margin: 0 auto;
  text-align: right;
`;

const FooterFirstItem = styled.li`
  display: inline-block;
  padding: 0 15px;
  letter-spacing: 1px;
`;

const FooterItem = styled(FooterFirstItem)`
  border-left: 1px solid #bbb;
`;

export default function SiteFooter() {
  return (
    <Footer>
      <FooterList>
        <FooterFirstItem>
          <Link href="/terms/terms-of-service" color="inherit" underline="none">
            Terms of Service
          </Link>
        </FooterFirstItem>
        <FooterItem>
          <Link href="/terms/privacy-policy" color="inherit" underline="none">
            Privacy Policy
          </Link>
        </FooterItem>
      </FooterList>
      <Copyright>Copyright ©︎ 2022 Ham</Copyright>
    </Footer>
  );
}