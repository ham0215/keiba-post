import Alert from '@mui/material/Alert';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import { useNextRace } from './NextRace.hooks';

export function NextRace({ tag }: { tag: string }) {
  const { nextRace } = useNextRace({ tag });

  if (!nextRace) return <Alert severity="error">表示しているレースはすべて終了しています。</Alert>;

  return (
    <Alert severity="info">
      <NextLink href={`/keiba/${nextRace.id}`} passHref legacyBehavior>
        <Link component="button">
          次回レース: {nextRace.date.substring(5)} {nextRace.name} ({nextRace.big ? '3,000円' : '1,000円'})
        </Link>
      </NextLink>
    </Alert>
  );
}
