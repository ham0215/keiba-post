import { Loading } from 'libs/features/Loading';
import type { User } from 'libs/firestore/User';

import { Form } from './components/Form';
import { useResultFacade } from './Result.facade';

type Props = {
  keibaId: string;
  currentUser: User;
};

export function Result({ keibaId, currentUser }: Props) {
  const { handleCancel, handleSubmit, betsResults } = useResultFacade({ keibaId, currentUser });

  if (!betsResults) return <Loading />;

  return <Form onSubmit={handleSubmit} onCancel={handleCancel} betsResults={betsResults} />;
}
