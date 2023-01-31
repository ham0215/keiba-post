import { currentTag, tags } from 'data/KeibaCalendar';
import { List } from 'libs/features/List';
import { PleaseLogin } from 'libs/features/PleaseLogin';
import { UserContext } from 'libs/hooks/UserContext';
import { useRouter } from 'next/router';
import { useContext } from 'react';

export default function Keiba() {
  const { currentUser } = useContext(UserContext);
  const router = useRouter();
  if (!currentUser || !currentUser.enabled) return <PleaseLogin />;

  const { tag } = router.query;
  const selectedTag = typeof tag === 'string' && tags.includes(tag) ? tag : currentTag;

  return <List selectedTag={selectedTag} />;
}
