import styled from '@emotion/styled';
import Rule from './Rule';

const Container = styled.div`
  margin: 5px;
`;

export default function Header() {
  return (
    <Container>
      <Rule />
    </Container>
  );
}
