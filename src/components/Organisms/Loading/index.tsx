import styled from '@emotion/styled';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

const Contents = styled.div`
  background: #151515 url('/images/login.jpg') no-repeat scroll center bottom;
  background-size: cover;
  color: #fff;
  text-align: center;
  padding-top: 5rem;
  height: 100vh;

  > h4 {
    margin-bottom: 2rem;
  }

  > span {
    width: 50%;
    margin: 0 auto;
  }
`;

export default function Loading() {
  return (
    <Contents>
      <Typography variant="h4">NOW LOADING</Typography>
      <LinearProgress />
    </Contents>
  );
}
