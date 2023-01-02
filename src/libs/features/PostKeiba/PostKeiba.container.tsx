import type { User } from 'libs/firestore/User';
import { usePostKeibaFacade } from './PostKeiba.facade';
import { Form } from './components/Form.component';

type Props = {
  currentUser: User;
};

export function PostKeiba({ currentUser }: Props) {
  const { handleCancel, handleSubmit, postText } = usePostKeibaFacade({ currentUser });

  return <Form onSubmit={handleSubmit} onCancel={handleCancel} postText={postText} />;
}
