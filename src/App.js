

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
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const [letter, setLetter] = useState("N")

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
      
    </div>
  );
}

export default App;
