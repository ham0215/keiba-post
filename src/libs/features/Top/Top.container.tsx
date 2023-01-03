import { Contents } from './components/Contents';
import { KeibaButton } from './components/KeibaButton';
import { Result } from './components/Result';
import type { User } from 'libs/firestore/User';

type Props = {
  currentUser: User;
};

export function Top({ currentUser }: Props) {
  return (
    <Contents>
      <KeibaButton currentUser={currentUser} />
      <Result currentUser={currentUser} />
    </Contents>
  );
}
