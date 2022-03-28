import WithAuth from 'components/templates/WithAuth';
import Detail from 'components/Organisms/Detail';

export default function DetailPage() {
  return (
    <WithAuth>
      <Detail />
    </WithAuth>
  );
}
