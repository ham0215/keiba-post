import WithAuth from 'libs/layouts/WithAuth';
import List from 'libs/features/List';

export default function Keiba() {
  return (
    <WithAuth>
      <List />
    </WithAuth>
  );
}
