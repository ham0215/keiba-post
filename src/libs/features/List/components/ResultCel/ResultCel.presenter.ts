import { useCallback, useState } from 'react';

type Props = {
  bets: string[];
  results: number[];
};

export function useResultCelPresenter({ bets, results }: Props) {
  const [openResult, setOpenResult] = useState(false);
  const winners = bets.filter((bet, index) => results[index] > 0);
  const winnerResults = results.filter((result) => result > 0);
  const hasWinners = winners.length > 0;
  const handleClickResults = useCallback(() => setOpenResult(!openResult), [openResult]);

  return {
    openResult,
    setOpenResult,
    winners,
    winnerResults,
    hasWinners,
    handleClickResults
  } as const;
}
