import { Form } from './components/Form';
import { useProfileFacade } from './Profile.facade';
import { Card } from 'libs/ui/Card';
import type { User } from 'libs/firestore/User';

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
