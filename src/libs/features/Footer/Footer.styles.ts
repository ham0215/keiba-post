import styled from '@emotion/styled';

export const Container = styled.footer`
  padding: 10px 0;
  background-color: green;
  color: #fff;
  font-size: 0.8rem;
`;

export const Copyright = styled.p`
  letter-spacing: 1px;
  text-align: center;
`;

export const List = styled.ul`
  margin: 0 auto;
  text-align: right;
`;

export const FirstItem = styled.li`
  display: inline-block;
  padding: 0 15px;
  letter-spacing: 1px;
`;

export const Item = styled(FirstItem)`
  border-left: 1px solid #bbb;
`;
