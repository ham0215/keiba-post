import Alert from '@mui/material/Alert';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import { KeibaCalendar } from 'data/KeibaCalendar';

export default function NextRace({ tag }: { tag: string }) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const nextRace = KeibaCalendar.find((row) => row.tag === tag && today <= new Date(row.date));

  if (!nextRace) return <Alert severity="error">表示しているレースはすべて終了しています。</Alert>;

  return (
    <Alert severity="info">
      <NextLink href={`/keiba/${nextRace.id}`}>
        <Link component="button">
          次回レース: {nextRace.date.substring(5)} {nextRace.name} ({nextRace.big ? '3,000円' : '1,000円'})
        </Link>
      </NextLink>
    </Alert>
  );
}
