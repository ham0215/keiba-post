import { BetsResults, findBets, updateResults } from 'libs/firestore/Keiba';
import type { User } from 'libs/firestore/User';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import type { FormInputType } from './Result.models';

type Props = {
  keibaId: string;
  currentUser: User;
};

export function useResultFacade({ keibaId, currentUser }: Props) {
  const router = useRouter();
  const [betsResults, setBetsResults] = useState<BetsResults>();

  useEffect(() => {
    (async () => {
      const _betsResults = await findBets(keibaId);
      if (!_betsResults) return;

      setBetsResults(_betsResults);
    })();
  }, [currentUser, keibaId]);

  const handleCancel = useCallback(() => {
    router.push(`/keiba/${keibaId}`);
  }, [keibaId, router]);

  const handleSubmit = useCallback(
    async (data: FormInputType) => {
      await updateResults({
        keibaId,
        results: data.results.map((result) => result.result),
      });

      router.push({ pathname: `/keiba/${keibaId}` });
    },
    [keibaId, router],
  );

  return {
    handleCancel,
    handleSubmit,
    betsResults,
  } as const;
}
