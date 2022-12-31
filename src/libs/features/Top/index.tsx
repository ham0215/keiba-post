import styled from '@emotion/styled';
import KeibaButton from './KeibaButton';
import Result from './Result';

const Contents = styled.div`
  background: #151515 url('/images/login.jpg') no-repeat scroll center bottom;
  background-size: cover;
  color: #fff;
  padding: 5rem 0;
  text-align: center;
`;

export default function Top() {
  return (
    <Contents>
      <KeibaButton />
      <Result />
    </Contents>
  );
}
