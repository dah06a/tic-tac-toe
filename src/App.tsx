import Navbar from './features/navbar/Navbar';
import GamePage from './app/pages/GamePage';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpU5Fsn58_VqhvxM-Tud7nxwaMwv3NmGk",
  authDomain: "tic-tac-toe-champion.firebaseapp.com",
  projectId: "tic-tac-toe-champion",
  storageBucket: "tic-tac-toe-champion.appspot.com",
  messagingSenderId: "237324103048",
  appId: "1:237324103048:web:0007377e62c36b3c2c9e3d",
  measurementId: "G-4K5NNJL99E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <Navbar />
      <GamePage />
    </div>
  );
}

// need score area
// need game over message area
// need computer talk/messages area

export default App;
