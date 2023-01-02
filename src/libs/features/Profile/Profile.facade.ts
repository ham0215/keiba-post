import { useCallback, useContext } from 'react';
import { useRouter } from 'next/router';
import type { FormInputType } from './Profile.models';
import { UserContext } from 'libs/hooks/UserContext';
import { setUser } from 'libs/firestore/User';

export function useProfileFacade() {
  const router = useRouter();

  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleCancel = useCallback(() => {
    router.push('/');
  }, [router]);

  const handleSubmit = useCallback(
    async (data: FormInputType) => {
      if (!currentUser || !currentUser.enabled) return;
      if (!setCurrentUser) return;

      const updatedUser = await setUser({
        id: currentUser.id,
        name: data.name,
        url: currentUser.url,
        enabled: currentUser.enabled
      });

      setCurrentUser(updatedUser);
      router.push('/');
    },
    [currentUser, router, setCurrentUser]
  );

  return {
    handleCancel,
    handleSubmit,
    currentUser
  } as const;
}
