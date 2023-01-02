import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { findPostText } from 'libs/firestore/Keiba';
import { updatePost } from 'libs/firestore/Keiba';
import type { User } from 'libs/firestore/User';

type Props = {
  currentUser: User;
};

export function usePostKeibaFacade({ currentUser }: Props) {
  const router = useRouter();
  const { id } = router.query;

  const [postText, setPostText] = useState<string>('');

  useEffect(() => {
    (async () => {
      if (!id) return;
      if (typeof id !== 'string') return;

      const text = await findPostText(id, currentUser.id);
      if (!text) return;

      setPostText(text);
    })();
  }, [currentUser, id]);

  const handleCancel = useCallback(() => {
    router.push(`/keiba/${id}`);
  }, [id, router]);

  const handleSubmit = useCallback(
    async ({ keibaText }: { keibaText: string }) => {
      if (!currentUser) return;
      if (typeof id !== 'string') return;

      await updatePost({
        keibaId: id,
        uid: currentUser.id,
        name: currentUser.name,
        url: currentUser.url,
        text: keibaText,
        createdAt: new Date()
      });
      router.push({ pathname: `/keiba/${id}` });
    },
    [currentUser, id, router]
  );

  return {
    handleCancel,
    handleSubmit,
    postText
  } as const;
}
