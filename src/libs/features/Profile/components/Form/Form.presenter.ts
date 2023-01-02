import { useForm } from 'react-hook-form';
import type { FormInputType } from '../../Profile.models';

export function useFormPresenter() {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isSubmitted, isValid, errors }
  } = useForm<FormInputType>({
    mode: 'all'
  });

  return {
    register,
    handleSubmit,
    errors,
    disabledSubmit: !isDirty || isSubmitted || !isValid
  } as const;
}
