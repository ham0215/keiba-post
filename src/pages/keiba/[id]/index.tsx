import WithAuth from 'libs/layouts/WithAuth';
import Detail from 'libs/features/Detail';

export default function DetailPage() {
  return (
    <WithAuth>
      <Detail />
    </WithAuth>
  );
}
