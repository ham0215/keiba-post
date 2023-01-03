import { useEffect, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import type { FormInputType } from './Result.models';
import { findBets, updateResults, BetsResults } from 'libs/firestore/Keiba';
import type { User } from 'libs/firestore/User';

type Props = {
  currentUser: User;
};

export function useResultFacade({ currentUser }: Props) {
  const router = useRouter();
  const { id } = router.query;
  const [betsResults, setBetsResults] = useState<BetsResults>();

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
    betsResults
  } as const;
}
