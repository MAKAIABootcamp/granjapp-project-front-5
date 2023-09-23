import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/firebaseConfig";




export const loadPromos = async () => {

    // if ( !uid ) throw new Error ('El UID del usuario no existe');

    const collectionRef = collection (FirebaseDB, `promociones`);
    const docs = await getDocs (collectionRef);

    const promos = [];
    docs.forEach ( doc => {
        promos.push({ id: doc.id, ...doc.data()})
    });
    
    return promos;
}