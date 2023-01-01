import Error from 'libs/features/Error';
import Loading from 'libs/features/Loading';
import { useResultFacade } from './Result.facade';
import { Form } from './components/Form';

export function Result() {
  const { handleCancel, handleSubmit, currentUser, betsResults } = useResultFacade();

  if (!currentUser) return <Error />;
  if (!betsResults) return <Loading />;

  return <Form onSubmit={handleSubmit} onCancel={handleCancel} betsResults={betsResults} />;
}
