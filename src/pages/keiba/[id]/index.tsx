import WithAuth from 'components/templates/WithAuth';
import Detail from 'components/hoges/Detail';

export default function DetailPage() {
  return (
    <WithAuth>
      <Detail />
    </WithAuth>
  );
}
