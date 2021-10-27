import styled from 'styled-components';

const Contents = styled.div`
  background: #151515 url('/images/login.jpg') no-repeat scroll center bottom;
  background-size: cover;
  color: #fff;
  text-align: center;
  height: 90vh;
`;

export default function Top() {
  return <Contents />;
}
