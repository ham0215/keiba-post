import { usePostKeibaFacade } from './PostKeiba.facade';
import { Form } from './components/Form.component';
import type { User } from 'libs/firestore/User';

type Props = {
  currentUser: User;
};

export function PostKeiba({ currentUser }: Props) {
  const { handleCancel, handleSubmit, postText } = usePostKeibaFacade({ currentUser });

  return <Form onSubmit={handleSubmit} onCancel={handleCancel} postText={postText} />;
}
