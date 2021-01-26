import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Grid from '@material-ui/core/Grid';
import Float from '../../../components/Float';
import Error from '../../../components/Error';
import { UserContext } from '../../../UserContext';
import KeibaCard from './KeibaCard'
import SpeedDial from './SpeedDial';
import PostCard from './PostCard';

export default function Detail() {
  const router = useRouter();
  const { id, text } = router.query;
  const [open, setOpen] = useState<boolean>(false);
  const { currentUser } = useContext(UserContext);
  const [posts, setPosts] = useState<number[]>([]);

  useEffect(() => {
    setPosts([1, 2, 3, 4, 5]);
  }, []);

  const keibaId = Number(id);
  if (!keibaId) return (<Error />);
  if (text && typeof text !== 'string') return (<Error />);

  return (
    <>
      <KeibaCard keibaId={keibaId} />
      <Grid container>
        {posts.map((post) => (
          <Grid key={post} item xs={12} md={4}>
            <PostCard text={text} user={currentUser} />
          </Grid>
        ))}
      </Grid>
      <Float bottom={'2px'} right={'2px'}>
        <SpeedDial open={open} setOpen={setOpen} keibaId={keibaId} />
      </Float>
    </>
  );
}
