import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import firebaseConfig from "./config";

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.storage = app.storage();
    this.db = app.firestore();
    this.auth = app.auth();
  }

  // AUTH ACTIONS ------------

  createAccount = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  signIn = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signInWithGoogle = () =>
    this.auth.signInWithPopup(new app.auth.GoogleAuthProvider());

  signInWithFacebook = () =>
    this.auth.signInWithPopup(new app.auth.FacebookAuthProvider());

  signInWithGithub = () =>
    this.auth.signInWithPopup(new app.auth.GithubAuthProvider());

  signOut = () => this.auth.signOut();

  passwordReset = (email) => this.auth.sendPasswordResetEmail(email);

  addUser = (id, user) => this.db.collection("users").doc(id).set(user);

  getUser = (id) => this.db.collection("users").doc(id).get();

  passwordUpdate = (password) => this.auth.currentUser.updatePassword(password);

  // // AUTO ACTIONS --------------

  getAutomobiles = () => {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const query = this.db
            .collection("automobiles")
            .orderBy(app.firestore.FieldPath.documentId())
            .limit(12);

          const snapshot = await query.get();
          const products = [];
          snapshot.forEach((doc) =>
            products.push({ id: doc.id, ...doc.data() })
          );
          const lastKey = snapshot.docs[snapshot.docs.length - 1];

          resolve({ products, lastKey });
        } catch (e) {
          reject(e?.message || ":( Failed to fetch autos.");
        }
      })();
    });
  };

  getSingleAuto = (id) => this.db.collection("automobiles").doc(id).get();

  getSingleAutoByLink = (link) =>
    this.db.collection("automobiles").where("link_name", "==", link).get();
}

const firebaseInstance = new Firebase();

export default firebaseInstance;
