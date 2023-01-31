import { findPostText } from 'libs/firestore/Keiba';
import { updatePost } from 'libs/firestore/Keiba';
import type { User } from 'libs/firestore/User';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

type Props = {
  keibaId: string;
  currentUser: User;
};

export function usePostKeibaFacade({ keibaId, currentUser }: Props) {
  const router = useRouter();
  const [postText, setPostText] = useState<string>('');

  useEffect(() => {
    (async () => {
      const text = await findPostText(keibaId, currentUser.id);
      if (!text) return;

      setPostText(text);
    })();
  }, [currentUser, keibaId]);

  const handleCancel = useCallback(() => {
    router.push(`/keiba/${keibaId}`);
  }, [keibaId, router]);

  const handleSubmit = useCallback(
    async ({ keibaText }: { keibaText: string }) => {
      await updatePost({
        keibaId,
        uid: currentUser.id,
        name: currentUser.name,
        url: currentUser.url,
        text: keibaText,
        createdAt: new Date(),
      });
      router.push({ pathname: `/keiba/${keibaId}` });
    },
    [currentUser, keibaId, router]
  );

  return {
    handleCancel,
    handleSubmit,
    postText,
  } as const;
}
