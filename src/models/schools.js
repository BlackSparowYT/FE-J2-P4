import { collection, addDoc, query, getDocs, where, doc, getDoc } from "firebase/firestore"; 
import firebase from "../firebase";

const schoolsRef = collection(firebase.db, "schools");

const SchoolsModel = {

    getAll: async () => {
        const q = query(schoolsRef, where("isPublic","==",true))
        const docs = await getDocs(q);

        let rets = [];
        docs.forEach((e) => {
            rets.push({
                id: e.id,
                data: e.data()
            })
        });

        return rets;
    },

    getById: async (id) => {
        const docRef = doc(firebase.db, "schools", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            return false;
        }
    },

    exists: async (id) => {
        const docRef = doc(firebase.db, "schools", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return true;
        } else {
            return false;
        }
    },
    
    create: async (name, location, creator) => {
        const docRef = await addDoc(collection(firebase.db, "schools"), {
            name: name,
            location: location,
            creator: creator,
            verified: false,
        });
    },
}

export default SchoolsModel;