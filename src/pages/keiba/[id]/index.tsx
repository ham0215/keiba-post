import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Float from '../../../components/Float';
import { UserContext } from '../../../UserContext';
import KeibaCard from './KeibaCard'
import SpeedDial from './SpeedDial';
import PostCard from './PostCard';

export default function Detail() {
  const router = useRouter();
  const { id, text } = router.query;
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(UserContext);

  const keibaId = Number(id);
  if (!keibaId) return (<p>Error :(</p>);
  if (text && typeof text !== 'string') return (<p>Error :(</p>);

  return (
    <>
      <KeibaCard keibaId={keibaId} />
      <PostCard text={text} user={currentUser} />
      <Float bottom={'2px'} right={'2px'}>
        <SpeedDial open={open} setOpen={setOpen} keibaId={keibaId} />
      </Float>
    </>
  );
}
