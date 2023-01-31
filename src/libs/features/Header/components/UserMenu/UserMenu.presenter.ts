import { getAuth, signOut } from 'firebase/auth';
import firebaseApp from 'firebaseApp';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

export function useUserMenuPresenter() {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);

  const handleProfile = useCallback(() => {
    setOpen(false);
    router.push('/profile');
  }, [router]);

  const handleLogout = useCallback(() => {
    setOpen(false);
    const auth = getAuth(firebaseApp);
    signOut(auth);
  }, []);

  return {
    open,
    setOpen,
    handleLogout,
    handleProfile,
  } as const;
}
