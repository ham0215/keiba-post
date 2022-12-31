import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import TextField from 'libs/ui/TextField';
import Button from 'libs/ui/Button';
import Error from 'libs/features/Error';
import { useResult } from './Result.hooks';
import * as Styles from './Result.styles';

export function Result() {
  const { onClickCancel, onSubmit, register, handleSubmit, isDirty, isSubmitted, isValid, fields, currentUser } =
    useResult();

  if (!currentUser) return <Error />;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <List sx={{ width: '100%', maxWidth: 360, margin: '0 auto', padding: 0 }}>
        {fields.map((field, index) => (
          <ListItem key={field.id} sx={{ padding: 0 }}>
            <ListItemAvatar>
              <Avatar alt={`result${index}`} src={field.bet} />
            </ListItemAvatar>
            <TextField
              variant="standard"
              type="number"
              fullWidth
              defaultValue={field.result}
              inputProps={{ ...register(`results.${index}.result`, { required: true, valueAsNumber: true, min: 0 }) }}
            />
          </ListItem>
        ))}
      </List>
      <Styles.ButtonArea>
        <Button variant="outlined" onClick={onClickCancel}>
          キャンセル
        </Button>
        <Button type="submit" variant="contained" disabled={!isDirty || isSubmitted || !isValid}>
          更新
        </Button>
      </Styles.ButtonArea>
    </form>
  );
}
