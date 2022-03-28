import WithAuth from 'components/templates/WithAuth';
import List from 'components/organisms/List';

export default function Keiba() {
  return (
    <WithAuth>
      <List />
    </WithAuth>
  );
}
