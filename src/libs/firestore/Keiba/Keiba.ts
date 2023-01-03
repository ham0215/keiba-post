import {
  getFirestore,
  doc,
  setDoc,
  getDocs,
  getDoc,
  collection,
  deleteDoc,
  updateDoc,
  arrayUnion,
  arrayRemove
} from 'firebase/firestore';
import { findUser } from 'libs/firestore/User';

type UpdatePost = {
  keibaId: string;
  uid: string;
  name: string;
  url: string;
  text: string;
  createdAt: Date;
};

type UpdateResults = {
  keibaId: string;
  results: number[];
};

type Post = {
  uid: string;
  text: string;
  name: string;
  url: string;
  createdAt: Date;
};

export type Keiba = {
  id: string;
  bets: string[];
  results: number[];
};

export type BetsResults = {
  bets: string[] | undefined;
  results: number[] | undefined;
};

export async function updatePost({ keibaId, uid, name, url, text, createdAt }: UpdatePost) {
  const db = getFirestore();
  await setDoc(doc(db, 'keibas', keibaId, 'posts', uid), {
    text,
    name,
    url,
    createdAt
  });
  const keiba = await getDoc(doc(db, 'keibas', keibaId));
  if (keiba.data()?.bets) {
    await updateDoc(doc(db, 'keibas', keibaId), {
      bets: arrayUnion(url)
    });
  } else {
    await setDoc(doc(db, 'keibas', keibaId), {
      bets: [url]
    });
  }
}

export async function deletePost(keibaId: string, uid: string, url: string) {
  const db = getFirestore();
  await deleteDoc(doc(db, 'keibas', keibaId, 'posts', uid));
  await updateDoc(doc(db, 'keibas', keibaId), {
    bets: arrayRemove(url)
  });
}

export async function updateResults({ keibaId, results }: UpdateResults) {
  const db = getFirestore();
  await updateDoc(doc(db, 'keibas', keibaId), {
    results
  });
}

export async function findKeibas(): Promise<Keiba[]> {
  const keibas = await getDocs(collection(getFirestore(), 'keibas'));
  return Promise.all(
    keibas.docs.map(async (doc) => ({
      id: doc.id,
      bets: doc.data().bets,
      results: doc.data().results
    }))
  );
}

export async function findBets(keibaId: string): Promise<BetsResults | null> {
  const keiba = await getDoc(doc(getFirestore(), 'keibas', keibaId));
  const data = keiba.data();
  if (!data) return null;

  return { bets: data.bets, results: data.results };
}

export async function findPosts(keibaId: string): Promise<Post[]> {
  const ps = await getDocs(collection(getFirestore(), 'keibas', keibaId, 'posts'));
  return Promise.all(
    ps.docs.map(async (doc) => {
      let name = '';
      let url = '';
      if (doc.data().name) {
        name = doc.data().name;
        url = doc.data().url;
      } else {
        const user = await findUser(doc.id);
        name = user?.name || '';
        url = user?.url || '';
      }

      return {
        uid: doc.id,
        text: doc.data().text,
        name,
        url,
        createdAt: doc.data().createdAt.toDate()
      };
    })
  );
}

export async function findPostText(keibaId: string, uid: string): Promise<string | null> {
  const p = await getDoc(doc(getFirestore(), 'keibas', keibaId, 'posts', uid));
  const data = p.data();
  if (!data) return null;

  return data.text;
}
