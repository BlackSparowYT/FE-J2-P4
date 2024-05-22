
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebase from "../firebase";
import { addDoc, doc, setDoc, updateDoc } from "firebase/firestore";

class UserClass {
    login = async (mail, password) => {
        signInWithEmailAndPassword(firebase.auth, mail, password)
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

    }

    isTeacher = async () => {

    }

    isStudent = async () => {

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
        console.warn("deleteUser not yet implemented!");
    }
}

const user = new UserClass();

export default user;