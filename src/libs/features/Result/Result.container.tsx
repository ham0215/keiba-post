import { useResultFacade } from './Result.facade';
import { Form } from './components/Form';
import { Loading } from 'libs/features/Loading';
import type { User } from 'libs/firestore/User';

type Props = {
  currentUser: User;
};

export function Result({ currentUser }: Props) {
  const { handleCancel, handleSubmit, betsResults } = useResultFacade({ currentUser });

  if (!betsResults) return <Loading />;

  return <Form onSubmit={handleSubmit} onCancel={handleCancel} betsResults={betsResults} />;
}
