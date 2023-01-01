import { useForm, useFieldArray } from 'react-hook-form';
import type { BetsResults } from 'libs/firestore/Keiba';
import type { FormInputType } from '../../Result.models';

type Props = {
  betsResults?: BetsResults
  defaultResults: FormInputType
};

export function useFormPresenter({ betsResults, defaultResults }: Props) {
  const {
    control,
    register,
    handleSubmit,
    formState: { isDirty, isSubmitted, isValid },
  } = useForm<FormInputType>({
    mode: 'all',
    defaultValues: defaultResults
  });
  const { fields } = useFieldArray({
    name: 'results',
    control
  });

  // useEffect(() => {
  //   if (!betsResults || !betsResults.bets) return;

  //   betsResults.bets.forEach((bet, index) => (
  //     append({
  //       result: betsResults.results ? betsResults.results[index] : 0
  //     })
  //   ));
  // }, [betsResults, append]);

  // useEffect(() => {
  //   if (!betsResults || !betsResults.bets) return;

  //   const results = betsResults.bets.map((bet, index) => ({
  //     result: betsResults.results ? betsResults.results[index] : 0
  //   }));

  //   replace(results);
  // }, [betsResults, replace]);

  return {
    register,
    handleSubmit,
    disabledUpdate: !isDirty || isSubmitted || !isValid,
    betsResults,
    fields
  } as const;
}
