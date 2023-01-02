import { useForm, useFieldArray } from 'react-hook-form';
import { useMemo } from 'react';
import type { FormInputType } from '../../Result.models';
import type { BetsResults } from 'libs/firestore/Keiba';

type Props = {
  betsResults: BetsResults;
};

export function useFormPresenter({ betsResults }: Props) {
  const defaultResults = useMemo(() => {
    if (!betsResults.bets) return undefined;

    const results = betsResults.bets.map((bet, index) => {
      const result = betsResults.results ? betsResults.results[index] : 0;
      return { result };
    });
    return { results };
  }, [betsResults]);

  const {
    control,
    register,
    handleSubmit,
    formState: { isDirty, isSubmitted, isValid }
  } = useForm<FormInputType>({
    mode: 'all',
    defaultValues: defaultResults
  });
  const { fields } = useFieldArray({
    name: 'results',
    control
  });

  return {
    register,
    handleSubmit,
    disabledUpdate: !isDirty || isSubmitted || !isValid,
    betsResults,
    fields
  } as const;
}
