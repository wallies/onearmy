import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/functions'
import 'firebase/database'
import { FIREBASE_CONFIG } from 'src/config/config'

// NOTE - This file will be removed when new DB integrated

// initialise with config settings, additional firestore config to support future changes
firebase.initializeApp(FIREBASE_CONFIG)
firebase
  .firestore()
  .enablePersistence({ experimentalTabSynchronization: true })
  .catch(err => console.error('could not persist firestore', err))

// export firebase endpoints to be accessed by other functions
export const afs = firebase.firestore()
export const rtdb = firebase.database()
export const storage = firebase.storage()
export const auth = firebase.auth()
export const functions = firebase.functions()
export const EmailAuthProvider = firebase.auth.EmailAuthProvider

// want to also expose the default firebase user
export interface IFirebaseUser extends firebase.User {}
