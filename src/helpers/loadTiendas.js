import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/firebaseConfig";



export const loadTiendas = async () => {

    // if ( !uid ) throw new Error ('El UID del usuario no existe');

    const collectionRef = collection (FirebaseDB, `Tiendas`);
    const docs = await getDocs (collectionRef);

    const shop = [];
    docs.forEach ( doc => {
        shop.push({ id: doc.id, ...doc.data()})
    });
    
    return shop;
}