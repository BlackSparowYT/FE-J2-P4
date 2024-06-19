import { collection, addDoc, query, getDocs, where, doc, getDoc } from "firebase/firestore"; 
import firebase from "../firebase";

const postRef = collection(firebase.db, "posts");

const PostModel = {

    getAll: async () => {
        const q = query(postRef, where("isPublic","==",true))
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
        const docRef = doc(firebase.db, "posts", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            return false;
        }
    },

    getAllByLoggedInUser: async () => {
        const q = query(postRef, where("userId","==",firebase.auth.currentUser.uid))
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
    
    getAllBySchool: async (school_id) => {
        const q = query(postRef, where("schoolId","==",school_id))
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
    
    getAllByUser: async (uid) => {
        const q = query(postRef, where("userId","==",uid))
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
    
    getAllByClass: async (classId) => {
        const q = query(postRef, where("classId","==",classId))
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
    
    create: async (title,body, imgurl, schoolId, classId, isPublic, isAnonymous) => {
        if (firebase.auth.currentUser.uid) {
            const docRef = await addDoc(collection(firebase.db, "posts"), {
                userId: firebase.auth.currentUser.uid,
                date: Date.now(),
                title: title,
                body: body,
                imgurl: imgurl,
                schoolId: schoolId,
                classId: classId,
                isPublic: isPublic,
                isAnonymous: isAnonymous,
            });
        }
    },
}

export default PostModel;