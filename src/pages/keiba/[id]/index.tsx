import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Grid from '@material-ui/core/Grid';
import firebase from '../../../firebase';
import { findUser } from '../../../firestore/User';
import Float from '@/components/Float';
import Error from '@/components/Error';
import KeibaCard from './KeibaCard';
import SpeedDial from './SpeedDial';
import PostCard from './PostCard';

type Post = {
  uid: string;
  text: string;
  name: string | null | undefined;
  createdAt: Date;
}

export default function Detail() {
  const router = useRouter();
  const { id, text } = router.query;
  const [open, setOpen] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const db = firebase.firestore();

  useEffect(() => {
    (async () => {
      if (!id) return;
      if (typeof id !== 'string') return;

      // TODO: 投稿の種類にtext、imageを持たす
      const ps = await db.collection('keibas').doc(id).collection('posts').get();
      const posts = await Promise.all(ps.docs.map(async (doc) => {
        const user = await findUser(doc.id);
        return { uid: doc.id, text: doc.data().text, name: user?.name, createdAt: doc.data().createdAt.toDate() };
      }));
      setPosts(posts);
    })();
  }, [id, db]);

  useEffect(() => {
    // TODO: PostCardの中で取得するようにする
    (async () => {
      const storageRef = firebase.storage().ref();
      const imagesRef = await storageRef.child('posts/1/ham.jpg').getDownloadURL();
      console.log(imagesRef);
    })();
  }, []);

  const keibaId = Number(id);
  if (!keibaId) return (<Error />);
  if (text && typeof text !== 'string') return (<Error />);

  return (
    <>
      <KeibaCard keibaId={keibaId} />
      <Grid container>
        {posts.map((post) => (
          <Grid key={post.uid} item xs={12} md={4}>
            <PostCard {...post} keibaId={String(keibaId)} />
          </Grid>
        ))}
      </Grid>
      <Float bottom={'2px'} right={'2px'}>
        <SpeedDial open={open} setOpen={setOpen} keibaId={keibaId} />
      </Float>
    </>
  );
}
