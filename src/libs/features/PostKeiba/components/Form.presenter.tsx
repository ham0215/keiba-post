import { useForm } from 'react-hook-form';
import type { FormInputType } from '../PostKeiba.models';

export function useFormPresenter() {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isSubmitted, isValid }
  } = useForm<FormInputType>({
    mode: 'all'
  });

  return {
    register,
    handleSubmit,
    disabledSubmit: !isDirty || isSubmitted || !isValid
  };
}
