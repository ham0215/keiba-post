import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import * as Styles from './Loading.styles';

export function Loading() {
  return (
    <Styles.Contents>
      <Typography variant="h4">NOW LOADING</Typography>
      <LinearProgress />
    </Styles.Contents>
  );
}
