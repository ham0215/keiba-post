import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import LaunchIcon from '@mui/icons-material/Launch';
import Typography from '@mui/material/Typography';
import { FaTrophy } from 'react-icons/fa';
import { BsQuestionLg } from 'react-icons/bs';
import * as Styles from './ResultCard.styles';
import { ExternalLink } from 'libs/ui/ExternalLink';

type ResultCardProps = {
  title: string;
  winner: string;
  url: string;
  avatar?: string;
};

export function ResultCard({ title, winner, url, avatar }: ResultCardProps) {
  return (
    <Grid item xs={12}>
      <ExternalLink href={url} variant="body1" color="black">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={2}>
            <Styles.TrophyWrap>
              <FaTrophy color="orange" />
            </Styles.TrophyWrap>
          </Grid>
          <Grid item xs={5}>
            <Typography align="left">{title}</Typography>
          </Grid>
          <Grid item xs={2}>
            {avatar ? (
              <Avatar alt={winner} src={avatar} />
            ) : (
              <Avatar alt={winner}>
                <BsQuestionLg />
              </Avatar>
            )}
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
