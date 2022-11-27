import './App.css';
import { useState   } from "react";
import { initializeApp } from "firebase/app";
import { getMoralisAuth } from '@moralisweb3/client-firebase-auth-utils';
import { signInWithMoralis } from '@moralisweb3/client-firebase-evm-auth';
import { getAuth } from '@firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA3oXFEBzBB5vROHwJUaCfn-W22Er2twpI",
  authDomain: "moralisapicalls-42d0c.firebaseapp.com",
  projectId: "moralisapicalls-42d0c",
  storageBucket: "moralisapicalls-42d0c.appspot.com",
  messagingSenderId: "21301200631",
  appId: "1:21301200631:web:deed5cf892ba96ac82b5f2",
  measurementId: "G-KDRJ0XVW4X"
};

const app = initializeApp(firebaseConfig);
const moralisAuth = getMoralisAuth(app);
const auth = getAuth(app);

function App() {

  const [user, setUser]= useState(null);

  async function login(){

    const res = await signInWithMoralis(moralisAuth);
    setUser(res.credentials.user.uid)
  }

  async function logout(){

    await auth.signOut();
    setUser(null);
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>
        Google Web3 Auth Login
        </p>
        {!user ?
        
        <div className="searchButton" onClick={login}>Login</div>
        :
        <>
        <p>
          User:{user}
        </p>
        <div className="searchButton" onClick={logout}>Logout</div>
        </>
        }

        </header>
    </div>
  );
}

export default App;