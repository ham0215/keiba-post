import React, { ReactNode } from 'react';
import { Link, TypographyVariant } from '@mui/material';

type Props = {
  children: ReactNode;
  href: string;
  variant: TypographyVariant;
};

export default function ExternalLink({ children, variant, href }: Props) {
  return (
    <Link href={href} underline="none" variant={variant} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );
}
