import { useContext } from 'react';
import CardBase from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import LaunchIcon from '@mui/icons-material/Launch';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import ExternalLink from 'components/ExternalLink';
import { FaTrophy } from 'react-icons/fa';
import { UserContext } from 'UserContext';

type ResultCardProps = {
  title: string;
  winner: string;
  url: string;
  avatar: string;
};

const TrophyWrap = styled.div`
  font-size: 2rem;
`;

const Card = styled(CardBase)`
  margin: auto;
  max-width: 30rem;
`;

function ResultCard({ title, winner, url, avatar }: ResultCardProps) {
  return (
    <Grid item xs={12}>
      <ExternalLink href={url} variant="body1" color="black">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={2}>
            <TrophyWrap>
              <FaTrophy color="orange" />
            </TrophyWrap>
          </Grid>
          <Grid item xs>
            <Typography align="left">{title}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Avatar alt={winner} src={avatar} />
          </Grid>
          <Grid item xs={2}>
            <Typography align="left">{winner}</Typography>
          </Grid>
          <Grid item xs={1}>
            <LaunchIcon color="disabled" />
          </Grid>
        </Grid>
      </ExternalLink>
    </Grid>
  );
}

export default function Result() {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      {currentUser && currentUser.enabled && (
        <Card>
          <CardContent>
            <Grid container spacing={4}>
              <ResultCard
                url="https://public.flourish.studio/visualisation/7367172/"
                title="2021年後半戦"
                winner="mc"
                avatar="https://3.bp.blogspot.com/-BI9UKCTfC2U/WzC9rMr8rcI/AAAAAAABM6w/pfdTvR6aEFcXoaKWCwtQS8hK1F-xnO6owCLcBGAs/s800/keiba_yosouya.png"
              />
              <ResultCard
                url="https://public.flourish.studio/visualisation/5349437/"
                title="2021年前半戦"
                winner="t"
                avatar="https://prtimes.jp/i/19292/8/resize/d19292-8-952037-0.jpg"
              />
              <ResultCard
                url="https://public.flourish.studio/visualisation/3919343/"
                title="2020年後半戦"
                winner="natsu"
                avatar="https://cdn.netkeiba.com/img.news/?pid=news_img&id=336842"
              />
              <ResultCard
                url="https://public.flourish.studio/visualisation/1807679/"
                title="2020年前半戦"
                winner="ham"
                avatar="https://furusato-ippin.co.jp/user_data/img/detail/sakurahum-img1.jpg"
              />
            </Grid>
          </CardContent>
        </Card>
      )}
    </>
  );
}
