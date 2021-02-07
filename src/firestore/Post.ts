import firebase from 'firebase';

type UpdatePost = {
  keibaId: string,
  uid: string,
  type: 'text' | 'image',
  text: string,
  image: string,
  createdAt: Date,
}

export async function updataPost({ keibaId, uid, type, text, image, createdAt }: UpdatePost) {
  await firebase.firestore().collection('keibas').doc(keibaId).collection('posts').doc(uid).set({
    type: type,
    text: text,
    image: image,
    createdAt: createdAt,
  });
}

export async function deletePost(keibaId: string, uid: string) {
  await firebase.firestore().collection('keibas').doc(keibaId).collection('posts').doc(uid).delete();
}