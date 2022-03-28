import WithAuth from 'components/templates/WithAuth';
import Detail from 'components/organisms/Detail';

export default function DetailPage() {
  return (
    <WithAuth>
      <Detail />
    </WithAuth>
  );
}
