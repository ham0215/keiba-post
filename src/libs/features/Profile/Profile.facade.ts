import type { User } from 'libs/firestore/User';
import { setUser } from 'libs/firestore/User';
import { UserContext } from 'libs/hooks/UserContext';
import { useRouter } from 'next/router';
import { useCallback, useContext } from 'react';

import type { FormInputType } from './Profile.models';

type Props = {
  currentUser: User;
};

export function useProfileFacade({ currentUser }: Props) {
  const router = useRouter();

  const { setCurrentUser } = useContext(UserContext);

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
        enabled: currentUser.enabled,
      });

      setCurrentUser(updatedUser);
      router.push('/');
    },
    [currentUser, router, setCurrentUser],
  );

  return {
    handleCancel,
    handleSubmit,
  } as const;
}
