import { KeibaCalendar } from 'data/KeibaCalendar';

export function useNextRace({ tag }: { tag: string }) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const nextRace = KeibaCalendar.find(
    (row) => row.tag === tag && today <= new Date(row.date),
  );

  return { nextRace } as const;
}
