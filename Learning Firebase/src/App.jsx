import { useState } from 'react';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { firebaseApp } from './firebase';

function App() {
  
  // init database
  const database = getFirestore(firebaseApp);

  const getUsers = async () => {
    const users = await getDocs(collection(database, "users"));
    console.log(users);
  }

  getUsers();

  return (
    <>



    </>
  )
}

export default App;
