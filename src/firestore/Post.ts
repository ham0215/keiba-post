import { getFirestore, doc, setDoc, deleteDoc } from 'firebase/firestore';

type UpdatePost = {
  keibaId: string;
  uid: string;
  type: 'text' | 'image';
  text: string;
  image: string;
  createdAt: Date;
};

export async function updataPost({ keibaId, uid, type, text, image, createdAt }: UpdatePost) {
  await setDoc(doc(getFirestore(), 'keibas', keibaId, 'posts', uid), {
    type: type,
    text: text,
    image: image,
    createdAt: createdAt,
  });
}

export async function deletePost(keibaId: string, uid: string) {
  await deleteDoc(doc(getFirestore(), 'keibas', keibaId, 'posts', uid));
}
