import { useRouter } from 'next/router';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import { Rule } from '../Rule/Rule.component';
import * as Styles from './Header.styles';

export function Header({ tag }: { tag: string }) {
  const router = useRouter();

  return (
    <Styles.Container>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="selectTagLabel">年度</InputLabel>
            <Select
              labelId="selectTagLabel"
              id="selectTag"
              value={tag}
              label="selectTag"
              onChange={(e) => router.push(`/keiba?tag=${e.target.value}`)}
            >
              <MenuItem value="2023a">2023年前半</MenuItem>
              <MenuItem value="2022b">2022年後半</MenuItem>
              <MenuItem value="2022a">2022年前半</MenuItem>
              <MenuItem value="2021">2021年</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs alignItems="right">
          <Rule />
        </Grid>
      </Grid>
    </Styles.Container>
  );
}
