import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { firebase } from '../../firebase/firebaseSetup'

export const loginRequest = (email, password) => {
    const auth = getAuth(firebase)
    return signInWithEmailAndPassword(auth, email, password)
}

export const registerRequest = (email, password) => {
    const auth = getAuth(firebase)
    return createUserWithEmailAndPassword(auth, email, password)
}

export const logoutRequest = () => {
    const auth = getAuth(firebase)
    auth.signOut()
}

export const auth = getAuth(firebase)