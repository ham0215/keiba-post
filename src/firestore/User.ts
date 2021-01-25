import firebase from '../firebase';

type User = {
  id: string;
  name: string | null;
  photoUrl: string | null;
  enabled: boolean;
}

export async function findUser(id: string): Promise<User | null> {
  const db = firebase.firestore();
  const user = await db.collection('users').doc(id).get();

  if (!user) return null;
  const userData = user.data();
  if (!userData) return null;

  return {
    id: user.id,
    name: userData.name,
    photoUrl: userData.photoUrl,
    enabled: userData.enabled,
  }
}

export async function setUser({ id, name, photoUrl, enabled }: User) {
  await firebase.firestore().collection('users').doc(id).set({
    name: name,
    photoUrl: photoUrl,
    enabled: enabled,
  });
  return await findUser(id);
}
