import { ReactNode } from 'react';
import NextLink from 'next/link';
import MuiLink from '@mui/material/Link';

type Props = { href: string; prefetch?: boolean; children: ReactNode };

export function Link({ href, prefetch = false, children }: Props) {
  return (
    <NextLink href={href} prefetch={prefetch} passHref legacyBehavior>
      <MuiLink color="inherit" underline="none">
        {children}
      </MuiLink>
    </NextLink>
  );
}
