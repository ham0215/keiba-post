import WithAuth from 'components/templates/WithAuth';
import List from 'components/Organisms/List';

export default function Keiba() {
  return (
    <WithAuth>
      <List />
    </WithAuth>
  );
}
