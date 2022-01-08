import styled from '@emotion/styled';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Rule from './Rule';

const Container = styled.div`
  margin: 0.5rem;
`;

export default function Header({ tag, setTag }: { tag: string, setTag: (tag: string) => void }) {

  return (
    <Container>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="selectTagLabel">年度</InputLabel>
            <Select
              labelId="selectTagLabel"
              id="selectTag"
              value={tag}
              label="selectTag"
              onChange={(e) => { setTag(e.target.value); }}
            >
              <MenuItem value="2022a">2022年前半</MenuItem>
              <MenuItem value="2021">2021年</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs alignItems='right'>
          <Rule />
        </Grid>
      </Grid>
    </Container >
  );
}
