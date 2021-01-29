import firebase from '../firebase';

export async function updataPost(keibaId: string, uid: string, text: string, createdAt: Date) {
  await firebase.firestore().collection('keibas').doc(keibaId).collection('posts').doc(uid).set({
    text: text,
    createdAt: createdAt,
  });
}