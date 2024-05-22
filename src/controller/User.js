
import { signInWithEmailAndPassword } from "firebase/auth";
import firebase from "../firebase";

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
    
    get = async () => {
        return firebase.auth.currentUser;
    };

    signUp = async() => {
        console.warn("signUp not yet implemented!");
    }

    deleteUser = async() => {
        console.warn("deleteUser not yet implemented!");
    }
}

const user = new UserClass();

export default user;