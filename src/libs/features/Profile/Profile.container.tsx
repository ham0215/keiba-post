import type { User } from 'libs/firestore/User';
import { Card } from 'libs/ui/Card';

import { Form } from './components/Form';
import { useProfileFacade } from './Profile.facade';

type Props = {
  currentUser: User;
};

export function Profile({ currentUser }: Props) {
  const { handleCancel, handleSubmit } = useProfileFacade({ currentUser });

  return (
    <Card>
      <Form onCancel={handleCancel} onSubmit={handleSubmit} currentUser={currentUser} />
    </Card>
  );
}
