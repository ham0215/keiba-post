import Grid from '@mui/material/Grid';
import { KeibaCalendar } from 'data/KeibaCalendar';
import { Error } from 'libs/features/Error';
import { findPosts } from 'libs/firestore/Keiba';
import type { User } from 'libs/firestore/User';
import { Float } from 'libs/ui/Float';
import { useEffect, useState } from 'react';

import { KeibaCard } from './components/KeibaCard';
import { PostCard } from './components/PostCard';
import { SpeedDial } from './components/SpeedDial';

type Post = {
  uid: string;
  text: string;
  name: string;
  url: string;
  createdAt: Date;
};

type Props = {
  keibaId: string;
  currentUser: User;
};

export function Detail({ keibaId, currentUser }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      setPosts(await findPosts(keibaId));
    })();
  }, [keibaId]);

  const keiba = KeibaCalendar.find((item) => item.id === keibaId);
  if (!keiba) return <Error />;
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const canPost = today <= new Date(keiba.date);

  return (
    <>
      <KeibaCard {...keiba} />
      <Grid container>
        {posts.map((post) => (
          <Grid key={post.uid} item xs={12} md={4}>
            <PostCard
              {...post}
              keibaId={keibaId}
              canDelete={canPost}
              currentUser={currentUser}
            />
          </Grid>
        ))}
      </Grid>
      <Float bottom={'2px'} right={'2px'}>
        <SpeedDial
          open={open}
          setOpen={setOpen}
          keibaId={keibaId}
          canPost={canPost}
        />
      </Float>
    </>
  );
}
