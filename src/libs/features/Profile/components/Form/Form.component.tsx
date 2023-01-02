import Typography from '@mui/material/Typography';
import TextField from 'libs/ui/TextField';
import Button from 'libs/ui/Button';
import * as Styles from './Form.styles';
import type { FormInputType } from '../../Profile.models';
import { useFormPresenter } from './Form.presenter';
import type { User } from 'libs/firestore/User';

type Props = {
  onSubmit: (data: FormInputType) => void;
  onCancel: () => void;
  currentUser: User | null;
};

export function Form({ onSubmit, onCancel, currentUser }: Props) {
  const {
    register,
    handleSubmit,
    errors,
    disabledSubmit,
  } = useFormPresenter();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="name"
        name="name"
        label="Name"
        fullWidth
        required
        defaultValue={currentUser?.name}
        inputProps={{ ...register('name', { required: true }) }}
      />
      {errors?.name && <Typography color="error">Name is required!!</Typography>}
      <Styles.ButtonArea>
        <Button variant="outlined" onClick={onCancel}>
          キャンセル
        </Button>
        <Button type="submit" variant="contained" disabled={disabledSubmit}>
          更新
        </Button>
      </Styles.ButtonArea>
    </form>
  );
}
