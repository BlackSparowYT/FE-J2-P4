import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebase from "../firebase";
import { Firestore, addDoc, deleteDoc, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

class UserClass {
    login = async (mail, password) => {
        await signInWithEmailAndPassword(firebase.auth, mail, password)
        .then((userCredential) => {
            return true;
        })
        .catch((error) => {
            return false;
        });
    }

    logout = async () => {
        signOut(firebase.auth).then(() => {
            return true;
        }).catch((error) => {
            return false;
        });
    }

    isLoggedIn = async () => {
        if (firebase.auth.currentUser) {
            return true;
        } else {
            return false;
        }
    }

    isSchool = async () => {
        if (this.isLoggedIn()) {
            const userDoc = await getDoc(firebase.db, "users", firebase.auth.currentUser.uid).then(() => {
                return userDoc.data.userType == "school";
            }).catch((error) => {

            });
        }

        return false;
    }

    isTeacher = async () => {
        if (this.isLoggedIn()) {
            const userDoc = await getDoc(firebase.db, "users", firebase.auth.currentUser.uid).then(() => {
                return userDoc.data.userType == "teacher";
            }).catch((error) => {

            });
        }

        return false;
    }

    isStudent = async () => {
        if (this.isLoggedIn()) {
            const userDoc = await getDoc(firebase.db, "users", firebase.auth.currentUser.uid).then(() => {
                return userDoc.data.userType == "student";
            }).catch((error) => {

            });
        }

        return false;
    }

    isAdmin = async() => {
        if (this.isLoggedIn()) {
            const userDoc = await getDoc(firebase.db, "users", firebase.auth.currentUser.uid).then(() => {
                return userDoc.data.userType == "admin";
            }).catch((error) => {

            });
        }

        return false;
    }

    getName = () => {
        return firebase.auth.currentUser.displayName;
    }

    getMail = () => {
        return firebase.auth.currentUser.mail;
    }
    
    signUp = async(displayName, mail, password, userType) => {
        let uid;
        await createUserWithEmailAndPassword(firebase.auth, mail, password)
        .then((userCredentials) => {
            uid = userCredentials.user.uid;

            console.log(uid);
    
            setDoc(doc(firebase.db, "users", uid), {
                userType: userType,
                displayName: displayName
            });
            
        }).catch((error) => {
            return false;
        })


    }

    deleteUser = async() => {
        if (firebase.auth.currentUser) {
            await deleteDoc(doc(firebase.db, "users", firebase.auth.currentUser.uid));
            await firebase.auth.currentUser.delete();
        } else {
            console.warn("User is not logged in, log in before removing yourself as user");
        }
    }
}

const user = new UserClass();

export default user;