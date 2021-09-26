import firebase from '../firebase';

export type User = {
  id: string;
  name: string | null;
  enabled: boolean;
};

export async function findUser(id: string): Promise<User | null> {
  const db = firebase.firestore();
  const user = await db.collection('users').doc(id).get();

  if (!user) return null;
  const userData = user.data();
  if (!userData) return null;

  return {
    id: user.id,
    name: userData.name,
    enabled: userData.enabled,
  };
}

export async function createUser({ id, name, enabled }: User) {
  await firebase.firestore().collection('users').doc(id).set({
    name: name,
    enabled: enabled,
  });
  return await findUser(id);
}

export async function updataUser(id: string, name: string, enabled: boolean) {
  await firebase.firestore().collection('users').doc(id).set({
    name: name,
    enabled: enabled,
  });
  return await findUser(id);
}
