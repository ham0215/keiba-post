import WithAuth from 'libs/layouts/WithAuth';
import { Profile } from 'libs/features/Profile';

export default function ProfilePage() {
  return (
    <WithAuth>
      <Profile />
    </WithAuth>
  );
}
