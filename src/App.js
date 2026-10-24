

import './App.css';
import Landing from './pages/Landing';
import {auth} from './firebase/init'
import { createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
 } from 'firebase/auth'
import { useEffect, useState } from 'react';




function App() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true)
  const [letter, setLetter] = useState("N")

  
  useEffect(() => {
    setLoading(false);
    onAuthStateChanged(auth, (user) => {
      console.log(user, "auth state changed");
      setLetter(user.email[0].toUpperCase())
    })
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
      />
      
    </div>
  );
}

export default App;
