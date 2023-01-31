import { useRouter } from 'next/router';
import { useCallback } from 'react';

type Props = {
  id: string;
  tag: string;
  results: number[];
};

export function useRowPresenter({ id, tag, results }: Props) {
  const router = useRouter();

  const handleClickToDetail = useCallback(
    () => router.push({ pathname: `/keiba/${id}`, query: { tag } }),
    [id, router, tag]
  );
  const hasResults = results.length > 0;

  return {
    handleClickToDetail,
    hasResults
  } as const;
}
