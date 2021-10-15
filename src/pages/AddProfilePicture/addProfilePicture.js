import "./addProfilePic.css";
import React from "react";
import { useEffect, useState } from "react";
import createUser from "../../pages/Signup";

import { useAuth } from "../../contexts/AuthContext";

import Firebase from "../../firebase";
import app from "../../firebase";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

let currentUser = null;
let photo = null;

//not done

const auth = getAuth(); // Authorization component
const db = getFirestore(app); // Firestore database

async function create() {
  const docRef = await setDoc(doc(db, "users", currentUser.uid), {
    uid: "testUID",
    SpotifyToken: "testToken",
    profileImgSrc: "testSrc",
  });
  //console.log(currentUser.uid);
  //   console.log("Doc written w/ ID: ", docRef.id);
}

async function check() {
  const docRef = doc(db, "users", currentUser.uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    //console.log("Document data:", docSnap.data());
  } else {
    create();
  }
}

export default class AddProfilePicture extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      picture: false,
      src: false,
    };

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        currentUser = auth.currentUser;
        check();
        photo = currentUser.photoURL;
        //GET ACTUAL IMAGE
        if (photo != null) {
          const storage = getStorage();
          getDownloadURL(ref(storage, photo))
            .then((url) => {
              console.log(url);
              this.setState({
                src: url,
              });
            })
            .catch((error) => {
              // Handle any errors
            });
        } else {
        }
        // ...
      } else {
        // User is signed out
        // ...
        console.log("NOT CORRECT");
      }
    });
  }

  handlePictureSelected(event) {
    var picture = event.target.files[0];
    var src = URL.createObjectURL(picture);
    photo = src;

    const storage = getStorage();
    const storageRef = ref(storage, currentUser.uid);
    // 'file' comes from the Blob or File API
    // console.log(picture);
    uploadBytes(storageRef, picture).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
    //MAY NEED TO CHANGE BELOW

    updateProfile(auth.currentUser, {
      photoURL: currentUser.uid,
    })
      .then(() => {
        // Profile updated!
        // ...
        console.log("PROFILE UPDATED");

        // CORRECT
        //console.log(currentUser.photoURL);
      })
      .catch((error) => {
        // An error occurred
        // ...
        console.log("PROFILE NOT UPDATED");
      });

    this.setState({
      picture: picture,
      src: src,
    });
  }

  render() {
    //console.log(this.state.src);
    return (
      <div className="profile-header">
        <div>
          <text className="text">Change Profile Image</text>
        </div>
        <div className="button-header">
          <input type="file" onChange={this.handlePictureSelected.bind(this)} />
        </div>
        <div className="image-container">
          <img src={this.state.src} />
        </div>
      </div>
    );
  }
}

// export default AddProfilePicture;
