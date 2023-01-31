import type { User } from 'libs/firestore/User';

import { Form } from './components/Form.component';
import { usePostKeibaFacade } from './PostKeiba.facade';

type Props = {
  keibaId: string;
  currentUser: User;
};

export function PostKeiba({ keibaId, currentUser }: Props) {
  const { handleCancel, handleSubmit, postText } = usePostKeibaFacade({
    keibaId,
    currentUser,
  });

  return (
    <Form onSubmit={handleSubmit} onCancel={handleCancel} postText={postText} />
  );
}
