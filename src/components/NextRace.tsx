import Alert from '@mui/material/Alert';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import { KeibaCalendar } from 'data/KeibaCalendar';

export default function List() {
  const today = new Date();
  const nextRace = KeibaCalendar.find((row) => today <= new Date(row.date));

  if (!nextRace) return <Alert severity="info">今年のレースは終了しました。</Alert>;

  return (
    <Alert severity="info">
      <NextLink href={`/keiba/${nextRace.id}`}>
        <Link component="button">
          次のレースは{nextRace.date} {nextRace.name}({nextRace.big ? '3,000円' : '1,000円'})です！！
        </Link>
      </NextLink>
    </Alert>
  );
}
