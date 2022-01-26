import { getFirestore, doc, setDoc, getDocs, getDoc, collection, deleteDoc } from 'firebase/firestore';
import { findUser } from 'firestore/User';

type UpdatePost = {
  keibaId: string;
  uid: string;
  name: string;
  url: string;
  text: string;
  createdAt: Date;
};

type Post = {
  uid: string;
  text: string;
  name: string;
  url: string;
  createdAt: Date;
};

export async function updataPost({ keibaId, uid, name, url, text, createdAt }: UpdatePost) {
  await setDoc(doc(getFirestore(), 'keibas', keibaId, 'posts', uid), {
    text: text,
    name: name,
    url: url,
    createdAt: createdAt,
  });
}

export async function deletePost(keibaId: string, uid: string) {
  await deleteDoc(doc(getFirestore(), 'keibas', keibaId, 'posts', uid));
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
        createdAt: doc.data().createdAt.toDate(),
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
