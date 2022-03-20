import { ReactNode } from 'react';
import NextLink from 'next/link';
import Link from '@mui/material/Link';

type Props = { href: string; prefetch?: boolean; children: ReactNode };

export default function LinkComponent({ href, prefetch = false, children }: Props) {
  return (
    <NextLink href={href} prefetch={prefetch} passHref>
      <Link color="inherit" underline="none">
        {children}
      </Link>
    </NextLink>
  );
}
