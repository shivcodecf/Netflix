 import { initializeApp } from "firebase/app";
 import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
 import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { toast } from "react-toastify";






const firebaseConfig = {
  apiKey: "AIzaSyAMMDvOpjKmxHPQi0zk9H222N7jkWNzspU",
  authDomain: "netflix-clone-61d4e.firebaseapp.com",
  projectId: "netflix-clone-61d4e",
  storageBucket: "netflix-clone-61d4e.appspot.com",
  messagingSenderId: "666612218359",
  appId: "1:666612218359:web:e4f48e95b5dac2083296f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

const db=getFirestore(app);  

const signup = async(name,email,password)=>{

    try{
          
       const res =  await  createUserWithEmailAndPassword(auth,email,password);

       const user=res.user;

       await addDoc(collection(db,"user"),{
        uid: user.uid,
        name,
        authProvider:"local",
        email,

       })
       
    }  catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
} 

const login = async (email,password)=>{
    
    try{
       await signInWithEmailAndPassword(auth,email,password)
    }
    catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = () =>{
    
    signOut(auth);


}

export {db,auth,login,signup,logout}

