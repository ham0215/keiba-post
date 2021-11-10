import { getFirestore, getDoc, setDoc, doc } from 'firebase/firestore';

export type User = {
  id: string;
  name: string;
  url: string;
  enabled: boolean;
};

export async function findUser(id: string): Promise<User | null> {
  const user = await getDoc(doc(getFirestore(), 'users', id));

  if (!user) return null;
  const userData = user.data();
  if (!userData) return null;

  return {
    id: user.id,
    name: userData.name,
    url: userData.url,
    enabled: userData.enabled,
  };
}

export async function setUser({ id, name, url, enabled }: User) {
  await setDoc(doc(getFirestore(), 'users', id), {
    name: name,
    url: url,
    enabled: enabled,
  });
  return await findUser(id);
}
