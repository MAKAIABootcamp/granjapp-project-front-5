import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/firebaseConfig";



export const loadProducts = async () => {

    // if ( !uid ) throw new Error ('El UID del usuario no existe');

    const collectionRef = collection (FirebaseDB, `productos`);
    const docs = await getDocs (collectionRef);

    const products = [];
    docs.forEach ( doc => {
        products.push({ id: doc.id, ...doc.data()})
    });
    
    return products;
}