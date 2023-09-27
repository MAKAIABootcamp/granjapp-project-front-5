import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/firebaseConfig";



export const loadPosts = async () => {

    // if ( !uid ) throw new Error ('El UID del usuario no existe');

    const collectionRef = collection (FirebaseDB, `posts`);
    const docs = await getDocs (collectionRef);

    const posts = [];
    docs.forEach ( doc => {
        posts.push({ id: doc.id, ...doc.data()})
    });
    
    return posts;
}