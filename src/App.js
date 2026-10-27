

import './App.css';
import Landing from './pages/Landing';
import {auth, db } from './firebase/init'
import { collection, addDoc, getDocs, getDoc, doc, query, where } from "firebase/firestore"
import { createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
 } from 'firebase/auth'
import { useEffect, useState } from 'react';




function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const [letter, setLetter] = useState("N")

  function createPost() {
    const post = {
      title: "Finish Interview section",
      description: "Do Frontend Simplified",
      uid: user.uid,
    }
    addDoc(collection(db, "posts"), post)
  }

  async function getAllPosts() {
    const { docs } = await getDocs(collection(db, "posts"));
    const posts = docs.map(elem => ({...elem.data(), id: elem.id }))
    console.log(posts)
  }

  async function getPostById() {
    const hardcodedId = "ElIoDDwmGTLLtOIEHNSG";
    const postRef = doc(db, "posts", hardcodedId);
    const postSnap = await getDoc(postRef);
    const post = postSnap.data();
    console.log(post);
  }

  async function getPostByUid() {
    const postCollectionRef = await query(
      collection(db, "posts"), 
      where("uid", "==", "user.uid")
    )
    const { docs } = await getDocs(postCollectionRef);
    console.log(docs.map(doc => doc.data()));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser?.email) {
        setLetter(currentUser.email[0].toUpperCase());
      }
      else {
        setLetter("N")
      }
      setLoading(false);
      

    })

    return unsubscribe;
    // (changed from this to the code above)
    // setLoading(false);
    // onAuthStateChanged(auth, (user) => {
    //   console.log(user, "auth state changed");
    // })
  }, [])

  function registerNewUser() {
  createUserWithEmailAndPassword(auth, "email@email.com", "password1")
  .then((user) => {
    console.log(user, "registerNewUser")
  })
  .catch((error) => {
    console.log(error)
  })
  }

  function login() {
    signInWithEmailAndPassword(auth, "email@email.com", "password1")
      .then((user) => {
        console.log(user, "login")
        setUser(user)
      })
    return letter
  }


  function logout() {
    console.log("logout");
    signOut(auth)
    setUser("0")
  }

  return (
    <div className="App">
      <Landing 
      loading={loading}
      registerNewUser={registerNewUser}
      login={login}
      logout={logout}
      letter={letter}
      user={user}
      />
      <button className="btn" onClick={createPost}>Create Post</button>
      <button className="btn" onClick={getAllPosts}>Get All Posts</button>
      <button className="btn" onClick={getAllPosts}>Get All Posts</button>
      <button className="btn" onClick={getPostById}>Get Post By Id</button>
      <button className="btn" onClick={getPostByUid}>Get Post By Uid</button>
      
    </div>
  );
}

export default App;
