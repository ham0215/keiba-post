import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import { findUser } from 'firestore/User';
import Float from 'components/Float';
import Error from 'components/Error';
import KeibaCard from 'components/KeibaCard';
import SpeedDial from 'components/SpeedDial';
import PostCard from 'components/PostCard';
import { KeibaCalendar } from 'data/KeibaCalendar';

type Post = {
  uid: string;
  text: string;
  name: string;
  url: string;
  createdAt: Date;
};

export default function Detail() {
  const router = useRouter();
  const { id, text } = router.query;
  const [open, setOpen] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const db = getFirestore();

  useEffect(() => {
    (async () => {
      if (!id) return;
      if (typeof id !== 'string') return;

      const ps = await getDocs(collection(db, 'keibas', id, 'posts'));
      const posts = await Promise.all(
        ps.docs.map(async (doc) => {
          const user = await findUser(doc.id);

          return {
            uid: doc.id,
            text: doc.data().text,
            name: user?.name || '',
            url: user?.url || '',
            createdAt: doc.data().createdAt.toDate(),
          };
        })
      );
      setPosts(posts);
    })();
  }, [id, db]);

  const keibaId = Number(id);
  if (!keibaId) return <Error />;
  const keiba = KeibaCalendar.find((item) => item.id === keibaId);
  if (!keiba) return <Error />;
  if (text && typeof text !== 'string') return <Error />;
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const canPost = today <= new Date(keiba.date);

  return (
    <>
      <KeibaCard {...keiba} />
      <Grid container>
        {posts.map((post) => (
          <Grid key={post.uid} item xs={12} md={4}>
            <PostCard {...post} keibaId={String(keibaId)} canDelete={canPost} />
          </Grid>
        ))}
      </Grid>
      {canPost && (
        <Float bottom={'2px'} right={'2px'}>
          <SpeedDial open={open} setOpen={setOpen} keibaId={keibaId} />
        </Float>
      )}
    </>
  );
}
