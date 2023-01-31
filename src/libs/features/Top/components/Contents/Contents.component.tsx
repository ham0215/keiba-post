import { ReactNode } from 'react';

import * as Styles from './Contents.styles';

type Props = {
  children: ReactNode;
};

export function Contents({ children }: Props) {
  return <Styles.Contents>{children}</Styles.Contents>;
}
