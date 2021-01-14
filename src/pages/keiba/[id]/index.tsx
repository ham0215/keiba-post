import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Float from '../../../components/Float';
import KeibaCard from './KeibaCard'
import SpeedDial from './SpeedDial';
import PostCard from './PostCard';

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  const [open, setOpen] = useState(false);

  const keibaId = Number(id);
  if (!keibaId) return <p>Error :(</p>;

  return (
    <>
      <KeibaCard keibaId={keibaId} />
      <PostCard />
      <Float bottom={'2px'} right={'2px'}>
        <SpeedDial open={open} setOpen={setOpen} keibaId={keibaId} />
      </Float>
    </>
  );
}
