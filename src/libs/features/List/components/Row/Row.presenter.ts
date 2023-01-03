import { useCallback } from 'react';
import { useRouter } from 'next/router';

type Props = {
  id: number;
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