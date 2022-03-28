import { ReactNode } from 'react';
import { Link, TypographyVariant } from '@mui/material';

type Props = {
  children: ReactNode;
  href: string;
  color?: string;
  variant: TypographyVariant;
};

export default function ExternalLink({ children, variant, color = 'primary', href }: Props) {
  return (
    <Link href={href} underline="none" variant={variant} color={color} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );
}
