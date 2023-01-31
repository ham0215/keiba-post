import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import type { BetsResults } from 'libs/firestore/Keiba';
import { Button } from 'libs/ui/Button';
import { TextField } from 'libs/ui/TextField';

import type { FormInputType } from '../../Result.models';
import { useFormPresenter } from './Form.presenter';
import * as Styles from './Form.styles';

type Props = {
  onSubmit: (data: FormInputType) => void;
  onCancel: () => void;
  betsResults: BetsResults;
};

export function Form(props: Props) {
  const { onSubmit, onCancel, betsResults } = props;
  const { register, handleSubmit, disabledUpdate, fields } = useFormPresenter({
    betsResults,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <List sx={{ width: '100%', maxWidth: 360, margin: '0 auto', padding: 0 }}>
        {fields.map((field, index) => (
          <ListItem key={field.id} sx={{ padding: 0 }}>
            <ListItemAvatar>
              <Avatar alt={`result${index}`} src={betsResults?.bets?.[index]} />
            </ListItemAvatar>
            <TextField
              variant="standard"
              type="number"
              fullWidth
              defaultValue={field.result}
              inputProps={{
                ...register(`results.${index}.result`, {
                  required: true,
                  valueAsNumber: true,
                  min: 0,
                }),
              }}
            />
          </ListItem>
        ))}
      </List>
      <Styles.ButtonArea>
        <Button variant="outlined" onClick={onCancel}>
          キャンセル
        </Button>
        <Button type="submit" variant="contained" disabled={disabledUpdate}>
          更新
        </Button>
      </Styles.ButtonArea>
    </form>
  );
}
