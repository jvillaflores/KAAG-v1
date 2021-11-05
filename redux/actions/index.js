import {
  USER_STATE_CHANGE,
  USER_POSTS_STATE_CHANGE,
  USER_ALL_POSTS_STATE_CHANGE,
  DICTIONARY_STATE_CHANGE,
} from "../constants/index";
import firebase from "firebase";
require("firebase/firestore");

export function fetchUser() {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data() });
        } else {
        }
      });
  };
}

export function fetchUserPosts() {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("posts")
      .doc(firebase.auth().currentUser.uid)
      .collection("userPosts")
      .orderBy("creation", "asc")
      .get()
      .then((snapshot) => {
        let posts = snapshot.docs.map((doc) => {
          const data = doc.data();
          const id = doc.id;
          return { id, ...data };
        });
        dispatch({ type: USER_POSTS_STATE_CHANGE, posts });
      });
  };
}
export function fetchAllUserPosts() {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("postsAll")
      .orderBy("creation", "desc")
      .get()
      .then((snapshot) => {
        let postsAll = snapshot.docs.map((doc) => {
          const data = doc.data();
          const id = doc.id;
          return { id, ...data };
        });

        dispatch({ type: USER_ALL_POSTS_STATE_CHANGE, postsAll });
      });
  };
}
export function fetchDictionary() {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("dictionaryAll")
      .orderBy("kagan", "asc")
      .get()
      .then((snapshot) => {
        let dictionaryAll = snapshot.docs.map((doc) => {
          const data = doc.data();
          const id = doc.id;
          return { id, ...data };
        });
        // console.log(dictionaryAll);
        dispatch({ type: DICTIONARY_STATE_CHANGE, dictionaryAll });
      });
  };
}
