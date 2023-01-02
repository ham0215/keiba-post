import Card from 'libs/ui/Card';
import { Form } from './components/Form';
import { useProfileFacade } from './Profile.facade';

export function Profile() {
  const { handleCancel, handleSubmit, currentUser } = useProfileFacade();

  return (
    <Card>
      <Form onCancel={handleCancel} onSubmit={handleSubmit} currentUser={currentUser} />
    </Card>
  );
}
