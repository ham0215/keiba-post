import { useContext, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useForm, useFieldArray } from 'react-hook-form';
import { findBets, updateResults } from 'libs/firestore/Keiba';
import { UserContext } from 'libs/hooks/UserContext';

type FormInputType = {
  results: {
    bet: string;
    result: number;
  }[];
};

export function useResult() {
  const router = useRouter();
  const { id } = router.query;

  const {
    control,
    register,
    handleSubmit,
    formState: { isDirty, isSubmitted, isValid },
  } = useForm<FormInputType>({
    mode: 'all',
  });
  const { fields, replace } = useFieldArray({
    name: 'results',
    control,
  });

  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      if (!id) return;
      if (typeof id !== 'string') return;
      if (!currentUser) return;

      const betsResults = await findBets(id);
      if (!betsResults || !betsResults.bets) return;

      const results = betsResults.bets.map((bet, index) => ({
        bet,
        result: betsResults.results ? betsResults.results[index] : 0,
      }));

      replace(results);
    })();
  }, [replace, currentUser, id]);

  const onClickCancel = useCallback(() => {
    router.push(`/keiba/${id}`);
  }, [id, router]);

  const onSubmit = useCallback(
    async (data: FormInputType) => {
      if (!id) return;
      if (typeof id !== 'string') return;
      if (!currentUser) return;

      await updateResults({
        keibaId: id,
        results: data.results.map((result) => result.result),
      });

      router.push({ pathname: `/keiba/${id}` });
    },
    [currentUser, id, router]
  );

  return {
    onClickCancel,
    onSubmit,
    register,
    handleSubmit,
    isDirty,
    isSubmitted,
    isValid,
    fields,
    currentUser,
  } as const;
}
