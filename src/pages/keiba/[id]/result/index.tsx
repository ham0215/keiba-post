import WithAuth from 'components/templates/WithAuth';
import Result from 'components/hoges/Result';

export default function ResultPage() {
  return (
    <WithAuth>
      <Result />
    </WithAuth>
  );
}
