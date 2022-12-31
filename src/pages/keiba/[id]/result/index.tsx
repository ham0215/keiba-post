import WithAuth from 'libs/layouts/WithAuth';
import { Result } from 'libs/features/Result';

export default function ResultPage() {
  return (
    <WithAuth>
      <Result />
    </WithAuth>
  );
}
