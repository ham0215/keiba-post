import { useContext, useEffect, useCallback, useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import { findBets, updateResults, BetsResults } from 'libs/firestore/Keiba';
import { UserContext } from 'libs/hooks/UserContext';
import type { FormInputType } from './Result.models';

export function useResultFacade() {
  const router = useRouter();
  const { id } = router.query;
  const [betsResults, setBetsResults] = useState<BetsResults>();

  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      if (!id) return;
      if (typeof id !== 'string') return;
      if (!currentUser) return;

      const _betsResults = await findBets(id);
      if (!_betsResults) return;

      setBetsResults(_betsResults);
    })();
  }, [currentUser, id]);

  const defaultResults = useMemo(() => {
    if (!betsResults || !betsResults.bets) return undefined;

    const results = betsResults.bets.map((bet, index) => {
      const result = betsResults.results ? betsResults.results[index] : 0;
      return { result };
    });
    return { results };
  }, [betsResults]);

  const handleCancel = useCallback(() => {
    router.push(`/keiba/${id}`);
  }, [id, router]);

  const handleSubmit = useCallback(
    async (data: FormInputType) => {
      if (!id) return;
      if (typeof id !== 'string') return;
      if (!currentUser) return;

      await updateResults({
        keibaId: id,
        results: data.results.map((result) => result.result)
      });

      router.push({ pathname: `/keiba/${id}` });
    },
    [currentUser, id, router]
  );

  return {
    handleCancel,
    handleSubmit,
    currentUser,
    betsResults,
    defaultResults
  } as const;
}
