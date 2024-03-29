import { useRouter } from 'next/router';
import { useCallback } from 'react';

type Props = {
  keibaId: string;
};

export function useSpeedDialPresenter({ keibaId }: Props) {
  const router = useRouter();

  const handleClickText = useCallback(() => {
    router.push(`/keiba/${keibaId}/post`);
  }, [keibaId, router]);

  const handleClickResult = useCallback(() => {
    router.push(`/keiba/${keibaId}/result`);
  }, [keibaId, router]);

  return {
    handleClickText,
    handleClickResult,
  } as const;
}
