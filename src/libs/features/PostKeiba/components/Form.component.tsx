import { Button } from 'libs/ui/Button';
import { TextField } from 'libs/ui/TextField';

import type { FormInputType } from '../PostKeiba.models';
import { useFormPresenter } from './Form.presenter';
import * as Styles from './Form.styles';

type Props = {
  onSubmit: (input: FormInputType) => void;
  onCancel: () => void;
  postText: string;
};

export function Form({ onSubmit, onCancel, postText }: Props) {
  const { register, handleSubmit, disabledSubmit } = useFormPresenter();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="keibaText"
        name="keibaText"
        label="予想"
        multiline
        fullWidth
        rows={10}
        variant="outlined"
        defaultValue={postText}
        inputProps={{ ...register('keibaText', { required: true }) }}
      />
      <Styles.ButtonArea>
        <Button variant="outlined" onClick={onCancel}>
          キャンセル
        </Button>
        <Button type="submit" variant="contained" disabled={disabledSubmit}>
          投稿
        </Button>
      </Styles.ButtonArea>
    </form>
  );
}
