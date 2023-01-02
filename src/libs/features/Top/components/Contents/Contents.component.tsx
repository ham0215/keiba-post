import { KeibaButton } from '../KeibaButton';
import { Result } from '../Result';
import * as Styles from './Contents.styles';

export function Contents() {
  return (
    <Styles.Contents>
      <KeibaButton />
      <Result />
    </Styles.Contents>
  );
}
